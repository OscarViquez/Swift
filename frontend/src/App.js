import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          {/* the exact attr means that it should EXACTly
          say "http://localhost:3000/"
          <--- The slash needs to be included in order to go on to the home page --->
          */}
          <Route path='/product/:id' component={ProductScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
