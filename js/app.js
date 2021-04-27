document.getElementById('generate').onclick = generateImage;

function generateImage() {
    var container = document.getElementById('image_text');
    var name = document.getElementById('name').value;
    var imgPrev = document.getElementById('img_prev');
    var desc = document.getElementById('desc');
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    
    canvas.setAttribute('width', container.clientWidth);
    canvas.setAttribute('height', container.clientHeight);
    
    context.drawImage(imgPrev, 0, 0);
    context.font = "bold 20px serif";
    context.fillText(desc.innerHTML, 0, container.clientHeight-20);
    context.strokeRect(0, 0, canvas.width, canvas.height);
    
    var dataURL = canvas.toDataURL();
    var imgFinal = new Image();
    
    imgFinal.src = dataURL;
    container.parentNode.insertBefore(imgFinal, container.nextSibling);
    container.remove();
    
    document.getElementById('generate').remove();
}