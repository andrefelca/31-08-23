function calculateSensitivity() {
    const dpi = parseFloat(document.getElementById('dpi').value);
    const ingameSens = parseFloat(document.getElementById('ingame-sens').value);
    const edpi = dpi * ingameSens;
    document.getElementById('edpi-result').textContent = edpi.toFixed(2);
}
