// adiona o ano dinamicamente no footer
function adicionarDinamicamenteAno() {
  const data = new Date();
    if(data) {
        const elementoFooter = document.querySelector(".footer-data");
        const ano = data.getFullYear;
        elementoFooter.innerHTML = ` &copy; Brisa Telecom &middot; Todos os direitos reservados ${data.getFullYear()}.`;
    } else {
        return;
    }
}

adicionarDinamicamenteAno();

// cria o efeito de animação ao scroll
function ativarScroll() {
  const elementoScroll = document.querySelectorAll(".js .js-scroll");
  if (elementoScroll.length) {
    const alturaTela = window.innerHeight * 0.6;

    function animaScroll() {
      elementoScroll.forEach((section) => {
        const alturaElemento = section.getBoundingClientRect().top;
        const metadeTela = alturaElemento - alturaTela < 0;

        if (metadeTela) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
  }

  //mantem a primeira section ativa
  elementoScroll[0].classList.add("ativo");
}

window.addEventListener("scroll", ativarScroll);

ativarScroll();
