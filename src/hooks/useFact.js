import { useState, useEffect } from 'react'
import getRandomFact from '../services/randomFacts'

const useFact = () => {
  const [fact, setFact] = useState()

  // Effect to get cat fact.
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()

    setFact(newFact)
  }

  return { fact, handleClick }
}

export default useFact
