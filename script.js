function atualizarRelogios() {

    function hora(timeZone) {
        return new Date().toLocaleTimeString("pt-BR", {
            timeZone: timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }

    function data(timeZone) {
        return new Date().toLocaleDateString("pt-BR", {
            timeZone: timeZone,
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    document.getElementById("brasilia").textContent =
        hora("America/Sao_Paulo");

    document.getElementById("dataBrasilia").textContent =
        data("America/Sao_Paulo");

    document.getElementById("acre").textContent =
        hora("America/Rio_Branco");

    document.getElementById("amazonas").textContent =
        hora("America/Manaus");

    document.getElementById("centro").textContent =
        hora("America/Sao_Paulo");

    document.getElementById("noronha").textContent =
        hora("America/Noronha");

    document.getElementById("lisboa").textContent =
        hora("Europe/Lisbon");

    document.getElementById("ny").textContent =
        hora("America/New_York");

    document.getElementById("tokyo").textContent =
        hora("Asia/Tokyo");

    document.getElementById("london").textContent =
        hora("Europe/London");
}

atualizarRelogios();

setInterval(atualizarRelogios, 1000);
