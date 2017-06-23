import React from 'react'
import PropTypes from 'prop-types'

import Circle from './circle'


const Circles = ({items, status, row}) => {
    return (
        <div style={{
            display: 'block'
        }}>
            <div
            style = {{
                border: status === 'active' ? '2px solid red' : '1px solid lightgrey',
                display: 'inline-block',
                margin: '0.1em'
            }}>
                {items.map((item, i) => (
                    <Circle key={i} active={true} row={row} pos={i} color={item.color} status={item.status}/>
                ))}
            </div>
        </div>
    );
};

Circles.propTypes = {
    items: PropTypes.array.isRequired
}

export default Circles;
