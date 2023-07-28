const loadingText = [...document.querySelectorAll('.loading-text')];
// spread operator nos permite copiar de manera simple una parte o la totalidad de un elemento array o un objeto en JavaScript 

let text = 'cargando';

for(let i = 0; i < text.length; i++){
    setTimeout(() => {
        loadingText[0].innerHTML += text[i];
        loadingText[1].innerHTML += text[i];
    }, 500 * i);
}