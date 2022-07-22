import Joi from 'joi';

const schema = Joi.object({
  amount_cents: Joi.number().min(1).required(),
  description: Joi.string().required(),
  form_payment: Joi.string(),
  installment_plan: Joi.object({
    number_installments: Joi.number().min(1).max(12)
  }).required(),
  customer: Joi.object({
    first_name: Joi.string().required(), 
    last_name: Joi.string().required(), 
    email: Joi.alternatives().conditional('form_payment', { is: 'debit', then: Joi.string().required(), otherwise: Joi.string() }),
    ip: Joi.alternatives().conditional('form_payment', { is: 'debit', then: Joi.string().required(), otherwise: Joi.string() }),
    document: Joi.string(),
    billing_address: Joi.object({
      city: Joi.string().required(),
      country: Joi.string().required(),
      house_number_or_name: Joi.string().required(),
      postal_code: Joi.string().required(),
      state: Joi.string().required(),
      street: Joi.string().required()
    })
  }).required(),
  pre_capture: Joi.boolean(),
  has_split_rules: Joi.boolean(),
  split_rules: Joi.array().items({
    amount: Joi.number().required(),
    seller_id: Joi.string().required(),
    description: Joi.string(),
    no_cost: Joi.bool(),
  }),
  extract_identification: Joi.string(),
  confirmation_required: Joi.boolean(),
  onChange: Joi.function().required(),
  onSubmit: Joi.function().required(),
  onSubmitError: Joi.function(),
  beforeSubmit: Joi.function(),
  afterSubmit: Joi.function(),
  successReturnUrl: Joi.string().required(),
  errorReturnUrl: Joi.string().required(),
  apiUrl: Joi.string(),
  sellerKey: Joi.string().uuid().required(),
  showPayButton: Joi.bool(),
  active_3ds: Joi.boolean(),
  risk_custom_field: Joi.string()
});

export default schema;