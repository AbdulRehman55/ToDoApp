import React,{useState,useEffect} from 'react';
import Form from './form';
import Todolist from './todolist';

function App(){
    const [inputText,setInputText]=useState('')
    const [todos,setToDos]=useState([]);
    const [status,setStatus]=useState('all');
    const [filteredToDos,setFilteredToDos]=useState([]);
    // functions
    
    useEffect(()=>{
         getLocalToDos();
    },[])
    
    useEffect(()=>{
        filteredHandler();
    saveLocalToDos();},[todos,status])
    

    const filteredHandler=()=>{
        switch(status){
            case "completed":
                setFilteredToDos(todos.filter(todo=>todo.completed===true));
                break;
                case "uncompleted":
                    setFilteredToDos(todos.filter(todo=> todo.completed===false));
                    break;
                    default:
                        setFilteredToDos(todos);
                        break; 

        }

    }
    //save to local storage
    const saveLocalToDos=()=>{
       
            localStorage.setItem("todos",JSON.stringify(todos))

        
    }
    const getLocalToDos=()=>{
       if( localStorage.getItem("todos")===null){
           localStorage.setItem("todos",JSON.stringify([]));
       }else{
           let todolocal=JSON.parse(localStorage.getItem('todos'))
           setToDos(todolocal)
       }
    }

    return(
        <div className="App">
            <header>
    <h1>Abdul Rehman's To do list</h1>
            </header>
            <Form setInputText={setInputText}
             todos={todos} setToDos={setToDos} inputText={inputText}
            setStatus={setStatus}
           
            ></Form>
            <Todolist setToDos={setToDos}  filteredToDos={filteredToDos}todos={todos}></Todolist>
        </div>
    )
}
export default App;
