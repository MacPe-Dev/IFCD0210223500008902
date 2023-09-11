export class Curso{
	static _id: string;
	constructor(
		public _id: string,
		public name: string,
		public description: string,
		public category: string,
		public duracion: number,
		public temas: string,
		public image: string
	){}
}