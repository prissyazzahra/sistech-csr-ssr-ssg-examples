import { useEffect, useState } from "react"

const ClientSide = () => {
  const [data, setData] = useState({}) // to store the fetched data
  const [isLoading, setIsLoading] = useState(false) // determine if site is loading or not

  const delay = (ms) => new Promise(res => setTimeout(res, ms)) // gives 3 second delay before fetching the data

  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((async (data) => {
        await delay(3000)
        setData(data)
        setIsLoading(false)
      }))
  }, [])

  // useEffect is called when the whole component is mounted, 
  // that's when the website and its content shows up

  return (
    <div>
      {isLoading ? <h1>Loading...</h1> : (
        <div style={{ border: 'black 1px solid', padding: '12px', marginTop: '8px', borderRadius: '10px' }}>
          <h4>Title</h4>
          <p>{data.title}</p>
          <h5>Body</h5>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  )
}

export default ClientSide