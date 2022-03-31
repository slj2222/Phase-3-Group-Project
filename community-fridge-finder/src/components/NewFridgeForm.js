import React, { useState } from 'react'

export default function NewFridgeForm({ submitNew }) {

  const [value, setValue] = useState('')
  console.log(value)

  function handleSubmit(e) {
    e.preventDefault()
    submitNew(value)
    setValue('')
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="location">Fridge Location: </label>
            <input onChange={(e) => setValue(e.target.value)} value={value} type="text" id="location" name="location" />
            <input type="submit"/>
        </form>
    </div>
  )
}
