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

adicionarDinamicamenteAno()
