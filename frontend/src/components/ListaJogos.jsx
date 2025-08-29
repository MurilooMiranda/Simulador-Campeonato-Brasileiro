// src/components/ListaJogos.jsx

import React, { useState } from 'react';
import './ListaJogos.css';
import escudosMap from '../assets/escudos';

function ListaJogos({ partidas, times, resultados, onResultadoChange }) {
  const [rodadaAtual, setRodadaAtual] = useState(1);

  const getTimeInfo = (id) => times.find(t => t.id === id);
  const irParaRodadaAnterior = () => { if (rodadaAtual > 1) setRodadaAtual(rodadaAtual - 1); };
  const irParaProximaRodada = () => { if (rodadaAtual < 38) setRodadaAtual(rodadaAtual + 1); };

  const partidasDaRodada = partidas.filter(partida => partida.rodada === rodadaAtual);
  
  return (
    <div className="lista-jogos-container">
      {/* O CÓDIGO QUE FALTAVA ESTÁ AQUI */}
      <div className="navegacao-rodada">
        <button onClick={irParaRodadaAnterior} disabled={rodadaAtual === 1}>&lt;</button>
        <h2>{rodadaAtual}ª Rodada</h2>
        <button onClick={irParaProximaRodada} disabled={rodadaAtual === 38}>&gt;</button>
      </div>
      
      <div className="rodadas-wrapper">
        {partidasDaRodada.map(partida => {
          const timeCasa = getTimeInfo(partida.time_casa_id);
          const timeFora = getTimeInfo(partida.time_fora_id);
          const resultado = resultados[partida.id] || {};

          if (!timeCasa || !timeFora) return null;

          const escudoCasaSrc = escudosMap[timeCasa.sigla.trim()];
          const escudoForaSrc = escudosMap[timeFora.sigla.trim()];

          return (
            <div key={partida.id} className="partida">
              <span className="time casa">
                {timeCasa.sigla}
                <img src={escudoCasaSrc} alt={timeCasa.nome} />
              </span>
              <input type="number" min="0" className="placar" value={resultado.casa || ''} onChange={(e) => onResultadoChange(partida.id, 'casa', e.target.value)} />
              <span>X</span>
              <input type="number" min="0" className="placar" value={resultado.fora || ''} onChange={(e) => onResultadoChange(partida.id, 'fora', e.target.value)} />
              <span className="time fora">
                <img src={escudoForaSrc} alt={timeFora.nome} />
                {timeFora.sigla}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListaJogos;