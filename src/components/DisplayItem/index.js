import {Component} from 'react'
import {TiMinus} from 'react-icons/ti'
import {IoMdAdd} from 'react-icons/io'
import {CardDiv, Heading, Para, Image, Button} from './styledComponents'

class DisplayItem extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onClickDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }
  }

  render() {
    const {count} = this.state
    const {eachItem} = this.props
    const {
      addonCat,
      dishAvailability,
      dishCalories,
      dishCurrency,
      dishDescription,
      dishImage,
      dishName,
      dishPrice,
      dishType,
    } = eachItem

    const avalImg =
      dishType === 1
        ? 'https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg'
        : 'https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg'

    return (
      <CardDiv row main>
        <Image src={avalImg} alt="veg-nonveg" veg />
        <CardDiv>
          <Heading>{dishName}</Heading>
          <Para>
            {dishCurrency} {dishPrice}
          </Para>
          <Para>{dishDescription}</Para>
          {dishAvailability && (
            <Button>
              <button type="button" onClick={this.onClickDecrement}>
                <TiMinus />
              </button>
              {count}{' '}
              <button type="button" onClick={this.onClickIncrement}>
                <IoMdAdd />
              </button>
            </Button>
          )}
          {addonCat.length > 0 && <Para>Customizations avalilable</Para>}
        </CardDiv>
        <Para>{dishCalories} calories</Para>
        <Image src={dishImage} alt="dish image" />
      </CardDiv>
    )
  }
}

export default DisplayItem
