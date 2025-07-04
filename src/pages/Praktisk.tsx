import styles from "./pages.module.css";
import vinBilde from "../assets/vin.png";
import planteBilde from "../assets/plante.png";
import brodBilde from "../assets/brød.png";
import middagBilde from "../assets/middag.png";
import dressCodeMenn from "../assets/dresscode_menn.png";
import dressCodeKvinner from "../assets/dresscode_damer.png";

const Praktisk = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>Om stedet</h2>
          <p>
            For seremoni og bryllupsfeiring skal vi være på den nydelige
            vingården Palagio di Panzano i Chianti, Italia. Det ligger midt i
            hjertet av det vakre toskanske landskapet, omgitt av bølgende åser,
            vinranker og olivenlunder så langt øyet kan se. Denne historiske
            eiendommen fra 1600-tallet har blitt restaurert med kjærlighet og
            byr på en autentisk italiensk atmosfære med steinhus, sjarmerende
            gårdsrom og enestående utsikt over Chianti-dalen. Her kombineres
            tidløs eleganse med rustikk sjarm – en perfekt ramme for å feire
            kjærligheten.
          </p>
          <div className={styles.pictureSection}>
            <div className={styles.pictureRow}>
              <img className={styles.pictureRowItem} src={vinBilde} alt="Vin" />
              <img
                className={styles.pictureRowItem}
                src={planteBilde}
                alt="Plante"
              />
              <img
                className={styles.pictureRowItem}
                src={brodBilde}
                alt="Brød"
              />
            </div>
            <div>
              <p>
                Her møtes det tradisjonelle og det moderne i en avslappet
                atmosfære. Verten Franco kan ta deg med i vinkjelleren for en
                smaksopplevelse blant fat og flasker, mens Monia kan fortelle
                deg om gårdens historie, livet i Panzano og hvordan de forener
                gamle tradisjoner med en ny, bærekraftig vinproduksjon. Dette er
                stedet for deg som ønsker å oppleve Toscana på ekte – med åpne
                dører, varme smil, fantastisk natur og kort vei til landsbyens
                små restauranter, markeder og de sjarmerende gatene i hjertet av
                Chianti.
              </p>
              <p>
                Totalt blir vi 40 gjester i bryllupet, med plass til 18 stykk på
                vingården. Det er heldigvis kort avstand til nærmeste landsby
                hvor vi har booket hotellrom til resterende gjester. Informasjon
                om booking og andre ting vil bli tilsendt på epost. På bildet
                under kan du se eksempel på hvordan vi ser for oss bespisningen
                på lørdagen. Skulle det mot formodning komme regn så vil det
                uansett være installert store partytelt som backup. Før middag
                vil det også være sittegrupper i partyteltene for de som vil ha
                en pause fra solen. Teltene vil også benyttes som dansegulv
                senere på kvelden.
              </p>
            </div>
            <img src={middagBilde} alt="Middag" />

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
          </div>
        </div>
        <div className={styles.programSection}>
          <h2>Program</h2>
          <p>
            Foreløping overordnet program ser slik ut. Mer detaljer og
            klokkeslett kommer senere.
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
                <td>Ankomst og innsjekk. Egentid.</td>
              </tr>
              <tr>
                <td>Fredag 28. august</td>
                <td>
                  Vinsmaking og omvisning på vingården. Grilling, bading og
                  bli-kjent opplegg.
                </td>
              </tr>
              <tr>
                <td>Lørdag 29. august</td>
                <td>
                  Felles lunsj. Rigging og pyntning. Felles middag, seremoni og
                  bryllupsfest.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.dressCodeGrid}>
          <div>
            <h2>Dresscode</h2>
            <p>
              Vibben er "Tuscany wedding". Det vil si at du egentlig kan gå med
              det du vil. Men siden vi er på en idyllisk vingård i Toscana så er
              det fint å gå for fine sommerfarger, men dette er helt opp til
              deg. Her er noen forslag til hva det kan være:
            </p>
            <p>
              <strong>Damer</strong>: Fargerike eller blomstrete kjoler.
            </p>
            <p>
              <strong>Menn</strong>: Dress i farger svart, grå, blå eller
              linfarger.
            </p>
            <p>
              Er du usikker på noe rundt dette så er det selvfølgelig bare å
              spørre!
            </p>
          </div>
          <img
            className={styles.dressCodePicture}
            src={dressCodeMenn}
            alt={"Dresscode menn"}
          />
          <img
            className={styles.dressCodePicture}
            src={dressCodeKvinner}
            alt={"Dresscode kvinner"}
          />
          <div>
            <h2>Fotograf og bilder underveis</h2>
            <p>
              Det vil være fotograf på lørdag, selve bryllupsdagen. Vi setter
              stor pris på om folk husker å ta bilder og videoer underveis.
              Likevel ønsker vi under innmarsjen til seremonien og under vielsen
              at færrest mulig filmer og tar bilder i hensyn til fotograf, så
              fotograf får best mulige bilder.
            </p>

            <p>
              Sitt ytterst til siden eller bak om du ønsker å ta bilde eller
              filme under vielsen. Om vi har bedt noen i oppgave om å ta bilder
              er det en annen sak. Under utmarsjen går det fint hvis dere ønsker
              å ta bilde eller filme.
            </p>
          </div>
        </div>

        <div>
          <h2>Pakkeliste</h2>
          Du velger helt selv hva du vil ha med, men vi legger ved en oversikt
          over de viktigste tingene som burde pakkes til oppholdet.
          <ul>
            <li>Dress/kjole</li>
            <li>Sommerklær</li>
            <li>
              Varme plagg for eventuelle kjølige sommerkvelder (genser, bukse,
              jakke)
            </li>
            <li>Sandaler a là f.eks. Birkenstocks</li>
            <li>Solbriller</li>
            <li>Solkrem</li>
            <li>Badetøy</li>
            <li>Toalettsaker</li>
            <li>Håndkle</li>
            <li>Vannflaske</li>
            <li>Solhatt/caps</li>
            <li>
              Treningstøy og treningssko (for de som vil bli med på løpetur)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Praktisk;
