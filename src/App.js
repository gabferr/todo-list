import { useEffect,useState } from 'react';
import './App.css';

function App() {
  let [lista,setLista] = useState([]);
  let [novoItem,setNovoItem] = useState("");

 useEffect(()=> {
  setLista(["Tarefa 1","Tarefa 2","Tarefa 3","Tarefa 4"])
 },[])

  return (
  <div className='container'>
  <input placeholder='tarefa' value= {novoItem} onChange={value=> setNovoItem(value.target.value)} type="text"></input>
    <button className='button' onClick={()=>adicionarNovoItem()}>Adicionar</button>
  
    <ul className='list'>
      {lista.map((item,index)=> (<li className='item' key={index}>{item}
      <button onClick={()=> deletarItem(index)}>deletar</button>
      </li>  ))}
    </ul>
    
  </div>
  );
  function adicionarNovoItem(){
    if(novoItem.length <= 0){
      alert("Digite algo no campo ");
      return;
    }

    let itemIndex = lista.indexOf(novoItem);
    if(itemIndex >= 0){
      alert("Você já adicionou está tarefa! ");
      return;
    }

    setLista([...lista, novoItem]);
    setNovoItem("");
    }

    function deletarItem(index){
      let tempArray = [...lista];
      tempArray.splice(index,1);
      setLista(tempArray);
    }
 
}

export default App;
