import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 60px;
  position: top;
  justify-content: space-between;
`
export const CardDiv = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  margin-right: 20px;
`

export const Heading = styled.h1`
  margin-left: 30px;
  font-size: 20px;
  color: black;
`

export const Image = styled.image`
  height: 40px;
  width: 120px;
`
