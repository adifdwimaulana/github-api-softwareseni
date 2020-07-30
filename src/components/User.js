import React, { Fragment } from "react";
import { connect } from "react-redux";
import "../App.css";
import Header from './Header'

const User = props => {
  return (
    <>
      <Header />
      <div className="getData">
        <img src={props.image_url} alt="" />
        <h1>Username : {props.username}</h1>
        <h2>Repositories : {props.repos}</h2>
        <h2>Following : {props.following}</h2>
        <h2>Followers : {props.followers}</h2>
        {
          props.reposData.map(item =>
            <div className="rectangle-repos">
              <h4 key={item.id}>Repository : {item.name}</h4>
              <a href={item.html_url} className="goto"><button>Go to Repository</button></a>
            </div>
          )
        }
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    repos: state.repos,
    following: state.following,
    followers: state.followers,
    grabbedData: state.grabbedData,
    image_url: state.image_url,
    reposData: state.reposData
  };
};

export default connect(
  mapStateToProps,
  null
)(User);
