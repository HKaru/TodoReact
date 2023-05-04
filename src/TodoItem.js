import React, { useState } from 'react';

function TodoItem(props) {
  const [newTodoText, setNewTodoText] = useState('');

  function handleAddTodoSubmit(event) {
    event.preventDefault();
    props.onAddTodoSubmit(newTodoText);
    setNewTodoText('');
  }

  return (
    <div className="todo-item">
      <div>{props.text}</div>
      <button onClick={props.onDelete}>Kustuta</button>
      <form onSubmit={handleAddTodoSubmit}> 
        <input
          type="text"
          name="newTodoText"
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
        />
        <button type="submit">Lisa</button>
      </form>
    </div>
  );
}

export default TodoItem;
