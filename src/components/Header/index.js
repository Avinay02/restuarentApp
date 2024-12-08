import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Nav, Heading} from './styledComponents'

const Header = () => (
  <Nav>
    <Heading>UNI Resto Cafe</Heading>
    <button type="button">
      <AiOutlineShoppingCart />
      <button type="button" color="red">
        0
      </button>
    </button>
  </Nav>
)

export default Header
