import { FC } from 'react';
import { Accordion } from '@/components/system/accordion/Accordion';
import style from './LegalContainer.module.scss';
import { Container } from '@/components/system/containers/Containers';

const LegalContainer: FC = () => {
  return (
    <Container flow={'column'}>
      <div style={{ height: '100px' }}></div>
      <h1 className={style.title}>AGB</h1>

      <div className={style.introSection}>
        <p>
          <strong>Allgemeine Geschäftsbedingungen (AGB)</strong>
          <br />
          für Fahrradverkauf, Werkstattleistungen und Bikefitting
          <br />
          (Stand: 01.01.2026)
        </p>
      </div>

      <Accordion title="Geltungsbereich">
        <p>
          1. Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) regeln
          sämtliche Rechtsbeziehungen zwischen
          <strong>BIKESCHMIEDE GmbH</strong>, Gemeindehausplatz 13, 6048 Horw,
          Schweiz und seinen Kundinnen und Kunden betreffend:
        </p>
        <ul>
          <li>Verkauf von Fahrrädern, E-Bikes, Komponenten und Zubehör</li>
          <li>Reparatur-, Service- und Wartungsarbeiten</li>
          <li>Bikefitting- und Beratungsdienstleistungen</li>
        </ul>
        <p>
          2. Abweichende oder ergänzende Bedingungen des Kunden finden keine
          Anwendung, sofern ihrer Geltung nicht ausdrücklich schriftlich
          zugestimmt wurde.
        </p>
        <p>
          3. Mit Auftragserteilung oder Warenkauf anerkennt der Kunde diese AGB
          als verbindlich.
        </p>
      </Accordion>

      <Accordion title="Vertragsschluss">
        <p>
          1. Die Präsentation von Waren und Dienstleistungen stellt kein
          rechtlich bindendes Angebot dar.
        </p>
        <p>2. Ein Vertrag kommt zustande:</p>
        <ul>
          <li>
            bei Waren durch Annahme der Bestellung oder Übergabe der Ware,
          </li>
          <li>
            bei Werkstatt- oder Bikefitting-Leistungen durch Auftragsannahme.
          </li>
        </ul>
        <p>
          3. Kostenvoranschläge sind unverbindlich, sofern sie nicht
          ausdrücklich als verbindlich bezeichnet werden.
        </p>
      </Accordion>

      <Accordion title="Preise und Zahlungsbedingungen">
        <p>
          1. Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive der
          gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.
        </p>
        <p>
          2. Rechnungen sind nach Erhalt ohne Abzug zur Zahlung innerhalb der
          angegebenen Zahlungsfrist fällig.
        </p>
        <p>
          3. Bei Zahlungsverzug ist die BIKESCHMIEDE GmbH berechtigt,
          Verzugszins in gesetzlicher Höhe gemäss Art. 104 OR zu verlangen.
        </p>
      </Accordion>

      <Accordion title="Eigentumsvorbehalt">
        <p>
          1. Die Ware bleibt bis zur vollständigen Bezahlung Eigentum der
          BIKESCHMIEDE GmbH.
        </p>
        <p>
          2. Die BIKESCHMIEDE GmbH ist berechtigt, einen entsprechenden
          Eigentumsvorbehalt im zuständigen Register eintragen zu lassen.
        </p>
      </Accordion>

      <Accordion title="Gewährleistung (Sachmängel)">
        <p>
          1. Es gelten die gesetzlichen Bestimmungen des Schweizerischen
          Obligationenrechts (Art. 197 ff. OR), soweit nachfolgend nichts
          anderes geregelt ist.
        </p>
        <p>
          2. Der Kunde hat die Ware nach Erhalt unverzüglich zu prüfen und
          erkennbare Mängel sofort zu rügen (Art. 201 OR). Unterlässt der Kunde
          die Anzeige, gilt die Ware als genehmigt.
        </p>
        <p>
          3. Bei berechtigter Mängelrüge leistet die BIKESCHMIEDE GmbH nach
          eigener Wahl: Nachbesserung, Ersatzlieferung, Minderung oder
          Wandelung.
        </p>
        <p>
          4. Von der Gewährleistung ausgeschlossen sind Schäden infolge:
          natürlicher Abnutzung, unsachgemässer Behandlung, mangelnder Wartung,
          Eingriffen oder Änderungen durch Dritte sowie Nichtbeachtung von
          Herstellerangaben.
        </p>
      </Accordion>

      <Accordion title="Werkstattleistungen">
        <p>
          1. Werkstattleistungen werden nach anerkannten technischen Standards
          und mit branchenüblicher Sorgfalt erbracht.
        </p>
        <p>
          2. Der Kunde ist verpflichtet, auf bekannte Vorschäden oder technische
          Besonderheiten hinzuweisen.
        </p>
        <p>
          3. Für Schäden infolge verdeckter Mängel, Materialermüdung oder
          altersbedingter Verschleisserscheinungen wird keine Haftung
          übernommen, sofern die BIKESCHMIEDE GmbH kein Verschulden trifft.
        </p>
        <p>
          4. Der BIKESCHMIEDE GmbH steht für ihre Forderungen ein
          Retentionsrecht gemäss Art. 895 ZGB an den in ihren Besitz gelangten
          Gegenständen zu.
        </p>
      </Accordion>

      <Accordion title="Bikefitting">
        <p>
          1. Bikefitting ist eine individuelle ergonomische Beratungs- und
          Anpassungsleistung.
        </p>
        <p>
          2. Der Kunde bestätigt, dass er gesundheitlich in der Lage ist,
          Fahrrad zu fahren, sofern nichts anderes ausdrücklich mitgeteilt
          wurde.
        </p>
        <p>
          3. Der Kunde verpflichtet sich, bestehende gesundheitliche
          Einschränkungen oder Beschwerden vor Beginn der Dienstleistung
          offenzulegen.
        </p>
        <p>
          4. Das Bikefitting ersetzt keine medizinische oder therapeutische
          Beratung.
        </p>
        <p>
          5. Eine Garantie für Leistungssteigerung, Beschwerdefreiheit oder
          sportlichen Erfolg wird ausdrücklich ausgeschlossen.
        </p>
        <p>
          6. Erfolgt die Durchführung trotz gesundheitlicher Einschränkungen
          ohne ärztliche Abklärung, handelt der Kunde eigenverantwortlich.
        </p>
      </Accordion>

      <Accordion title="Haftung">
        <p>
          1. Die BIKESCHMIEDE GmbH haftet für Schäden, die durch vorsätzliches
          oder grobfahrlässiges Verhalten verursacht wurden.
        </p>
        <p>
          2. Eine Haftung für leichte Fahrlässigkeit wird – soweit gesetzlich
          zulässig – ausgeschlossen.
        </p>
        <p>
          3. Die Haftung für indirekte Schäden, Folgeschäden, entgangenen Gewinn
          sowie Datenverlust wird – soweit gesetzlich zulässig – ausgeschlossen.
        </p>
        <p>
          4. Die Haftung nach dem Bundesgesetz über die Produktehaftpflicht
          (PrHG) bleibt vorbehalten.
        </p>
        <p>
          5. Soweit die Haftung ausgeschlossen oder beschränkt ist, gilt dies
          auch für Mitarbeitende, Hilfspersonen und Beauftragte der BIKESCHMIEDE
          GmbH.
        </p>
      </Accordion>

      <Accordion title="Änderungen an E-Bikes / Tuning">
        <p>
          1. Veränderungen am Antriebssystem können zum Erlöschen von
          Garantieansprüchen sowie zur Unzulässigkeit im öffentlichen
          Strassenverkehr führen.
        </p>
        <p>
          2. Die Verantwortung für die Einhaltung der gesetzlichen Vorschriften
          liegt beim Kunden.
        </p>
      </Accordion>

      <Accordion title="Datenschutz">
        <p>
          Personendaten werden unter Einhaltung der Bestimmungen des Schweizer
          Datenschutzgesetzes (DSG) bearbeitet. Einzelheiten ergeben sich aus
          der separaten Datenschutzerklärung der BIKESCHMIEDE GmbH.
        </p>
      </Accordion>

      <Accordion title="Gerichtsstand und anwendbares Recht">
        <p>
          1. Es gilt ausschliesslich Schweizer Recht unter Ausschluss des
          UN-Kaufrechts (CISG).
        </p>
        <p>
          2. Gerichtsstand ist Horw, sofern keine zwingenden gesetzlichen
          Bestimmungen entgegenstehen.
        </p>
      </Accordion>
    </Container>
  );
};

export default LegalContainer;
