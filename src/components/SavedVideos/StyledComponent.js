/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  background-size: cover;
  min-height: 100vh;
  display: flex;
`
export const SavedHeader = styled.div`
  background-color: ${props => (props.value ? '#181818' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding: 15px;
`
export const SavedLogo = styled.div`
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
export const SavedHeaderHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.value ? '#ffffff' : '#1e293b')};
`
export const NoSavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.value ? '#ffffff' : '#1e293b')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const NoSavedDescription = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.value ? '#64748b' : '#475569')};
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`
