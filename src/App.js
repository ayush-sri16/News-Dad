import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ayush



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={6} country="in" categories="general"/>}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={6} country="in" categories="business" />}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={6} country="in" categories="entertainment" />}></Route>
          <Route exact path='/health' element={<News key="health" pageSize={6} country="in" categories="health" />}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={6} country="in" categories="science" />}></Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={6} country="in" categories="sports" />}></Route>
          <Route exact path='/technology' element={<News key="technology" pageSize={6} country="in" categories="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
