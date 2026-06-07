import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <>
    <div>
        <Child name="swetha" age={18} marks={[90,92,96,98,94]} person={{name:"sanjana",dept:["AI&DS","CT"]}}
        />
    </div>
    </>
  )
}

export default Parent