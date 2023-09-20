document.getElementById("share-button").addEventListener("click", () => {
    const linkToShare = "https://othinieljo.github.io/Test/";
    let message = "Message de vie : " + linkToShare ;
    let whatsappURL = "whatsapp://send?text=" + encodeURIComponent(message);
    window.location.href = whatsappURL;
});

let Vers = ["Ce qui était déjà là.","Car le salaire du péché, c'est la mort; mais le don gratuit de Dieu, c'est la vie éternelle en Jésus-Christ notre Seigneur.","Il est venu chercher et amener au salut ce qui était perdu.","Viens à Jésus, toi qui est accablé sous le poids d'un lourd fardeau, et il te donnera du repos.","C'est en Jésus seul que se trouve le salut. Dans le monde entier, Dieu n'a jamais donné le nom d'aucun autre homme par lequel nous devions être sauvés.","Si de ta bouche, tu déclares que Jésus est Seigneur et si dans ton coeur, tu crois que Dieu l'a ressuscité des morts, tu seras sauvé."] ; 

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

       
        function setCookie(name, value, days) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
        }

        
        function displayMessage() {
            let visitCount = parseInt(getCookie('visitCount')) || 0;
            const messageElement = document.getElementById('message');

            if (visitCount === 0) {
                // messageElement.textContent = 'Bienvenue pour votre première visite !';
                
                messageElement.textContent = Vers[0]
            } else if (visitCount === 1) {
                // messageElement.textContent = 'Revenez bientôt !';
                messageElement.textContent = Vers[1]
            } else if (visitCount === 2) {
                // messageElement.textContent = 'Vous êtes de retour !';
                messageElement.textContent = Vers[2]
            } else {
                // messageElement.textContent = 'Bonjour encore une fois !';
                messageElement.textContent = Vers[3]
            }

            visitCount++;
            setCookie('visitCount', visitCount, 30); 
        }

        
        displayMessage();
 
