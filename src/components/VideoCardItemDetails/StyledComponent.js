/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  background-color: ${props => (props.value ? '#0f0f0f' : '#f9f9f9')};
  background-size: cover;
  min-height: 100vh;
`

export const VideoItemHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.value ? '#f1f1f1' : '#383838')};
  font-size: 18px;
`
export const Details = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.value ? '#64748b' : '#475569')};
  margin-right: 5px;
`
export const Name = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.value ? '#f1f1f1' : '#1e293b')};
`
export const Subscriber = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.value ? '#64748b' : '#475569')};
`
export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #475569;
`
export const Save = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  color: ${props => (props.value ? '#2563eb' : '#64748b ')};
  margin-right: 5px;
`
export const Like = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  color: ${props => (props.value ? '#2563eb' : '#64748b ')};
  margin-right: 5px;
`
export const DisLike = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  color: ${props => (props.value ? '#64748b ' : '#2563eb')};
  margin-right: 5px;
`
