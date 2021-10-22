export const paymentMethods = {
  paymentMethods: [
    {
      brands: ["mc", "visa", "elo", "amex", "hipercard", "maestro", "hiper"],
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
