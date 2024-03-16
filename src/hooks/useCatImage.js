import { useEffect, useState } from 'react'
import getRandomImg from '../services/randomImg'

const useCatImage = ({ fact }) => {
  const [imgUrl, setImgUrl] = useState()

  // Effect to get image of a cat based on the fact.
  useEffect(() => {
    if (!fact) return

    getRandomImg(fact).then(setImgUrl)
  }, [fact])

  return { imgUrl }
}

export default useCatImage
