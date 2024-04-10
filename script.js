function download_file(fileURL, fileName) {
    var link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;
    link.dispatchEvent(new MouseEvent('click'));
}

document.addEventListener('DOMContentLoaded', function() {
    const lienPdf = document.getElementById('afficherPdf');
    const pdfUrl = 'cv.pdf'; // Remplacez par le chemin vers votre fichier PDF
    const pdfFileName = 'cv.pdf'; // Nom du fichier PDF à télécharger

    lienPdf.addEventListener('click', (event) => {
        event.preventDefault();
        download_file(pdfUrl, pdfFileName);
    });
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if(pos > 100) {
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = 'conic-gradient(#03cc65 ${scrollValue}%, #D7D7D7 ${scrollValue}%)';
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;