function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    //se campoPesquisa for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML ="<p>Nada foi encontrado</p>"
        return
    }
  
    console.log("Campo pesquisado", campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      //se titulo includes campoPesquisa
      console.log("Título do dado testado:", dado.titulo);
      console.log("Título inclui o campo de pesquisa?",dado.titulo.includes(campoPesquisa));
      console.log("Título de palavras específicas",dado.titulo.includes(campoPesquisa));
  
if (
        dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) 
        ||dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase()) 
        ||dado.tags.toLowerCase().includes(campoPesquisa.toLowerCase())
    ) 
    {
  
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações sobre ${dado.titulo}</a>
          </div>
        `;
      }
    }
    if (!resultados) {
        resultados ="<p>Nada foi encontrado</p>"
    }
    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
  }


