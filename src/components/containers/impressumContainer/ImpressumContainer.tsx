import { FC } from 'react';
import style from './ImpressumContainer.module.scss';
import { Container, Title } from '@/components/system/containers/Containers';

const ImpressumContainer: FC = () => {
  return (
    <Container flow={'column'}>
      <div style={{ height: '100px' }}></div>
      <Title>Impressum</Title>

      <div className={style.section}>
        <h2>Kontaktadresse</h2>
        <p>
          BIKESCHMIEDE GmbH
          <br />
          Gemeindehausplatz 13
          <br /> 6048 Horw
          <br /> Schweiz
        </p>
      </div>

      <div className={style.section}>
        <h2>Vertretungs Berechtigte Personen</h2>
        <p>Angela Ackermann, Geschäftsführung</p>
      </div>

      <div className={style.section}>
        <h2>Kontakt</h2>
        <p>
          Telefon:&nbsp; <a href="tel:+413407044">+41 340 70 44</a>
          <br />
          E-Mail:&nbsp; <a href="mailto:info@odinbikes.ch">info@odinbikes.ch</a>
        </p>
      </div>

      <div className={style.section}>
        <h2>Handelsregister Eintrag</h2>
        <p>
          Eingetragener Firmenname: BIKESCHMIEDE GmbH
          <br />
          Unternehmens-Identifikationsnummer (UID): CHE-243.626.541
        </p>
      </div>

      <div className={style.section}>
        <h2>Entwicklung & Design</h2>
        <p>Michael Venetz, Webdesign & Marketing</p>
      </div>
    </Container>
  );
};

export default ImpressumContainer;
