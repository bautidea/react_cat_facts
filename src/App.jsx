import './App.css'
import useCatImage from './hooks/useCatImage'
import useFact from './hooks/useFact'

const App = () => {
  const { fact, getFact } = useFact()
  const { imgUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>Scroll Cat App</h1>

      <section>
        {fact && <p>{fact}</p>}

        {
          imgUrl && <img src={`${imgUrl}`} alt='Image of a cat with the first three words of a random fact' />
        }
      </section>

      <button onClick={getFact}>Get New Fact</button>
    </main>
  )
}

export default App
