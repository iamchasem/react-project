import { Component } from 'react';
import "./global.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.correctNum = Math.round(Math.random() * (100 - 1) + 1);

    this.state = {
      feedback: "",
      guess: "",
      list: ["ready", "set", "go"],
      text: "",
    };

    this.handleGuess = this.handleGuess.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleGuess(event) {
    event.preventDefault();

    console.log(this.state.guess, this.correctNum);

    let feedback;

    if (this.state.guess < this.correctNum) {
        feedback = "Too Low";
    } else if (this.state.guess > this.correctNum) {
      feedback = "Too High";
    } else {
      feedback = "Correct";
    }

    this.setState({ feedback });
  }

onSubmit(event) {
  event.preventDefault();

  let newList = [...this.state.list, this.state.text];
  this.setState({ list: newList, text: "" });
}

render() {
  return (
    <div className='App'>
      <header className='App-Header'>
        <h1>Hello, World! Make a List</h1>
        <form onSubmit={this.onSubmit}>
        <input 
        type="text"
         name="text" 
         id="text" 
         value={this.state.text} 
         onChange={(event) => this.setState({ text: event.target.value })}
         />
         <button type="submit">ADD</button>
         </form>
        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <h1>Guess the Number Game</h1>
        <p>{this.state.feedback}</p>
        <form onSubmit={this.handleGuess}>
          <label htmlFor='guess'>Guess</label>
          <input 
          type="number" 
          name="guess" 
          id="guess" 
          value={this.state.guess} 
          onChange={(event) => 
          this.setState({ guess: Number(event.target.value) })
        }
          />

          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
    );
  }
}

export default App;