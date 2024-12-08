import styled from 'styled-components'

export const CardDiv = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: ${props => props.main && 'center'}
  align-items: ${props => props.main && 'center'}
  border: ${props => props.main && '2px solid grey'};
  border-radius:5px;
  margin-top:20px;
  width: 600px;
`

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: black;
`

export const Para = styled.p`
  font-size: 18px;
  color: black;
`
export const Button = styled.button`
  font-size: 18px;
  color: #ffffff;
  height: 40px;
  width: 120px;
  background-color: green;
`

export const Image = styled.img`
  height: ${props => (props.veg ? '40px' : '200px')};
  width: ${props => (props.veg ? '40px' : '200px')};
`
