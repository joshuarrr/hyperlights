import React, { Component } from 'react'
import MediaQuery from 'react-responsive';

// components
// import Header from '../header/'
// import Footer from '../footer/'
// import Nav from '../nav/'
//


class Grid extends Component {
  render = () => [
    // <MediaQuery key="mobile" query="(max-width: 1024px)">
    //   <div className="mobile">
    //     <header />
    //     <main className="main">
    //     </main>
    //     <footer />
    //   </div>
    // </MediaQuery>,
    <MediaQuery key="desktop" query="(min-width: 1025px)">
      <div className="desktop grid">
        <div className="sidebar">
          <header><h1>hyperlights</h1></header>
          <main>+ New Document</main>
          <footer><small>©2021 hilights inc</small></footer>
        </div>
        <main className="main">
          <h1>main</h1>
        </main>
      </div>
    </MediaQuery>
  ]
}


export default (Grid)
