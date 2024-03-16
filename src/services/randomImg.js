const CAT_ENDPOINT_IMAGE = 'https://cataas.com/cat'

const getRandomImg = async (fact) => {
  const firstWords = fact.split(' ').slice(0, 3).join(' ')

  const res = await fetch(`${CAT_ENDPOINT_IMAGE}/says/${firstWords}?json=true`)
  const data = await res.json()
  const { _id } = data
  return `${CAT_ENDPOINT_IMAGE}/${_id}/says/${firstWords}`
}

export default getRandomImg
