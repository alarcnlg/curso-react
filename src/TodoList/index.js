import React from 'react';
import './TodoList.css';

function TodoList(props) {
    const renderfunc = props.render || props.children;

    return (
        <section className="TodosList-container">
            { props.error && props.onError() }
            { props.loading && props.onLoading() }
            { (!props.loading && !props.totalTodos) && props.onEmpytTodos() }
            { (!!props.totalTodos && !props.searchedTodos.length ) && props.onEmpytSearchResults(props.searchText) }
            <ul>
                {
                    props.searchedTodos.map(renderfunc)
                }
            </ul>
        </section>
    );
}

export {TodoList};