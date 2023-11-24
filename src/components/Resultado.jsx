import useClima from '../hooks/useClima';

const Resultado = () => {
	const { resultado } = useClima();
	const { name, main } = resultado;
	return (
		<div className="contenedor clima">
			<h2 style={{ textAlign: 'center' }}>El clima de {name} es:</h2>
			<p>
				{Math.trunc(main.temp)} <span>&#x2103;</span>
			</p>
			<div className="temp-min-max">
				<p>
					Mín: {Math.trunc(main.temp_min)}
					<span>&#x2103;</span>
				</p>

				<p>
					Máx: {Math.trunc(main.temp_max)}
					<span>&#x2103;</span>
				</p>
			</div>
		</div>
	);
};

export default Resultado;
