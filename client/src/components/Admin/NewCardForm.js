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
        <input type='submit' value='Submit' />
      </Form>
    )
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .input {
    padding: 10px 20px;
    width: 500px;
  }

  .dollar_value {
    width: 100%;
  }
  
`

export default connect()(NewCardForm)
