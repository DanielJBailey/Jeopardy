import React from 'react'
import { connect } from 'react-redux'
import {
  // updateCategory,
  getCategories, deleteCategory, updateCategory
} from '../../reducers/categories'
import NewCategoryForm from './NewCategoryForm'
import styled from 'styled-components'
import Category from './Category'
import AdminNavBar from './AdminNavBar'
import alert from 'sweetalert2';

class Admin extends React.Component {
  state = {
    deleting: false,
    editing: false
  }

  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  toggleDelete = () => {
    const { deleting } = this.state
    this.setState({
      deleting: !deleting
    })
  }

  toggleEditing = () => {
    const { editing } = this.state
    this.setState({
      editing: !editing
    })
  }

  handleEdit = (id, name) => {
    const {dispatch} = this.props;
    dispatch(updateCategory(id, name))
    alert(
      'Updated!',
      `${name} has been updated`,
      'success'
    )
  }

  handleDelete = id => {
    const {dispatch} = this.props;
    alert({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        alert(
          'Deleted!',
          'The category has been removed!',
          'success'
        )
        dispatch(deleteCategory(id))
      }
    })
  }

  render () {
    let { categories } = this.props
    let { editing, deleting } = this.state
    return (
      <AdminContainer>
        <AdminNavBar categoryButtons toggleDelete={this.toggleDelete} toggleEdit={this.toggleEditing} editing={editing} deleting={deleting  }/>
        <CategoryContainer>
          {categories.map(category => (
            <Category
              key={category.id}
              {...category}
              editing={editing}
              deleting={deleting}
              remove={this.handleDelete}
              edit={this.handleEdit}
            />
          ))}
          {categories.length < 6 ? <NewCategoryForm /> : null}
        </CategoryContainer>
      </AdminContainer>
    )
  }
}

const AdminContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding-top: 50px;
  margin-top: 50px;
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
  a {
    text-decoration: none;
  }
`

const mapStateToProps = state => {
  return { categories: state.categories }
}

export default connect(mapStateToProps)(Admin)
