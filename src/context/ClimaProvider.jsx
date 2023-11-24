/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
	const [busqueda, setbusqueda] = useState({
		ciudad: '',
		pais: '',
	});

	const [resultado, setResultado] = useState({});
	const [cargando, setCargando] = useState(false);
	const [noResultado, setNoResultado] = useState('');

	function datosBusqueda(e) {
		setbusqueda({ ...busqueda, [e.target.name]: e.target.value });
	}

	async function consultarClima(datos) {
		setCargando(true);
		setNoResultado('');
		try {
			const { ciudad, pais } = datos;
			const appId = import.meta.env.VITE_API_KEY;
			const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
			const { data } = await axios(url);
			const { lat, lon } = data[0];
			const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`;
			const { data: clima } = await axios(urlClima);
			setResultado(clima);
			setCargando(false);
		} catch (error) {
			setResultado({});
			console.error(error);
			setNoResultado(
				`Los elementos de tu busqueda no coinciden con ningun lugar del pais seleccionado`
			);
		} finally {
			setCargando(false);
		}
	}

	return (
		<ClimaContext.Provider
			value={{
				busqueda,
				datosBusqueda,
				consultarClima,
				resultado,
				cargando,
				noResultado,
			}}
		>
			{children}
		</ClimaContext.Provider>
	);
};

export default ClimaProvider;

export { ClimaContext };
