import React from 'react'

const Table = props => (
  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Categoria</th>
        <th>Produto</th>
        <th>Valor</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.categories.length > 0 ? (
        props.categories.map(category => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.category}</td>
            <td>
              <select>
              {category.product.map(prod => (
                <option value={prod.id} key={prod.id}>{prod}</option>
                ))}
                </select>
            </td>
            <td>{category.value}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(category)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteData(category.id)}
                className="button muted-button"
              >
                Remover
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}></td>
        </tr>
      )}
    </tbody>
  </table>
)

export default Table
