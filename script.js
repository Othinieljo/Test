document.getElementById("share-button").addEventListener("click", function() {
    // Remplacez ceci par le lien que vous souhaitez partager sur WhatsApp
    var linkToShare = "https://votrelien.com";

    // Utilisez l'API WhatsApp pour ouvrir WhatsApp avec le message et le lien
    var message = "J'ai trouvé quelque chose de chic : " + linkToShare;
    var whatsappURL = "whatsapp://send?text=" + encodeURIComponent(message);

    // Redirigez l'utilisateur vers WhatsApp
    window.location.href = whatsappURL;
});