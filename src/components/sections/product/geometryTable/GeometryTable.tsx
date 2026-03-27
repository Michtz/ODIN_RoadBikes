'use client';

import React from 'react';
import style from './GeometryTable.module.scss';
import { GeometryData } from '@/data/gravity_data';
import Image from 'next/image';
import { cloudinaryLoader } from '@/components/system/containers/ImageContainer';

interface GeometryTableProps {
  data: GeometryData;
}

export const GeometryTable: React.FC<GeometryTableProps> = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <Image
          loader={cloudinaryLoader}
          src={data.imageUrlGeometry}
          className={style.geometryImage}
          alt={data.imageAlt || 'Geometry Diagram'}
          width={1600}
          height={900}
          priority
          quality={90}
          sizes="(max-width: 468px) 468px,(max-width: 768px) 768px, (max-width: 1200px) 1200px"
        />
      </div>

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
