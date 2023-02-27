import './App.css';
import { useEffect, useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';

export default function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [nomeTarefa, setNomeTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  function AddTask(evento) {
    evento.preventDefault();
    setIsLoading(true);

    if (nomeTarefa == null || nomeTarefa == " " || nomeTarefa == undefined) {
      window.alert("O campo Nome nao foi preenchido corretamente")
      setIsLoading(false);

    } else {

      try {
        setIdCounter(idCounter + 1);
        listaTarefas.push({
          id: idCounter,
          name: nomeTarefa,
          isConcluded: false
        })
        window.alert("Tarefa cadastrada com sucesso!");

      } catch (error) {
        alert("")
      } finally {
        setIsLoading(false);
      }

    }



  }

  function deleteTask(id) {
    setListaTarefas(oldValues => {
      return oldValues.filter(item => item.id !== id)
    })

    window.alert("Tarefa excluida com sucesso!")
  }

  function updateLista() {
    setListaTarefas(listaTarefas);
  }

  useEffect(() => {
    updateLista()
  }, []);



  return (

    <div className="container">
      <h1>To-do List</h1>
      <form className='container-form' onSubmit={AddTask}>
        <input required id="tarefa" type="text" placeholder="Tarefa" className="container-form__input" value={nomeTarefa} onChange={(campo) => setNomeTarefa(campo.target.value)} />
        {
          isLoading === false ? (
            <button type='submit' className="container-form__btn">Adicionar</button>
          ) : (
            <button className="container-form__btn">...</button>
          )
        }
      </form>
      <section className='container-lista'>
        {
          listaTarefas.map((task) => {
            return (
              <div className='container-lista-tarefa' key={task.id}>
                <input type="checkbox" id={task.id} name={task.name} value={task.name} className="container-lista-tarefa__task" />{task.name}
                <button onClick={() => deleteTask(task.id)} className='container-lista-tarefa__btn'><FaTrashAlt className='container-lista-tarefa__icon' /></button>
              </div>
            )
          })
        }
      </section>

    </div>
  );
}


