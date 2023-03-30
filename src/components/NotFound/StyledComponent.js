/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  background-size: cover;
  min-height: 100vh;
  display: flex;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25x;
  color: ${props => (props.value ? '#f1f1f1' : '#1e293b')};
`
export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.value ? '#64748b' : '#475569')};
`
