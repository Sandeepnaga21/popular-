import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, clickTabItem} = props
  const {id, language} = languageDetails

  const onClickTab = () => {
    clickTabItem(id)
  }

  return (
    <li className="tabs-list">
      <button onClick={onClickTab}>{language}</button>
    </li>
  )
}

export default LanguageFilterItem
