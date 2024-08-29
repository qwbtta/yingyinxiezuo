<template>
  <div class="unfinished">
    <div class="functional_area_head flex">
      <span class="title">待办</span>
    </div>
    <div class="tab_card_con flex">
      <div
        class="tab_item"
        :class="{ active_tab_item: index == activeIndex }"
        v-for="(item, index) in tabList"
        :key="index"
        @click="activeIndex = index"
      >
        {{ item }}
      </div>
      <div></div>
    </div>
    <div class="content_area">
      <table>
        <tr>
          <th>待办内容</th>
          <th>待办类型</th>
          <th>创建人</th>
          <th>待办来源</th>
          <th>来源项目</th>
          <th>创建时间</th>
          <th>完成时间</th>
        </tr>

        <tr v-for="(item, index) in [1, 1, 1, 1, 1, 1, 1]" :key="index">
          <td style="font-weight: 500; color: #dbdbdc">
            这能写多少个字我也不知道.mp4
          </td>
          <td>创建者</td>
          <td>摄影师</td>
          <td>136-7374-1688</td>
          <td>...</td>
          <td>2022/07/07 10:52</td>
          <td>2022/07/07 10:52</td>
        </tr>
      </table>
    </div>
  </div>
</template>
      
      <script>
export default {
  components: {},
  data() {
    return {
      activeIndex: "",
      tabList: ["我负责的待办", "我的审批", "我提交的审批"],
    };
  },
};
</script>
      <style lang="scss" scoped>
.unfinished {
  width: 100%;

  .content_area {
    padding: 0 24px 24px;
  }
}
</style>