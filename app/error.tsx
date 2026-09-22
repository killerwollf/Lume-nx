'use client';
export default function ErrorPage({reset}:{error:Error;reset:()=>void}){return <div style={{padding:60,textAlign:'center'}}><h1>Your studio hit a small pause.</h1><p>Your saved demo work is still on this device.</p><button onClick={reset}>Try again</button></div>}
