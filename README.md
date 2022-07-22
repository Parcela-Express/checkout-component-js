# Parcela Express Checkout Component JS

[![npm](https://img.shields.io/npm/v/@parcelaexpress/checkout-component-js.svg)](https://www.npmjs.com/package/@parcelaexpress/checkout-component-js)

## Instalação

Esse pacote é um módulo [Node.js](https://nodejs.org/en/) disponibilizado pelo 
[npm](https://www.npmjs.com/).

Siga as instruções abaixo para realizar a instalação do componente em sua aplicação.

1. Instale o componente [Parcela Checkout Component JS](https://www.npmjs.com/package/@parcelaexpress/checkout-component-js):

  ```sh
  npm install @parcelaexpress/checkout-component-js --save
  ```

  ```sh
  yarn add @parcelaexpress/checkout-component-js
  ```

## Instalação

O componente pode ser usado da seguinte maneira:
- [Web Component](https://www.webcomponents.org/introduction) 

Importe o componente dentro de sua aplicação e adicione o web component no seu html:

#### **`index.js`**
  ```js
import '@parcelaexpress/checkout-component-js';
  ```
#### **`index.html`**
  ```html
...
<body>
    <parcela-checkout 
        environment='TEST' 
        clientKey='process.env.MINHA_CLIENT_KEY'
        apiUrl="https://sandbox.parcelaexpress.com.br/"
        sellerKey="e137d1b6-8f84-4377-ab5c-d27dd24415bd"
        successReturnUrl="https://success-url.com.br"
        errorReturnUrl="https://error-url.com.br"
    ></parcela-checkout>
</body>
...
  ```

Adicione callbacks para os eventos de atualização de campos(onChange) e para envio do formulário(onSubmit):

#### **`index.js`**
  ```js
import '@parcelaexpress/checkout-component-js';

const web_component = document.querySelector('parcela-checkout');

web_component.customerData = {
        amount_cents: 1000,
        description: "Venda Teste",
        form_payment: "debit",
        installment_plan: {
          number_installments: 1,
        },
        customer: {
          email: "teste@fulano.com.br",
          ip: "99.106.129.24",
          first_name: "Testando",
          last_name: "Teste",
          document: "29896147027",
          billing_address: {
            city: "Belo Horizonte",
            country: "BR",
            house_number_or_name: '10',
            postal_code: "31010500",
            state: "MG",
            street: "Rua Adamina",
          },
        },
        pre_capture: false,
        has_split_rules: true,
        split_rules: [
          {
            amount: 10000,
            seller_id: "d6a245d2-b705-42a1-8d4a-0956aaa00fed",
            description: "Descrição do split"
          },
          {
            amount: 5000,
            seller_id: "99d1f231-557a-44b9-ae5d-9b5f533c684e",
            no_cost: true
          }
        ],
        confirmation_required: false
      };
      web_component.onChange = (state) => console.log(state);
      web_component.onSubmit = (state) => console.log(state);
      web_component.onSubmitError = (state) => console.log(state);
      web_component.beforeSubmit = (state) => console.log("before submit");
      web_component.afterSubmit = (state) => console.log("after submit");
      web_component.showPayButton = true;
  ```
Os campos has_split_rules e split_rules(opcionais) são usados para dividir o valor da venda entre os estabelecimentos

