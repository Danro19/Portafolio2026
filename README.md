# Daniel Rodriguez — Portfolio

Portafolio personal construido con **React + Vite**.  
Dark mode premium, animaciones de scroll, y formulario de contacto funcional vía WhatsApp.

---

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Build para producción
npm run build

# 4. Preview del build
npm run preview
```

---

## 📁 Estructura del proyecto

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            # Entry point
    ├── App.jsx             # Root — ensambla secciones
    ├── data.js             # ✏️  Todo el contenido aquí
    ├── hooks/
    │   └── useReveal.js    # Animaciones de scroll
    ├── styles/
    │   └── globals.css     # Tokens, reset, utilidades
    ├── components/
    │   ├── Navbar.jsx / .module.css
    │   └── Footer.jsx / .module.css
    └── sections/
        ├── Hero.jsx    / Hero.module.css
        ├── Skills.jsx  / Skills.module.css
        ├── Projects.jsx/ Projects.module.css
        └── Contact.jsx / Contact.module.css
```

---

## ✏️ Cómo actualizar el contenido

Todo el contenido del portafolio está centralizado en **`src/data.js`**.  
No necesitas tocar los componentes para:

- Cambiar tu nombre, rol, bio o estadísticas → `personal`
- Agregar/quitar skills → `skills[]`
- Agregar nuevos proyectos → `projects[]`
- Cambiar links de redes → `personal.social`

---

## 🌐 Deploy en GitHub Pages

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Agregar en package.json > scripts:
"deploy": "npm run build && gh-pages -d dist"

# 3. Ejecutar deploy
npm run deploy
```

> Asegúrate que `vite.config.js` tenga `base: '/Portafolio/'`  
> (ya está configurado por defecto).

---

## 🛠️ Stack

- React 18
- Vite 5
- CSS Modules
- Google Fonts (Space Grotesk + DM Mono)
