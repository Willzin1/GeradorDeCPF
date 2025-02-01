import geraCPF from './modules/GeraCPF';
import './assets/CSS/style.css';

function geradorDeCPF() {
    const cpfGerado = document.querySelector('.cpf-gerado');
    const geradorCPF = new geraCPF();

    cpfGerado.innerHTML = geradorCPF.geraNovoCPF();
};

document.addEventListener('click', event => {
    const element = event.target;
    if(element.classList.contains('gerar-cpf')) geradorDeCPF();
});