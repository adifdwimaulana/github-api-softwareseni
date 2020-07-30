export const handleUsername = e => {
  return {
    type: "HANDLE_USERNAME",
    e: e
  };
};

export const submitForm = (e, username) => {
  e.persist();
  return async dispatch => {
    try {
      const resp = await fetch(`https://api.github.com/users/${username}`);
      const data = await resp.json();
      const repos = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await repos.json();
      dispatch({
        type: "SUBMIT_FORM",
        e: e,
        data,
        reposData
      });
    } catch (er) {
      console.log(er);
    }
  };
};
