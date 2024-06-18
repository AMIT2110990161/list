

function ToDoInput(props) {
    const{addTodoValue, todoInput, setTodoInput} = props;
    function showAlert(){
        alert("Enter the Task please");
    }
    return (
    <header>
      <input value={todoInput} onChange={(e) => {
        setTodoInput(e.target.value);
      }} type='text' placeholder='Enter your Task...' />
      <button onClick={() => {
        if(todoInput === ''){
            showAlert();
            return;
        }
        addTodoValue(todoInput);
        setTodoInput('');
      }}>Add</button>
    </header>
  )
}

export default ToDoInput
