import useTasks from './UseTasks';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

function TaskList() {
  const tasks = useTasks();
  const navigate = useNavigate();
  const {studentId} = useParams();

  return (
    <div>
      <div><button style={{ width:"8em", marginLeft:"auto", marginRight:"auto", marginTop:"20px", display:"flex", alignItems:"center", justifyContent:"center"}} onClick={()=>navigate(`/tasks/add`)}>Add Task</button></div>
      <div style={{display:"flex", flexWrap:"wrap", width:"80%", justifyContent:"center", margin:"auto", textDecoration:"none"}}>
        {tasks?.map(task => (
          <div onClick={()=>navigate(`/tasks/${task.id}`)} key={task.id} style={{width:"300px", border:"1px solid black", marginLeft:"10px", marginRight:"10px", marginTop:"20px", cursor:"pointer"}}>
            <div style={{ backgroundColor: task.taskColor, height:"75px", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div style={{backgroundColor: "white", width:"95%", height:"85%", display:"flex", justifyContent:"center", alignItems:"center" }}>{task.name} </div>
            </div>

            <div style={{minHeight:"200px", display:"flex", paddingLeft:"5px", paddingTop:"10px"}}>
              {task.description }
            </div>
            <div style={{paddingLeft:"5px", margin:"auto", display:"flex", justifyContent:"center", alignItems:"center"}}>Creator<span>: {task.student.fullName}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;