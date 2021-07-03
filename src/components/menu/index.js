import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './index.scss'

const Menu = (props) => {
  const dataLogin = window.localStorage.getItem('dataLogin') && JSON.parse(window.localStorage.getItem('dataLogin'))
  console.log(props)
  const handleLogout = () => {
    window.localStorage.removeItem('dataLogin')
    alert('Berhasil Logout')
    props.history.push('/')
  }
  return (
    <div className="menu">
      <ul>
        <li>{dataLogin && (<span>Hello {dataLogin.name}</span>)}</li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li>
          {dataLogin ? (
            <>
              <a onClick={handleLogout}>Logout</a>
            </>
          ) : (
            <NavLink to="/auth">Signin/Signup</NavLink>
          )}
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Menu)