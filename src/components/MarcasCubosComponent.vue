<template>
  <h1>Marcas Cubos</h1>
  <div style="width: 70%; margin: 0 auto">
    <div class="card" style="width: 20rem; margin-right: 100px;" v-for="mar of marcas" :key="mar">
        <img :src="mar.imagen" class="card-img-top">
        <div class="card-body">
        <h4 class="card-title">{{mar.nombre}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{mar.marca}}</h6>
        <p class="card-text"><b>Precio: {{mar.precio}}€</b></p>
        <router-link :to="'/comentario/' + mar.idCubo" id="botonDetalles" class="btn border-primary">Detalles</router-link>
        </div>
    </div>
    </div>
</template>

<script>
import ServiceCubos from  "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
    name: 'MarcasCubosComponent',
    data(){
        return {
            marcas: []
        }
    },
    methods: {
        loadCubosByMarcas(){
            var nombre = this.$route.params.nombre;
            service.getMarcasByNombre(nombre).then(result => {
                this.marcas = result;
            })
        }
    },
    watch: {
      '$route.params.nombre'(nextVal, oldVal) {
            if(nextVal != oldVal) {
                this.loadCubosByMarcas();
            }
        }
    },
    mounted(){
        this.loadCubosByMarcas();
    }
}
</script>

<style scoped>
#botonDetalles:hover {
    background-color: blue;
    color: white;
}
</style>