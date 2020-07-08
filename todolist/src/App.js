import React,{useState} from 'react';
import './App.css';

export default function App() {
  const [edit , setEdit]=useState('')
  const [item , setItem]=useState('')
  let [task,setTask]=useState([])
  let [isInedit,setInedit]=useState(false)
  const onchange = e => {
    
    setItem(e.target.value)
  }
  const add = () =>{
 
      setTask([...task,{
         id : task.length,
         task : item ,
         isInedit:false
      
      }])
      setItem('')
  
  }
  const del = (index) =>{
    task= task.filter(el=>el.id!==index)
   setTask(task)
      }
    const EditMode = (id) =>{
    setTask(task.map(element=>{
      element.id = id ?  {...element,isInedit:!element.isInedit} : {...element}

    })
    )
    }
    const onEdit = (id) =>{
    let newtask = [...task] 
    let elementIndex = task.findIndex(element =>
      element.id == id)
      id = elementIndex
    newtask.splice(elementIndex,1,{id,task:edit})
   setTask(newtask)
   setInedit(!isInedit)
  
      
    }
    const editing =(e) => {
      setEdit(e.target.value)
    }
console.log(task)
  return (
    <div className="App">
      
    
    <input placeholder='add task' value={item} onChange={onchange}/>
    <button onClick={add}>Add</button>
    
        
      
      {task.map(x =>   
        
        <li key={x.id} onClick={()=>EditMode(x.id)} > 
           
          
            <span key={x.id}>  { !isInedit ? (x.task) :(<>
             
             <input key={x.id} defaultValue={x.task}  onChange={editing}/>         
             <button onClick={()=>EditMode(x.id)}>X</button>
             <button onClick={()=>onEdit(x.id)}>oK</button>
            </>)}</span>
            <div>

          <button onClick={()=>del(x.id)}>Sup</button>
            </div>
                   
            
          </li>     
       
      )}
    </div>
  );
}


