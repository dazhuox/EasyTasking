import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function useTask() {
  const [task, setTask] = useState(null);
  const {taskId} = useParams();
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios(`http://localhost:8080/api/tasks/${taskId}`);
      setTask(result.data);
    }
    fetchData();
  }, [taskId]);

  return task;
}

export default useTask;