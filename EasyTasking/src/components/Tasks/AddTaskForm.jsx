import React, { useState } from 'react';
import axios from 'axios';

function AddTaskForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [taskColor, setTaskColor] = useState('#000000');
  const [error, setError] = useState(null);
  const [studentId, setStudentId] = useState(null);


  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:8080/api/tasks`, {
        taskName: name,
        taskDescription: description,
        taskColor: taskColor,
        student: {
          id: 1,

        }
        
      });
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      return;
    }

    setName('');
    setDescription('');
    setTaskColor('#000000');
    setError(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        ID:
        <input
          type="text"
          value={studentId}
          onChange={event => setStudentId(event.target.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="color"
          value={taskColor}
          onChange={event => setTaskColor(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add task</button>
    </form>
  );
}

export default AddTaskForm;
