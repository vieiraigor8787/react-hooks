import React, { useState, useEffect } from 'react'

const EditCategoryForm = props => {
  const [ categories, setCategories ] = useState(props.currentCategory)

  useEffect(
    () => {
      setCategories(props.currentCategory)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setCategories({ ...categories, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(categories.id, categories)
      }}
    >
     
      <button>Alterar categoria</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditCategoryForm
