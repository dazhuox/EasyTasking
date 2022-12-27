import useTask from './UseTask';
import {useNavigate} from 'react-router-dom';

function TaskDetails() {
  const task = useTask();
  const navigate = useNavigate();

  if (!task) {
    return (
    <div>
      <div>Loading...</div>
      <button onClick={()=>navigate(`/tasks`)} style={{ width:"8em", marginLeft:"auto", marginRight:"auto", marginTop:"20px", display:"flex", alignItems:"center", justifyContent:"center"}}>Go Back</button>
    </div>
    );
  }

  return (
    <div>
      <button onClick={()=>navigate(`/tasks`)} style={{ width:"8em", marginLeft:"auto", marginRight:"auto", marginTop:"20px", display:"flex", alignItems:"center", justifyContent:"center"}}>Go Back</button>
      <div key={task.id} style={{width:"300px", border:"1px solid black", marginLeft:"auto", marginRight:"auto", marginTop:"20px", }}>
            <div style={{ backgroundColor: task.taskColor, height:"75px", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div style={{backgroundColor: "white", width:"95%", height:"85%", display:"flex", justifyContent:"center", alignItems:"center" }}>{task.name} </div>
            </div>

            <div style={{minHeight:"200px", display:"flex", paddingLeft:"5px", paddingTop:"10px"}}>
              {task.description}
            </div>
            <div style={{paddingLeft:"5px", margin:"auto", display:"flex", justifyContent:"center", alignItems:"center"}}>Creator<span>: {task.student.fullName}</span></div>
            <div style={{padding:"5px"}}><button style={{width:"80%", height:"2em", cursor:"pointer", margin:"auto", display:"flex", justifyContent:"center", alignItems:"center"}} onClick={()=>navigate(`/tasks/${task.id}/update`)}>Edit</button></div>
      </div>
    </div>
  );
}

export default TaskDetails;