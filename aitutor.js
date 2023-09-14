function laadheader(){
    document.getElementById("hoofdmenu").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">ATA AI Tutor</div>
    ${rechterkolom()}
    `;
}
function laadknoppenstartpagina(){
    document.getElementById("knoppenstartpagina").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        <div class="row">
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('samenvatting.html')">Samenvatting Cursus</button></div>
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('quiz.html')">ExamenTraining Meerkeuze</button></div>
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('chatraw.html')">ChatGPT Raw</button></div>
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('onderwerpen.html')">AI antwoorden op de belangrijkste onderwerpen</button></div>
        </div>
    </div>
    ${rechterkolom()}
    `;
}
function laadresponsehistory(){
    document.getElementById("chathistory").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        <details open>
            <summary>Waarom zijn koeien rood</summary>
            Dit is de verborgen inhoud die zichtbaar wordt wanneer je op de samenvatting klikt.
          </details>
          <details open>
            <summary>Waarom zijn koeien blauw</summary>
            Dit is de verborgen inhoud die zichtbaar wordt wanneer je op de samenvatting klikt.
          </details>
          
    </div>
    ${rechterkolom()}
    `;
}
function linkerkolom(){
    return `<div class="col-lg-2"></div>`;
}
function rechterkolom(){
    return `<div class="col-lg-2"></div>`;
}
function naarpagina(paginanaam){
    document.location = paginanaam;
}
function laadterugknop(){
    document.getElementById("knopterug").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        <button class="btn btnown" onclick="naarpagina('index.html')">terug</button>
    </div>
    ${rechterkolom()}
    `;
}
function laadquiz(){
    document.getElementById("meerkeuzevraag").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        <div>Vraag1</div>
    </div>
    ${rechterkolom()}
    `;
}
function laadchatraw(){
    document.getElementById("chatraw").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        <div>chatraw</div>
    </div>
    ${rechterkolom()}
    `;
}
function laadonderwerpen(){
    document.getElementById("onderwerpen").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        <div>onderwerpen</div>
    </div>
    ${rechterkolom()}
    `;
}
function laadsamenvatting(){
    document.getElementById("samenvatting").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        <div>samenvatting</div>
    </div>
    ${rechterkolom()}
    `;
}
