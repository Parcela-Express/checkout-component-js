import AdyenCheckout from "@adyen/adyen-web";
import AppStyle from './style.js';

export class CheckoutWebComponent extends HTMLElement {
  #onSubmit;
  #onChange;

  constructor() {
    super();

    this.#onSubmit = null;
    this.#onChange = null;
    this.#build();
  }

  get onSubmit() {
    return this.#onSubmit;
  }

  set onSubmit(value) {
    if(typeof value !== 'function') {
      throw "The of the onSubmit property must be a function callback!"
    }

    this.#onSubmit = value;
  }

  get onChange() {
    return this.#onChange;
  }

  set onChange(value) {
    if(typeof value !== 'function') {
      throw "The of the onChange property must be a function callback!"
    }

    this.#onChange = value;
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
    
    shadow.appendChild(this.#styles());
    shadow.appendChild(mainDiv);
  }

  #styles() {
    const style = document.createElement('style');
    style.textContent = AppStyle;

    return style;
  }
  
  #createAdyenComponent(elementToRender, environment, clientKey) {
    const paymentMethods = {
      paymentMethods: [
        {
          brands: [
            "mc",
            "visa",
            "elo",
            "amex",
            "hipercard",
            "maestro",
            "hiper",
          ],
          details: [
            {
              key: "encryptedCardNumber",
              type: "cardToken",
            },
            {
              key: "encryptedSecurityCode",
              type: "cardToken",
            },
            {
              key: "encryptedExpiryMonth",
              type: "cardToken",
            },
            {
              key: "encryptedExpiryYear",
              type: "cardToken",
            },
            {
              key: "holderName",
              optional: true,
              type: "text",
            },
          ],
          name: "Credit Card",
          type: "scheme",
        },
      ],
    };

    const configuration = {
      locale: "pt-br",
      environment: environment,
      clientKey: clientKey,
      paymentMethodsResponse: paymentMethods,
      hasHolderName: true,
      showPayButton: true,
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

    const card = new AdyenCheckout(configuration);

    const callbacks = {
      onChange: (state) => {
        return this.onChange(state);
      },
      onSubmit: (state) => {
        return this.onSubmit(state);
      },
    };

    card.create("card", callbacks).mount(elementToRender);
  }
}
