/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  display: flex;
`
export const GamingHeader = styled.div`
  background-color: ${props => (props.value ? '#181818' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding: 15px;
`
export const GameLogo = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#cbd5e1')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 10px;
  margin-left: 50px;
`
export const GameHeaderHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.value ? '#ffffff' : '#1e293b')};
`
export const GamingCardHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.value ? '#ffffff' : '#1e293b')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const GamingCardDetails = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.value ? '#94a3b8' : '#475569')};
  margin-right: 5px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`
