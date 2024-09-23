import React from "react";
import Test from "./Test";

function App() {

  const {useState} = React;

  const [todos, setTodos] = useState
  (
    [
      {id:1, todo:"안녕", checked: false},
      {id:2, todo:"안녕2", checked: false}
    ]
  )

  const handleCheckboxChange = (id) =>
    {
      const updatedTodos = [...todos];
      updatedTodos[id].checked = !updatedTodos[id].checked;
      setTodos(updatedTodos);
    }

  const [backgroundColor, setBackColor] = useState("white");

  const [color, setColor] = useState("black");
  const [textDecorationLine, setTextLine] = useState("")
  const [changeColor, setChangeColor] = useState("");

  const [inputText, setInputText] = useState("")
  const [nextId, setNextId] = useState(3);

  const onChangeHandler = e => setInputText(e.target.value);
  const onSetChangeColor = e =>setChangeColor(e.target.value);
  const onChangeColor = () =>
  {
    setColor(changeColor);
    setChangeColor("");
  }

  const onAddTodo = () => {
    const addTodos = todos.concat(
      {
        id:nextId,
        todo:inputText
      }
    );
    setTodos(addTodos);
    setNextId(nextId+1);
    setInputText("");
  }

  const onRemove = id =>
  {
    const removeTodo = todos.filter(todo=>todo.id !== id);
    setTodos(removeTodo);
  }

  const onChangeDark = () =>
  {
    setBackColor("black");
    setColor("white");
  }

  const todoList = todos.map(todo =>{
    return(<p key={todo.id}>
            <input type="checkbox"/>
            <label style = {{color, textDecorationLine}}>{todo.todo}</label>
            <button onClick={()=>onRemove(todo.id)}>삭제</button>
            </p>)
    }
  )


  return (
    <>
    <div style ={{backgroundColor, width:"500px"}}>
      <h1> todoList</h1>
        <br/>
        <button onClick={onChangeDark}> 다크모드</button>
        <br/>

        {todoList}

        <input type="text" value={inputText} onChange={onChangeHandler}></input>
        <button onClick = {onAddTodo}>추가</button>

        <input type="text" value ={changeColor} onChange={onSetChangeColor}></input>
        <button onClick={onChangeColor}>색변경</button>
   </div>
    </>
  );
}

export default App;
