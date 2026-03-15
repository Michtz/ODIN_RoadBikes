'use client';
import React, { FC } from 'react';
import ProductPageContainer from '@/components/sections/product/ProductPageContainer';
import { Container } from '@/components/system/containers/Containers';
import { gravityGeometry } from '@/data/gravity_data';
import { slideGeometry } from '@/data/slide_data';

type View = 'gravity' | 'flow' | 'reaction' | 'slide';

interface ProductContainerProps {
  view: View;
}

const ProductContainer: FC<ProductContainerProps> = ({ view }) => {
  return (
    <Container padding={false} alignItems={'center'} flow={'column'}>
      <ProductContent view={view} />
    </Container>
  );
};

const ProductContent: React.FC<ProductContainerProps> = ({
  view,
}): React.ReactElement => {
  const getCurrentView = (): React.ReactElement => {
    switch (view) {
      case 'slide':
        return (
          <ProductPageContainer view={view} gravityGeometry={slideGeometry} />
        );

      case 'gravity':
        return (
          <ProductPageContainer view={view} gravityGeometry={gravityGeometry} />
        );
      default:
        return <></>;
    }
  };
  return (
    <Container justifyContent={'center'} flow={'column'} padding={false}>
      {getCurrentView()}
    </Container>
  );
};

export default ProductContainer;
