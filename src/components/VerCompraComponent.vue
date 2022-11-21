<template>
  <div>
    <h1>Ver Compras</h1>
    <table class="table table-dark">
        <thead>
            <tr>
                <th>IdCubo</th>
                <th>IdPedido</th>
                <th>IdUsuario</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="com in compras" :key="com">
                <td>{{com.idCubo}}</td>
                <td>{{com.idPedido}}</td>
                <td>{{com.idUsuario}}</td>
                <td>{{com.fechaPedido}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import ServiceCubos from  "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
    name: "VerCompraComponent",
    data() {
        return {
            compras: []
        }
    },
    methods: {
        loadCompras() {
            service.verCompra().then(result => {
                this.compras = result;
                console.log(result);
            });
        }
    },
    mounted() {
        this.loadCompras();
    }
}
</script>

<style>

</style>