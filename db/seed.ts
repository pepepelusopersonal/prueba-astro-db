import { db, Dueno, Gato } from 'astro:db';

export default async function seed() {
	await db.insert(Dueno).values([
		{
			name: 'Juan',
			age: 25,
			cedula: '1234567890'
		},
		{
			name: 'Pedro',
			age: 30,
			cedula: '0987654321',
		}
	])

	await db.insert(Gato).values([
		{
			id: "dfghjkl",
			name: 'Michi',
			age: 2,
			dueno_cedula: '1234567890'
		},
		{
			id: "asdfghj",
			name: 'Mecha',
			age: 3,
			dueno_cedula: '0987654321'
		},
		{
			id: "qwertyu",
			name: 'Miche',
			age: 4,
			dueno_cedula: '1234567890'
		}
	])

}
