import React, { useState } from 'react'
import Table from './tables/Table'

const App = () => {
	// Data
	const data = [
		{ id: 1, category: 'Internet', product: ['Fibra'] },
		{ id: 2, category: 'TV', product: ['Plano básico', 'Plano intermediário', 'Plano completo'] },
		{ id: 3, category: 'Celular', product: ['Pré', 'Controle', 'Pós'] },
		{ id: 4, category: 'Fixo', product: ['Básico','DDI ilimitado'] },

	]

	const initialFormState = { id: null, category: '', product: '' }

	// Setting state
	const [ categories, setCategories ] = useState(data)
	const [ currentCategory, setCurrentCategory ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const deleteData = id => {
		setEditing(false)

		setCategories(categories.filter(category => category.id !== id))
	}

	const editRow = category => {
		setEditing(true)

		setCurrentCategory({ id: category.id, category: category.category })
	}

	return (
		<div className="container">
			<h1>CRUD Claro </h1>
			<div className="flex-row">
				<div className="flex-large">
					<h2>Ver </h2>
					<Table categories={categories} editRow={editRow} deleteData={deleteData} />
				</div>
			</div>
		</div>
	)
}

export default App
