import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Pages/home/header'
import Batch from './component/Pages/home/batch'
import Footer from './component/Pages/home/footer'

function App() {
  return (

    <>
      <Header/>
      <Batch/>
      <Footer/>
    </>
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route path="/profile" component={ProfilePage} />
    //   </Switch>
    // </Router>
  );
}

export default App;
