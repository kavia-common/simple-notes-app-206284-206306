# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

---

## 📝 Ocean Professional Notes App

A beautiful modern notes application built with React. Supports create, edit, and delete for personal notes, with responsive design and vibrant Ocean Professional styling.

### Features

- Create notes via modal form (title, content)
- Edit and update any note (changes persist via localStorage)
- Delete note with confirmation dialog
- Responsive grid-based layout
- Ocean Professional theme (blue primary, amber accents, rounded corners, gradient, shadows, transitions)
- Storage abstraction: Uses `localStorage` by default, but ready for REST API if `REACT_APP_API_BASE` or `REACT_APP_BACKEND_URL` envs are set

### Usage

1. **Run locally**
   ```
   npm install
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000).

2. **Create or edit notes**
   Click "+ New Note" or "Edit" on any note to open the editor modal. All notes are saved in localStorage for persistence.
   
3. **Delete notes**
   Click "Delete" and confirm in the modal dialog.

### Optional: API Storage

If you set either environment variable in `.env`:

- `REACT_APP_API_BASE=https://your-backend-url/api`
- OR
- `REACT_APP_BACKEND_URL=https://your-backend-url/api`

then the app will use your backend for storage (API methods to be implemented). If these are not set, localStorage is used by default.

### Styling

Follows Ocean Professional color palette:

- **Primary:** #2563EB
- **Accent/Amber:** #F59E0B
- Shadows, gradients, and transitions for modern depth

See `src/App.css` for customization.

---

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
