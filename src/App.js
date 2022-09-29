import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route exact path="/">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
