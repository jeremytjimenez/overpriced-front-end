import React from 'react'

import "./Info.css"

function Info() {
  return (
    <div className='info'>
        <h2>Overpriced!</h2>
        <p className='tagline'>Your personal catalog of potentially rare and expensive video games.</p>
        <p><span className='redglow'>Red</span> glow: Game market price is under original selling price.</p>
        <p><span className='grayglow'>Gray</span> glow: Game market price is more than original selling price but under 3x the original.</p>
        <p><span className='greenglow'>Green</span> glow: Game market price is more than 3x original selling price.</p>
        <p><span className='goldglow'>Gold</span> glow: Game market price is more than 5x original selling price. Extremely valuable and/or rare.</p>
    </div>
  )
}

export default Info