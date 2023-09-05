import React, { Component } from "react";

export class NewsItem extends Component {
  
    
  render() {
    let { title, descreption, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descreption}</p>
            <a href={newsUrl}  className="btn btn-sm btn-dark">
              Read more  
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
