import useStudents from './UseStudents';

function StudentList() {
  const students = useStudents();

  return (
    <div>
      <div style={{display:"flex", flexWrap:"wrap", width:"80%", justifyContent:"center", margin:"auto", textDecoration:"none"}}>
        {students?.map(student => (
          <div key={student.id} style={{cursor:"pointer"}}>
            <div style={{marginLeft:"10px", marginRight:"10px", marginTop:"20px"}}>
              <div style={{minHeight:"20px", display:"flex", paddingLeft:"5px", paddingTop:"10px"}}>
                {student.email}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;


