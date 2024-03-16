import { useEffect, useState } from 'react'
import './App.css'
import getRandomFact from './services/randomFacts'
import getRandomImg from './services/randomImg'

const App = () => {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  // Effect to get cat fact.
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  // Effect to get image of a cat based on the fact.
  useEffect(() => {
    if (!fact) return

    console.log(getRandomImg(fact))
  }, [fact])

  return (
    <main>
      <h1>Scroll Cat App</h1>

      <section>
        {fact && <p>{fact}</p>}

        {
          imgUrl && <img src={`${imgUrl}`} alt='Image of a cat with the first three words of a random fact' />
        }
      </section>

      <button onClick={getRandomFact}>Get New Fact</button>
    </main>
  )
}

export default App
