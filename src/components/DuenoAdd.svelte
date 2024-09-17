<script lang="ts">
import { type Dueno } from "../data/GatosObj";

const newDueno: Dueno = {
    cedula: "",
    nombre: "",
    apellido: "",
    edad: 0
}

const agregarFun = () => {
    if (newDueno.cedula !== "" && newDueno.nombre !== "" && newDueno.apellido !== "" && newDueno.edad !== 0) {
        sessionStorage.setItem("duenos", JSON.stringify([...JSON.parse(sessionStorage.getItem("duenos") || "[]"), newDueno]))
        window.alert("Dueño agregado con éxito.")
        window.location.href = "/"
    } else {
        window.alert("Por favor, llena todos los campos.")
    }
}

</script>

<div>
    <div class="vertical-margin large-margin">
        <article>
            <div class="field border small">
                <legend>Cédula</legend>
                <input type="text" name="cedula" bind:value={newDueno.cedula}>
            </div>
            <div class="field border small">
                <legend>Nombre</legend>
                <input type="text" name="nombre" bind:value={newDueno.nombre} >
            </div>
            <div class="field border small">
                <legend>Apellido</legend>
                <input type="text" name="apellido" bind:value={newDueno.apellido} >
            </div>
            <div class="field border small">
                <legend>Edad</legend>
                <input type="number" name="edad" bind:value={newDueno.edad} >
            </div>
        </article>
    </div>
    <div class="grid vertical-margin large-margin">
        <button id="agregar" class="s12" on:click={agregarFun}>
            Agregar
        </button>
    </div>
</div>