import Formulario from './Formulario.jsx';
import Resultado from './Resultado.jsx';
import Spinner from './Spinner.jsx';
import useClima from '../hooks/useClima.jsx';

const AppClima = () => {
	const { resultado, cargando, noResultado } = useClima();
	return (
		<>
			<main className="dos-columnas">
				<Formulario />
				{cargando ? (
					<Spinner />
				) : resultado?.name ? (
					<Resultado />
				) : (
					<h3 style={{ textAlign: 'center' }}>{noResultado}</h3>
				)}
			</main>
		</>
	);
};

export default AppClima;
