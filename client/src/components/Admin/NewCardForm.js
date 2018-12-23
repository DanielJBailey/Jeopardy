import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addCard } from '../../reducers/cards'

class NewCardForm extends React.Component {
  state = {
    question: '',
    answer: '',
    dollar_value: 0
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    let { dispatch, id} = this.props;
    const category_id = parseInt(id);
    e.preventDefault()
    dispatch(addCard( category_id, {...this.state }))
    this.setState({
      question: "",
      dollar_value: 0,
      answer: ""
    })
  }

  render () {
    let { question, answer, dollar_value } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          placeholder='Question'
          name='question'
          value={question}
          onChange={this.handleChange}
          className="input"
          required
          autoFocus
        />
        <input
          placeholder='Answer'
          className="input"
          name='answer'
          value={answer}
          onChange={this.handleChange}
          required
        />
        <select
          name='dollar_value'
          value={dollar_value}
          onChange={this.handleChange}
          className="dollar_value"
          required
        >
          <option value={100}>$100</option>
          <option value={200}>$200</option>
          <option value={300}>$300</option>
          <option value={400}>$400</option>
          <option value={500}>$500</option>
        </select>
        <input type='submit' value='Submit' className="submit"/>
      </Form>
    )
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .input {
    padding: 10px 20px;
    width: 300px;
    height: 40px;
    margin-right: 10px;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 5px;
  }

  .dollar_value {
    height: 40px;
    font-size: 14px;
    cursor: pointer;
    width: 100px;
    margin-right: 10px;
  }

  .submit {
    border-radius: 5px;
    background-color: #3867d6;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
    height: 40px;
    border: none;
    font-size: 14px;
    -webkit-appearance: button;
  }
  
`

export default connect()(NewCardForm)
