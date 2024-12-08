import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
`

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: ${props => props.center && 'center'};
  align-items: center;
`
export const Image = styled.img`
  height: 200px;
  width: 300px;
`
