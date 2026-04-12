/*
- Diese Component empfängt die Daten über den `data` Prop.
- Die Tabellen sind responsiv durch `overflow-x-auto`.
- Die Test-Tabelle wurde der besseren Lesbarkeit wegen so umgebaut, dass die Tests als Zeilen (anstatt als Spalten) dargestellt werden.
*/

'use client';

import { FC } from 'react';
import style from './FrameDetails.module.scss';
import { FrameData } from '@/data/gravity_data';

interface FrameDetailsProps {
  data: FrameData;
}

export const FrameDetails: FC<FrameDetailsProps> = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th rowSpan={2}>Version</th>
              <th rowSpan={2}>Model</th>
              <th rowSpan={2}>Size</th>
              <th rowSpan={2}>Weight</th>
              <th colSpan={3}>Rigidity</th>
            </tr>
            <tr>
              <th>Headtube (110/115 ↑)</th>
              <th>Bottom Bracket (150 ↑)</th>
              <th>Dropout Bilateral (40 ↑)</th>
            </tr>
          </thead>
          <tbody>
            {data.versions.map((version, idx) => (
              <tr key={idx}>
                <td>{version.name}</td>
                <td>{version.model}</td>
                <td>{version.size}</td>
                <td>{version.weight}</td>
                <td>{version.rigidity.headtube}</td>
                <td>{version.rigidity.bottomBracket}</td>
                <td>{version.rigidity.dropout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Test Item</th>
              <th>Status</th>
              <th>Standard / Result</th>
            </tr>
          </thead>
          <tbody>
            {data.testItems.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td className={style.statusPass}>{item.status}</td>
                <td>{item.standard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={style.detailsList}>
        <ul>
          {data.details.map((detail, idx) => (
            <li key={idx}>
              <strong>{detail.label}:</strong> {detail.value}
            </li>
          ))}
        </ul>
      </div>

      <div className={style.description}>
        {data.description.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <div className={style.keywords}>
        <strong>Keywords:</strong>
        <div className={style.tags}>
          {data.keywords.map((keyword, idx) => (
            <span key={idx} className={style.tag}>
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameDetails;
