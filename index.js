import express from "express";
 
//chamamos o objeto com o nome express e passamos o valor dele mesmo
//podendo acessar suas caracteristicas e comportamentos
const app = express();
 
app.use(express.json())
//para criar um array de frutas
let frutas = ["Uva", "Carambola", "Melância", "Maracuja", "Morango"]

//serviço = API
 
//rota que o cliente ira solicitar
app.get("/", (req, res) => {
    //end quando finaliza a requisição
    //send aceita outros parametros
    res.send("Primeiro dia com NODE")
 
})
 
//app.get("/usuario/:id", (req, res)=>{
   // let id = req.params.id;
    // res.send(`O cliente está querendo ver o usuário com o id ${id}`)
//})

//Uma rota que receba 2 parâmetros e exiba em formato de objeto

app.get("/aluno/:nome/:curso", (req, res) => {
   //objeto literal
   const novoAluno = {
    nome: req.params.nome,
    curso: req.params.curso
   }

   res.send(novoAluno);

})

//crie uma rota chamada fruta com o verbo post

app.post("/fruta", (req, res) => {
    const novaFruta = req.body.nome;

    //o push vai inserir o dado em ordem sequencial
    frutas.push(novaFruta);
    res.send("Fruta cadastrada com sucesso");

})

app.get("/fruta", (req, res) => {

    res.send(frutas);
})

app.put("/fruta/:posicao", (req,res) => {

    const posicao = req.params.posicao;
    const novoNome = req.body.nome;

    //acessamos a posição da  fruta desejada
    //e atribuimos um novo valor

    frutas[posicao] = novoNome;
    res.send("Fruta alterada com sucesso " + novoNome);
})

//crie uma rota para deletar a fruta pela sua posicao
app.delete("/fruta/posicao:/", (req, res) => {
    const posicao = req.params.posicao;

    frutas.splice(posicao, 1)
    res.send(`a fruta da posição ${posicao} foi excluida!`);
})


//app listen precisa estar como ultima instrução
app.listen(3000, ()=>{
    console.log("Iniciando minha API com o EXPRESS")
})
 