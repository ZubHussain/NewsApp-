import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor(){
    super()
    console.log("Hello i am constructor")
    this.state={
      articles:[],
      loading:false
    }
  }
  async componentDidMount(){
    let url="https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json"
    let data=await fetch(url)
    let parseddata=await data.json();
    console.log(parseddata)
    this.setState({articles: parseddata.articles})
  }
    business = async ()=>{
    let url="https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
    let data=await fetch(url)
    let parseddata=await data.json();
    console.log(parseddata)
    this.setState({articles: parseddata.articles})
  
  }
  entertainment = async ()=>{
    let url="https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json"
    let data=await fetch(url)
    let parseddata=await data.json();
    console.log(parseddata)
    this.setState({articles: parseddata.articles})
   
  }
  general = async ()=>{
    let url="https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"
    let data=await fetch(url)
    let parseddata=await data.json();
    console.log(parseddata)
    this.setState({articles: parseddata.articles})
   
  }
  health = async ()=>{
    let url="https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
    let data=await fetch(url)
    let parseddata=await data.json();
    console.log(parseddata)
    this.setState({articles: parseddata.articles})
   
  }
  science = async ()=>{
    let url="https://saurav.tech/NewsAPI/top-headlines/category/science/in.json"
    let data=await fetch(url)
    let parseddata=await data.json();
    console.log(parseddata)
    this.setState({articles: parseddata.articles})
    
  }
  sports = async ()=>{
    let url="https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json"
    let data=await fetch(url)
    let parseddata=await data.json();
    console.log(parseddata)
    this.setState({articles: parseddata.articles})
    
  }
  technology = async ()=>{
    let url="https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json"
    let data=await fetch(url)
    let parseddata=await data.json();
    console.log(parseddata)
    this.setState({articles: parseddata.articles})
    
  }
  render() {
    return (
      
      <div className="container">

          <div className="container my-4 d-flex align-items-center justify-content-center">
              <button type="button" onClick={this.business} className="btn btn-outline-success shadow-none mx-2">Business</button>
              <button type="button" onClick={this.entertainment} className="btn btn-outline-success shadow-none mx-2">Entertainment</button>
              <button type="button" onClick={this.general} className="btn btn-outline-success shadow-none mx-2">General</button>
              <button type="button" onClick={this.health} className="btn btn-outline-success shadow-none mx-2">Health</button>
              <button type="button" onClick={this.science} className="btn btn-outline-success shadow-none mx-2">Science</button>
              <button type="button" onClick={this.sports} className="btn btn-outline-success shadow-none mx-2">Sports</button>
              <button type="button" onClick={this.technology} className="btn btn-outline-success shadow-none mx-2">Technology</button>
          </div>

          <h2 className="row justify-content-center">NewsMonkey-Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url} >
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
            imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div> 
    })}
         
        </div>
      </div>
    );
  }
}

export default News;
