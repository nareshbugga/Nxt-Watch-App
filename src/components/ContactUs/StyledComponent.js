/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Heading = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.value ? '#ffffff' : '#383838')};
  font-size: 20px;
  font-weight: bold;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.value ? '#64748b' : '#475569')};
  font-size: 14px;
  font-weight: bold;
`
