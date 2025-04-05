import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterCustomer from './components/RegisterCustomer';
import RegisterTailor from './components/RegisterTailor';
import TailorProfile from './components/TailorProfile';
import SearchTailors from './components/SearchTailors';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register-customer" component={RegisterCustomer} />
        <Route path="/register-tailor" component={RegisterTailor} />
        <Route path="/tailor-profile/:id" component={TailorProfile} />
        <Route path="/search-tailors" component={SearchTailors} />
      </Switch>
    </Router>
  );
}

export default App;
