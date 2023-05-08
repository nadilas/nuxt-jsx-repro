export default defineNuxtPlugin(() => {
  return {
    provide: {
      pluginFn: () => console.log("pluginFn ran"),
    },
  };
});
