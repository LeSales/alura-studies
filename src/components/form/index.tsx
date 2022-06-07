import React from "react";
import Button from "../button";
import './style.scss'

function Form() {
  return (
    <form className="novaTarefa">
      <div className="inputContainer">
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        ></input>
      </div>
      <div className="inputContainer">
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step='1'
          name="tempo"
          id="tempo"
          min='00:00:00'
          max='04:00:00'
          required
        ></input>
      </div>
      <Button></Button>
    </form>
  );
}

export default Form;
