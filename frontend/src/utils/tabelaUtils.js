export const calcularTabela = (times, partidas, resultados) => {
  const estatisticas = {};
  times.forEach(time => {
    estatisticas[time.id] = { ...time, p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0 };
  });

  partidas.forEach(partida => {
    const resultado = resultados[partida.id];
    if (resultado && resultado.casa !== '' && resultado.fora !== '') {
      const placarCasa = parseInt(resultado.casa, 10);
      const placarFora = parseInt(resultado.fora, 10);

      if (isNaN(placarCasa) || isNaN(placarFora)) return;

      const timeCasa = estatisticas[partida.time_casa_id];
      const timeFora = estatisticas[partida.time_fora_id];

      timeCasa.j += 1;
      timeFora.j += 1;
      timeCasa.gp += placarCasa;
      timeFora.gp += placarFora;
      timeCasa.gc += placarFora;
      timeFora.gc += placarCasa;
      timeCasa.sg = timeCasa.gp - timeCasa.gc;
      timeFora.sg = timeFora.gp - timeFora.gc;

      if (placarCasa > placarFora) {
        timeCasa.v += 1;
        timeCasa.p += 3;
        timeFora.d += 1;
      } else if (placarFora > placarCasa) {
        timeFora.v += 1;
        timeFora.p += 3;
        timeCasa.d += 1;
      } else {
        timeCasa.e += 1;
        timeFora.e += 1;
        timeCasa.p += 1;
        timeFora.p += 1;
      }
    }
  });

  return Object.values(estatisticas).sort((a, b) => {
    if (a.p !== b.p) return b.p - a.p; 
    if (a.v !== b.v) return b.v - a.v;
    if (a.sg !== b.sg) return b.sg - a.sg; 
    if (a.gp !== b.gp) return b.gp - a.gp; 
    return a.nome.localeCompare(b.nome); 
  });
};