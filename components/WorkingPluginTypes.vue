<template>
  <div>{props.message}</div>
</template>

<script lang="ts" setup>
const { $pluginFn } = useNuxtApp();
// '$pluginFn' type OK
$pluginFn();
</script>
