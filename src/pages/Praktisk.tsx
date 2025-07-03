import styles from "./pages.module.css";
import vinBilde from "../assets/vin.png";
import planteBilde from "../assets/plante.png";
import brodBilde from "../assets/brød.png";
import middagBilde from "../assets/middag.png";

const Praktisk = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Praktisk</h2>
        <p>
          For seremoni og bryllupsfeiring skal vi være på den nydelige vingården
          Palagio di Panzano i Chianti, Italia. Det ligger midt i hjertet av det
          vakre toskanske landskapet, omgitt av bølgende åser, vinranker og
          olivenlunder så langt øyet kan se. Denne historiske eiendommen fra
          1600-tallet har blitt restaurert med kjærlighet og byr på en autentisk
          italiensk atmosfære med steinhus, sjarmerende gårdsrom og enestående
          utsikt over Chianti-dalen. Her kombineres tidløs eleganse med rustikk
          sjarm – en perfekt ramme for å feire kjærligheten.
        </p>
        <div className={styles.pictureSection}>
          <div className={styles.pictureRow}>
            <img className={styles.pictureRowItem} src={vinBilde} alt="Vin" />
            <img
              className={styles.pictureRowItem}
              src={planteBilde}
              alt="Plante"
            />
            <img className={styles.pictureRowItem} src={brodBilde} alt="Brød" />
          </div>
          <p>
            Her møtes det tradisjonelle og det moderne i en avslappet atmosfære.
            Franco tar deg gjerne med ned i vinkjelleren for en smaksopplevelse
            blant fat og flasker, mens Monia kan fortelle deg om gårdens
            historie, livet i Panzano og hvordan de forener gamle tradisjoner
            med en ny, bærekraftig vinproduksjon. Dette er stedet for deg som
            ønsker å oppleve Toscana på ekte – med åpne dører, varme smil,
            fantastisk natur og kort vei til landsbyens små restauranter,
            markeder og de sjarmerende gatene i hjertet av Chianti.
          </p>

          <p>
            Les mer om vingården her:{" "}
            <a
              href="https://palagiodipanzano.com/en/"
              target="_blank"
              rel="noreferrer"
            >
              https://palagiodipanzano.com/en/
            </a>
          </p>
          <img src={middagBilde} alt="Middag" />
        </div>
        <p>Her kommer program</p>
        <p>Her kommer info om dresscode</p>
        <p>Her kommer pakkeliste for oppholdet</p>
      </div>
    </div>
  );
};

export default Praktisk;
