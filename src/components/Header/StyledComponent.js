/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HeaderContainerMobile = styled.div`
  background-color: ${props => (props.value ? '#212121' : ' #f8fafc')};
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const HeaderContainerDeskTop = styled.div`
  background-color: ${props => (props.value ? '#231f20' : ' #f8fafc')};
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const Navigation = styled.div`
  display: flex;
  align-items: center;
`
export const PopUpHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.value ? '#ffffff' : '#00306e')};
  font-size: 18px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  width: 100px;
  height: 35px;
  border-radius: 5px;
  border: none;
  margin: 10px 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 20px;
`
export const CancelButton = styled.button`
  background-color: transparent;
  width: 100px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #94a3b8;
  margin: 10px 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #94a3b8;
  cursor: pointer;
`
