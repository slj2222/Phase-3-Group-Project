import React from 'react'

export default function NewFridgeForm() {
  return (
    <div>
        <form>
            <label for="location">Fridge Location:</label>
            <input type="text" id="location" name="location" />
        </form>
    </div>
  )
}
