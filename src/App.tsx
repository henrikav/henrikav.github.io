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
            Som dere sikkert har fått med dere, klarer vi sjelden å sitte stille
            for lenge. Enten er det på med fjellsko og ut i norsk skog og mark,
            eller reise et varmt sted med solbriller og en drink i hånda. Så da
            vi skulle planlegge bryllup, var det ganske åpenbart at vi ikke kom
            til å holde oss hjemme. Valget falt (helt tilfeldig, selvfølgelig)
            på Italia – landet som har alt vi liker: god mat, god vin, varme
            kvelder og en atmosfære som skriker romantikk. Så nå håper vi du vil
            bli med oss til vakre Toscana, der vi skal feire kjærligheten – med
            god mat, varme kvelder og alt det Italia har å by på.
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
            <strong>Alle må fylle ut hvert sitt individuelle skjema.</strong>
          </p>
          <a href={"https://vg.no"} target={"_blank"} rel="noreferrer">
            <button>Meld deg på her</button>
          </a>
        </div>
        <div>
          <h2>Praktisk info og overnatting</h2>
          <p>
            For seremoni og bryllupsfeiring skal vi være på den nydelige
            vingården Palagio di Panzano i Chianti. Vi blir ca 40 stykk og
            dessverre er det ikke plass til overnatting for alle på vingården.
            Vi har ordnet booking på et hotell i nærheten for disse dette
            gjelder. Informasjon om hvor man skal bo vil bli sendt ut til hver
            enkelt person. Les mer om det praktiske her:
          </p>
          <NavLink to={"praktisk"}>
            <button>Praktisk informasjon</button>
          </NavLink>
        </div>
        <div>
          <h2>Transport og reise</h2>
          <p>
            Det er mange måter å komme seg til Italia på. Er du usikker på
            hvilken reiserute du skal ta så har vi kommet med litt tips og annen
            informasjon rundt dette her:
          </p>
          <NavLink to={"transport"}>
            <button>Transport og reise</button>
          </NavLink>
        </div>
        <div>
          <h2>Gave</h2>
          <p>
            Vi har full forståelse for at det blir kostbart med reise og
            opphold. Av den grunn forventer vi ikke gaver. Den største gaven er
            at du vil komme og feire med oss {"<3"}
          </p>
          <p>
            Skulle det likevel være aktuelt for deg å gi gave ønsker vi oss
            penger til bryllupsreise. Dette kan overføres til: 1234 1234 1234
            1234
          </p>
        </div>
        <div>
          <h2>Kontakt</h2>
          <p>
            Har du spørsmål eller ønsker å kontakte oss om noe? Kontakt oss på
            telefon eller epost. Hvis du ønsker å holde tale eller annet type
            innlegg så kan dette avtales nærmere med toastmastere.
          </p>
          <br />
          <div className={styles.kontaktInfo}>
            <div>
              <h3>Til oss</h3>
              <p>
                <strong>Henrik:</strong> 1234 / hei@hei.no
              </p>
              <p>
                <strong>Maria:</strong> 1234 / hei@hei.no
              </p>
            </div>
            <div>
              <h3>Toastmastere</h3>
              <p>
                <strong>Person 1: </strong> 1234 / hei@hei.no
              </p>
              <p>
                <strong>Person 2: </strong> 1234 / hei@hei.no
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
