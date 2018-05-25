import React, { Component } from "react";
import "./index.css";
import Header from "./components/header";
import Wrapper from "./components/wrapper";
import ScoreKeeper from "./components/scoreKeeper";
import CardContainer from "./components/cardsContainer";
import Footer from "./components/footer";
import friends from "./utils/friends.json";

class App extends Component {
  state = {
    Friends: friends,
    score: 0,
    maxScore: 0,
    pickHistory: []
  };

  handlePick = pick => {
    const tempPickHistory = [...this.state.pickHistory];

    const isDup = this._checkForDups(tempPickHistory, pick);

    if (!isDup) {
      tempPickHistory.push(pick);
      this.setState({
        pickHistory: tempPickHistory,
        score: this.state.score + 1
      });
    } else {
      this.setState({
        pickHistory: [],
        score: 0,
        maxScore:
          this.state.maxScore >= this.state.score
            ? this.state.maxScore
            : this.state.score
      });
    }

    this.shuffleCards();
  };

  _checkForDups = (arr, item) => {
    //  Return true if there is a dup
    return arr.indexOf(item) !== -1 ? true : false;
  };

  shuffleCards = () => {
    let arr = [...this.state.Friends];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    this.setState({
      Friends: arr
    });
  };

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Header />
          <ScoreKeeper score={this.state.score} max={this.state.maxScore} />
          <CardContainer
            friends={this.state.Friends}
            handlePick={this.handlePick}
          />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
