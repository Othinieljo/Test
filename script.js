document.getElementById("share-button").addEventListener("click", () => {
    const linkToShare = "https://othinieljo.github.io/Test/";
    let message = "Message de vie : " + linkToShare ;
    let whatsappURL = "whatsapp://send?text=" + encodeURIComponent(message);
    window.location.href = whatsappURL;
});

let Vers = ["DIEU t'aime tant qu'il a donné son Fils unique afin qu'en croyant en lui tu ne périsse point mais que tu aies la vie éternelle. Veux tu l'accepter et marcher avec lui ?","Car le salaire du péché, c'est la mort; mais le don gratuit de Dieu, c'est la vie éternelle en Jésus-Christ notre Seigneur.","Il est venu chercher et amener au salut ce qui était perdu.","Viens à Jésus, toi qui est accablé sous le poids d'un lourd fardeau, et il te donnera du repos.","C'est en Jésus seul que se trouve le salut. Dans le monde entier, Dieu n'a jamais donné le nom d'aucun autre homme par lequel nous devions être sauvés.","Si de ta bouche, tu déclares que Jésus est Seigneur et si dans ton coeur, tu crois que Dieu l'a ressuscité des morts, tu seras sauvé."] ; 

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

       
        function setCookie(name, value) {
            // const expires = new Date();
            // expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            // document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
            document.cookie = `${name}=${value}`;
        }

        
        function displayMessage() {
            let visitCount = parseInt(getCookie('visitCount')) || 0;
            const messageElement = document.getElementById('message');

            if (visitCount === 0) {
                messageElement.textContent = Vers[0]
            } else if (visitCount === 1) {
                messageElement.textContent = Vers[1] ;
            } else if (visitCount === 2) {
                messageElement.textContent = Vers[2];
            } else if (visitCount === 3) {
                messageElement.textContent = Vers[3];
            }
            else if (visitCount === 4) {
                messageElement.textContent = Vers[4];
            }else if (visitCount === 5) {
                messageElement.textContent = Vers[5];
            }
            else{
                messageElement.textContent = Vers[5];
            }
            // switch (visitCount) {
            //     case 0:
            //       messageElement.textContent = Vers[0];
            //       break;
            //     case 1:
            //       messageElement.textContent = Vers[1];
            //       break;
            //     case 2:
            //        messageElement.textContent = Vers[2];
            //       break;
            //     case 3:
            //       messageElement.textContent = Vers[3];
            //       break;
            //     case 4:
            //       messageElement.textContent = Vers[4];
            //       break;
            //     case 5:
            //       messageElement.textContent = Vers[5];
            //       break;
            //     case 6:
            //       messageElement.textContent = Vers[6];
            //       break;
            //     default:
            //         messageElement.textContent = Vers[6];
            //         console.log("ff")

            //   }

            visitCount++;
            setCookie('visitCount', visitCount); 
        }

        
        displayMessage();
     
