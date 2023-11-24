import Formulario from './Formulario.jsx';
import Resultado from './Resultado.jsx';
import useClima from '../hooks/useClima.jsx';

const AppClima = () => {
	const { resultado } = useClima();
	return (
		<>
			<main className="dos-columnas">
				<Formulario />

				{resultado?.name && <Resultado />}
			</main>
		</>
	);
};

export default AppClima;
