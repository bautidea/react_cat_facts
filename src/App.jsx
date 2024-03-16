import { useEffect, useState } from 'react'
import './App.css'
import getRandomFact from './services/randomFacts'
import useCatImage from './hooks/useCatImage'

const App = () => {
  const [fact, setFact] = useState()
  const { imgUrl } = useCatImage({ fact })

  // Effect to get cat fact.
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()

    setFact(newFact)
  }

  return (
    <main>
      <h1>Scroll Cat App</h1>

      <section>
        {fact && <p>{fact}</p>}

        {
          imgUrl && <img src={`${imgUrl}`} alt='Image of a cat with the first three words of a random fact' />
        }
      </section>

      <button onClick={handleClick}>Get New Fact</button>
    </main>
  )
}

export default App
