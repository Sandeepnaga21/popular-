import './index.css'

const RepositoryItem = props => {
  const {languageDetails} = props
  const {id} = languageDetails
  const reponse = fetch(`https://apis.ccbp.in/popular-repos?language=${id}`)
  const data = reponse.json()
  const updatedData = data.popular_repos.map(eachOne => {
    name: eachOne.name
    id: eachOne.id
    issuesCount: eachOne.issues_count
    forksCount: eachOne.forks_count
    starsCount: eachOne.stars_count
    avatarUrl: eachOne.avatar_url
  })

  return (
    <li className="responses-container">
        
    </li>
  )
}

export default RepositoryItem
