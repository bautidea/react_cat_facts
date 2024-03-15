import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE = 'https://cataas.com/'

const App = () => {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  // Effect to get cat fact.
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data

        setFact(fact)
      })
  }, [])

  // Effect to get image of a cat based on the fact.
  useEffect(() => {
    if (!fact) return

    const firstWords = fact.split(' ').slice(0, 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWords}?json=true`)
      .then((response) => response.json())
      .then(imgRes => {
        // Keeping id.
        const { _id } = imgRes

        // Setting endpoint url.
        setImgUrl(`cat/${_id}/says/${firstWords}`)
      })
  }, [fact])

  return (
    <main>
      <h1>Scroll Cat App</h1>

      <section>
        {fact && <p>{fact}</p>}

        {
          imgUrl && <img src={`${CAT_ENDPOINT_IMAGE}${imgUrl}`} alt='Image of a cat with the first three words of a random fact' />
        }
      </section>
    </main>
  )
}

export default App
