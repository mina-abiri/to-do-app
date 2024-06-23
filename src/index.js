import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoLis from './todoList';


function App() {
  return (
    <>
      <TodoLis />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

