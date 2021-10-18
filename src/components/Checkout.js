import AdyenCheckout from "@adyen/adyen-web";
import { paymentMethods } from "../config/payment-methods";

export class Checkout {
  #environment;
  #clientKey;
  #onChange;
  #onSubmit;

  constructor({ environment, clientKey, onChange, onSubmit }) {
    this.#validateInput(environment, clientKey, onChange, onSubmit);

    this.#environment = environment;
    this.#clientKey = clientKey;
    this.#onChange = onChange;
    this.#onSubmit = onSubmit;
  }

  #validateInput(environment, clientKey, onChange, onSubmit) {
    if (!environment || !clientKey || !onChange || !onSubmit) {
      throw "The properties environment, clientKey, onChange and onSubmit must be provided!";
    }

    if (typeof onChange !== "function") {
      throw "The of the onChange property must be a function callback!";
    }

    if (typeof onSubmit !== "function") {
      throw "The of the onSubmit property must be a function callback!";
    }
  }

  mount(domNodeContainer) {
    const elementToRender = document.getElementById(domNodeContainer);

    if (!elementToRender) {
      throw `Element with id of ${domNodeContainer} not found`;
    }

    const configuration = {
      locale: "pt-br",
      environment: this.#environment,
      clientKey: this.#clientKey,
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

    const adyenCheckout = new AdyenCheckout(configuration);

    const callbacks = {
      onChange: (state) => {
        return this.#onChange(state);
      },
      onSubmit: (state) => {
        return this.#onSubmit(state);
      },
    };

    adyenCheckout.create("card", callbacks).mount(elementToRender);
  }
}
