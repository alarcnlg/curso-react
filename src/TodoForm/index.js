import React from "react";
import './TodoForm.css'

function TodoForm({addTodo, setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        // TODO
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('')
    }

    return(
        <form
            onSubmit={onSubmit}
            className='TodoForm'
        >
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Cortar la cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div>
                <button
                    type='button'
                    onClick={ onCancel }
                    className='TodoForm-button TodoForm-button--add'
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--cancel'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };