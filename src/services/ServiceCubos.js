import axios from 'axios'
import Global from './../Global'

export default class ServiceCubos {

    getCubos() {

        return new Promise(function(resolve) {
            var request = "/api/Cubos";
            var url = Global.urlApiCubos + request;

            var cubos = []
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            });
        });
    }

    getCubosById(id){
        return new Promise(function(resolve) {
            var request = "/api/Cubos/"+id;
            var url = Global.urlApiCubos + request;

            axios.get(url).then(response => {
                resolve(response.data);
            });
        });
    }

    getMarcas() {

        return new Promise(function(resolve) {
            var request = "/api/Cubos/Marcas";
            var url = Global.urlApiCubos + request;

            var marcas = []
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            });
        });
    }

    getMarcasByNombre(nombre){
        return new Promise(function(resolve) {
            var request = "/api/Cubos/CubosMarca/"+nombre;
            var url = Global.urlApiCubos + request;

            var marcas = []
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            });
        });
    }

    getComentarios(id) {

        return new Promise(function(resolve) {
            var request = "/api/ComentariosCubo/GetComentariosCubo/"+id;
            var url = Global.urlApiCubos + request;

            var comentarios = []
            axios.get(url).then(response => {
                comentarios = response.data;
                resolve(comentarios);
            });
        });
    }

    login(user) {

        return new Promise(function(resolve) {
            var request = "/api/Manage/Login";
            var url = Global.urlApiCubos + request;

            axios.post(url, user).then(response => {
                resolve(response);
            });
        });
    }

    getUsuario() {
        return new Promise(function(resolve) {

            var token = localStorage.getItem("token");

            var header = {
                'Authorization': "Bearer "+token
            }

            var request = "/api/Manage/PerfilUsuario"
            var url = Global.urlApiCubos + request;

            axios.get(url, {headers: header}).then(response => {
                resolve(response.data);
            });
        });
    }

    registrarUsuario(user) {
        return new Promise(function(resolve) {
            var request = "/api/Manage/RegistroUsuario";
            var url = Global.urlApiCubos + request;

            axios.post(url, user).then(response => {
                resolve(response.data);
            });
        });
    }

    realizarCompra(id) {
        return new Promise(function(resolve) {
            var token = localStorage.getItem("token");

            var header = {
                'Authorization': "Bearer "+token
            }

            var request = "/api/Compra/InsertarPedido/" + id;
            var url = Global.urlApiCubos + request;

            axios.post(url, "", {headers: header}).then(response => {
                resolve(response.data);
            });
        });
    }

    verCompra() {
        return new Promise(function(resolve) {
            var token = localStorage.getItem("token");

            var header = {
                'Authorization': "Bearer "+token
            }

            var request = "/api/Compra/ComprasUsuario";
            var url = Global.urlApiCubos + request;

            axios.get(url, {headers: header}).then(response => {
                resolve(response.data);
            });
        });
    }
}