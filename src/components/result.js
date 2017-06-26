import React from 'react'
import PropTypes from 'prop-types'


const Result = ({ gameState }) => {
    let classType = gameState === "new" ? "info" : gameState === "win" ? "success" : "danger",
        text = gameState === "new" ? "Gra w toku..." : gameState === "win" ? "Brawo! Wygrałeś" : "Przegrana! Koniec gry!"
    return (
        <div style={{
            marginLeft: '300px',
            marginRight: '300px'
        }}
            className={"alert alert-" + classType}>
            <h3>{text}</h3>
        </div>
    );
}

Result.propTypes = {
    gameState: PropTypes.string.isRequired
}

export default Result;
