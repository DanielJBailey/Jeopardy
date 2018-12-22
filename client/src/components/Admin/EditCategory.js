import React from 'react'
import styled from 'styled-components'

class EditCategory extends React.Component {
  state = {
    name: ''
  }

  componentDidMount () {
    const { name } = this.props
    this.setState({
      name: name
    })
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    let {edit, id, editing } = this.props;
    let { name}  = this.state;
    e.preventDefault()
    edit(id, name);
    
  }

  render () {
    let { name } = this.state
    return (
      <EditForm onSubmit={this.handleSubmit}>
        <input
          placeholder='Category Name:'
          name='name'
          value={name}
          onChange={this.handleChange}
          required
          className='input'
        />
        {/* <input type='submit' value='Submit' className='submit-button' /> */}
      </EditForm>
    )
  }
}

const EditForm = styled.form`
  height: inherit;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .input {
    width: 90%;
    background-color: rgba(255,255,255,0.1);
    font-size: 22px;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 1px 1px rgba(0,0,0,1);
    border: none;
    outline: none;

    &::placeholder {
      color: white;
    }
  }

  .submit-button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1em;
    padding: 10px 15px;
    -webkit-appearance: button;
  }
`

export default EditCategory
