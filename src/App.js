import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);

  function handleAddTodoClick() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleAddTodoSubmit(event) {
    event.preventDefault();
    const newTodoText = event.target.elements.todoText.value;
    setTodos([...todos, { text: newTodoText }]);
    setShowModal(false);
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <button onClick={handleAddTodoClick}>Lisa to-do</button>
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <div>{todo.text}</div>
          <button onClick={() => handleDelete(index)}>Kustuta</button>
        </div>
      ))}
      {showModal && (
        <Modal onClose={handleModalClose}>
          <h2>Lisa to-do</h2>
          <form onSubmit={handleAddTodoSubmit}>
            <input type="text" name="todoText" />
            <button type="submit">Lisa</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default App;
