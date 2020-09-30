import React from "react";
import "./App.css";
class App extends React.Component {
  state = {
    user: [],
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
          user: res
        });
      });
  };
  fetchFollowers = () => {
    fetch("https://api.github.com/users/c0d3-vp/followers")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          followers: res
        });
        console.log(res);
      });
  };

  render() {
    return (
      <div>
        <hr />
        <br />
        <div className="userContainer">
          <img src={this.state.user.avatar_url} width="150px" alt="user img" />
          <h1>{this.state.user.name}</h1>
          <h2>{this.state.user.location}</h2>
          <p>{this.state.user.bio}</p>
          <p>{this.state.user.following} Following <span>●</span> {this.state.user.followers} Followers</p>
          <a href="https://github.com/c0d3-vp">
            <p>View Full Profile</p>
          </a>
        </div>
        <hr />
        <h2>Followers</h2>
        <hr />
        <br />
        <div className="followerContainer">
          {this.state.followers.map((follower) => (
            <div key={follower.id}>
              <a href={follower.html_url}>
              <img
                src={follower.avatar_url}
                width="150px alt="
              />{" "}
              <br />
              </a>
              <br />
            </div>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
export default App;