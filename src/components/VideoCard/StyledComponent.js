/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const CardHeading = styled.p`
  font-family: 'Roboto';
  font-weight: 'bold';
  font-size: 15px;
  color: ${props => (props.value ? '#f1f1f1' : '#1e293b')};
`
export const MatchName = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.value ? '#94a3b8' : '#475569')};
`
export const DetailsDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.value ? '#94a3b8' : '#475569')};
  margin-right: 5px;
`
