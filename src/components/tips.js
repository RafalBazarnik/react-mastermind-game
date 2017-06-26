import React from 'react'
import PropTypes from 'prop-types'


const Tips = ({ arrayOfTips, row }) => {
    let array = arrayOfTips[row] || [];
    return (
        <div
        style = {{
            display: 'inline-block',
            marginLeft: '1em'
        }}>
            {array.map((num, i) =>
                <i key={row + "." + i} className={'glyphicon glyphicon-' + (num === 2 ? 'ok-circle' : num === 1 ? 'ban-circle' : 'remove-circle')}>
                </i>)}
        </div>
    );
}

Tips.propTypes = {
    arrayOfTips: PropTypes.array.isRequired
}

export default Tips;
