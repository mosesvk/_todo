import { useState, useEffect } from 'react';
import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = true
  const userEmail = 'test@test.com'
  const [tasks, setTasks] = useState(null);

  // console.log(cookies)

  const getData = async () => {
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/${userEmail}`);

      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (authToken) getData();
  }, []);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className='app'>
      {authToken ? (
        <>
          <ListHeader listName='Todo List' getData={getData} />
          {sortedTasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default App;
