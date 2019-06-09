import React from 'react'

const App = () => {
  const profiles = [
    { name: 'taro', age: 10 },
    { name: 'hanako', age: 5 },
    { name: "NoName" }
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

User.defaultProps = {
  age: 1
}

export default App;
