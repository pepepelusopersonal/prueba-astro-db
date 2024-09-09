<script lang="ts">
    import type { Gato } from '../data/GatosObj'

     export let gato:Gato , dueno:string
</script>

<article class="round">
    <h5>{gato.nombre}</h5>
    <p>Edad: {gato.edad} años</p>
    <p>Dueño: {dueno} </p>
</article>