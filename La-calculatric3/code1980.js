//DOM
const touches = [...document.querySelectorAll('.button')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    calculer(valeur)

})


document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)) {
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul =  eval(ecran.textContent);
                if(calcul == 3962){
                    ecran.textContent = "MAMAN JE T' AIME"
                    // Confetti effect
                    const confettiContainer = document.createElement('div');
                    confettiContainer.style.position = 'fixed';
                    confettiContainer.style.top = 0;
                    confettiContainer.style.left = 0;
                    confettiContainer.style.width = '100%';
                    confettiContainer.style.height = '100%';
                    confettiContainer.style.pointerEvents = 'none';
                    confettiContainer.style.overflow = 'hidden';
                    document.body.appendChild(confettiContainer);

                    for (let i = 0; i < 1000 ; i++) {
                        const confetti = document.createElement('div');
                        confetti.style.position = 'absolute';
                        confetti.style.width = '10px';
                        confetti.style.height = '10px';
                        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                        confetti.style.left = Math.random() * 100 + 'vw';
                        confetti.style.top = '-10px';
                        confetti.style.opacity = Math.random();
                        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
                        confettiContainer.appendChild(confetti);
                    }

                    const style = document.createElement('style');
                    style.textContent = `
                      @keyframes fall {
                        to {
                          transform: translateY(100vh) rotate(360deg);
                          opacity: 0;
                        }
                      }
                    `;
                    document.head.appendChild(style);

                    // Remove confetti after 5 seconds
                    setTimeout(() => {
                        confettiContainer.remove();
                        style.remove();
                    }, 5000);
                } else{
                    ecran.textContent = calcul;
                }
                
                break;   
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                 const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
            
        }
    }
}

window.addEventListener('error',(e) => {
     alert('A QUOI TU JOUE ?!' + e.message)
})


