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
    alert(`${this.state.name} added!`, null, 'success');
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
        />
      </Form>
    )
  }
}

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 1em;
  background-color: black;

  input {
    width: 100%;
    padding: 10px 20px;
    margin: 1em;
  }
`;

export default connect()(NewCategoryForm)
