# Meetups Frontend

[![Demo en YouTube](https://img.youtube.com/vi/n9YUwfJ52zU/0.jpg)](https://www.youtube.com/watch?v=n9YUwfJ52zU)

Aplicación web en **React** para descubrir, filtrar y gestionar **meetups** por ciudad y temática, conectada al backend de Meetups (`meetups-backend-go`).

## Funcionalidades

### Usuarios anónimos
- **Listado de meetups** futuras ordenadas por fecha más próxima (título, foto, temática, ciudad, fecha y número de inscritos).
- **Filtrado** combinado por ciudad y temática.
- **Detalle de meetup** con descripción completa, fecha, hora y total de inscritos.
- **Registro** de cuenta (nombre, email, contraseña, biografía y avatar) e **inicio de sesión**.

### Usuarios autenticados
- **Inscribirse y cancelar inscripción** en cualquier meetup.
- **Ver la lista de nombres** de los asistentes inscritos en el detalle de cada meetup.
- **Publicar nuevas meetups** (título, descripción, imagen, temática, ciudad y fecha/hora).

## Stack tecnológico

- **React 18** + **React Router v6**
- **Tailwind CSS**
- **Vite** (`vite-plus`)
- **SweetAlert** para notificaciones

## Estructura del proyecto

```text
src/
├── assets/        # Iconos e imágenes estáticas
├── components/    # Componentes de UI (Header, Hero, MeetupList, MeetupCard, MeetupDetail, formularios...)
├── contexts/      # AuthContext (estado global de sesión y usuario autenticado)
├── hooks/         # Custom hooks (useAuth, useMeetups, useMeetup)
├── pages/         # Vistas por ruta (MainPage, DetailMeetupPage, AddMettupPage, LoginPage, RegisterPage, NotFoundPage)
├── services/      # Cliente HTTP hacia la API (meetups.js, users.js)
└── utils/         # Constantes (API_URL, clave de localStorage) y lectura de token JWT
```

## Configuración

1. Instala las dependencias:

```bash
bun install
# o npm install
```

2. Copia `.env.example` a `.env` y configura la URL del backend (por defecto usa `http://localhost:3000` si no se define):

```env
VITE_API_URL=
```

## Scripts disponibles

```bash
bun run dev      # Servidor de desarrollo
bun run build    # Compilar para producción en dist/
bun run preview  # Previsualizar build de producción
bun run lint     # Ejecutar linter (vp lint)
bun run format   # Formatear código (vp fmt)
```

## Rutas de la aplicación

| Ruta | Vista | Acceso |
| :--- | :--- | :--- |
| `/` | Listado principal y filtros de meetups | Público |
| `/meetup/:id` | Detalle de meetup e inscripciones | Público (inscripción y lista nominal requieren sesión) |
| `/addMeetup` | Formulario para publicar una meetup | Autenticado |
| `/login` | Inicio de sesión | Público |
| `/register` | Registro de usuario | Público |
