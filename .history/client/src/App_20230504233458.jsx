import { useState, useEffect } from 'react'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

const App = () => {
  const userEmail = 'momoney@test.com'
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

  // console.log(tasks)

  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='app'>
      <ListHeader listName='Todo List' getData={getData} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
    </div>
  )
}

export default App
