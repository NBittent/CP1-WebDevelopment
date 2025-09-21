function calcular() {
    let horaIni = Number(document.getElementById("horaIni").value);
    let minIni = Number(document.getElementById("minIni").value);
    let horaFim = Number(document.getElementById("horaFim").value);
    let minFim = Number(document.getElementById("minFim").value);

    console.log(horaIni, minIni, horaFim, minFim);

    
    if (document.getElementById("horaIni").value === "") {
        alert("Digite a hora inicial!");
        return;
    }

    if (document.getElementById("minIni").value === "") {
        alert("Digite o minuto inicial!");
        return;
    }

    if (document.getElementById("horaFim").value === "") {
        alert("Digite a hora final!");
        return;
    }

    if (document.getElementById("minFim").value === "") {
        alert("Digite o minuto final!");
        return;
    }

    
    if (horaIni < 0 || horaIni > 23) {
        alert("Hora inicial inválida!");
        return;
    }
    if (horaFim < 0 || horaFim > 23) {
        alert("Hora final inválida!");
        return;
    }
    if (minIni < 0 || minIni > 59) {
        alert("Minuto inicial inválido!");
        return;
    }
    if (minFim < 0 || minFim > 59) {
        alert("Minuto final inválido!");
        return;
    }

    
    let inicioTotal = (horaIni * 60) + minIni;
    let fimTotal = (horaFim * 60) + minFim;

    let duracao;
    if (fimTotal >= inicioTotal) {
        duracao = fimTotal - inicioTotal;
    } else {
        duracao = (1440 - inicioTotal) + fimTotal; 
    }

    let horas = Math.floor(duracao / 60);
    let minutos = duracao % 60;

    document.getElementById("horas").innerText = horas
    document.getElementById("minutos").innerText =minutos

    console.log(`Duração: ${horas}h ${minutos}m`);
}
