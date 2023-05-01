import { useCallback, useEffect } from 'react'
import ListHeader from './components/ListHeader'

const App = () => {

  const getData = async () => {

    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json() 
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='app'>
      <ListHeader listName='Envy Apple' />
    </div>
  )
}

export default App
