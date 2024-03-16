import { useState, useEffect } from 'react'
import getRandomFact from '../services/randomFacts'

const useFact = () => {
  const [fact, setFact] = useState()

  const getFact = () => {
    getRandomFact().then(setFact)
  }

  // Effect to get cat fact.
  useEffect(getFact, [])

  return { fact, getFact }
}

export default useFact
