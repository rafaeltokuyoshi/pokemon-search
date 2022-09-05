var formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e) {

  // Bloqueia o refresh da página
  e.preventDefault()

  // URL da pesquisa API
  let urlForm = "https://pokeapi.co/api/v2/pokemon/";

  // Valor do input Name
  let nome = document.getElementById("name")

  // Concatena a url com input name
  urlForm = urlForm + this.name.value

  // Transforma os valores em minúsculas
  urlForm = urlForm.toLocaleLowerCase()

  // ID Content
  let respota = document.getElementById('content')

  // ID imgPokemon
  let imagem = document.getElementById('imgPokemon')

  // Resposta em HTML
  let html = ''

  fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function(data){
      console.log(data)
      html = 'Name: ' + maiuscula(data.name) + '<br>'
      html = html + 'Type: ' + maiuscula(data.types[0].type.name)
      respota.innerHTML = html

      imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"

    })
    .catch(function(err){
      if(err == `SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON`){
        html = 'Pokemón não encontrado! 😒'
      } else {
          html = 'Erro:' + err
      }
      respota.innerHTML = html
    })

});

// Função para primeira letra maiuscula
function maiuscula(val) {
  return val[0].toUpperCase() + val.substr(1)
}