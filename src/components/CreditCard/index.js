// Write your code here
import {useState} from 'react'

import {
  CreditPaymentContainer,
  CreditContainer,
  CreditCardHeading,
  CreditCardImage,
  CreditCardNumber,
  CardHolderNameText,
  CardHolderName,
  PaymentContainer,
  PaymentMethodCard,
  PaymentMethodHeading,
  InputElement,
  CreditCardDetailsCon,
} from './styledComponents'

const CreditCard = () => {
  const [number, setCardNumber] = useState('')
  const [name, setCardName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardName = event => {
    setCardName(event.target.value)
  }

  return (
    <CreditPaymentContainer>
      <CreditContainer>
        <CreditCardHeading> CREDIT CARD </CreditCardHeading>
        <CreditCardImage data-testid="creditCard">
          <CreditCardDetailsCon>
            <CreditCardNumber> {number} </CreditCardNumber>
            <CardHolderNameText> CARDHOLDER NAME </CardHolderNameText>
            <CardHolderName>{name}</CardHolderName>
          </CreditCardDetailsCon>
        </CreditCardImage>
      </CreditContainer>
      <PaymentContainer>
        <PaymentMethodCard>
          <PaymentMethodHeading> Payment Method </PaymentMethodHeading>
          <InputElement
            type="text"
            placeholder="Card Number"
            value={number}
            onChange={onChangeCardNumber}
          />
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeCardName}
          />
        </PaymentMethodCard>
      </PaymentContainer>
    </CreditPaymentContainer>
  )
}

export default CreditCard
