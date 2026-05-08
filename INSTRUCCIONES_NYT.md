# NYT — Nova Ypsilon Tech

## Corrección importante
Esta versión ya incluye la importación correcta de Tailwind en `src/main.tsx`:

```ts
import './index.css';
```

Sin esa línea, la página se veía blanca/transparente y sin estilos, como en la captura.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Cómo compilar

```bash
npm run build
```

## Rutas incluidas

- `/` Inicio
- `/proyectos` Proyectos
- `/servicios` Servicios
- `/contacto` Contacto

## Vercel
El archivo `vercel.json` ya está incluido para que las rutas internas funcionen al recargar la página.
