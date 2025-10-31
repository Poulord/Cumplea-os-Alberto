# Cumpleaños Alberto – Expediente Mágico

Sitio web temático inspirado en Harry Potter para celebrar el cumpleaños de Alberto. Incluye mini juego de adivinanzas, galería de recuerdos y carta personalizada, además de un área restringida protegida por credenciales.

## Estructura actual

```
├── index.html          # Sala común con accesos a las secciones
├── secreto.html        # Archivo clasificado visible solo con rol ADMIN
├── fotos.html          # Pensadero con galería y cambio de pies de foto
├── carta.html          # Carta emotiva imprimible
├── adivinanzas.html    # Quiz mágico
├── styles.css          # Estilos globales compartidos
├── index.js            # Gestión del acceso restringido y modal
├── adivinanzas.js      # Lógica del cuestionario
├── fotos.js            # Control de pies de foto alternativos
└── assets/             # Carpeta sugerida para imágenes
```

## Futuras ampliaciones (backend)

El proyecto está preparado para escalar hacia un stack con frontend y backend desacoplados. Dos opciones recomendadas:

- **Vite + Vue/React para el frontend**: permitiría reutilizar la estética creada y añadir componentes reactivos (por ejemplo, formularios de felicitaciones enviadas al servidor).
- **API REST con Node.js (Express o NestJS)**: ideal para autenticar usuarios reales, almacenar recuerdos y gestionar estadísticas del quiz. NestJS ofrece estructura modular, inyección de dependencias y soporte para WebSockets si se desea incorporar saludos en tiempo real.

Para un desarrollo progresivo, puede migrarse a un monorepo con la estructura:

```
root/
├── apps/
│   ├── web/      # Frontend (Vite + framework elegido)
│   └── api/      # Backend (NestJS/Express)
├── packages/
│   └── ui/       # Componentes compartidos (pergaminos, botones mágicos)
└── infra/        # Configuración de despliegue e infraestructura como código
```

Esta organización facilita pruebas unitarias aisladas, despliegues escalables y la integración de un sistema de usuarios para el área restringida.

## Desarrollo local

1. Clona el repositorio.
2. Abre `index.html` en tu navegador preferido.
3. Para activar el modo administrador en local, usa las credenciales `alberto` / `felizcumple` en el modal de “Acceso restringido 🔐”.

## Créditos

Diseñado con cariño, humor y un toque de magia hogwartiana para celebrar a Alberto.
