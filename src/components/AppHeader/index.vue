<template>
  <a-row>
    <a-col :span="16">
      <a-input-search
        v-model:value="searchKey"
        placeholder="请输入"
        enter-button
        size="large"
        @search="search"
      />
    </a-col>
  </a-row>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "AppHeader",
  setup(props, context) {
    let data = reactive({
      searchKey: "",
    });

    const search = function () {
      console.log(data.searchKey);
    };

    return {
      ...toRefs(data),
      search,
    };
  },
};
</script>

<style scoped></style>
