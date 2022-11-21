<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><img src="./../assets/images/logoCubo.png" style="width: 100px; height: 50px"/></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Cubos</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Marcas
                    </a>
                    <ul class="dropdown-menu">
                        <li v-for="mar in marcas" :key="mar">
                            <router-link class="dropdown-item" :to="'/marca/'+mar">{{mar}}</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/login">Iniciar Sesion</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/registrar">Registrarse</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/vercompra">Ver compra</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import ServiceCubos from  "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
    name: 'MenuCubos',
    data(){
        return {
            marcas: []
        }
    },
    methods: {
        loadSelectMarcas() {
            service.getMarcas().then(result => {
                this.marcas = result;
            })
        }
    },
    mounted() {
        this.loadSelectMarcas();
    }
}
</script>

<style>

</style>