import {useState} from 'react';

const Modal = ({mode, setShowModal}) => {
  const mode = 'create';
  const editMode = mode === 'edit' ? true : false;

  const [data, setData] = useState({
    user_email: '',
    title: '',
    progress: '',
    data: editMode ? '' : new Date()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value
    }));

    console.log(data)
  };

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='form-title-container'>
          <h3>Let's {mode} the task</h3>
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
            onChange={handleChange}
          />
          <input className='edit' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default Modal;
