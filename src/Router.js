import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "./components/HomeComponent.vue";
import MarcasCubosComponent from "./components/MarcasCubosComponent.vue";
import ComentariosCubo from "./components/ComentariosCubo.vue";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilUsuarioComponent from "./components/PerfilUsuarioComponent.vue";
import RegistrarComponent from "./components/RegistrarComponent.vue"
import VerCompraComponent from "./components/VerCompraComponent.vue"

const routes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/marca/:nombre", component: MarcasCubosComponent
    },
    {
        path: "/comentario/:idCubo", component: ComentariosCubo
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/perfilusuario", component: PerfilUsuarioComponent
    },
    {
        path: "/registrar", component: RegistrarComponent
    },
    {
        path: "/vercompra", component: VerCompraComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;