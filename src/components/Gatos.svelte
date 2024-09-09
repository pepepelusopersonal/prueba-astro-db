<script lang="ts">
    import { onMount } from 'svelte'
    import Card from '../components/Card.svelte'
    import { gatos as gatosImport, duenos, type Gato } from '../data/GatosObj.ts'
    import dataPrueba from '../data/dataPrueba.json'

    let gatos:Gato[] = []

    const cargarDatosPrueba = () => {
        duenos.push(...dataPrueba.duenos)
        gatosImport.push(...dataPrueba.gatos)
        gatos = gatosImport
    }

    onMount(() => {
        console.log(duenos)
    })
</script>

<div>
<div class="vertical-margin large-margin">
    {#if (gatos.length == 0)}
        No existen datos ...
    {:else}
        {#each gatos as gato}
            <Card 
                gato={gato} 
                dueno={(duenos.find(d => d.cedula == gato.dueno_id)?.nombre) + ' ' + (duenos.find(d => d.cedula == gato.dueno_id)?.apellido) ?? ''}/>
        {/each}
    {/if}
</div>
    <div class="grid vertical-margin large-margin">
        <button class="s12 m6">
            <i>attach_file</i>
            <span>Subir datos</span>
            <input type="file">
          </button>
        <button class="s12 m6" on:click={cargarDatosPrueba}>
            Cargar datos de prueba
        </button>
    </div>
</div>