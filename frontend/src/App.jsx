import { useState, useEffect } from 'react';
import Tabela from './components/Tabela';
import ListaJogos from './components/ListaJogos';
import './App.css';
import { calcularTabela } from './utils/tabelaUtils'; 

function App() {
  const [times, setTimes] = useState([]);
  const [partidas, setPartidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultados, setResultados] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/dados-campeonato')
      .then(response => response.json())
      .then(data => {
        setTimes(data.times);
        setPartidas(data.partidas);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      });
  }, []);

  const handleResultadoChange = (partidaId, time, placar) => {
    setResultados(prevResultados => ({
      ...prevResultados,
      [partidaId]: {
        ...prevResultados[partidaId],
        [time]: placar
      }
    }));
  };
  
  const classificacao = calcularTabela(times, partidas, resultados);

  if (loading) {
    return <h1>Carregando dados do campeonato...</h1>;
  }

  return (
    <div className="app-container">
      <header>
        <h1 className="header">Simulador do Brasileirão Série A</h1>
        <p className="app-subtitle"> Simule os resultados e a tabela de cada rodada do campeonato!</p>
      </header>
      <main className="main-container">
        <Tabela classificacao={classificacao} />
        <ListaJogos
          partidas={partidas}
          times={times}
          resultados={resultados}
          onResultadoChange={handleResultadoChange}
        />
      </main>
    </div>
  );
}

export default App;