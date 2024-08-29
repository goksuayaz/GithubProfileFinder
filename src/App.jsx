import { useState } from 'react'
import { useEffect } from "react";





import GithubProfileFinder from './components/github-finder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <GithubProfileFinder />


    </>
  )
}

export default App
