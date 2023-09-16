document.getElementById("share-button").addEventListener("click", () => {
    const linkToShare = "https://othinieljo.github.io/Test/";
    let message = "Message de vie : " + linkToShare ;
    let whatsappURL = "whatsapp://send?text=" + encodeURIComponent(message);
    window.location.href = whatsappURL;
});
