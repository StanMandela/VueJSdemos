import {
    createApp
} from 'vue';


import App from './App.vue';
import router from './router';



const app = createApp(App)
// app.use(router) used to create user routers in the app
app.use(router);
app.mount('#app');