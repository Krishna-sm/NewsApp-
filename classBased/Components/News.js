import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import  InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static propTypes={
    country:PropTypes.string.isRequired,
    pageSize:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired,
  }
  static defaultProps = {
    country: 'in',
    pageSize:5,
    category:"bussiness"
  }
  
  capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    // str=this.props.category;
    document.title=`NewApp- ${this.capitalize(this.props.category)}`;
  }
  async updateNews()
  {
    this.props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let dataFormat = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: dataFormat.articles,
      totalResults: dataFormat.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrevious = async () => {


      this.setState({page: this.state.page - 1});
      this.updateNews();
  };
  handleNext = async () => {
      this.setState({page: this.state.page + 1});
      this.updateNews();

  };

  fetchMoreData =async () => {
    this.setState({page:this.state.page+1});
    let cls = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(cls);
    let dataFormat = await data.json();
    this.setState({
      articles: this.state.articles.concat(dataFormat.articles),
      totalResults: dataFormat.totalResults,
      loading: false,
    });
  
  };

  render() {
    return (
      <div className=" ">
        <h1 className="text-center my-3">Top Headlinges from {this.capitalize(this.props.category)} </h1>
        {this.state.loading && <Spinner />}
        <div className=" my-4  ">
        <InfiniteScroll
        style={{overflow:'hidden'}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="row">

            {this.state.articles.map((e, i, a) => {
              return (
                <div className="col-sm-4 d-flex justify-content-center" key={e.url}>
                  <NewsItem
                  source={e.source.name}
                  date={e.publishedAt}
                  author={e.author}
                    title={e.title ? e.title.slice(0, 46) : ""}
                    description={
                      e.description ? e.description.slice(0, 89) : ""
                    }
                    newsUrl={e.url}
                    imageUrl={
                      e.urlToImage
                        ? e.urlToImage
                        : "https://www.niddk.nih.gov/-/media/Images/Components/Default-Social-Media-Images/News-Card.png"
                    }
                  />
                </div>
              );
            })}
          </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

