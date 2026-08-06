import React from 'react'

const Title = ({text}) => {
  return (
    <h2
        className="mt-3 text-center text-2xl md:text-3xl font-bold bg-linear-to-r from-green-700
            via-secondary to-primary bg-clip-text text-transparent">
        {text}
    </h2>
  )
}

export default Title