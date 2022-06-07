import React from 'react';
import List from '../components/list'
import Form from '../components/form'
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form></Form>
      <List></List>
    </div>
  );
}

export default App;
