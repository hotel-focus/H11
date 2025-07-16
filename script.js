document.querySelector(".story").addEventListener("click", story);
document.querySelector(".faciliteiten").addEventListener("click", faciliteiten);
document.querySelector(".ondernemen").addEventListener("click", ondernemen);
document.querySelector(".parking").addEventListener("click", parking);
document.querySelector(".wifi").addEventListener("click", wifi);
function story() {
    const container = document.querySelector(".container");
    const element = `default`;
    container.innerHTML = element;
    document.querySelector(".story").addEventListener("click", story);
}
function faciliteiten() {
    const container = document.querySelector(".container");
    const element = `<div class="tab">
                        <button id="tab" class="tv">TV</button>
                        <button id="tab" class="ontbijt">Ontbijt</button>
                        <button id="tab" class="airco">Airco</button>
                        <button id="tab" class="lift">Lift</button>
                    </div>`;
    container.innerHTML = element;
    document.querySelector(".ontbijt").addEventListener("click", ontbijt);
    document.querySelector(".airco").addEventListener("click", airco);
    document.querySelector(".tv").addEventListener("click", tv);
    document.querySelector(".lift").addEventListener("click", lift);
    document.querySelector(".faciliteiten").addEventListener("click", faciliteiten);
}
// items in tabmenu faciliteiten
function tv() {
    const container = document.querySelector(".container");
    const element = `<h3 style="margin-left: 10px;">Televisie</h3>
    <p style="margin-left: 10px;">Elke kamer beschikt over een digitale flatscreen televisie met meerdere kanalen. <br>
        Op sommige TV's zitten de beschikbare zenders in de hogere kanalen.<br>Mocht je een slechte of geen
        ontvangst hebben, verhoog het kanaal stelselmatig met de 'P'-knop. <br>Ergens in de 20-tal zal de nummering
        herbeginnen vanaf 1. <br>Vanaf daar zijn alle digitale zenders beschikbaar
    </p>`;
    container.innerHTML = element;
    document.querySelector(".tv").addEventListener("click", tv);
}
function airco() {
    const container = document.querySelector(".container");
    const element = `<h3 style="margin-left: 10px;">Airco</h3>
    <p style="margin-left: 10px;">Gebruik altijd de afstandsbediening om de airconditioning te bedienen.</p>
    <h4 style="margin-left: 10px;margin-bottom: 0px;">Basishandelingen</h4>
    <ul style="margin-top: 0px;">
        <li>Gebruik de centraal geplaatste aan/uit knop om het apparaat aan of uit te zetten.</li>
        <li>Gebruik de pijltjestoetsen tussen 'TEMP' en de aan/uit-knop om de temperatuur hoger of lager te zetten.</li>
        <li>Gebruik de modus-knop aan de linkerkant om te schakelen tussen: auto - koel - droog - ventilator - warmte</li>
    </ul>
    <h4 style="margin-left: 10px;margin-bottom: 0px;">Luchtstroom instellingen</h4>
    <ul style="margin-top: 0px;">
        <li>Alle knoppen met betrekking tot de luchtstroominstellingen bevinden zich aan de rechterkant van de afstandsbediening</li>
        <li>Gebruik de FAN-knop om de snelheid van de ventilator te regelen.</li>
        <li>Gebruik de SWING-knop om de swing-operatie te starten/stoppen.</li>
    </ul>
    <h4 style="margin-left: 10px;margin-bottom: 0px;">Timerbewerkingen</h4>
    <ul style="margin-top: 0px;">
        <li>Alle knoppen met betrekking tot de timerfuncties bevinden zich aan de onderkant van de afstandsbediening.</li>
        <li>Gebruik de ON / OFF timer knop om aan te geven dat u wilt dat de airconditioning start of stopt. In de volgende stap kunt u de select-knop gebruiken om de tijd in te stellen.</li>
        <li>Om de slaapmodus te gebruiken, drukt u op de SLEEP-knop en vervolgens kunt u de SELECT-knop gebruiken om de tijd in te stellen totdat het apparaat stopt.</li>
    </ul>`;
    container.innerHTML = element;
    document.querySelector(".airco").addEventListener("click", airco)
}
function ontbijt() {
    const container = document.querySelector(".container");
    const element = `<h3 style="margin-left: 10px;">Ontbijt</h3>
    <p style="margin-left: 10px;">
        ONTBIJTBUFFET: Op het gelijkvloers kan u zich bedienen van een uitgebreid buffet. <br> 
        ma-vrij: 7:00 - 9:00 <br>
        zat-zon- en feestdagen: 8:00 - 10:00 <br> <br>
VROEG ONTBIJT: Moet u al vroeg de deur uit? We voorzien een snel self-service ontbijt. <br>
        ma-vrij: 5:00 - 7:00 <br>
        zat-zon- en feestdagen: 7:00 - 8:00 <br>
        Gelieve vooraf te reserveren en af te rekenen. <br><br>

Allergisch? Speciaal allergie-dieet is mogelijk op aanvraag.
</p>`;
    container.innerHTML = element;
    document.querySelector(".ontbijt").addEventListener("click", ontbijt)
}
function lift() {
    const container = document.querySelector(".container");
    const element = `<h3 style="margin-left: 10px;">Lift</h3>
    <p style="margin-left: 10px;">In Focus Hotel is de helft van de kamers bereikbaar met de lift. De andere kamers zijn bereikbaar met enkele trapjes. <br>Aan de ingang van Hotel Focus zijn er een paar treden. <br>Indien u met de rolstoel bent, kunt u deze treden overbruggen met het hellend vlak dat in de inkom staat.</p>`;
    container.innerHTML = element;
    document.querySelector(".lift").addEventListener("click", lift);
}
// einde items in tabmenu faciliteiten
function ondernemen() {
    const container = document.querySelector(".container");
    const element = `<h3 style="margin-left: 10px;">Duurzaamheid</h3>
    <h4 style="margin-left: 10px;margin-bottom: 5px;">Help ons om nog duurzamer te ondernemen door de volgende stappen te volgen</h4>
    <ul style="margin-left: 10px;margin-top: 0px;">
        <li>Alle kranen bevatten drinkbaar water.</li>
        <li>Enkel de handdoeken op de grond zullen vervangen worden.</li>
        <li>We poetsen met ecologisch afbreekbare schoonmaakproducten. Mocht u opmerkingen hebben i.v.m. hygiëne, laat ons dit weten.</li>
        <li>Doe het licht en de verwarming uit nadat je de kamer verlaat.</li>
        <li>Maak optimaal gebruik van ons ventilatiesysteem met warmterecuperatie en laat de ramen zoveel mogelijk gesloten om de balans niet te breken.</li>
    </ul>`;
    container.innerHTML = element;
    document.querySelector(".ondernemen").addEventListener("click", ondernemen);
}
function parking() {
    const container = document.querySelector(".container");
    const element = `<h3 class="park">Parkeren</h3>
                        <p class="park">Een garage voor uw wagen is beschikbaar op aanvraag: 15 euro/nacht.<br>
                            Een afgesloten fietsenstalling is gratis beschikbaar op aanvraag.<br>
                            Parkeren: Betalend 4€ per dag via app 4411 of <a href="https://www.kortrijk.be/parko" target="_blank">www.parko.be</a>.<br>
                            Gratis parkeren op zondag. Op werkdagen tussen 19u en 9u is het ook gratis.
                        </p>`;
    container.innerHTML = element;
    document.querySelector(".parking").addEventListener("click", parking);
}
function wifi() {
    const container = document.querySelector(".container");
    const element = `<h3 class="flex">Internet</h3>
                    <p class="flex">Elke kamer heeft gratis internet.</p>
                    <p class="flex">Naam WiFi: focus <br>
                        Wachtwoord: focus123</p>
                    <div class="flex">
                        <img src="./qrwififocus.png" height="200" width="200">
                    </div>`;
    container.innerHTML = element;
    document.querySelector(".wifi").addEventListener("click", wifi);
}
