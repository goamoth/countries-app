import React, { Component } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Map from '../components/Map';
import Details from '../components/Details';
import Footer from '../components/Footer';

class Countries extends Component {
   render() {
      return (
         <div>
            <p>Am the Countries!</p>
            <Nav />
            <Header />
            <Map />
            <Details />
            <Footer />
         </div>
      );
   }
}

export default Countries;