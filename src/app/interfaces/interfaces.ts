export interface Post {
  id: string,
  titulo: string,
  tituloUrl: string,
  categoria: string,
  img: string,
  autor: string,
  fecha: string,
  subtitulo: string,
  imagen: string,
  contenido: [
    {
      tituloContenido: String,
      content: []
    }
  ]
}
