import React from 'react'
import { connect } from 'react-redux'
import { resetGame } from '../actions/game'


const mapDispatchToProps = dispatch => ({
    resetGame: () => dispatch(resetGame())
});

class ResetButton extends React.Component{
    render() {
        return (<button className="btn" onClick={() => this.props.resetGame()}><i className="glyphicon glyphicon-refresh"></i></button>);
    }
};

export default connect(null, mapDispatchToProps)(ResetButton);
