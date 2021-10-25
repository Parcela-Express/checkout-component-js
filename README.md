# Parcela Express Checkout Component JS

[![npm](https://img.shields.io/npm/v/@parcelaexpress/checkout-react-component.svg)](https://www.npmjs.com/package/@parcelaexpress/checkout-component-js)

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

O componente pode ser usado de duas formas:
- [Web Component](https://www.webcomponents.org/introduction) 
- Classe

**1. Web Component**
 
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
    ></parcela-checkout>
</body>
...
  ```

Adicione callbacks para os eventos de atualização de campos(onChange) e para envio do formulário(onSubmit):

#### **`index.js`**
  ```js
import '@parcelaexpress/checkout-component-js';

const web_component = document.querySelector('parcela-checkout');

web_component.onChange = (state) => console.log(state);
web_component.onSubmit = (state) => console.log(state);
  ```

**2. Classe**

Importe o componente dentro de sua aplicação e adicione uma div container para renderizar o componente:

#### **`index.html`**
  ```html
...
<body>
    <div id='checkout-container'></div>
</body>
...
  ```

  #### **`index.js`**
  ```js
import * as ParcelaChekout from '@parcelaexpress/checkout-component-js';
import '@parcelaexpress/checkout-component-js/lib/main.css';

const config = {
    clientKey: 'process.env.MINHA_CLIENT_KEY',
    environment: 'TEST',
    onChange: (state) => console.log('onc', state),
    onSubmit: (state) => console.log('ons', state),
};

const checkoutInstance = new ParcelaChekout.Checkout(config);
checkoutInstance.mount('checkout-container');
  ```