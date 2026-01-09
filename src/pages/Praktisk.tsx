import styles from "./pages.module.css";
import vinBilde from "../assets/vin.png";
import planteBilde from "../assets/plante.png";
import brodBilde from "../assets/brød.png";
import middagBilde from "../assets/middag.png";
import dressCodeMenn from "../assets/dresscode_menn.png";
import dressCodeKvinner from "../assets/dresscode_damer.png";
import bedBilde from "../assets/bed.avif";
import tableBilde from "../assets/table.avif";
import poolBilde from "../assets/pool.avif";

const Praktisk = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>Hvor skal vi?</h2>
          <p>
            <strong>Sted:</strong> La Veronica Resort
          </p>
          <p>
            <strong>Adresse:</strong> Località Collegalle, 9, 50022 Greve in
            Chianti FI, Italia
          </p>
          <p>
            <strong>Opphold:</strong> Vi har booket opphold for alle gjester. Ca
            30 stykk vil bo på La Veronica Resort og resterende gjester vil bo
            på leilighetshotellet Agriturismo Fattoria Santo Stefano, som er i
            gåavstand fra eiendommen. Alle gjester vil få informasjon om hvor de
            skal overnatte i god tid i forveien.
          </p>
          <p>
            Les mer om resorten her:{" "}
            <a
              href="https://www.laveronicaresort.com/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.laveronicaresort.com/
            </a>
          </p>
          <div className={styles.pictureRow}>
            <img
              className={styles.pictureRowItem}
              src={bedBilde}
              alt={"Soverom"}
            />
            <img
              className={styles.pictureRowItem}
              src={poolBilde}
              alt={"Basseng"}
            />
            <img
              className={styles.pictureRowItem}
              src={tableBilde}
              alt={"Spisebord"}
            />
          </div>
        </div>

        <div className={styles.programSection}>
          <h2>Program</h2>
          <p>
            Overordnet program ser foreløpig slik ut. Innsjekk er torsdag kl
            15:00 på La Veronica Resort og Fra kl. 14:00 til kl. 19:00 på
            hotellet. Vi vil ankomme rundt kl 17:00 på torsdag. Det vil ikke
            være noe opplegg denne dagen. Restauranttilbudet i nærheten av
            eiendommen er begrenset. Vi vil komme tilbake med mer informasjon om
            mulige steder å spise i nærheten etter hvert. Hvis man ankommer
            tidlig kan vi anbefale å ta middagen i Firenze før man tar turen opp
            til La Veronica Resort.
          </p>
          <table>
            <thead>
              <tr>
                <th>Dag</th>
                <th>Innhold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Torsdag 27. august</td>
                <td>
                  Ankomst og innsjekk. Egentid. Gjestene må ordne bespisning
                  selv. Ingen felles aktiviteter denne dagen.
                </td>
              </tr>
              <tr>
                <td>Fredag 28. august</td>
                <td>Felles lunsj, middag, bading og bli-kjent opplegg.</td>
              </tr>
              <tr>
                <td>Lørdag 29. august</td>
                <td>
                  Felles lunsj. Rigging og pyntning. Felles middag, seremoni og
                  bryllupsfest.
                </td>
              </tr>
              <tr>
                <td>Søndag 30. august</td>
                <td>
                  Utsjekk og avreise. Ingen felles aktiviteter denne dagen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.dressCodeGrid}>
          <div>
            <h2>Dresscode</h2>
            <p>
              Vi stiller ingen strenge krav til dresscode på bryllupet, men vi
              ønsker at gjestene bruker dress og kjole under selve seremonien.
              Siden vi er i Toscana i august så vil det høyst sannsynlig være
              ganske varmt. En lindress med åpen skjorte er et fint alternativ
              om man ikke orker vanlig dress og slips. For damer er en lett
              sommerkjole perfekt. Før og etter seremonien er det helt fritt hva
              man vil gå i.
            </p>
            <p>
              Er du usikker på noe rundt dette så er det selvfølgelig bare å
              spørre!
            </p>
          </div>
        </div>
        <div>
          <h2>Reise og transport</h2>
          <p>
            Vi reiser torsdag 27. august 11:55 fra Gardermoen til Bologna. Denne
            flyplassen ligger ca 1.5t unna eiendommen. Det er også mulig å fly
            til Pisa som ligger ca 1.5t unna eiendommen. Eventuelt kan man fly
            til Roma og ta tog. Velger dere sistnevnte anbefaler vi å bestille
            togbilletter i god tid i forveien grunnet pris. Det er også mulig å
            fly til Firenze, men det finnes kun direktefly hit på lørdager.
            Firenze er ca 40 minutter med bil unna eiendommen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Praktisk;
