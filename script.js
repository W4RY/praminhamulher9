function mostrarMensagem() {
    document.getElementById("extraMensagem").innerHTML = `
      <p>EU TE AMO</p>
      <p>MUIIIIIITÃÃÃÃÃÃÃÃÃÃOOOOOOOOOO ❤️</p>
      <p>🌸🌼🌹✨💖🎶</p>
    `;
  }
  
  function atualizarContador() {
    const dataInicio = new Date("2023-12-16T00:00:00");
    const agora = new Date();
  
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    let horas = agora.getHours() - dataInicio.getHours();
    let minutos = agora.getMinutes() - dataInicio.getMinutes();
  
    // Ajustes para valores negativos
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
      dias += mesAnterior.getDate();
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }
  
    document.getElementById("tempo").innerHTML = `
      ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas e ${minutos} minutos
    `;
  }
  
  // Atualiza o contador a cada 1 segundo (para sempre)
  setInterval(atualizarContador, 1000);
  
  // Inicia o contador logo ao carregar a página
  atualizarContador();
  
  

  