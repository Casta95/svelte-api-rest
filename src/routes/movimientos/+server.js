/** @type {import('./$types').RequestHandler} */

import { json } from '@sveltejs/kit';
import { crearMovimiento, listarMovimientos } from '$lib/server/db';


export async function GET({ request }) {

    const datos = await listarMovimientos();

    return json(datos, { status: 200 });
}

export async function POST({ request }) {
	const { monto, fecha, descripcion } = await request.json();

    await crearMovimiento(monto, fecha, descripcion);

	return json("Creado satisfactoriamente", { status: 201 });
}