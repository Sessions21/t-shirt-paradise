import React from 'react';
import TshirtList from '../components/TshirtList';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <TshirtList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;