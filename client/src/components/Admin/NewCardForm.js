import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addCard } from '../../reducers/cards'
import alert from 'sweetalert2'

class NewCardForm extends React.Component {
  state = {
    question: '',
    answer: '',
    dollar_value: 200,
    accepted_answers: ''
  }

  componentDidUpdate () {
    console.log(this.props.cards)
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  checkForCommasInList = (string) => {
    var pattern = new RegExp('[-\\w\\s]+(,[-\\w\\s]+)*');
    if(pattern.test(string)) {
      console.log('true');
      return true
    } else return false
  }

  checkDollarValues = dollar_value => {
    let { cards } = this.props
    for (var i in cards) {
      if (cards[i].dollar_value === parseInt(dollar_value)) {
        return true
      }
    }
  }

  handleSubmit = e => {
    let { dispatch, id } = this.props
    const category_id = parseInt(id)
    e.preventDefault()
    if (this.checkDollarValues(this.state.dollar_value)) {
      alert(
        'Error adding card!',
        `A $${this.state.dollar_value} value already exists!`,
        'error'
      )
    } else {
      if(!this.checkForCommasInList(this.state.accepted_answers)) {
        alert(
          'Error adding card!',
          `Please use a comma seperated list in for accepted answers!`,
          'error'
        )
      } else {
        dispatch(addCard(category_id, { ...this.state }))
        alert(
          'Card added!',
          `You have added the $${this.state.dollar_value} card successfully!`,
          'success'
        ) 
        this.setState({
          question: '',
          dollar_value: 200,
          answer: '',
          accepted_answers: ''
        })
      }
    }
  }

  render () {
    let { question, answer, dollar_value, accepted_answers } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          placeholder='Question'
          name='question'
          value={question}
          onChange={this.handleChange}
          className='input'
          required
          autoFocus
        />
        <input
          placeholder='Answer'
          className='input'
          name='answer'
          value={answer}
          onChange={this.handleChange}
          required
        />
        <select
          name='dollar_value'
          value={dollar_value}
          onChange={this.handleChange}
          className='dollar_value'
          required
        >
          <option value={200}>$200</option>
          <option value={400}>$400</option>
          <option value={600}>$600</option>
          <option value={800}>$800</option>
          <option value={1000}>$1000</option>
        </select>
        <br />
        <input 
          name="accepted_answers"
          value={accepted_answers}
          onChange={this.handleChange}
          required
          placeholder="Accepted answers"
          className='answers'
        />
        <input type='submit' value='Submit' className='submit' />
      </Form>
    )
  }
}

const Form = styled.form`
  width: 1000px;
  display: flex;

  .input {
    padding: 10px 15px;
    width: 300px;
    height: 40px;
    margin-right: 10px;
    background-color: rgba(0,0,0,0.05);
    color: #2d3436;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 5px;
    font-weight: bold;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
      padding-left: 5px;
    }
  }

  .answers {
    padding: 10px 15px;
    width: 300px;
    height: 40px;
    margin-right: 10px;
    background-color: rgba(0,0,0,0.05);
    color: #2d3436;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 5px;
    font-weight: bold;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
      padding-left: 5px;
    }
  }

  .dollar_value {
    height: 40px;
    font-size: 14px;
    cursor: pointer;
    width: 100px;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.3);
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: rgba(0,0,0,0.05);
    border: none;
    font-weight: bold;
  }

  .submit {
    border-radius: 5px;
    background-color: #3867d6;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
    height: 40px;
    outline: none;
    border: none;
    font-size: 14px;
    -webkit-appearance: button;
    &:hover {
      background-color: #4b7bec;
    }
  }
`

export default connect()(NewCardForm)
