import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../../reducers/cards'
import styled from 'styled-components'
import NewCardForm from './NewCardForm'
import AdminNavBar from './AdminNavBar'
import {deleteCard} from '../../reducers/cards';
import alert from 'sweetalert2';

class CategoryShow extends React.Component {
  componentDidMount () {
    let { id } = this.props.match.params
    const { dispatch } = this.props
    dispatch(getCards(id))
  }

  handleDelete = (card_id) => {
    let category_id = this.props.match.params.id
    let {dispatch} = this.props;
    dispatch(deleteCard(category_id, card_id));
    alert(
        'Card deleted!',
        `You have deleted the card successfully!`,
        'success'
    )
  }

  render () {
    let categoryName = this.props.category[0].name.toUpperCase()
    let { id } = this.props.match.params
    let { cards } = this.props
    let sortedCards = cards.sort((a,b) => {
        return a.dollar_value - b.dollar_value;
    });
    return (
      <AdminContainer>
        <h1>{categoryName}</h1>
        <AdminNavBar categoryButtons={false} />
        <NewCardForm id={id} cards={cards} />
        <CardContainer>
          {cards.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Value</th>
                  <th>Accepted Answers</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {sortedCards.map(card => (
                  <tr key={card.id}>
                    <td>{card.question}</td>
                    <td>{card.answer}</td>
                    <td>${card.dollar_value}</td>
                    <td>{card.accepted_answers}</td>
                    <td className='delete'>
                      <button onClick={() => this.handleDelete(card.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </CardContainer>
      </AdminContainer>
    )
  }
}

const CardContainer = styled.div`
  table {
    border-spacing: 0;
    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.5);
    min-width: 1000px;
    max-width: 1000px;
    th {
      padding: 20px;
      background-color: black;
      color: white;
    }
    tr {
      background-color: rgba(255, 255, 255, 0.5);
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    tr:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.1);
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    margin-top: 50px;
    td {
      padding: 20px;
    }
    .delete {
      text-align: center;
      button {
        padding: 10px 20px;
        -webkit-appearance: button;
        background-color: #fc5c65;
        cursor: pointer;
        font-size: 14px;
        border-radius: 5px;
        font-weight: bold;
        color: white;
        border: none;
        &:hover {
          background-color: #eb3b5a;
        }
      }
    }
  }
`

const AdminContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
  background-color: white;

  h1 {
    margin-bottom: 20px;
  }
`

const mapStateToProps = (state, props) => {
  const id = parseInt(props.match.params.id)
  return {
    cards: state.cards.filter(card => card.category_id === id),
    category: state.categories.filter(c => c.id === id)
  }
}

export default connect(mapStateToProps)(CategoryShow)
