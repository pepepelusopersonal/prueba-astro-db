<script lang="ts">
import { onMount } from "svelte";
import { type Gato, type Dueno } from "../data/GatosObj";

let duenos: Dueno[] = []

const newGato: Gato = {
    id: "",
    dueno_id: "",
    nombre: "",
    edad: 0,
}

onMount(() => {
    newGato.id = crypto.randomUUID()
    const storedDuenos = sessionStorage.getItem('duenos');
    duenos = storedDuenos ? JSON.parse(storedDuenos) : []
})

const agregarFun = () => {
    console.log(newGato)
    if (newGato.dueno_id !== "" && newGato.edad !== 0 && newGato.nombre !== "") {
        sessionStorage.setItem('gatos', JSON.stringify([...JSON.parse(sessionStorage.getItem('gatos') || '[]'), newGato]));
        window.alert("Gato agregado con éxito.")
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
                <legend>Nombre</legend>
                <input type="text" name="nombre" bind:value={newGato.nombre} >
            </div>
            <div class="field border small">
                <legend>Edad</legend>
                <input type="number" name="edad" bind:value={newGato.edad} >
            </div>
            <div class="vertical-margin small-margin">
                <legend>Dueño</legend>
                <div class="field suffix border small vertical-margin no-margin">
                    <select bind:value={newGato.dueno_id} >
                       <option value="">Seleccione un dueño</option>
                        {#if (duenos.length != 0)}
                            {#each duenos as dueno}
                                <option value={dueno.cedula}>{dueno.nombre + " " + dueno.apellido}</option>
                            {/each}
                        {/if}
                    </select>
                    <i>arrow_drop_down</i>
                </div>
            </div>
        </article>
    </div>
    <div class="grid vertical-margin large-margin">
        <button id="agregar" class="s12" on:click={agregarFun}>
            Agregar
        </button>
    </div>
</div>