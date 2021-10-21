import React from 'react'
import { LoadingWrapper } from './Loading.style'

const LoadingSpinner = ({ color = "#ccc" }) => {
  return <LoadingWrapper color={color}>
    <div className="spin1" />
    <div className="spin2" />
    <div className="spin3" />
  </LoadingWrapper>
}

export default LoadingSpinner