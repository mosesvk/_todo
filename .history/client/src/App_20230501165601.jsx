import { useState, useEffect } from 'react'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

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

  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='app'>
      <ListHeader listName='Envy Apple' />
      {sortedTasks?.map(<ListItem />)}
    </div>
  )
}

export default App
