import React from 'react';
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

import { BrowserRouter, Route} from 'react-router-dom'
import Verdensballetten from './components/Verdensballetten';
import Nyhederne from './components/Nyhederne'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/VerdensBalletten" component={Verdensballetten} />
          <Route path="/Nyhederne" component={Nyhederne} />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
