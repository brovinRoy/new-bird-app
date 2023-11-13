import React from 'react'
function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Birds />
    </div>
  )
}
function Birds() {
  const Bird1 = {
    Name: 'Parrot',
    Color: 'Green',
    icon:'🦜'
  }
  const Bird2 = {
    Name: 'Duck',
    Color: 'White',
    icon:'🦆'
  }
  return (
    <div>
      <h2>I am a {Bird1.Name} and my color is {Bird1.Color}{Bird1.icon}</h2>
      <h2>I am a {Bird2.Name} and my color is {Bird2.Color}{Bird2.icon}</h2>
    </div>
  )
}
export default App
