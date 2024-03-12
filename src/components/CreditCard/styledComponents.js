// Style your elements here
import styled from 'styled-components'

export const CreditPaymentContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  @media and screen (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`

export const CreditContainer = styled.div`
  width: 50%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CreditCardHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  border-bottom: 2px #ffd773 solid;
`

export const CreditCardImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 80%;
`
export const CreditCardDetailsCon = styled.div`
  margin-top: 30px;
  width: 80%;
`

export const CreditCardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 30px;
  font-weight: 500;
`

export const CardHolderNameText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 0px;
`
export const CardHolderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  margin-top: 10px;
`

export const PaymentContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PaymentMethodCard = styled.div`
  background-color: #ffffff;
  height: 45%;
  width: 80%;
  border-radius: 10px;
  box-shadow: 1px 2px 2px 2px #c3cad9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PaymentMethodHeading = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  margin-top: 0px;
`

export const InputElement = styled.input`
  border: 1px #d3d9e0 solid;
  border-radius: 3px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  padding-left: 12px;
  height: 35px;
  width: 70%;
  margin: 10px;
`
