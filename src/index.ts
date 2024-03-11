// Tipo básico para un evento
interface IEvento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: Date;
  completado: boolean;
}

// Extender IEvento para diferentes tipos de eventos culturales
interface IConcierto extends IEvento {
  bandas: string[];
  generoMusical: string;
}

interface IExposicionArte extends IEvento {
  artistas: string[];
  estiloArte: string;
}

interface IProyeccionPelicula extends IEvento {
  pelicula: string;
  director: string;
}

// Función para registrar un nuevo evento
function registrarEvento(evento: IEvento): void {
  console.log(`Evento registrado: ${evento.titulo}, Fecha: ${evento.fecha.toLocaleDateString()}`);
}

// Función para marcar un evento como completado
function completarEvento(evento: IEvento): IEvento {
  return { ...evento, completado: true };
}

// Crear y usar un concierto
const conciertoRock: IConcierto = {
  id: 1,
  titulo: "Noche de Rock",
  descripcion: "Concierto de rock con bandas locales e internacionales",
  fecha: new Date('2024-04-22'),
  completado: false,
  bandas: ["Los Rockeros", "Guitarra Eléctrica"],
  generoMusical: "Rock",
};

registrarEvento(conciertoRock);

// Crear y usar una exposición de arte
const exposicionArte: IExposicionArte = {
  id: 2,
  titulo: "Colores Modernos",
  descripcion: "Exposición de arte moderno con obras de artistas contemporáneos",
  fecha: new Date('2024-05-15'),
  completado: false,
  artistas: ["Artista Contemporáneo", "Pintor Moderno"],
  estiloArte: "Moderno",
};

registrarEvento(exposicionArte);

// Crear y usar una proyección de película
const proyeccionPelicula: IProyeccionPelicula = {
  id: 3,
  titulo: "Noche de Cine: Clásicos del Terror",
  descripcion: "Proyección de películas clásicas de terror con discusión posterior",
  fecha: new Date('2024-06-30'),
  completado: false,
  pelicula: "El Exorcista",
  director: "William Friedkin",
};

registrarEvento(proyeccionPelicula);

// Ejemplo de marcar una proyección de película como completada
const proyeccionCompletada = completarEvento(proyeccionPelicula);
console.log(`El evento '${proyeccionCompletada.titulo}' ha sido marcado como completado.`);
