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