<script lang="jsx">
export default {
  name: "Form",
  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    items: {},
  },
  render(h) {
    return <el-form id="form" ref="form"></el-form>;
  },
};
</script>
