export interface Autor {
  id: number,
  nombre: string,
  apellido: string,
  nacimiento: Date,
  contacto: Contacto[]
}

export interface Contacto {
  direccion: string,
  telefono: number
}
