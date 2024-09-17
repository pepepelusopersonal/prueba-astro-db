<script lang="ts">
    import { onMount } from 'svelte'
    import Card from '../components/Card.svelte'
    import { type Gato, type Dueno } from '../data/GatosObj.ts'

    let gatos: Gato[] = []
    let duenos: Dueno[] = []

    let archivo: FileList

    const eliminarDatosStoraged = () => {
        sessionStorage.removeItem('gatos')
        sessionStorage.removeItem('duenos')
        gatos = []
        duenos = []
    }

    $: if (archivo && archivo.length > 0) {
        const reader = new FileReader()
        reader.onload = (event) => {
            if (event.target) {
                const jsonData = JSON.parse(event.target.result as string)
                gatos = jsonData.gatos as Gato[]
                duenos = jsonData.duenos as Dueno[]
                sessionStorage.setItem('gatos', JSON.stringify(gatos))
                sessionStorage.setItem('duenos', JSON.stringify(duenos))
            }
        }
        reader.onerror = (event) => {
            console.error("Error al leer el archivo:", event)
        }
        reader.readAsText(archivo[0])
        archivo = undefined as unknown as FileList
    }

    const descargarDatos = () => {
        const data = JSON.stringify({ gatos, duenos }, null, 2)
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'datos.json'
        a.click()
        URL.revokeObjectURL(url)
    }

    onMount(() => {
        const storedGatos = sessionStorage.getItem('gatos');
        const storedDuenos = sessionStorage.getItem('duenos');

        if (storedGatos && storedDuenos) {
            gatos = JSON.parse(storedGatos) as Gato[]
            duenos = JSON.parse(storedDuenos) as Dueno[]
        }
    })
</script>

<div>
    <div class="vertical-margin large-margin grid">
        {#if (gatos.length == 0)}
            <div class="s12">No existen datos ...</div>
        {:else}
            {#each gatos as gato}
                <div class="s12 m6 l3">
                    <Card 
                        gato={gato} 
                        dueno={(duenos.find(d => d.cedula == gato.dueno_id)?.nombre) + ' ' + (duenos.find(d => d.cedula == gato.dueno_id)?.apellido) || ''}/>
                </div>
            {/each}
        {/if}
    </div>
    <div class="grid vertical-margin large-margin">
        <button class="s12 m4">
            <i>attach_file</i>
            <span>Subir datos</span>
            <input type="file" accept=".json" bind:files={archivo} />
        </button>
        <button class="s12 m4" on:click={descargarDatos}>
            <i>download</i>
            <span>Descargar datos</span>
        </button>
        <button class="s12 m4" on:click={eliminarDatosStoraged}>
            <i>delete</i>
            <span>Elmiminar datos</span>
        </button>
    </div>
</div>