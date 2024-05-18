import React from 'react'
import './Counter.css'

export default function Counter(props) {
  return (
    <>
            <p className='counter'>Current clicks: {props.clickCount}</p>
            <p className='counter'>
                <button onClick={props.handleClickCount}>Increase click count</button>
            </p>
            <p className='counter'>
                <button onClick={props.handleSaveClickCount}>Save click count</button>
            </p>
            <p className='counter'>
                <button onClick={props.handleResetClickCount}>Reset click count</button>
            </p>

            <p className='counter'>
                <button onClick={props.handleSignout}>Sign out</button>
            </p>
    </>
  )
}