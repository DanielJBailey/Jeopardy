import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../../reducers/categories'
import alert from 'sweetalert2'
import styled from 'styled-components'

class NewCategoryForm extends React.Component {
  state = {
    name: ''
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
      const { dispatch } = this.props
      e.preventDefault()
      dispatch(addCategory({ ...this.state }));
      alert(
        'Category Added!',
        `${this.state.name} has been added.`,
        'success'
      )
      this.setState({
          name: ""
      })
  }

  render () {
    let { name } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <input  
          placeholder='Category Name:'
          name='name'
          value={name}
          onChange={this.handleChange}
          required
          autoFocus
        />
      </Form>
    )
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;

  input {
    width: 100%;
    padding: 10px 20px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: bold;
  }
`;

export default connect()(NewCategoryForm)
