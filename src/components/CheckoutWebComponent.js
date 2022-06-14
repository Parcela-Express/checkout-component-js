import AdyenCheckout from "@adyen/adyen-web";
import AppStyle from '../config/style';
import { paymentMethods } from '../config/payment-methods';
import schema from "./schema";

export class CheckoutWebComponent extends HTMLElement {
  constructor() {
    super();

    this.#build();
  }

  connectedCallback() {
    const mainDiv = this.shadowRoot.getElementById("checkout-container");
    const environment = this.getAttribute('environment');
    const clientKey = this.getAttribute('clientKey');

    if(!environment || !clientKey) {
      throw "The properties environment and clientKey must be setted!";
    }

    this.#createAdyenComponent(mainDiv, environment, clientKey);
  }

  #build() {
    const shadow = this.attachShadow({ mode: "open" });

    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "checkout-container");

    const threeCheckout = document.createElement("div");
    threeCheckout.setAttribute("id", "three-checkout");
    
    const body = document.getElementsByTagName('body')[0];
    shadow.appendChild(this.#styles());
    shadow.appendChild(mainDiv);
    body.appendChild(threeCheckout);
  }

  #styles() {
    const style = document.createElement('style');
    style.textContent = AppStyle;

    return style;
  }
  
  #createAdyenComponent(elementToRender, environment, clientKey) {
    const showPayButton = this.showPayButton;
    const configuration = {
      locale: "pt-br",
      environment: environment,
      clientKey: clientKey,
      paymentMethodsResponse: paymentMethods,
      hasHolderName: true,
      showPayButton: showPayButton !== undefined ? showPayButton : true,
      translations: {
        "pt-br": {
          payButton: "Pagamento",
        },
      },
      styles: {
        base: {
          color: "#001b2b",
          fontSize: "12px",
          fontFamily: "Arial",
          fontWeight: "400",
        },
        placeholder: {
          color: "#90a2bd",
          fontWeight: "200",
        },
        error: {
          color: "#001b2b",
        },
      },
    };

    const adyenCheckout = new AdyenCheckout(configuration);

    const callbacks = {
      onChange: (state) => {
        return this.onChange(state);
      },
      onSubmit: (state) => {
        const successReturnUrl = this.getAttribute('successReturnUrl')
        const errorReturnUrl = this.getAttribute('errorReturnUrl')
        const { error } = schema.validate({ 
          ...this.customerData,
          onChange: this.onChange,
          onSubmit: this.onSubmit,
          onSubmitError: this.onSubmitError,
          beforeSubmit: this.beforeSubmit,
          afterSubmit: this.afterSubmit,
          successReturnUrl: successReturnUrl,
          errorReturnUrl: errorReturnUrl,
          apiUrl: this.getAttribute('apiUrl'),
          sellerKey: this.getAttribute('sellerKey')
        });

        if (error) {
          if(this.onSubmitError) {
            console.error(error)
            return this.onSubmitError(error.message)
          } else {
            console.error(error)
            return error.message;
          }
        }

        const { data } = state;
        const { paymentMethod } = data;
        if (this.beforeSubmit) {
          this.beforeSubmit(state);
        }

        return new Promise((resolve, reject) => {
          const parsedData = {
            amount_cents: this.customerData.amount_cents,
            description: this.customerData.description,
            form_payment: this.customerData.form_payment,
            pre_capture: this.customerData.pre_capture,
            card_attributes: {
              holder_name: paymentMethod.holderName,
              number: paymentMethod.encryptedCardNumber,
              expiration_month: paymentMethod.encryptedExpiryMonth,
              expiration_year: paymentMethod.encryptedExpiryYear,
              security_code: paymentMethod.encryptedSecurityCode
            },
            installment_plan: this.customerData.installment_plan,
            customer: this.customerData.customer,
            sale_id: this.customerData.sale_id,
            has_split_rules: this.customerData.has_split_rules,
            split_rules: this.customerData.split_rules
          }
          if (this.customerData.confirmation_required) {
            parsedData.confirmation_required = this.customerData.confirmation_required;
          }

          if (this.customerData.active_3ds) {
            parsedData.active_3ds = this.customerData.active_3ds;
          }

          if (this.customerData.risk_custom_field) {
            parsedData.risk_custom_field = this.customerData.risk_custom_field;
          }

          if (successReturnUrl) {
            parsedData.success_return_url = successReturnUrl;
          }
  
          if (errorReturnUrl) {
            parsedData.error_return_url = errorReturnUrl;
          }

          const baseUrl = this.getAttribute('apiUrl') || "https://api-prod.parcelaexpress.com.br";

          window.fetch(baseUrl + `/v2/payments/sellers/${this.getAttribute('sellerKey')}`, {
            method: 'POST',
            body: JSON.stringify(parsedData),
            headers: { 'Content-Type': 'application/json' }
          }).then((response) => response.json())
          .then((res) => {
            if (res.errors) {
              if (this.onSubmitError) {
                reject(this.onSubmitError(res.message))
              } else {
                reject(JSON.parse(res.message));
              }
            }

            if (res.action) {
              const { action } = res;
              const threeDSConfiguration = {
                size: '02'
              };

              const configuration = {
                locale: 'pt_BR',
                environment,
                clientKey,
                onAdditionalDetails: () => {},
              };

              const checkout = new AdyenCheckout(configuration);
              checkout.createFromAction(action, threeDSConfiguration).mount('#three-checkout');
            } else {
              resolve(this.onSubmit(res));
            }
          })
          .catch((err) => {
            if (this.onSubmitError) {
              reject(this.onSubmitError(err.message))
            } else {
              console.log(err)
              reject(err.message);
            }
          }).finally(() => {
            if (this.afterSubmit) {
              this.afterSubmit(state);
            }
          })
        })

      },
    };

    adyenCheckout.create("card", callbacks).mount(elementToRender);
  }
}
