import React from 'react';
import Header from '../src/components/Header/Header';
import Intro from '../src/components/Intro/Intro'
import '../src/index.scss';
import News from './components/News/News';
import Activities from './components/Activities/Activities';
import Outro from './components/Outro/Outro';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Intro />
     <News />
     <Activities />
     <Outro />
     <Footer />
    </div>
  );
}

export default App;
