document.getElementById("share-button").addEventListener("click", function() {
    // Remplacez ceci par le lien que vous souhaitez partager sur WhatsApp
    var linkToShare = "https://othinieljo.github.io/Test/";

    // Utilisez l'API WhatsApp pour ouvrir WhatsApp avec le message et le lien
    var message = "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle " + linkToShare ;
    var whatsappURL = "whatsapp://send?text=" + encodeURIComponent(message);

    // Redirigez l'utilisateur vers WhatsApp
    window.location.href = whatsappURL;
});