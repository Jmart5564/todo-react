import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Todos from './components/Todo/Todos';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todos" component={Todos} />
        <Route exact path="/">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
