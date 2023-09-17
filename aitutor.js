function laadheader(){
    document.getElementById("hoofdmenu").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8 titelheader">
        <div class="row">
        <div class="col-lg-6"><img src="logo.png"></div>
        <div class="col-lg-6"><h1>ATA AI Tutor</h1></div>
        </div>
    </div>
    ${rechterkolom()}
    `;
}
function laadknoppenstartpagina(){
    document.getElementById("knoppenstartpagina").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        <div class="row">
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('samenvatting.html')">Training Summary</button></div>
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('quiz.html')">Training Quiz</button></div>
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('chatraw.html')">Training Chat Raw</button></div>
        <div class="col-lg-3"><button class="btn btnown" onclick="naarpagina('onderwerpen.html')">Training Topics</button></div>
        </div>
    </div>
    ${rechterkolom()}
    `;
}
function laadresponsehistory(){
    document.getElementById("chathistory").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8">
        <div class="row zoekbalk">
            Zoek in geschiedenis: <input>
        </div>
        ${toonChatTabel('Waarom zijn koeien rood','Omdat rood een goede kleur is')}
        ${toonChatTabel('Waarom zijn koeien geel','Omdat geel een prima kleur is')}
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
    <div class="col-lg-8 paginaBody">
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
    <div class="col-lg-8 paginaBody">
        ${toonPaginaTitel("Chat Raw")}
        <div class="row">
        <textarea class="form-control"></textarea>
        </div>
        <div>
        ${toonChatTabel('Waarom zijn koeien rood','Omdat rood een goede kleur is')}
        ${toonChatTabel('Waarom zijn koeien rood','Omdat rood een goede kleur is')}
        </div>

    </div>
    ${rechterkolom()}
    `;
}
function laadonderwerpen(){
    document.getElementById("onderwerpen").innerHTML = `
    ${linkerkolom()}
    <div class="col-lg-8 paginaBody">
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
    <div class="col-lg-8 paginaBody">
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
    return `<h1 class="paginaTitel">${paginaTitel}</h1>`;
}
function toonChatTabel(vraag,antwoord){
    return `
    <div class="row zoekbalk">
        <table class="table">
            <tr>
                <th>${vraag}</th>
            </tr>
            <tr>
                <td>${antwoord}</td>
            </tr>
        </table>
    </div>
    `
}