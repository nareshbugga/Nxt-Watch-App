/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const SideBar = styled.div`
  background-color: ${props => (props.value ? '#212121' : ' #f8fafc')};
  width: 20%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
