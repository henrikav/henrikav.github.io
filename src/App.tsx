import styles from "./pages/pages.module.css";
import { NavLink } from "react-router";
import romaBilde from "./assets/roma.png";
import bryllupBilde from "./assets/bryllup.png";
import ostmarkaBilde from "./assets/østmarka.jpg";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>Vi gifter oss i Italia og vil ha med deg!</h2>
          <p>
            Vi landet på Italia fordi vi ønsker en ferietur med våre nærmeste
            venner og familie. Bryllupet er rammen, men det viktigste er at vi
            er sammen. Vi inviterer dere derfor med på tre dager i Toscana fylt
            med god mat og vin, latter, sol og koselige stunder.
          </p>
          <div className={styles.pictureRow}>
            <img
              className={styles.pictureRowItem}
              src={romaBilde}
              alt={"Rome"}
            />
            <img
              className={styles.pictureRowItem}
              src={bryllupBilde}
              alt={"Bryllup"}
            />
            <img
              className={styles.pictureRowItem}
              src={ostmarkaBilde}
              alt={"Østmarka"}
            />
          </div>
        </div>
        <div>
          <h2>Påmelding</h2>
          <p>
            Vi håper veldig at du vil du bli med oss på denne feiringen! Si fra
            ved å klikke på knappen under og fylle ut skjemaet.{" "}
            <strong>
              Alle må fylle ut hvert sitt individuelle skjema innen 1. april.
            </strong>
          </p>
          <a
            href={"https://forms.gle/z8YCRX2XSHqkbCkW9"}
            target={"_blank"}
            rel="noreferrer"
          >
            <button>Meld deg på her</button>
          </a>
        </div>
        <div>
          <h2>Praktisk info og overnatting</h2>
          <p>
            For seremoni og bryllupsfeiring skal vi være på nydelige La Veronica
            Resort. Vi blir ca 40 stykk og dessverre er det ikke plass til
            overnatting for alle på selve eiendommen. Vi har ordnet booking på
            et hotell i gåavstand for gjestene dette gjelder. Informasjon om
            hvor man skal bo vil bli sendt ut til hver enkelt person. Les mer om
            det praktiske her:
          </p>
          <NavLink to={"praktisk"}>
            <button>Praktisk informasjon</button>
          </NavLink>
        </div>
        <div>
          <h2>Priser</h2>
          <p>
            Oppholdet vil koste totalt 3 500 kr per person. Dette inkluderer
            overnatting i 3 netter og frokost. Vi ønsker å betale for
            mesteparten av utgiftene, men det kan forekomme ekstra kostnader
            knyttet til alkohol og mat siden vi foreløpig ikke har full oversikt
            over kostnadsbildet. Vi kommer tilbake med mer informasjon dersom
            dette blir aktuelt.
          </p>
          <p>
            Beløpet kan overføres til kontonummer:{" "}
            <strong>9492.07.81572</strong>. Vennligst marker overføringen med
            navn. Det er ingen frist for overføringen, men for ryddighetsskyld
            ønsker vi at dette gjøres før avreise.
          </p>
        </div>
        <div>
          <h2>Gave</h2>
          <p>
            Vi vet at det blir kostbart for dere å bli med oss til Italia og av
            den grunn forventer vi ikke gaver. Den største gaven er at dere vil
            komme og feire med oss <span>&#10084;</span>
          </p>
          <p>
            Skulle det likevel være aktuelt å gi gave, ønsker vi oss penger til
            bryllupsreise. Dette kan overføres til:{" "}
            <strong>9492.07.81572</strong>
          </p>
        </div>
        <div>
          <h2>Kontakt</h2>
          <p>
            Har du spørsmål eller ønsker å kontakte oss om noe? Kontakt oss på
            telefon eller epost. Hvis du ønsker å holde tale eller annet type
            innlegg så kan dette avtales nærmere med våre toastmastere.
          </p>
          <div className={styles.kontaktGrid}>
            <div className={styles.kontaktColumn}>
              <h3>Brudeparet</h3>
              <div>
                <span className={styles.kontaktName}>Henrik Vedal</span>
                <br />
                <a href="tel:+4745256210">452 56 210</a>
                <br />
                <a href="mailto:henrikvedal@hotmail.com">
                  henrikvedal@hotmail.com
                </a>
              </div>
              <div>
                <span className={styles.kontaktName}>Maria Roheim</span>
                <br />
                <a href="tel:+4740631490">406 31 490</a>
                <br />
                <a href="mailto:mariaroheim@icloud.com">
                  mariaroheim@icloud.com
                </a>
              </div>
            </div>
            <div className={styles.kontaktColumn}>
              <h3>Toastmastere</h3>
              <div>
                <span className={styles.kontaktName}>Henrik Lilleengen</span>
                <br />
                <a href="tel:+4799425788">994 25 788</a>
                <br />
                <a href="mailto:henrik@lilleengen.io">henrik@lilleengen.io</a>
              </div>
              <div>
                <span className={styles.kontaktName}>Emma Valen</span>
                <br />
                <a href="tel:+4748100263">481 00 263</a>
                <br />
                <a href="mailto:emma@autostrada.com">emma@autostrada.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
