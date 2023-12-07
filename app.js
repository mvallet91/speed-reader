// app.js

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const fileInput = document.getElementById('file-input');
    const startMetronomeButton = document.getElementById('start-metronome');
    const stopMetronomeButton = document.getElementById('stop-metronome');
    const metronomeBPM = document.getElementById('metronomeBPM');
    const pdfCanvas = document.getElementById('pdf-canvas');
    let metronomeInterval;

    // Function to load and render the PDF
    function loadPDF(file) {
        const fileReader = new FileReader();

        fileReader.onload = function() {
            console.log("Load file");
            const typedArray = new Uint8Array(this.result);

            pdfjsLib.getDocument(typedArray).promise.then(pdf => {
                console.log("PDF loaded");

                // More code to render the PDF
            });
        };

        fileReader.readAsArrayBuffer(file);
        console.log("Started reading file");
    }

    // Metronome Functionality
    function startMetronome() {
        console.log('Start')
        const bpm = parseInt(metronomeBPM.value, 10);
        const interval = 60000 / bpm; // Convert BPM to milliseconds

        metronomeInterval = setInterval(() => {
            // Logic to move to the next sentence and highlight
            console.log('Metronome tick');
        }, interval);
    }

    function stopMetronome() {
        clearInterval(metronomeInterval);
    }

    // Event Listeners
    // fileInput.addEventListener('change', (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         loadPDF(file);
    //     }
    // });

    document.getElementById('upload-btn').addEventListener('click', () => {
        const file = fileInput.files[0];
        console.log(file)
        if (file) {
            loadPDF(file);
        }
    });

    startMetronomeButton.addEventListener('click', startMetronome);
    stopMetronomeButton.addEventListener('click', stopMetronome);

    // Additional functions for PDF processing and highlighting will be added here
});
