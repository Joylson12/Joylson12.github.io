(function($){
    $(function(){
  
      $('.sidenav').sidenav();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space

  
  // Ativando o burger menu em telas menores
document.addEventListener('DOMContentLoaded', () => {
    // Pegando todos os elementos com a classe .navbar-burger
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Verificando se há algum navbar-burger
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Pegando o alvo do data-target
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Alternando as classes is-active nos elementos alvo
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});


// Função para carregar imagens de forma dinâmica (exemplo simples)
function loadImages(imageUrls) {
    const gallery = document.getElementById('gallery');
    imageUrls.forEach(url => {
        const imgElement = document.createElement('img');
        imgElement.src = url;
        imgElement.className = 'image-item';
        gallery.appendChild(imgElement);
    });
}

// Exemplo de uso da função loadImages
document.addEventListener('DOMContentLoaded', () => {
    const imageUrls = [
        'url-da-imagem-1.jpg',
        'url-da-imagem-2.jpg',
        'url-da-imagem-3.jpg'
    ];
    loadImages(imageUrls);
});
