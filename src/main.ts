import '@mdi/font/css/materialdesignicons.css';
import './assets/styles/style.scss';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')!,
});

export default app;
