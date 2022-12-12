<template>
  <div class="viewport" ref="viewport" @scroll="scroll">
    <div class="scroll" ref="scroll">
      <div class="data-list" ref="dataList">
        <div
          class="row"
          :style="{
            height: rowHeight + 'px',
          }"
          v-for="item in showList"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LongList",
  data() {
    return {
      list: [],
      start: 0,
      size: 30,
      rowHeight: 20,
    };
  },
  computed: {
    showList() {
      return this.list.slice(this.start, this.end);
    },
    end() {
      return this.start + this.size;
    },
  },
  methods: {
    scroll(e) {
      let scrollTop = e.target.scrollTop;

      this.start = Math.floor(scrollTop / this.rowHeight);

      this.$refs.dataList.style.top = this.rowHeight * this.start + "px";
    },
  },
  created() {
    this.list = new Array(100000).fill(null).map((item, index) => index + 1);
  },
  mounted() {
    // 视口高度
    this.$refs.viewport.style.height = this.size * this.rowHeight + "px";
    // scroll高度
    this.$refs.scroll.style.height = this.list.length * this.rowHeight + "px";
  },
};
</script>

<style scoped>
.viewport {
  overflow-y: auto;
  background: burlywood;
}
.scroll {
  position: relative;
}
.data-list {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.row {
  text-align: center;
}
</style>
