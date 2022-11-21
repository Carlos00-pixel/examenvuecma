<template>
  <div style="margin: 0 auto; width: 70%">
    <h1>Todos los Cubos</h1>
    <div class="card" style="width: 18rem;" v-for="cub in cubos" :key="cub">
        <img :src="cub.imagen" class="card-img-top">
        <div class="card-body">
        <h4 class="card-title">{{cub.nombre}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{cub.marca}}</h6>
        <p class="card-text"><b>Precio: {{cub.precio}}€</b></p>
        <a @click="realizarCompras(cub.idCubo)" class="btn btn-primary">Comprar</a>
        </div>
    </div>
</div>
</template>

<script>
import ServiceCubos from  "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
    name: 'HomeComponent',
    data(){
        return {
            cubos: []
        }
    },
    methods: {
        loadCubos() {
            service.getCubos().then(result => {
                this.cubos = result;
            })
        },
        realizarCompras(id){
            service.realizarCompra(id).then(result => {
                console.log(result);
            });
        }
    },
    mounted() {
        this.loadCubos();
    }
}
</script>

<style>

</style>