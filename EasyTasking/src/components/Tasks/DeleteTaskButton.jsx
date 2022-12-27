import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteTaskButton() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const {taskId} = useParams();
  const navigate = useNavigate();

  async function handleClick() {
    setIsDeleting(true);

    try {
      await axios.delete(`http://localhost:8080/api/tasks/${taskId}`);
    } catch (err) {
      setError(err.response.data.message);
      setIsDeleting(false);
      return;
    }

    setError(null);
    navigate("/tasks");
  }

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleClick} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete task'}
      </button>
    </>
  );
}

export default DeleteTaskButton;
