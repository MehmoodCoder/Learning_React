import React from 'react'
import { useState } from 'react'

export default function Toggle() {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>This is the content to toggle.</p>}
    </div>
  )
}
