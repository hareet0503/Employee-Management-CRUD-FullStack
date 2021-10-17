
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import AddEmployeeComponent from './Components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>

            <Route exact path="/" component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee" component={AddEmployeeComponent}></Route>
            <Route path="/edit-employee/:id" component={AddEmployeeComponent}></Route>

          </Switch>

        </div>
        <FooterComponent />
      </Router >

    </div>
  );
}

export default App;
