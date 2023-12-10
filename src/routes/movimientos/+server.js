/** @type {import('./$types').RequestHandler} */

import { json } from '@sveltejs/kit';
import { crearMovimiento } from '$lib/server/db';

// @ts-ignore
export async function POST({ request }) {
	const { monto, fecha, descripcion } = await request.json();

    await crearMovimiento(monto, fecha, descripcion);

	return json("Creado satisfactoriamente", { status: 201 });
}