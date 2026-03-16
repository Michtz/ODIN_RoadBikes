'use client';

import React from 'react';
import style from './GeometryTable.module.scss';
import { GeometryData } from '@/data/gravity_data';

interface GeometryTableProps {
  data: GeometryData;
}

export const GeometryTable: React.FC<GeometryTableProps> = ({ data }) => {
  return (
    <div className={style.container}>
      {data.imageUrl && (
        <div className={style.imageWrapper}>
          <img
            src={data.imageUrl}
            alt={data.imageAlt || 'Geometry Diagram'}
            className={style.geometryImage}
          />
        </div>
      )}

      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              {data.headers.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {cellIndex === 0 ? <strong>{cell}</strong> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeometryTable;
