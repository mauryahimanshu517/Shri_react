import './App.css'
import { useState } from 'react'


function App() {
  const [first, setfirst] = useState("hello")
  let [value, setValue] = useState("")
  let [email, setEmail] = useState("")
  let [username, setUsername] = useState([])
  console.log(username)

  function handleForm(e) {
    e.preventDefault()

    value.length > 0 && email.length > 0 ? setUsername([...username, { value, email }]) : alert("please fill input field")
  // console.log("username" + value + "email" + email)
  setValue('')
  setEmail('')

}

function inputValue(e) {
  setValue(e.target.value)

}

function emails(e) {
  setEmail(e.target.value)

}
// done

return (
  <>
    Hello
    <form onSubmit={handleForm}>
      <input placeholder='username' value={value} onChange={inputValue} ></input>
      <input placeholder='email' value={email} onChange={emails}></input>
      <button>submit</button>

    </form>
    <div>
      {username.length > 0 ? username.map((user, index) => (

        <p key={index}>
          {user.value} - {user.email}
        </p>
      )) : "no user data"}
    </div>
  </>
)
}

export default App
