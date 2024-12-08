import {CardDiv} from './styledComponents'
import './index.css'

const DisplayTag = props => {
  const {eachTag, onClickTag, isActive} = props
  const {menuCategory, menuCategoryId} = eachTag

  const onclicktag = () => {
    onClickTag(menuCategoryId)
  }

  const activeCls = isActive === menuCategoryId ? 'active-cls' : ''

  return (
    <CardDiv row>
      <h1 onClick={onclicktag} className={`heading ${activeCls}`}>
        {menuCategory}
      </h1>
      <hr />
    </CardDiv>
  )
}

export default DisplayTag
