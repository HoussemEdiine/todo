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
    if(item!==''&& item!==' '){

      setTask([...task,{
         id : task.length,
         task : item ,
         isInedit:false
      
      }])
    }
      setItem('')
  
  }
  const del = (index) =>{
   setTask(task.filter(el=>el.id!==index))
      }
    const EditMode = (id) =>{
    setTask(task.map(element=>{
     return  element.id === id ?  {...element,isInedit:!element.isInedit} : {...element}

    })
    )
    }
    const onEdit = (id) =>{
    if(edit!==''){
    setTask(task.map(element =>{
      return  element.id === id ? {...element,task:edit,isInedit:false} : {...element,isInedit:false}
    }

    ))
  }
    
   
      
    }
    const editing =(e) => {
      setEdit(e.target.value)
    }
console.log(task)
  return (
    <div className="App">
      
         <h1>Todo List </h1>
    <input placeholder='add task' value={item} onChange={onchange}/>
    <button className='btn btn-primary' onClick={add} style={{marginLeft:'6px',marginBottom:'2px'}}>ADD</button>
    
        
    <ul className="list-group" style={{alignItems:'center'}} id='list'>
      {task.map(x =>   
        
        <li key={x.id} className='list-group-item list-group-item-action' style={{marginTop:'1px',alignItems:'center1'}}>  
           
           { !x.isInedit  ?
          
            <span onClick={()=>EditMode(x.id)}> {x.task}</span> :(<React.Fragment>
             
             <input key={x.id} defaultValue={x.task}  onChange={editing}/>         
             <button onClick={()=>EditMode(x.id)}>X</button>
             <button onClick={()=>onEdit(x.id)}>oK</button>
            </React.Fragment>)}
        
          <img src='icons8-remove-48.png' onClick={()=>del(x.id)} style={{marginLeft:'60px'}}/>    
          </li>     
       
      )}
      </ul>
    </div>
  );
}


