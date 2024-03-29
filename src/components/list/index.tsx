import React from 'react';
import './style.scss'

function List() {
  const tasks = [
    {
      task: 'React',
      time: '2:30:00',
    },
    {
      task: 'JavaScript',
      time: '1:30:00',
    },
    {
      task: 'TypeScript',
      time: '3:30:00',
    },
  ];
  return (
    <aside className='listaTarefas'>
      <h2>Estudos do dia</h2>
      <ul>
       {tasks.map((item, index) => (
           <li key={index} className='item'>
           <h3>{item.task}</h3>
           <span>{item.time}</span>
         </li>
       ))}
      </ul>
    </aside>
  );
}

export default List;
