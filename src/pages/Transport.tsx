import styles from "./pages.module.css";
const Transport = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.planeSection}>
          <div>
            <h2>Fly</h2>
            <p>
              Det finnes flere muligheter for å komme seg til Chianti og Palagio
              di Panzano. Hva du velger avhenger av hvor mye penger du ønsker å
              bruke på flybilletter og om det er ønskelig å fly direkte eller
              ikke. Vi anbefaler å se på flybilletter ett år i forveien for best
              mulig pris. Det vil si at du burde begynne å sjekke priser fra
              August 2025. Vi vet at flere planlegger å utvide reisen, enten med
              ekstra dager i forkant eller etterkant.
            </p>
            <p>
              Hvis du ønsker å være igjen en eller flere dager så dette
              oppholdet bookes på egenhånd. Ta forbehold om at det vi skriver om
              flytider, direkte fly/mellomlandinger og priser kan endre seg. Vi
              har kun sjekket SAS, Norwegian og KLM. NB! Husk at bryllupshelgen
              varer fra torsdag 26.august til søndag 29.august, altså tre netter
              på Palagio di Panzano.
            </p>
          </div>
          <div>
            <div>
              <h3>Fly til Firenze</h3>
              Firenze er den nærmeste byen og flyplassen til La Veronica Resort.
              Fra flyplassen tar det ca. 40 minutter (med bil).
            </div>
            <div>
              <h3>Fly til Pisa eller Bologna</h3>
              Pisa og Bologna er de nest nærmeste flyplassene til La Veronica
              Resort. Fra flyplassen tar det ca. 1 time og 30 minutter (med
              bil).
            </div>
            <div>
              <h3>Fly til Roma</h3>
              Dette er flyplassen som ligger lengst unna. Noen planlegger
              sikkert en ferie før eller etter når man først skal reise til
              Italia. Fra Roma kan du enten leie bil, som er en ca. 3-3,5 timers
              kjøretur, eller ta direkte tog til Firenze som tar ca 1.5 timer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
