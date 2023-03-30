/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ListContainer = styled.ul`
  list-style-type: none;
`
export const Item = styled.div`
  margin-left: 15px;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  font-weight: ${props => (props.value ? 'bold' : '500')};
  font-size: 15px;
`
export const TabItem = styled.li`
  background-color: ${props => props.value};
  width: 80%;
  padding: 10px;
  opacity: 0.9;
`
