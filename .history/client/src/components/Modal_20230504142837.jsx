import {useEffect, useState} from 'react';

const Modal = ({mode, task,  setShowModal}) => {

  const editMode = mode === 'edit' ? true : false;

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : 'test@test.com',
    title: editMode ? task.title : '',
    progress: editMode ? task.progress : 50,
    date: editMode ? '' : new Date()
  });

  useEffect(() => {
    console.log(data)
  }, [data])

  const postData = async (e) => {
    e.preventDefault() 

    try {
     const response = await fetch(`http://localhost:8000/todos`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })

      console.log(response.json())
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value
    }));

  };

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='form-title-container'>
          <h3>Let's {mode} the task</h3>
          <button onClick={() => setShowModal(false)} >X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder=' Your task goes here'
            name='title'
            value={data.title}
            onChange={handleChange}
          />
          <label for='range'>Drag to select your current progress</label>
          <input
            required
            id='range'
            type='range'
            min='0'
            max='100'
            name='progress'
            value={data.progress}
            onChange={(e) => handleChange(e)}
          />
          <input className='edit' type='submit' onClick={editMode ? '' : postData} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
