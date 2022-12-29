// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   {text:'Cortar cebolla', completed:false },
//   {text:'Tomar el curso de intro a React', completed:true },
//   {text:'Llorar con la llorona', completed:true },
// ];

function App() {

  return (
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
  );
}

export default App;
