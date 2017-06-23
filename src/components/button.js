import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkRow } from '../actions/game'


const mapDispatchToProps = dispatch => ({
    checkRow: (row) => dispatch(checkRow(row))
});

class Button extends React.Component{
    render() {
        return (<button onClick={() => this.props.checkRow(this.props.row)}>Check</button>);
    }
};

export default connect(null, mapDispatchToProps)(Button);
