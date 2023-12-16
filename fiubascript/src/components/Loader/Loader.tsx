import React from 'react'
import { COLORS } from '../../constants/constants'
import { PropagateLoader } from 'react-spinners'
import './Loader.css'

export const Loader = () => {
  return (
    <div className='loader-background'>
      <PropagateLoader color={COLORS.primaryLight} />
    </div>
  )
}
