import {Componet} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Componet {
  state = {activeTabId: languageFiltersData[0].id}

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredLanuages = () => {
    const {activeTabId} = this.state
    const filteredLanguages = languageFiltersData.filter(
      eachLanguage => eachLanguage.language === activeTabId,
    )
    return filteredLanguages
  }

  render() {
    const {activeTabId} = this.state
    const filteredLanguages = this.getFilteredLanuages()

    return (
      <div className="app-container">
        <ul className="tabs">
          {languageFiltersData.map(eachOne => (
            <LanguageFilterItem
              languageDetails={eachOne}
              value={eachOne.id}
              clickTabItem={this.clickTabItem}
            />
          ))}
        </ul>
        <ul>
          {filteredLanguages.map(languageDetails => (
            <RepositoryItem languageDetails={languageDetails} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
