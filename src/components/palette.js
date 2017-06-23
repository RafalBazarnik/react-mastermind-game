import React from 'react'
import PropTypes from 'prop-types'

import Circle from './circle'


const Palette = ({items}) => {
    return (
        <div
        style = {{
            display: 'inline-block',
            margin: '0.1em'
        }}>
            {items.map((item, i) => (
                <Circle active={false} key={i} color={item}/>
            ))}
        </div>
    );
};

Palette.propTypes = {
    items: PropTypes.array.isRequired
}

export default Palette;
