<template>
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      Carregando Aplicativo...
    </template>
  </Suspense>
</template>

<script>


export default {};
</script>

<style></style>
