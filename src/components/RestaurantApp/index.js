import {Component} from 'react'
import Header from '../Header'
import DisplayTag from '../DisplayTag'
import DisplayItem from '../DisplayItem'
import {MainDiv, CardDiv, Image} from './styledComponents'

const apiUrlStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'LOADING',
  failure: 'FAILURE',
}

class RestraurantApp extends Component {
  state = {
    restuarantData: [],
    totalData: [],
    urlStatus: apiUrlStatus.initial,
    tagList: [],
    isActive: '',
  }

  componentDidMount() {
    this.getRstraurantData()
  }

  getRstraurantData = async () => {
    this.setState({urlStatus: apiUrlStatus.inProgress})

    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const tableMenuList = data[0].table_menu_list.map(eachItem => ({
        categoryDishes: eachItem.category_dishes,
        menuCategory: eachItem.menu_category,
        menuCategoryId: eachItem.menu_category_id,
        menuCategoryImage: eachItem.menu_category_image,
        nexturl: eachItem.nexturl,
      }))

      const activeCateogyDishes = tableMenuList[0].categoryDishes.map(
        eachItem => ({
          addonCat: eachItem.addonCat,
          dishAvailability: eachItem.dish_Availability,
          dishType: eachItem.dish_Type,
          dishCalories: eachItem.dish_calories,
          dishCurrency: eachItem.dish_currency,
          dishDescription: eachItem.dish_description,
          dishId: eachItem.dish_id,
          dishImage: eachItem.dish_image,
          dishName: eachItem.dish_name,
          dishPrice: eachItem.dish_price,
          nexturl: eachItem.nexturl,
        }),
      )

      this.setState({
        totalData: tableMenuList,
        restuarantData: activeCateogyDishes,
        urlStatus: apiUrlStatus.success,
        tagList: tableMenuList,
        isActive: tableMenuList[0].menuCategoryId,
      })
    } else {
      this.setState({urlStatus: apiUrlStatus.failure})
    }
  }

  onClickTag = menuCategoryId => {
    const {totalData} = this.state
    const newDishData = totalData.filter(
      eachItem => eachItem.menuCategoryId === menuCategoryId,
    )

    const activeCateogyDishes = newDishData[0].categoryDishes.map(eachItem => ({
      addonCat: eachItem.addonCat,
      dishAvailability: eachItem.dish_Availability,
      dishType: eachItem.dish_Type,
      dishCalories: eachItem.dish_calories,
      dishCurrency: eachItem.dish_currency,
      dishDescription: eachItem.dish_description,
      dishId: eachItem.dish_id,
      dishImage: eachItem.dish_image,
      dishName: eachItem.dish_name,
      dishPrice: eachItem.dish_price,
      nexturl: eachItem.nexturl,
    }))

    this.setState({
      restuarantData: activeCateogyDishes,
      isActive: newDishData[0].menuCategoryId,
    })
  }

  render() {
    const {restuarantData, tagList, urlStatus, isActive} = this.state
    console.log(restuarantData)

    switch (urlStatus) {
      case apiUrlStatus.inProgress:
        return <div data-testid="loading">Loading...</div>
      case apiUrlStatus.success:
        return (
          <MainDiv>
            <Header />
            <hr />
            <CardDiv row center>
              {tagList.map(eachItem => (
                <DisplayTag
                  eachTag={eachItem}
                  key={eachItem.menuCategoryId}
                  onClickTag={this.onClickTag}
                  isActive={isActive}
                />
              ))}
            </CardDiv>
            <hr />
            <CardDiv center>
              {restuarantData.map(eachItem => (
                <DisplayItem eachItem={eachItem} key={eachItem.dishId} />
              ))}
            </CardDiv>
          </MainDiv>
        )
      case apiUrlStatus.failure:
        return (
          <MainDiv>
            <Header />
            <CardDiv>
              <Image
                src="https://gyanmatrix.com/wp-content/uploads/2023/04/Banner-The-Major-Causes-Of-Mobile-App-Failure.png"
                alt="failure view"
              />
            </CardDiv>
          </MainDiv>
        )
      default:
        return null
    }
  }
}

export default RestraurantApp
