import React, {useState} from 'react';
import { withTemplate } from '../../hoc/withTemplate';
import Login from '../login';
import Signup from '../signup';
import './index.scss'

const Auth = () => {
  const [tab, setTab] = useState('signup');
  
  const renderTab = (tab) => {
    switch (tab) {
      case 'signup':
        return <Signup />
      case 'login':
        return <Login />
      default:
        break;
    }
  }
  return (
    <div className="wrapper">
      <div className="tab">
        <h3 className="tab-item" onClick={() => setTab('signup')}>SIGNUP</h3>
        <h3 className="tab-item" onClick={() => setTab('login')}>LOGIN</h3>
      </div>
      <div className="tab-content">
        {renderTab(tab)}
      </div>
    </div>
  )
}

export default withTemplate(Auth)