import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

import Card from '../UI/Card'
import Button from './Button'

import './Error.css'

const Backdrop = () => {
  return (
    <div className='backdrop' />
  )
}

const ModalOverlay = ({title, message, onConfirm}) => {
    return (
        <Card className='modal'>
            <header className='header'>
                <h2>{title}</h2>
            </header>
            <div className='content'>
                <p>{message}</p>
            </div>
            <footer className='footer'>
                <Button onClick={onConfirm}>OK</Button>
            </footer>
        </Card>
    )
}

const Error = ({title, message, onConfirm}) => {
    return (
        <Fragment>
                {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
                {ReactDOM.createPortal(<ModalOverlay title={title} message={message} onConfirm={onConfirm} />, document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default Error