import React from 'react';
import preloader from '../../assets/img/preloader.svg';

const Preloader = (props) => {
	return (
		<div style={{ backgroundColor: 'white' }}>
			<img src={preloader} alt="Загрузка..." />
		</div>
	);
};

export default Preloader;
