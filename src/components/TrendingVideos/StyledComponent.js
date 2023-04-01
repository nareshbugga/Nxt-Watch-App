/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9 ')};
  background-size: cover;
  min-height: 100vh;
`

export const TrendingHeader = styled.div`
  background-color: ${props => (props.value ? '#181818' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding: 15px;
`
export const TrendingHeaderHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.value ? '#ffffff' : '#1e293b')};
`
export const FireLogo = styled.div`
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
