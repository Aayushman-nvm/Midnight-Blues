import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import loaderAnimation from '../assets/loader.json'
function Loader({title}) {
  return (
    <div>
      <DotLottieReact
        src={loaderAnimation}
        loop
        autoplay
      />
      <h2>{title}</h2>
    </div>
  )
}

export default Loader