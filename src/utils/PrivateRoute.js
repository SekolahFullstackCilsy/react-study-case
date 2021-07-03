import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = (props) => {
  const isAuthenticate = window.localStorage.getItem('dataLogin') &&
    JSON.parse(window.localStorage.getItem('dataLogin'))
  return isAuthenticate ? (
    <Route {...props} />
  ) : (
    <Redirect to="/auth" />
  )
}

export default PrivateRoute