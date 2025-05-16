var estado = {
    nome: '', 
    sigla: ''};

    /*  funcionando

async function obterEstados(){
    const url = "./resources/json-estados-brasileiros.json";
    const response = await fetch(url, { method: 'GET', mode: 'no-cors'});
    const data = await response;
}

console.log(obterEstados());*/



//const url = "./resources/json-estados-brasileiros.json";
//const url = "https://jsonplaceholder.typicode.com/posts";
const url = "https://gist.github.com/henriquejensen/1032c47a44d2cddaa2ef47fc531025db.js";
async function obterEstados(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    data.map((items) => {
        const div = document.createElement("div");
        const body = document.createElement("p");
        const body2 = document.createElement("p");

        body.innerText = post.nome;
        body2.innerText = post.sigla;

        div.appendChild(body);
        div.appendChild(body2);
        
    })
}

console.log(obterEstados());




