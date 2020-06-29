import React from 'react';
import preloader from '../../assets/img/preloader.svg';

const styles = { backgroundColor: 'white' };

const Preloader = (props) => {
  return (
    <div style={styles}>
      <img src={preloader} alt="Загрузка..." />
    </div>
  );
};

export default Preloader;
