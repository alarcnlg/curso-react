import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(props) {
  return(<h1>{props.saludo}, {props.nombre}!</h1>);
}

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent 
            {...props}
            saludo={saludo}
          />
          Si estamos
        </>
      );
    }
  }
}

const AppWithSaludo = withSaludo(App)('Buenos días');

root.render(
  <React.StrictMode>
    <AppWithSaludo nombre='Nombre' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
