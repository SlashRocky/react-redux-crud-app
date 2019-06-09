import React from 'react'
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    { name: 'taro', age: 10 },
    { name: 'hanako', age: 5 },
    { name: 'NoName', age: 3 }
  ]
  return (
    profiles.map((profile, index) => {
      return <User name={profile.name} age={profile.age} key={index} />
    })
  )
}

const User = (props) => {
  return <div>Hi, I'm {props.name}, {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
