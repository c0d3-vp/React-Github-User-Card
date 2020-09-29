import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    users: [],
    followers: [],
    url: "",
    
  };
  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }
  fetchUser = () => {
    fetch("https://api.github.com/users/c0d3-vp")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          users: res,
        });
      });
  };
  fetchFollowers = () => {
    fetch("https://api.github.com/users/c0d3-vp/followers")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          followers: res,
        });
        console.log(res);
      });
  };
  // fetchFollowerUrl = (followers) => {
  //   fetch(`https://github.com/${followers}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         url: res.html_url,
  //       });
  //       console.log(res);
  //     });
  // };

  render() {
    return (
      <div>
        <div className="userContainer">
          <img src={this.state.users.avatar_url} width="200px" alt="user img" />
          <h1>{this.state.users.name}</h1>
          <p>{this.state.users.location}</p>
          <p>{this.state.users.bio}</p>
        </div>
        <div className="followerContainer">
          {this.state.followers.map((follower) => (
            <div key={follower.id}>
              <a href={follower.html_url}>
              <img
                src={follower.avatar_url}
                width="200px"
              />{" "}
              </a>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;