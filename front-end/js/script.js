//jogos
function adicionarJogo() {
    let jogo = {
        timeA: document.getElementById('timeA').value,
        timeB: document.getElementById('timeB').value,
        golsA: document.getElementById('golsA').value,
        golsB: document.getElementById('golsB').value
    }
    if((document.getElementById('timeA').value == "") || (document.getElementById('timeB').value == "")|| 
        (document.getElementById('golsA').value == "") || (document.getElementById('golsB').value == "")){
        alert("Preencha os campos vazios")
    }else{
        createJogo(jogo, function(status, dados){
            if(status < 200 || status > 299 ) {
                alert("Verifique se os campos estão preenchidos corretamente");
            }else{
                window.location.reload()
            }
            
        })
    }   
}

function mostrarJogos() {
    getJogos(function (status, dados) {
        if(status < 200 || status > 299 ) {
            alert('Erro ao carregar os dados');
        }

        document.getElementById("jogos").innerHTML = "";
        for(let i=0; i<dados.length; i++) {
            let jogo = dados[i];
            document.getElementById("jogos").innerHTML += 
            `
            <tr>
            <td>${jogo.id}</td>
            <td>${jogo.timeA}</td>
            <td>${jogo.timeB}</td>
            <td><button onclick=\"atualizarFormJogo(${jogo.id})\" class=\"btn btn-primary\" 
            data-bs-toggle=\"modal\" data-bs-target=\"#editJogoModal\">Editar</button>
            <button onclick=\"apagarJogo(${jogo.id})\" class=\"btn btn-danger\">Apagar</button></td>
            </tr>
            ` 
        }
    })
}

function obterJogosByTimeA(){
    var nomeTimeA = document.getElementById('pesquisaJogo').value
    getJogoByTimeA(nomeTimeA, function(status, dados){
        if(status < 200 || status > 299 ) {
            alert('Erro ao carregar os dados');
        }

        document.getElementById("buscaJogos").innerHTML = "";
        for(var i=0; i<dados.length; i++) {
            var jogo = dados[i];
            document.getElementById("buscaJogos").innerHTML += `
            <div">
            <p><b>ID: </b>${jogo.id}</p>
            <p><b>Time A: </b>${jogo.timeA}</p>
            <p><b>Time B: </b>${jogo.timeB}</p>
            <p><b>Gols A: </b>${jogo.golsA}</p>
            <p><b>Gols B: </b>${jogo.golsB}</p>
            </div>
            <hr/>
            `    
        }
    })
}

function atualizarFormJogo(id) {
    getJogoById(id, function (status, dados) {
        document.getElementById('idJogo').value = dados.id
        document.getElementById('timeAUpdate').value = dados.timeA
        document.getElementById('timeBUpdate').value = dados.timeB
        document.getElementById('golsAUpdate').value = dados.golsA
        document.getElementById('golsBUpdate').value = dados.golsB  
    })
}

function atualizarJogo() {
    let jogo = {
        id: document.getElementById('idJogo').value,
        timeA: document.getElementById('timeAUpdate').value,
        timeB: document.getElementById('timeBUpdate').value,
        golsA: document.getElementById('golsAUpdate').value,
        golsB: document.getElementById('golsBUpdate').value
    }
    if((document.getElementById('timeAUpdate').value == "") || (document.getElementById('timeBUpdate').value == "")|| 
        (document.getElementById('golsAUpdate').value == "") || (document.getElementById('golsBUpdate').value == "")){
        alert("Preencha os campos vazios")
    }else{
        updateJogo(jogo, function(status, dados){
            if(status < 200 || status > 299 ) {
                alert('Não foi possíve alterar os dados do jogo');
            }else{
                window.location.reload()
            }
            
        })
        
    }
}

function apagarJogo(id) {
    if(confirm("Deseja apagar dados do jogo?")) {
        deleteJogo(id, function(status, dados) {
            if(status < 200 || status > 299 ) {
                alert("Erro ao apagar jogo");
                return;
            }else{
                window.location.reload()
            }
            
        })
    } else {
        alert('Ação de apagar foi cancelada');
    }
}
