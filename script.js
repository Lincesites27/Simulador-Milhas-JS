const slideValue = document.querySelector(".valor");
const inputSlider = document.querySelector("#range");

darkMode =()=>{
    const body = document.querySelector("body");
    body.classList.toggle("dark");
}



// FUNÇÃO PARA MUDAR O TEXTO 

inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    slideValue.textContent = value
    const somaMilhaAzul = value * 1.1 .toFixed(0);
    const somaMilhaGol = value * 3 .toFixed(0);
    const somaMilhaLatam = value * 2 .toFixed(0);
   
    const conteudo = document.querySelector("#conteudo");
    conteudo.innerHTML =  '<div class="conteudo-txt "><span>Com essa distância você pode ganhar até ' +somaMilhaAzul+ ' Milhas pela Azul <br></span> <span>Com essa distância você pode ganhar até '+somaMilhaLatam+ ' Milhas pela Latam <br></span><span> Com essa distância você pode ganhar até '+somaMilhaGol+ ' Milhas pela Gol <br></span></div>';
})



