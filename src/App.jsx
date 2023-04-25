import { Component } from 'react';
import "./global.css";
import FilmsList from './components/filmsList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      list: [],
    };

    this.controller = new AbortController();
  }

  getData() {
    fetch("https://studioghibliapi-d6fc8.web.app/people", {
        signal: this.controller.signal
    })
    .then((response) => response.json())
    .then((list) => this.setState({ list, isLoaded: true }))
    .catch((error) => console.error(error))
}


  componentDidMount() {
    console.log("App - mount");

    this.getData()
  }

  componentDidUpdate() {
    console.log("App - update");
  }

  componentWillUnmount() {
    console.log("App - unmount");

    if (process.env.NODE_ENV !== "development") this.controller.abort();
  }

  render() {
    console.log("App - render");

    if (!this.state.isLoaded) {
      return <p>Loading...</p>
    }

    return(
      <div className="App">
        <div className="App-header"> 
        <h1>Lifecycle Methods</h1>
        <p>Loaded: {this.state.isLoaded.toString()}</p>
        <ul>
          {this.state.list.map((item) => (
          <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <FilmsList />
        </div>
      </div>
    );
  }
}

export default App;
