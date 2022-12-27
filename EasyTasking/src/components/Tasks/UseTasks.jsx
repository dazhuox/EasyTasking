import { useState, useEffect } from 'react';
import axios from 'axios';

function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('http://localhost:8080/api/tasks');
      setTasks(result.data);
    }
    fetchData();
  }, []);

  return tasks;
}

export default useTasks;

