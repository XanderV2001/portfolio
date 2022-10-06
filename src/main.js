import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "./assets/main.css";
import { Client } from 'appwrite';

// Append naive ui style at the end of the head
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

var client = new Client().setEndpoint('https://appwrite.xandervos.dev/v1').setProject("633efa4b4b9a75c6d556");

var app = createApp(App);

app.config.globalProperties.appwrite = client;

app.use(router);

client.authStore.loadFromCookie(document.cookie);

app.mount('#app')
