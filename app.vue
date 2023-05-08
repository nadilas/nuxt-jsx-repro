<script lang="tsx" setup>
// Component could be a simple function with JSX syntax
const Welcome = () => {
  const { $pluginFn } = useNuxtApp();
  // '$pluginFn' type OK
  $pluginFn();
  return <span>Welcome </span>;
};

// Or using defineComponent setup that returns render function with JSX syntax
const Nuxt3 = defineComponent(() => {
  const { $pluginFn } = useNuxtApp();
  // '$pluginFn' type OK
  $pluginFn();
  return () => <span>nuxt3</span>;
});

const InlineComponent = () => (
  <div>
    <Welcome />
    <span>to </span>
    <Nuxt3 />
  </div>
);
</script>

<template>
  <NuxtExampleLayout example="advanced/jsx">
    <InlineComponent />
    <!-- Defined in components/jsx-component.ts -->
    <MyComponent
      message="This is an external JSX component with not working types for useNuxtApp"
    />
    <WorkingPluginTypes
      message="This is an external JSX component with working types for useNuxtApp"
    />
  </NuxtExampleLayout>
</template>
