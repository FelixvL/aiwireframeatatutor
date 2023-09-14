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
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('samenvatting.html')">AI Samenvatting</button></div>
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('quiz.html')">AI ExamenTraining</button></div>
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('chatraw.html')">AI Chat Raw</button></div>
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('onderwerpen.html')">AI Toelichting</button></div>
        </div>
    </div>
    ${rechterkolom()}
    `;
}
function laadresponsehistory(){
    document.getElementById("chathistory").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        Zoek in geschiedenis: <input>
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
        ${toonPaginaTitel("Quiz")}
        <div>Vraag1</div>
        <div>Antwoord A</div>
        <div>Antwoord B</div>
        <div>Antwoord C</div>
        <div>Antwoord D</div>
    </div>
    ${rechterkolom()}
    `;
}
function laadchatraw(){
    document.getElementById("chatraw").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        ${toonPaginaTitel("Chat Raw")}
        <div>
        <textarea></textarea>
        </div>
        <div>
         Waarom is er een blauwe kleur.<br>
         - Omdat rood niet genoeg was.
        </div>

    </div>
    ${rechterkolom()}
    `;
}
function laadonderwerpen(){
    document.getElementById("onderwerpen").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        ${toonPaginaTitel("Onderwerpen Uitleg")}
        <div>De volgende onderwerpen komen voor in uw cursus:
        <ul>
        <li>Java  - ${leguitknop()}</li>
        <li>SQL - ${leguitknop()}</li>
        </ul>
        </div>
    </div>
    ${rechterkolom()}
    `;
}
function laadsamenvatting(){
    document.getElementById("samenvatting").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        ${toonPaginaTitel("Samenvatting")}
        <div>De cursus gaat over programmeren</div>
    </div>
    ${rechterkolom()}
    `;
}
function leguitknop(){
    return `<button class="btn btnown">leg me meer uit</button>`
}
function toonPaginaTitel(paginaTitel){
    return `<h1>${paginaTitel}</h1>`;
}