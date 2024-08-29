<template>
  <div class="home">
    <div class="functional_area_head flex">
      <span class="title">消息中心</span>
      <div class="input_con">
        <img
          class="search_icon"
          src="@/assets/img/homePage/left_menu/search.svg"
          alt=""
        />
        <input
          class="search_input"
          type="text"
          placeholder="搜索关键字"
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
    <div class="content_area" v-if="0 == activeIndex">
      <div class="item_con" v-for="(item, index) in [1, 1, 1, 1]" :key="index">
        <span class="time_title">2022/07/22</span>
        <div class="info_row flex">
          <img
            class="avatar"
            src="@/assets/img/homePage/sousou_logo.png"
            alt=""
          />
          <div class="des_con">
            <span class="operation">郑婷雅</span
            ><span class="project">剪辑师</span>
          </div>
          <div class="operation_area">操作</div>
        </div>
        <div class="info_row flex">
          <img
            class="avatar"
            src="@/assets/img/homePage/sousou_logo.png"
            alt=""
          />
          <div class="des_con">
            <span class="operation">郑婷雅</span
            ><span class="project">剪辑师</span>
          </div>
          <div class="operation_area">操作</div>
        </div>
      </div>
    </div>
    <div class="content_area" v-if="1 == activeIndex">
      <div class="item_con" v-for="(item, index) in [1, 1, 1, 1]" :key="index">
        <span class="time_title">2022/07/22</span>
        <div class="info_row flex">
          <img
            class="avatar"
            src="@/assets/img/homePage/sousou_logo.png"
            alt=""
          />
          <div class="des_con">
            <span class="operation">郑婷雅</span
            ><span class="project">剪辑师</span>
          </div>
          <div class="operation_area">
            <div class="normal_btn">查看</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      searchValue: "",
      activeIndex: 0,
      tabList: ["项目消息", "系统通知"],
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;

  .content_area {
    padding: 0 24px;
    width: 100%;
    .item_con {
      display: flex;
      flex-direction: column;
      .time_title {
        margin-top: 24px;
        margin-bottom: 16px;
        font-size: 12px;
        color: #4d4d4e;
      }
      .info_row {
        margin-bottom: 20px;
        .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin-right: 12px;
        }
        .des_con {
          display: flex;
          flex-direction: column;
          .operation {
            font-size: 14px;
            color: #dbdbdc;
          }
          .project {
            font-size: 12px;
            color: #717171;
          }
        }
        .operation_area {
          margin-left: auto;
          font-size: 12px;
          color: #717171;
          .normal_btn {
            padding: 0 12px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            background: linear-gradient(180deg, #61be74 0%, #8ed401 100%);
            border-radius: 4px;
            font-weight: 500;
            font-size: 12px;
            color: #ffffff;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>