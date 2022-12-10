import { IData } from '../interfaces/interfaces'
import React from 'react'
import { expirationMonthFormatter } from '../utils/expirationMonthFormatter'

const Card: React.FC<IData> = ({
  cardHolderName,
  cardNumber,
  cvc,
  expMonth,
  expYear
}: IData) => {
  return (
    <div>
      <h2>{cardHolderName}</h2>
      <h2>{cardNumber}</h2>
      <h2>{expirationMonthFormatter(expMonth)}</h2>
      <h2>{expYear}</h2>
      <h2>{cvc}</h2>
    </div>
  )
}

export default Card
