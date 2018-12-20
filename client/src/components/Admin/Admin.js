import React from 'react'
import { connect } from 'react-redux'
import {
  addCategory,
  deleteCategory,
  updateCategory,
  getCategories
} from '../../reducers/categories';    
import NewCategoryForm from './NewCategoryForm';
import styled from 'styled-components';


class Admin extends React.Component {

  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  render () {
    let {categories} = this.props;
    return (
      <>
        
        <CategoryContainer>
          <NewCategoryForm />
          {categories.map(category => 
            <h1 key={category.id}>{category.name}</h1>
          )}
        </CategoryContainer>
      </>
    )
  }
}

const CategoryContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = state => {
  return { categories: state.categories }
}

export default connect(mapStateToProps)(Admin)
