import * as yup from 'yup'

export const FormSchema = yup.object().shape({
  cardHolderName: yup.string().required('CardHolder name is required.'),
  cardNumber: yup
    .string()
    .max(19, 'Must be a valid card number.')
    .min(19, 'Must be a valid card number.')
    .required('Card number is required.'),
  expMonth: yup
    .number()
    .max(12, 'Must be a valid month. "1-12"')
    .min(1, 'Must be a valid month. "1-12" ')
    .positive()
    .integer()
    .required('Expiration Month is required.')
    .typeError('Expiration Month is required.'),
  expYear: yup
    .number()
    .min(22, 'Must be last 2 - digit of year')
    .positive()
    .integer()
    .required('Expiration year is required')
    .typeError('Expiration year is required'),
  cvc: yup
    .number()
    .min(100, 'Must be a 3 - digit')
    .max(999, 'Must be a 3 - digit')
    .positive()
    .integer()
    .required('CVC is required.')
    .typeError('CVC is required.')
})
