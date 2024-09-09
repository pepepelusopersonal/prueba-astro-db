export interface Gato {
    id: string
    nombre: string
    edad: number
    dueno_id: string
}

export interface Dueno {
    cedula: string
    nombre: string
    apellido: string
    edad: number
}

export const gatos: Gato[] = []
export const duenos: Dueno[] = []

