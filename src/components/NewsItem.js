import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,author,date,name}=this.props;
    return (
      <>
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...<span className="badge bg-secondary">{name}</span></h5>
            <p className="card-text">
            {description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
             Read more
            </a>
          </div>
        </div>
      </div>
        </>
      
    );
  }
}

export default NewsItem;
