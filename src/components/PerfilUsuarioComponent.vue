<template>
  <div class="card mb-3" style="max-width: 540px; margin: 0 auto; margin-top: 50px;">
    <div class="row g-0" v-if="usuario">
      <div class="col-md-4">
        <img src="./../assets/images/imagenUser.png" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title"><b>Your User Id: {{usuario.idUsuario}}</b></h5>
        <label>Nombre:</label>
        <input class="form-control" style="width: 200px; margin: 0 auto;" disabled :value="usuario.nombre"/>
        <label>Email:</label>
        <input class="form-control" style="width: 200px; margin: 0 auto;" disabled :value="usuario.email"/>
        <label>Password:</label>
        <input class="form-control" style="width: 200px; margin: 0 auto;" disabled :value="usuario.pass"/>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import ServiceCubos from  "./../services/ServiceCubos";
const service = new ServiceCubos();

export default {
    name: 'PerfilUsuarioComponent',
    data(){
        return {
            usuario: {}
        }
    },
    methods: {
        loadPerfilUsuario() {   
            service.getUsuario().then(result => {
                this.usuario = result;
            })
        }
    },
    mounted(){
        this.loadPerfilUsuario();
    }
}
</script>

<style>

</style>