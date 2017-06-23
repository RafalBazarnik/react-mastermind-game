import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { changeInputState, changeColor } from '../actions/game'


const mapDispatchToProps = dispatch => ({
    changeInputState: (row, pos) => dispatch(changeInputState(row, pos)),
    changeColor: (color) => dispatch(changeColor(color))
});

const Circle = ({ active, color, status, row, pos, changeInputState, changeColor }) => {
    return (
        <div
            className={'circle ' + row + ' ' + pos}
            style={{
                backgroundColor: color,
                margin: '0.1em',
                display: 'inline-block',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: status === 'clicked' ? '2px solid red' : '1px solid black'
            }}
            onClick={() => active ? changeInputState(row, pos) : changeColor(color)}
        >
        </div>
    );
};

Circle.propTypes = {
    color: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
}

export default connect(null, mapDispatchToProps)(Circle);
