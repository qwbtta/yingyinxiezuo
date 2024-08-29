<template>
  <div class="addressBook">
    <div class="functional_area_head flex">
      <span class="title">通讯录</span>
      <div class="input_con">
        <img
          class="search_icon"
          src="@/assets/img/homePage/left_menu/search.svg"
          alt=""
        />
        <input
          class="search_input"
          type="text"
          placeholder="搜索姓名 手机号"
          v-model="searchValue"
        />
        <img
          v-if="searchValue"
          @click="searchValue = ''"
          class="clear_icon"
          src="@/assets/img/homePage/clear.png"
          alt=""
        />
      </div>
      <div class="generic_btn">
        <img class="btn_icon" src="@/assets/img/homePage/clear.png" alt="" />
        邀请
      </div>
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
    </div>
    <div class="content_area">
      <table>
        <tr>
          <th>昵称</th>
          <th>团队权限</th>
          <th>职业</th>
          <th>成员信息</th>
          <th>最近更新</th>
          <th>操作</th>
        </tr>

        <tr v-for="(item, index) in [1, 1, 1, 1, 1, 1, 1]" :key="index">
          <td>
            <div class="flex">
              <img
                class="avatar"
                src="@/assets/img/homePage/sousou_logo.png"
                alt=""
              />
              <span class="name">郑婷雅</span>
            </div>
          </td>
          <td>创建者</td>
          <td>摄影师</td>
          <td>136-7374-1688</td>
          <td>2022/07/07 10:52</td>
          <td>...</td>
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
      searchValue: "",
      activeIndex: "",
      tabList: ["全部", "外部联系人", "新的联系人", "我的群组", "权限设置"],
    };
  },
};
</script>
    <style lang="scss" scoped>
.addressBook {
  width: 100%;

  .content_area {
    // display: flex;
    padding: 0 24px 24px;
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .name {
      font-weight: 500;
      font-size: 14px;
      color: #dbdbdc;
      margin-left: 8px;
    }
  }
}
</style>