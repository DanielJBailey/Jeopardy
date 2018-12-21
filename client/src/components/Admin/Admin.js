import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import {
  addCategory,
  deleteCategory,
  updateCategory,
  getCategories
} from '../../reducers/categories';    
import NewCategoryForm from './NewCategoryForm';
import styled from 'styled-components';
import Category from './Category';


class Admin extends React.Component {

  componentDidMount () {
    this.props.dispatch(getCategories())
  }

  render () {
    let {categories} = this.props;
    return (
      <>
        
        <CategoryContainer style={categories.length > 0 ? {display: "grid",gridTemplateColumns: "1fr 1fr", gridGap: "10px"}: null}>
          {categories.map(category => 
            <Link to ={`/admin/categories/${category.id}`}>
              <Category key={category.id} {...category}/>
            </Link>
          )}
          {categories.length < 6 ?  <NewCategoryForm /> : null}
        </CategoryContainer>
      </>
    )
  }
}

const CategoryContainer = styled.div`
  width: 100%;
  padding: 1em;

  a {
    text-decoration: none;
  }
`;

const mapStateToProps = state => {
  return { categories: state.categories }
}

export default connect(mapStateToProps)(Admin)
