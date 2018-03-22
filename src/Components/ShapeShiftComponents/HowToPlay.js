import React from 'react';
import './HowToPlay.css'

export default function HowToPlay(props) {
    return (
        <div className='howToPlay'>
            <h3>Instructions</h3>
            <h4 className='howToPlayDesc'>Listen for a clicking sound. A change in color, shape, or the position of one of the two circles on the screen triggered it. Determine which it was and click on the corresponding button.</h4>
            <div className='gameButtons' id='howColorButton'>Color</div>
            <div className='gameButtons' id='howShapeButton'>Shape</div>
            <div className='gameButtons' id='howCircleButton'>Circle</div>
            <button className='getStartedButton' id='gamePlayButton' onClick={() => props.changeCurrentDisplay('GameLoading')}>Play</button>
        </div>
    )
}
