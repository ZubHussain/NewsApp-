import './App.css';
import Navbar,{useState} from './components/Navbar'

import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
   
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        />
       
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" country="in" category="general"/>}/>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" country="in" category="business"/>}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" country="in" category="sports"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" country="in" category="general"/>}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" country="in" category="health"/>}/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" country="in" category="technology"/>}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" country="in" category="science"/>}/>
            <Route exact path="/world" element={<News setProgress={this.setProgress} apikey={this.apikey} key="world" country="in" category="world"/>}/>
            <Route exact path="/nation" element={<News setProgress={this.setProgress} apikey={this.apikey} key="nation" country="in" category="nation"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

