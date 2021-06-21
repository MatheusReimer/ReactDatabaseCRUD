import React, {useState,useEffect} from 'react';
import './App.css';
import Axios  from 'axios';


function App() {

  const [nome,setNome] = useState('');
  const [senha,setSenha] = useState('');
  const [nomeList,setNomeList] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setNomeList(response.data);
    })
  },[])



  const submitReview = () =>{
    Axios.post('http://localhost:3001/api/insert',{
      nome:nome,
      senha:senha,
    }).then(() => {
      alert("successfull");
    });
  }

  return <div className="App"><h1>CRUD APPLICATION</h1>
  
  <div className="form">
  <label>Nome:</label>
  <input type="text"name="nome" onChange={(e)=>{
    setNome(e.target.value); 
  }}></input>
  <label>Senha</label>
  <input type="text"name="senha" onChange={(e)=>{
    setSenha(e.target.value); 
  }}></input>
  <button onClick={submitReview}>Submit</button> 


  {nomeList.map((val)=>{
    return <h1>Nome: {val.nome}  | Senha: {val.senha}</h1>
  })}
  </div>
  
  </div> 

   
  
}

export default App;
