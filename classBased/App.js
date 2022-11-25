import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 12;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    // this.state
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="home"
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

{
  /* <a className="nav-link" href='/about'>business</a>
          <a className="nav-link" href='/about'>entertainment</a>
          <a className="nav-link" href='/about'>general</a>
          <a className="nav-link" href='/about'>health</a>
          <a className="nav-link" href='/about'>science</a>
          <a className="nav-link" href='/about'>sports</a>
          <a className="nav-link" href='/about'>technology</a> */
}
