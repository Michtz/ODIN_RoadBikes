'use client';

import React from 'react';
import style from './GeometryTable.module.scss';
import { GeometryData } from '@/data/gravity_data';
import Image from 'next/image';
import { customImageLoaderAI } from '@/components/system/containers/Containers';

interface GeometryTableProps {
  data: GeometryData;
}

export const GeometryTable: React.FC<GeometryTableProps> = ({ data }) => {
  return (
    <div className={style.container}>
      {data.imageUrl && (
        <div className={style.imageWrapper}>
          <Image
            loader={customImageLoaderAI}
            src={data.imageUrl}
            className={style.geometryImage}
            alt={data.imageAlt || 'Geometry Diagram'}
            fill
            priority
            sizes="(max-width: 450px) 450px, (max-width: 700px) 700px, (max-width: 1000px) 1000px, 1600px"
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
