import React, { useState, useEffect } from 'react';
import api from './services/api';

import { Switch, Route } from 'react-router-dom';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevList from './components/DevList'; 
import { MapContainer } from './components/MapContainer'; 

/**
 * Conceitos!
 * 
 * Componente: função que retorna algum HTML, CSS ou JS
 * Estado: informações mantidads pelo componente (imutabilidade)
 * Propriedade: atributos
 */

function App() {
  const [devs, setDevs] = useState([]);

  // Listar devs apenas uma vez
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <Switch>
          <Route path="/devs">
            <DevList devs={devs} />
          </Route> 
          <Route path="/map">
            <MapContainer devs={devs} />
          </Route>         
          <Route path="/">
            <DevList devs={devs} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
