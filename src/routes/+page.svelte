<script>
	let monto;
	let fecha;
	let descripcion;

	const enviarDatos = async () => {
		const response = await fetch('/movimientos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ monto, fecha, descripcion })
		});

		if (response.ok) {
			monto = '';
			fecha = '';
			descripcion = '';
		} else {
		}
	};
</script>

<div class="flex flex-1 h-screen w-full justify-center items-center">
	<form
		class="flex flex-col border-2 border-red-200 rounded-lg p-8 text-xl"
		on:submit|preventDefault={enviarDatos}
	>
		<label for="monto">Monto:</label>
		<input class="border-2 border-gray-500" type="number" id="monto" bind:value={monto} />
		<div class="h-4 w-full" />
		<label for="fecha">Fecha:</label>
		<input class="border-2 border-gray-500" type="date" id="fecha" bind:value={fecha} />
		<div class="h-4 w-full" />
		<label for="descripcion">Descripción:</label>
		<textarea class="border-2 border-gray-500" id="descripcion" bind:value={descripcion} />
		<div class="h-4 w-full" />
		<button class="bg-red-400 rounded-lg py-2" type="submit">Agregar</button>
	</form>
</div>
