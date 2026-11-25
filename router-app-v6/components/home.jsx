import React from 'react'

export default function Home(){
    const [keepState,setKeepState]=React.useState(0)
    return(
        <>
        <h2>Home</h2>
        <p>{keepState}</p>
        <button onClick={()=>setKeepState(keepState+1)} >Increase</button>
        <button onClick={()=>setKeepState(keepState-1)} >Decrease</button>
        </>
    )
}