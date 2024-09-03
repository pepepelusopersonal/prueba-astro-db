import { defineDb, defineTable, column } from 'astro:db';

const Gato = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    name: column.text(),
    age: column.number(),
    dueno_cedula: column.text({references: () => Dueno.columns.cedula})
  },
})

const Dueno = defineTable({
  columns: {
    cedula: column.text({primaryKey: true}),
    name: column.text(),
    age: column.number(),
  },
})

export default defineDb({
  tables: {Gato, Dueno}
});
