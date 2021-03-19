import React, { Component } from "react";
import Card from "./components/Card";

class App extends Component {
  state = {
    user: {
      name: "Isaac",
      city: "Brisbane",
      likes: "80K",
      followers: "120K",
      photos: "2.4K",
    },
  };

  render() {
    return (
      <div className="page-wrapper">
        <Card user={this.state.user} />
      </div>
    );
  }
}

export default App;
