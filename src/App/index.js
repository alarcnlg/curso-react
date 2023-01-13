// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem'
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoHeader } from '../TodoHeader';

// const defaultTodos = [
//   {text:'Cortar cebolla', completed:false },
//   {text:'Tomar el curso de intro a React', completed:true },
//   {text:'Llorar con la llorona', completed:true },
// ];

function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader
        loading={loading}
      >
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        error={error}
        onError={() => <TodosError />}
        
        loading={loading}
        onLoading={() => <TodosLoading /> }
        
        searchedTodos={searchedTodos}
        onEmpytTodos={() => <EmptyTodos /> }

        totalTodos={totalTodos}
        searchText={searchValue}
        onEmpytSearchResults={(searchText) => <p>No hay resultados para {searchText}</p> }

      >
        {todo =>
          (<TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text) }
            onDelete={ () => deleteTodo(todo.text) } 
          />)
        }
      </TodoList>
        { !!openModal && 
          <Modal>
            <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        }
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default App;
