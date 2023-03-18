function showResultInDomKvadrat() {
    const sideOfASquare = document.getElementById("dlinaStoroniKvadrata").value;
    const resultSquare = squareСalculation(sideOfASquare);
    document.getElementById("ploschadKvadrata").innerHTML = `
    <div>Площадь квадрата равна ${resultSquare}</div>`
}

function showResultInDomPriamougolnika() {
    const sideOfARectangle = document.getElementById("pervayaStoronaPriamougolnika").value;
    const sideOfARectangleTwo = document.getElementById("drugayaStoronaPriamougolnika").value;
    const resultRectangle = rectangleСalculation(sideOfARectangle, sideOfARectangleTwo);
    document.getElementById("ploschadPriamougolnika").innerHTML = `
    <div>Площадь прямоугольника равна ${resultRectangle}</div>`
}

function showResultInDomParalelograma() {
    const sideOfAParallelogram = document.getElementById("dlinaStoronyParalelograma").value;
    const hightOfAParallelogram = document.getElementById("dlinaVisotyParalelograma").value;
    const resultParallelogram = parallelogramСalculation(sideOfAParallelogram, hightOfAParallelogram);
    document.getElementById("ploschadParalelograma").innerHTML = `
    <div>Площадь паралелограма равна ${resultParallelogram}</div>`
}

function showResultInDomRomba() {
    const sideOfARhombus = document.getElementById("dlinaStoronyRomba").value;
    const hightOfARhombus = document.getElementById("dlinaVisotyRomba").value;
    const resultParallelogram = parallelogramСalculation(sideOfARhombus, hightOfARhombus);
    document.getElementById("ploschadRomba").innerHTML = `
    <div>Площадь ромба равна ${resultParallelogram}</div>`
}