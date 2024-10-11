    const uploadDiv = document.getElementById('photo');
    const imageInput = document.getElementById('imageInput');
   

    // Lorsque le div est cliqué, on déclenche l'input de type file
    uploadDiv.addEventListener('click', function() {
        imageInput.click();
    });

    // Prévisualisation de l'image après importation
    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // On remplace le texte par l'image
                uploadDiv.style.backgroundImage = 'url("' + e.target.result + '")';
            };
            reader.readAsDataURL(file);
        }
    });