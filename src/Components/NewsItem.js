import React, { Component } from "react";

export default class NewsItem extends Component {
  // constructor(){
  //     console.log("hello i am a constructor")
  //     super();

  // }
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <div className="card  my-3 p-1" style={{ width: "80%" }}>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
            }}
          >
            <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="newImage" />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknow"} On{" "}
                {`${new Date(date).toGMTString()}`}
              </small>
            </p>
            {/* <p></p> */}
            <a
              href={newsUrl}
              target="_krishna"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
