  import React from 'react';
  import { BsFillTrashFill } from "react-icons/bs";

  import '../style/todo.css';


  function TodoList({handleCheck,handleDel,courseList}) {
    // const [isChecked, setIsChecked] = useState(false);

    // const handleCheckboxChange = () => {
    //   setIsChecked(!isChecked);
    // };

    

    return (
      <>
      
        <section>
        <h1>Todo List - Front End Developement</h1>
    
        {(courseList.length)? (
        <ul >

          {courseList.map(a => (

            <li key={a.id} >
              <div className="todo">
                <input type="checkbox" id="myCheckbox" checked={a.checked} onChange={() => handleCheck(a.id)} />
                <div className="courseName">            
                  <p style={(a.checked)?{ textDecoration:"line-through"}: null} onDoubleClick={() => handleCheck(a.id)}>{a.course} </p> </div>
                <div className="btn"  onClick={()=> handleDel(a.id)}>
                  <BsFillTrashFill role='button' />
                </div>
              </div>
            </li>
          ))}
        </ul >

        ) : (
          <p style={{fontSize: "25px", fontWeight: "bold"}} className='emptyList'>
          List is empty
          </p>
        )}

        </section>


      </>
    );
  }
  export default TodoList;

