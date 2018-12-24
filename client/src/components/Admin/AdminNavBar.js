import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AdminNavBar = ({ categoryButtons, toggleDelete, toggleEdit, editing, deleting}) => {
  return (
    <Nav>
      <Link to={`/admin`}>Dashboard</Link>

      {categoryButtons ? (
        <div>
          <Button onClick={toggleDelete} style={deleting ? {backgroundColor: "#45aaf2", color: "white"}: null}>Delete Categories</Button>
          <Button onClick={toggleEdit} style={editing ? {backgroundColor: "#45aaf2", color: "white"}: null}>Edit Categories</Button>
        </div>
      ) : null}
    </Nav>
  )
}

const Nav = styled.ul`
  width: 100%;
  position: absolute;
  top: 0;
  height: 69px;
  padding: 1em;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: darkgray;
    &:hover {
      color: white;
    }
  }
`

const Button = styled.button`
    padding: 10px 15px;
    margin-left: 10px;
    border: none;
    outline: none;
    font-size: 14px;
    cursor: pointer;
`

export default AdminNavBar
