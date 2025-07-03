import styles from "./pages.module.css";
const Transport = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>Fly</h2>
          Det finnes flere muligheter for å komme seg til Chianti og Palagio di
          Panzano. Hva du velger avhenger av hvor mye penger du ønsker å bruke
          på flybilletter og om det er ønskelig å fly direkte eller ikke. Vi
          anbefaler å se på flybilletter ett år i forveien for best mulig pris.
          Det vil si at du burde begynne å sjekke priser fra August 2025. Vi vet
          at flere planlegger å utvide reisen, enten med ekstra dager i forkant
          eller etterkant. Hvis du ønsker å være igjen en eller flere dager så
          dette oppholdet bookes på egenhånd. Ta forbehold om at det vi skriver
          om flytider, direkte fly/mellomlandinger og priser kan endre seg. Vi
          har kun sjekket SAS, Norwegian og KLM. NB! Husk at bryllupshelgen
          varer fra torsdag 26.august til søndag 29.august, altså tre netter på
          Palagio di Panzano.
        </div>
        <div>
          <div>
            <h3>Fly til Firenze</h3>
            Firenze er den nærmeste byen og flyplassen til Palagio di Panzano.
            Fra flyplassen tar det ca. 1 time og 5 minutter (med bil).
          </div>
          <div>
            <h3>Fly til Pisa</h3>
            Pisa er den nest nærmeste flyplassen til Palagio di Panzano. Fra
            flyplassen tar det ca. 1 time og 20 minutter (med bil). Fra Oslo ser
            det ut til at det noen dager er direkte fly og noen dager ikke.
          </div>
          <div>
            <h3>Fly til Roma</h3>
            Dette er flyplassen som ligger lengst unna. Noen planlegger sikkert
            en ferie før eller etter når man først skal reise til Italia. Per nå
            ser vi at billetter til Roma er det rimeligste. Fra Roma kan du
            enten leie bil, som er en ca. 3-3,5 timers kjøretur, eller ta tog
            til Firenze S.M Novella eller Firenze Aeroporto og leie bil derfra.
          </div>
        </div>
        <div>
          <h2>Tog</h2>
          Tar du fly til Roma, anbefaler vi å ta tog fra Roma til Firenze. Det
          går jevnlig tog tur/retur denne veien. Togreisen kan vare fra 1,5-3,5
          timer alt ettersom hva du velger. Prisen på togbillett varierer fra
          ca. 20-40 euro. Her er et par nettsider vi anbefaler for å bestille
          togbilletter på:
          <ul>
            <li>
              <a
                target={"_blank"}
                href={
                  "https://www.thetrainline.com/nb/togtider/roma-til-firenze"
                }
                rel="noreferrer"
              >
                https://www.thetrainline.com/nb/togtider/roma-til-firenze
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                href={"https://www.trenitalia.com/it.html"}
                rel="noreferrer"
              >
                https://www.trenitalia.com/it.html
              </a>
            </li>
          </ul>
          <p>
            Henrik og Maria vil ikke være tilgjengelig for å hente på torsdagen,
            så dette må avtales med noen andre om dere ikke leier bil selv.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transport;
