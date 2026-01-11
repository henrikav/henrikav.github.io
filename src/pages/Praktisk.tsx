import styles from "./pages.module.css";
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
            <strong>Bryllupssted:</strong> La Veronica Resort
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
        <div>
          <h2>Transport</h2>
          <p>
            Hver enkelt gjest ordner selv med transport til og fra Italia. Vi
            anbefaler å fly til Firenze hvis man har mulighet, eventuelt Pisa
            eller Bologna da disse er de nærmeste flyplassene. Under kan dere se
            en oversikt over de nærmeste flyplassene og kjøredistanse til
            lokasjonen for bryllup og opphold.
          </p>
          <ul>
            <li>
              <strong>Firenze (FLR):</strong> ca. 40 min{" "}
              <em>
                (direktefly til Firenze kan være begrenset og varierer med
                sesong)
              </em>
            </li>
            <li>
              <strong>Bologna (BLQ):</strong> ca. 1 t 30 min
            </li>
            <li>
              <strong>Pisa (PSA):</strong> ca. 1 t 30 min
            </li>
            <li>
              <strong>Roma (FCO):</strong> ca. 3–3,5 t med bil, eller tog til
              Firenze på ca. 1 t 30 min{" "}
              <em>(bestill tog tidlig for bedre pris)</em>
            </li>
          </ul>

          <p>
            For de som leier bil anbefaler vi å ikke velge for lave kjøretøy
            ettersom siste rest av veien til eiendommene går på grusvei av
            begrenset kvalitet.
          </p>
        </div>

        <div className={styles.programSection}>
          <h2>Program</h2>
          <p>
            Overordnet program ser foreløpig slik ut. Mer detaljert tidsplan vil
            komme etter hvert.
          </p>
          <p>
            Innsjekk er torsdag fra kl 15:00 på La Veronica Resort og fra kl.
            14:00 på Agriturismo Fattoria Santo Stefano. Vi vil ankomme rundt kl
            17:00 på torsdag og det vil ikke være noe opplegg denne dagen.
          </p>
          <p>
            Restauranttilbudet i nærheten av eiendommen er begrenset. Vi vil
            komme tilbake med mer informasjon om mulige steder å spise i
            nærheten etter hvert. Med tanke på at det ikke blir noe felles
            opplegg på torsdagen kan vi anbefale å ta middagen i Firenze om man
            har mulighet.
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
                  Ankomst, innsjekk og egentid. Ingen felles aktiviteter denne
                  dagen.
                </td>
              </tr>
              <tr>
                <td>Fredag 28. august</td>
                <td>
                  Felles lunsj, felles middag, bading og bli-kjent opplegg.
                </td>
              </tr>
              <tr>
                <td>Lørdag 29. august</td>
                <td>
                  Felles lunsj, rigging og pyntning, felles middag, seremoni og
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
              Vi stiller ingen krav til dresscode generelt på bryllupet, men vi
              ønsker at gjestene bruker dress og kjole under selve seremonien.
              Siden vi er i Toscana i august så vil det høyst sannsynlig være
              ganske varmt. En lindress med åpen skjorte kan være et fint
              alternativ om man ikke orker vanlig dress og slips.
            </p>
            <p>
              Er du usikker på noe rundt dette så er det selvfølgelig bare å
              spørre!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Praktisk;
