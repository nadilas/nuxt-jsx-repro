export default defineComponent({
  props: {
    message: String,
  },
  render: (props: { message: string }) => {
    const { $pluginFn } = useNuxtApp();
    // '$pluginFn' is of type 'unknown'.ts(18046)
    $pluginFn();
    return <div>{props.message}</div>;
  },
});
