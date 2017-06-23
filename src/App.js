import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import Circles from './components/circles'
import Button from './components/button'
import Palette from './components/palette'
import { colorArray } from './enums/colors'


const mapStateToProps = state => ({
    guesses: state.game.guesses,
    activeRow: state.game.activeRow,
    colors: state.game.colors
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Mastermind Game</h1>
        </div>
        <br />
        {this.props.guesses.map((items, i) => {
            let status = i === this.props.activeRow ? "active" : "inactive";
            return (
                <Circles key={i} row={i} items={items} status={status} />
            );
        })}
        <br />
        <Button row={this.props.activeRow}/>
        <br />
        <br />
        Zaznacz puste pole a następnie wybierz kolor z palety: <Palette items={colorArray} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
