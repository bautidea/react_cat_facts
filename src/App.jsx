import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}?json=true`

const App = () => {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) =>{
        const { fact } = data

        setFact(fact)

        const firstWords = fact.split(' ').slice(0, 3).join(' ')

        fetch(`https://cataas.com/cat/says/${firstWords}?json=true`)
          .then((response) => response.json())
          .then((imgRes => {
            console.log(imgRes)
          }))
      })
  }, [])

  return (
    <main>
      <h1>Scroll Cat App</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} alt={`Image of a cat with the first three words of ${fact}`}/>}
    </main>
  )
}

export default App
