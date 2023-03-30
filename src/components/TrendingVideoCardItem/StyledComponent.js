/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const TrendingCardHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.value ? '#ffffff' : '#1e293b')};
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`
export const TrendingCardDetails = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.value ? '#94a3b8' : '#475569')};
  margin-right: 5px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`
