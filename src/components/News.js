import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner'

export class News extends Component {

  apikey=process.env.REACT_APP_NEWS_API
  
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
  constructor(props){
    super(props)
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title=this.capitalizeFirstLetter(this.props.category);
  }
  async updatePage(){
    // const url=`https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`
    const url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&${this.props.page}&max=10&apikey=${this.props.apikey}`
    this.setState({loading:true})
    let data=await fetch(url)
    let parseddata=await data.json();
    this.setState({articles: parseddata.articles,loading:false,totalresults:parseddata.totalresults})
  }

  async componentDidMount(){
    this.updatePage()
  }
  handlePrev=async()=>{
    this.setState({page:this.state.page-1})
    this.updatePage()
   
  }
  handleNext=async()=>{
    this.setState({page:this.state.page+1})
    this.updatePage()
    alert("	This parameter will only work if you have a paid subscription activated on your account.")
    
  }

  render() {
    return (

      <div className="container">
          <h2 className="row justify-content-center">NewsMonkey-{this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
          {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url} >
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
            imageUrl={element.image} newsUrl={element.url} author={element?element.author:"Unknown"} 
            date={element.publishedAt} name={element.source.name}/>
            
        </div> 
       })}
            <div className="container my-3 d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark btn-md" onClick={this.handlePrev}>&larr; Previous</button>
            <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalresults/10)} className="btn btn-dark btn-md" onClick={this.handleNext}>Next &rarr;</button>
            </div>
         
        </div>
      </div>
    );
  }
}

export default News;
