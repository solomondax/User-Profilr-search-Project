import React, { Component } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'

const intialDetails = [
  {
    id: 1,
    name: "solomon",

    imageUrl: 'https://res.cloudinary.com/dzwfvtdc2/image/upload/v1664887528/billy_graham_enqo86.jpg',

    role: "SoftwareDeveloper"

  },
  {
    id: 2,
    name: "David ",
    imageUrl: 'https://res.cloudinary.com/dzwfvtdc2/image/upload/v1664887528/baktha_singh_gtlqug.jpg',

    role: "SoftwareDeveloper"

  },
  {
    id: 3,
    name: " Nathan",
    imageUrl: 'https://res.cloudinary.com/dzwfvtdc2/image/upload/v1664887528/baktha_singh_gtlqug.jpg',
    role: "SoftwareDeveloper"

  },
  {
    id: 4,
    name: "paulapostle",
    imageUrl: 'https://res.cloudinary.com/dzwfvtdc2/image/upload/v1664887528/baktha_singh_gtlqug.jpg',
    role: "SoftwareDeveloper"

  },
  {
    id: 5,
    name: "samson ",
    imageUrl: 'https://res.cloudinary.com/dzwfvtdc2/image/upload/v1664887528/baktha_singh_gtlqug.jpg',
    role: "SoftwareDeveloper"

  },
  {
    id: 6,
    name: "venesh",
    imageUrl: 'https://res.cloudinary.com/dzwfvtdc2/image/upload/v1664887528/baktha_singh_gtlqug.jpg',
    role: "SoftwareDeveloper"

  },
  {
    id: 7,
    name: "isaiah",
    imageUrl: 'https://res.cloudinary.com/dzwfvtdc2/image/upload/v1664887528/baktha_singh_gtlqug.jpg',
    role: "SoftwareDeveloper"

  },
  {
    id: 8,
    name: "daniel",
    imageUrl: 'https://res.cloudinary.com/dzwfvtdc2/image/upload/v1664887528/baktha_singh_gtlqug.jpg',
    role: "SoftwareDeveloper"

  }
]
class App extends Component {

  state = {
    inputSearch: '',
    details: intialDetails,
  }

  inputFunction = (e) => {
    this.setState({ inputSearch: e.target.value })
  }

  deleteFunction = id => {
    console.log(id)
    const { details } = this.state
    const deletedData = details.filter(each =>
      each.id !== id
    )
    this.setState({ details: deletedData })
  }

  render() {
    const { inputSearch, details } = this.state
    const filteredData = details.filter(each =>
      each.name.toLowerCase().includes(inputSearch.toLowerCase()))
    return (
      <div className='app-main-container'>
        <div className='sub'>
          <h1>SEARCH~PROFILE'S</h1>
          <input type="text" placeholder='search-profiles' onChange={this.inputFunction}
          />
          <ul className='un-order'>
            {filteredData.map(each =>
              <UserProfile detail={each} key={each.id} deleteFunction={this.deleteFunction} />)}
          </ul>
        </div>
      </div>
    )
  }
}
export default App



























































