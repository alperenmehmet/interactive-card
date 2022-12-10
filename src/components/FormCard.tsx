import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchema } from '../utils/FormSchema'
import { cardNumberFormatter } from '../utils/cardNumberFormattter'
import Card from './Card'
import { IData } from '../interfaces/interfaces'

export const FormCard = () => {
  const [data, setData] = useState<Array<IData>>([])
  const [formatted, setFormatted] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IData>({
    resolver: yupResolver(FormSchema)
  })

  const handleChange = (e: any) => {
    let formattedCardNumber = cardNumberFormatter(e.target.value)
    setFormatted(formattedCardNumber)
  }

  const onSubmit = (data: any) => {
    setData(data)
    reset()
    setFormatted('')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>CardHolder Name</label>
          <input {...register('cardHolderName')} />
          {errors?.cardHolderName && <p>{errors.cardHolderName?.message}</p>}
        </div>
        <div>
          <label>Card Number</label>
          <input
            {...register('cardNumber')}
            onChange={handleChange}
            value={formatted}
          />
          {errors?.cardNumber && <p>{errors.cardNumber?.message}</p>}
        </div>
        <div>
          <label>Exp. Date (MM/YY)</label>
          <input {...register('expMonth')} />
          <p>{errors.expMonth?.message}</p>
          <input {...register('expYear')} />
          <p>{errors.expYear?.message}</p>
        </div>
        <div>
          <label>Cvc</label>
          <input {...register('cvc')} />
          <p>{errors.cvc?.message}</p>
        </div>
        <input type="submit" />
      </form>
      <Card
        cardHolderName={'Mehmet ALPEREN'}
        cardNumber={'0000 0000 0000 0000'}
        expMonth={2}
        expYear={24}
        cvc={111}
        {...data}
      />
    </>
  )
}
