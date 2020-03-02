import React, { Component } from "react";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Batman&format=json&origin=*";

    fetch(url)
      .then(result => result.json())
      .then(json => {
        json.map(obj => this.setState({ data: Object.values(obj) }));
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return <ol>{result}</ol>;
  }
}

export default App;
