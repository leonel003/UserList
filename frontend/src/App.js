
import './App.css';
import UserCard from './components/UserCard';
import Login from './components/login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
        <div className="container p-4">
        <Route path='/login' exact component={Login} />
        <Route path='/' component={UserCard} />
        </div>
    </Router>
  );
}

export default App;
