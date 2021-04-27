window.onload = function () {

    document.getElementById('generate').onclick = generateImage;

    function generateImage() {

        // Elementos
        const container = document.getElementById('image_text');
        const imgPrev = document.getElementById('img_prev');
        const desc = document.getElementById('desc');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Inputs
        const name = document.getElementById('name').value;
        const website = document.getElementById('website').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;

        // Inputs Sociales
        const facebook = document.getElementById('facebook').value;
        const instagram = document.getElementById('instagram').value;
        const twitter = document.getElementById('twitter').value;
        const linkedin = document.getElementById('linkedin').value;

        // Lógica de Checkboxes: fbChecked = false (o true)
        const fbChecked = document.getElementById('fb-check').checked;
        const igChecked = document.getElementById('ig-check').checked;
        const twChecked = document.getElementById('tw-check').checked;
        const liChecked = document.getElementById('li-check').checked;

        canvas.setAttribute('width', container.clientWidth);
        canvas.setAttribute('height', container.clientHeight);

        context.drawImage(imgPrev, 0, 0);
        context.font = "20px Arial";
        context.fillStyle = "white";

        // Llenamos la data personal
        context.fillText(name, 10, container.clientHeight - 80);
        context.fillText(website, 10, container.clientHeight - 60);
        context.fillText(email, 10, container.clientHeight - 40);
        context.fillText(address, 10, container.clientHeight - 20);

        // Si los checkbox están tildados, entonces llenamos el canvas
        fbChecked && context.fillText(facebook, 240, container.clientHeight - 80);
        igChecked && context.fillText(instagram, 240, container.clientHeight - 60);
        twChecked && context.fillText(twitter, 240, container.clientHeight - 40);
        liChecked && context.fillText(linkedin, 240, container.clientHeight - 20);

        context.strokeRect(0, 0, canvas.width, canvas.height);

        const dataURL = canvas.toDataURL();
        const imgFinal = new Image();

        imgFinal.src = dataURL;
        container.parentNode.insertBefore(imgFinal, container.nextSibling);
        container.remove();

        document.getElementById('generate').remove();
    }

}