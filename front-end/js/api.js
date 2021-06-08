const BASE_URL = "http://localhost:8080";

//jogos
function createJogo(jogo, callback) {
    var url = BASE_URL + '/api/jogos';
    var xhr = new XMLHttpRequest();
    dados = JSON.stringify(jogo);
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

function getJogos(callback) {
    var url = BASE_URL + '/api/jogos';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

function getJogoById(id, callback) {
    var url = BASE_URL + '/api/jogos/' + id;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

function getJogoByTimeA(nomeTimeA, callback) {
    var url = BASE_URL + '/api/jogos/filter?timea=' +nomeTimeA;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}

function updateJogo(jogo, callback) {
    var url = BASE_URL + '/api/jogos/' + jogo.id;
    var xhr = new XMLHttpRequest();
    dados = JSON.stringify(jogo);
    xhr.open('PUT', url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.responseType = 'json';
    xhr.onload = function () {
        callback(xhr.status, xhr.response);
    }
    xhr.send(dados);
}

function deleteJogo(id, callback) {
    var url = BASE_URL + '/api/jogos/' + id;
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        callback(xhr.status, xhr.response);
    }
    xhr.send();
}
