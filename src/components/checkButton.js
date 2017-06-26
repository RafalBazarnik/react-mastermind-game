import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkRow } from '../actions/game'


const mapDispatchToProps = dispatch => ({
    checkRow: (row) => dispatch(checkRow(row))
});

class CheckButton extends React.Component{
    render() {
        return (<button className="btn" onClick={() => this.props.checkRow(this.props.row)}>Check</button>);
    }
};

CheckButton.propTypes = {
    row: PropTypes.number.isRequired
}

export default connect(null, mapDispatchToProps)(CheckButton);
