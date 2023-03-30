/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.value ? '#181818' : '#f9f9f9')};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LoginSubContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f8fafc')};
  box-shadow: 1px 1px 2px 2px #bfbfbf;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 15px;
  width: 40%;
  height: 65vh;
  @media screen and (max-width: 767px) {
    width: 70%;
    height: 50vh;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 40px;
  margin-top: 20px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  color: ${props => (props.value ? '#ffffff' : '#475569')};
`
export const Input = styled.input`
  background-color: transparent;
  height: 30px;
  padding-left: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #94a3b8;
  font-family: 'Roboto';
  font-weight: 500;
  outline: none;
`
export const LabelHeading = styled.label`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  margin-top: 1px;
  margin-left: 5px;
  margin-bottom: 20px;
  color: ${props => (props.value ? '#ffffff' : 'black')};
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 500;
  border: none;
  width: 100px;
  height: 30px;
  cursor: pointer;
`
