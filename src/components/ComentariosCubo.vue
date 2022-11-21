<template>
    <div class="card mb-3" style="max-width: 540px; margin: 0 auto; margin-top: 50px;">
    <div class="row g-0" v-if="cubo">
      <div class="col-md-4">
        <img :src="cubo.imagen" class="img-fluid rounded-start"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title"><b>{{cubo.nombre}}</b></h5>
        <p class="card-text">
            Marca: {{cubo.marca}} <br/>
            Modelo: {{cubo.modelo}} <br/>
            Color: {{cubo.color}} <br/>
        </p>
          <p class="card-text"><small class="text-muted">Valoracion: {{cubo.valoracion}} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="width: 16px; height: 16px"><path fill-rule="evenodd" d="M7.655 14.916L8 14.25l.345.666a.752.752 0 01-.69 0zm0 0L8 14.25l.345.666.002-.001.006-.003.018-.01a7.643 7.643 0 00.31-.17 22.08 22.08 0 003.433-2.414C13.956 10.731 16 8.35 16 5.5 16 2.836 13.914 1 11.75 1 10.203 1 8.847 1.802 8 3.02 7.153 1.802 5.797 1 4.25 1 2.086 1 0 2.836 0 5.5c0 2.85 2.045 5.231 3.885 6.818a22.075 22.075 0 003.744 2.584l.018.01.006.003h.002z"></path></svg></small></p>
        </div>
      </div>
    </div>
</div>
<div style="max-width: 540px; margin: 0 auto; margin-top: 20px;">
    <h2>Comentarios</h2>
    <hr/>
    <div v-for="com in comentarios" :key="com">
        <p><b>{{com.comentario}}</b></p>
        <p>Fecha: {{com.fechaComentario}}</p>
    </div>
</div>



</template>

<script>
import ServiceCubos from  "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
    name: "ComentariosCubo",
    data() {
        return {
            cubo: {},
            comentarios: []
        }
    },
    methods: {
        loadComentarios() {
            var id = this.$route.params.idCubo;
            service.getComentarios(id).then(result => {
                this.comentarios = result;
            });
        },
        loadCubos() {
            var id = this.$route.params.idCubo;
            service.getCubosById(id).then(result => {
                this.cubo = result;
            })
        }
    },
    mounted() {
        this.loadCubos();
        this.loadComentarios();
    }
}
</script>

<style>

</style>