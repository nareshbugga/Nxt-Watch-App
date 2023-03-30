/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.value ? '#181818' : '#f9f9f9 ')};
  background-size: cover;
  min-height: 100vh;
`
export const SearchContainer = styled.div`
  display: flex;
  width: 50%;
  border: 1px solid #313131;
  margin: 30px 40px;
`
export const InputField = styled.input`
  background-color: transparent;
  padding-left: 10px;
  width: 100%;
  border: none;
  outline: none;
`
export const SearchButton = styled.button`
  background-color: ${props => (props.value ? '#606060' : ' #ebebeb')};
  border-left: 1px solid #313131;
  border-bottom: none;
  border-top: none;
  border-right: none;
  cursor: pointer;
`
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 23px;
  color: ${props => (props.value ? '#f9f9f9 ' : '#1e293b')};
`
export const NoVideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.value ? '#f9f9f9 ' : '#475569')};
`
export const NoVideosContainer = styled.div`
  background-color: ${props => (props.value ? '#181818' : '#f9f9f9 ')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
