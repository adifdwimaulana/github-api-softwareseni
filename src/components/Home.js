import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import * as reactStore from "../store/actions/action";
import User from "./User";
import "../App.css";
import Header from './Header';

const Home = props => {
  const handleChange = e => {
    props.handleUsername(e);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    props.submitForm(e, props.username);
  };

  if (props.grabbedData === true) {
    return <User />;
  }

  return (
    <>
      <Header />
      <div className="getData">
        <h3>{props.message}</h3>
        <input
          type="text"
          placeholder="Search Developers"
          name="username"
          onChange={handleChange}
          id="username"
          autoComplete="off"
        />
        <br />
        <br />
        <button className="search" onClick={handleSubmitForm}>Search</button>
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
    message: state.message,
    reposData: state.reposData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: e => dispatch(reactStore.handleUsername(e)),
    submitForm: (e, username) => dispatch(reactStore.submitForm(e, username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
