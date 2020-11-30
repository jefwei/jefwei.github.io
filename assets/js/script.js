function showSolution() {
        var s = document.getElementById("solution");
        s.style.display = "block";
        s.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = showSolution;