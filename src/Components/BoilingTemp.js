import React from 'react'

const BoilingTemp = (props) => {
    if(props.celsius>100)
      return <h1>It would boil</h1>
    return<h1>It wouldn't boil</h1>
  return (
    <>

    </>
  )
}

export default BoilingTemp