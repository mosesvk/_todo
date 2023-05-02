import { useCallback, useEffect } from 'react'
import ListHeader from './components/ListHeader'

const App = () => {
  const userEmail = 'test@test.com'
  const [tasks, setTasks] = useState(null)

  const getData = async () => {

    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json() 
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(tasks)

  return (
    <div className='app'>
      <ListHeader listName='Envy Apple' />
    </div>
  )
}

export default App
