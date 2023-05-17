import React from "react"

export default function App() {

  const [res, setRes] = React.useState(
    {
      email: "",
      password: "",
      confirmPassword: "",
      isChecked: true
    })

  function handleChange(event) {
    const { name, type, value, checked } = event.target
    setRes(prevState => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (res.password === res.confirmPassword) {
      console.log("Successfully signed up");
      if (res.isChecked === true) {
        console.log("Thanks for signing up for our newsletter!")
      }
    } else {
      console.log("passwords do not match")
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          onChange={handleChange}
          name="email"
          value={res.email}
        />

        <input
          type="password"
          placeholder="Password"
          className="form--input"
          onChange={handleChange}
          name="password"
          value={res.password}
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          onChange={handleChange}
          name="confirmPassword"
          value={res.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            onChange={handleChange}
            name="isChecked"
            checked={res.isChecked}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}