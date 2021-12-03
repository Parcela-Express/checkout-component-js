import ParcelaChekout from '../lib';

export default class CheckoutComponent {
    constructor() {}

    mount() {
      const config = {
        clientKey: 'process.env.MINHA_CLIENT_KEY',
        environment: 'TEST',
        onChange: (state) => console.log('onc', state),
        onSubmit: (state) => console.log('ons', state),
      };
      
      const checkoutInstance = new ParcelaChekout.Checkout(config);
      checkoutInstance.mount('checkout-container');
    }
}
