<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="topics">
    <template #renderItem="{ item }">
      <a-list-item v-if="item.add">
        <a-card hoverable>
          <plus-circle-outlined style="font-size: 36px; color: #555" />
        </a-card>
      </a-list-item>
      <a-list-item v-else>
        <a-card hoverable>
          <template #cover>
            <img :src="item.img" />
          </template>
          <a-card-meta>
            <template #title>
              <div :title="item.title">{{ item.title }}</div>
            </template>
            <template #description>
              <div class="description" :title="item.description">
                {{ item.description }}
              </div>
            </template>
          </a-card-meta>
          <template #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
          </template>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
  <!-- <a-row :gutter="16">
    <a-col :span="6" v-for="(t, index) in topics" :key="index">
      <a-card hoverable>
        <template #cover>
          <img :src="t.img" />
        </template>
        <template #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta :title="t.title" :description="t.description">
        </a-card-meta>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card hoverable> </a-card>
    </a-col>
  </a-row> -->
</template>

<script>
import { reactive, toRefs } from "vue";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "AppMain",
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    PlusCircleOutlined,
  },
  setup(props, context) {
    let data = reactive({
      topics: [
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          title: "相册1",
          description: "对相册1的描述",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          title: "相册2",
          description: "对相册2的描述",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          title: "相册1",
          description: "对相册1的描述",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          title: "相册2",
          description: "对相册2的描述",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          title: "相册1",
          description: "对相册1的描述",
        },
        {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          title: "相册2",
          description:
            "对相册2的描述对相册2的描述对相册2的描述对相册2的描述对相册2的描述对相册2的描述对相册2的描述",
        },
        {
          add: true,
        },
      ],
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style scoped>
.description {
  height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
}
</style>
