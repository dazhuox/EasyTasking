import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, Interactive, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';
import {useParams, useNavigate} from 'react-router-dom';
import useTask from './UseTask';

function UpdateTaskForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [taskColor, setTaskColor] = useState('#000000');
  const [error, setError] = useState(null);
  const {taskId} = useParams();
  const task = useTask();
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  useEffect(()=>{
    if (!mounted){
      return 
    }
    setName(task.name)
    setDescription(task.description)
    setTaskColor(task.taskColor)
  }, [task])


  async function handleSubmit(event) {
    event.preventDefault();

    try {
      console.log(task.student);
      await axios.put(`http://localhost:8080/api/tasks/${taskId}`, {
        taskName: name,
        taskDescription: description,
        taskColor: taskColor,
        student: {
          firstName: task.student.fullName.split(" ")[0],
          lastName: task.student.fullName.split(" ")[1],
          email: task.student.email,
          tasks: task.student.tasks,
        },
      });
    } catch (err) {
      setError(err.response.data.message);
      return;
    }

    setError(null);

    navigate(`/tasks/${taskId}`)
  }

  return (
    <form onSubmit={handleSubmit} >
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
        <Sketch
        style={{ marginLeft: 20 }}
        color={taskColor}
        onChange={(color) => {
          setTaskColor(color.hex);
        }}
        />
      </label>
      <br />
      <button type="submit">Update task</button>
      <div><button onClick={()=>navigate(`/tasks/${task.id}/delete`)}>Delete Task</button></div>
    </form>
  );
}

export default UpdateTaskForm;