import React, { useRef } from 'react'


interface NewTodoProps {
    onAddTodo: (todoText:string) => void;
};

const NewTodo:React.FC<NewTodoProps> = ({onAddTodo}) => {
  const textInputRef = useRef<HTMLInputElement>(null);  

  const todoSubmitHandler = (e:React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    //! is neccessary to show that it won't be null otherwise i will need to add extra step of if null case
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor='todo-text'>Todo Text</label>
            <input type='text' id='todo-text' ref= {textInputRef}/>
        </div>
        <button type='submit'>Add TODO</button>
    </form>
  )
}

export default NewTodo