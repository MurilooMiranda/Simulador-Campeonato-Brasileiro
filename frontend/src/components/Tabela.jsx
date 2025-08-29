import React from 'react';
import './Tabela.css';
import escudosMap from '../assets/escudos';

function Tabela({ classificacao }) {

  const getClassificacaoClasse = (posicao) => {
    if (posicao <= 4) return 'libertadores';
    if (posicao <= 6) return 'pre-libertadores';
    if (posicao <= 12) return 'sul-americana';
    if (posicao >= 17) return 'rebaixados';
    return '';
  };

  return (
    <div className="tabela-container">
      <h2>TABELA</h2>
      <table>
        <thead>
          <tr>
            <th className="pos">CLASSIFICAÇÃO</th>
            <th className="pontos">P</th>
            <th>J</th>
            <th>V</th>
            <th>SG</th>
            <th>GP</th>
          </tr>
        </thead>
        <tbody>
          {classificacao.map((time, index) => {
            const posicao = index + 1;
            const classe = getClassificacaoClasse(posicao);
            const Escudo = escudosMap[time.sigla.trim()]; 

            return (
              <tr key={time.id}>
                <td className={`pos ${classe}`}>
                  <span className="posicao-numero">{posicao}</span>
                  <img src={Escudo} alt={time.nome} className="escudo-tabela" />
                  <span className="nome-time">{time.nome}</span>
                </td>
                <td className="pontos">{time.p}</td>
                <td>{time.j}</td>
                <td>{time.v}</td>
                <td>{time.sg}</td>
                <td>{time.gp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
     <div className="legenda">
        <div className="legenda-item">
          <span className="cor libertadores"></span> Libertadores
        </div>
        <div className="legenda-item">
          <span className="cor pre-libertadores"></span> Pré-Libertadores
        </div>
        <div className="legenda-item">
          <span className="cor sul-americana"></span> Sul-Americana
        </div>
        <div className="legenda-item">
          <span className="cor rebaixados"></span> Rebaixados
        </div>
      </div>
    </div> 
  );
}

export default Tabela;