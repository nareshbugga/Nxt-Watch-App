/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const FailureContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 23px;
  color: ${props => (props.value ? '#f9f9f9' : '#1e293b')};
`
export const NoVideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.value ? '#94a3b8' : ' #64748b')};
`
