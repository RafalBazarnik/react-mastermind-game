import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import Circles from './components/circles'
import CheckButton from './components/checkButton'
import ResetButton from './components/resetButton'
import Palette from './components/palette'
import Result from './components/result'
// import Tips from './components/tips'
import { colorArray } from './enums/colors'


const mapStateToProps = state => ({
    guesses: state.game.guesses,
    activeRow: state.game.activeRow,
    colors: state.game.colors,
    gameState: state.game.gameState,
    tips: state.game.tips
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Mastermind Game</h1>
        </div>
        <br />
        <ResetButton />
        <br />
        <br />
        {this.props.guesses.map((items, i) => {
            let status = i === this.props.activeRow ? "active" : "inactive";
            return (
                <div key={i}
                style={{
                    display: 'inline'
                }}>
                    <Circles row={i} items={items} status={status} tips={this.props.tips} />
                </div>
            );
        })}
        <br />
        <CheckButton row={this.props.activeRow}/>
        <br />
        <br />
        Zaznacz puste pole a następnie wybierz kolor z palety:
        <Palette items={colorArray} />
        <p>Podpowiedzi: na własciwym miejscu: <i className='glyphicon glyphicon-ok-circle'></i> w innym miejscu: 
        <i className='glyphicon glyphicon-ban-circle'></i> niepoprawny: <i className='glyphicon glyphicon-remove-circle'></i> </p>
        <br />
        <Result gameState={this.props.gameState}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
