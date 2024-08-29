<template>
  <div class="sidebar">
    <div class="brand_area">
      <img class="logo" src="@/assets/img/homePage/logo.svg" alt="" />
    </div>
    <div class="devide_line"></div>
    <div
      class="menu_item flex"
      :class="{ active_menu_item: index == activeIndex }"
      v-for="(item, index) in menuList.slice(0, 4)"
      :key="index"
      @click="go(item, index)"
    >
      <svg
        class="item_logo"
        :class="{ active_item_logo: index == activeIndex }"
        width="16"
        height="16"
      >
        <image :href="item.icon" width="16" height="16" style="fill: red" />
      </svg>

      <span>{{ item.name }}</span>
    </div>
    <div class="devide_line"></div>
    <div class="menu_item flex">
      <img
        class="item_logo"
        src="@/assets/img/homePage/left_menu/project.svg"
        alt=""
      /><span>团队项目</span>
      <img class="add" src="@/assets/img/homePage/left_menu/add.svg" alt="" />
    </div>
    <div
      class="project_item flex"
      :class="{ active_menu_item: index == activeProjectIndex }"
      v-for="(item, index) in [1, 1, 3, 4]"
      :key="'project_item' + index"
      @click="gorojectDetail(item, index)"
    >
      <div class="thumbnail_con"></div>
      <span class="project_name">文件{{ index + 1 }}</span>
    </div>
    <div class="side_footer">
      <div class="devide_line"></div>
      <div
        class="menu_item flex"
        :class="{ active_menu_item: index + 4 == activeIndex }"
        v-for="(item, index) in menuList.slice(4)"
        :key="index + 4"
        @click="go(item, index + 4)"
      >
        <svg
          class="item_logo"
          :class="{ active_item_logo: index + 4 == activeIndex }"
          width="16"
          height="16"
        >
          <image :href="item.icon" width="16" height="16" style="fill: red" />
        </svg>

        <span>{{ item.name }}</span>
      </div>

      <div class="devide_line"></div>
      <div class="user_con flex">
        <img
          class="avatar"
          src="@/assets/img/homePage/sousou_logo.png"
          alt=""
        />
        <div class="des_con">
          <span class="name">郑婷雅</span><span class="role">剪辑师</span>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      activeIndex: 0, //菜单栏index
      activeProjectIndex: null, //项目index
      menuList: [
        {
          name: "搜索",
          path: "/",
          icon: require("../assets/img/homePage/left_menu/search.svg"),
        },
        {
          name: "消息中心",
          path: "/",
          icon: require("../assets/img/homePage/left_menu/messageCenter.svg"),
        },
        {
          name: "待办",
          path: "/unfinished",
          icon: require("../assets/img/homePage/left_menu/todolist.svg"),
        },
        {
          name: "资源库",
          path: "/resourceLibrary",
          icon: require("../assets/img/homePage/left_menu/resourceLibrary.svg"),
        },
        {
          name: "通讯录",
          path: "/addressBook",
          icon: require("../assets/img/homePage/left_menu/addressBook.svg"),
        },
        {
          name: "分享管理",
          path: "/shareManagement",
          icon: require("../assets/img/homePage/left_menu/shareManagement.svg"),
        },
        {
          name: "帮助中心",
          path: "/addressBook",
          icon: require("../assets/img/homePage/left_menu/resourceLibrary.svg"),
        },
        {
          name: "管理后台",
          path: "/manageCenter",
          icon: require("../assets/img/homePage/left_menu/manageCenter.svg"),
        },
      ],
    };
  },
  watch: {
    $route(nVal, oVal) {
      if (nVal.fullPath.includes("projectDetail")) {
        this.activeIndex = null;
      } else {
        this.activeProjectIndex = null;
      }
    },
  },
  methods: {
    go(item, index) {
      this.activeIndex = index;
      if (item.path) {
        this.$router.push(item.path);
      }
    },
    gorojectDetail(item, index) {
      this.activeProjectIndex = index;

      this.$router.push({ path: "/projectDetail", query: { id: index } });
    },
  },
  mounted() {
    for (let i = 0; i < this.menuList.length; i++) {
      if (location.hash.replace("#", "") == this.menuList[i].path) {
        this.activeIndex = i;
      }
    }
  },
};
</script>
    
<style lang="scss" scoped>
svg {
  fill: rebeccapurple;
}
.sidebar {
  width: 264px;
  height: 100vh;
  background: #121213;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  border-right: 1px solid #1e1e1f;
  box-sizing: border-box;
  .brand_area {
    .logo {
      width: 125px;
      height: 26px;
      margin: 25px 12px 12px;
    }
  }
  .devide_line {
    width: 216px;
    height: 1px;
    background: #1e1e1f;
    margin: 16px 0;
  }
  .menu_item {
    width: 240px;
    height: 40px;
    border-radius: 4px;
    font-size: 14px;
    color: #949495;
    margin-bottom: 4px;
    cursor: pointer;
    .item_logo {
      width: 16px;
      height: 16px;
      margin: 0 12px;
      filter: drop-shadow(#949495 100px 0);
      transform: translateX(-100px);
    }
    .active_item_logo {
      filter: drop-shadow(#dbdbdc 100px 0);
    }
    .add {
      width: 16px;
      height: 16px;
      margin-left: auto;
      margin-right: 12px;
    }
  }
  .active_menu_item {
    background: #1e1e1f;
    font-weight: 500;
    color: #dbdbdc;
  }
  .project_item {
    width: 240px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    .thumbnail_con {
      width: 32px;
      height: 32px;
      background: #dedede;
      border-radius: 2px;
      margin-left: 40px;
    }
    .project_name {
      font-weight: 400;
      font-size: 14px;
      color: #949495;
      margin-left: 8px;
    }
  }
  .side_footer {
    margin-top: auto;
    .user_con {
      width: 240px;
      height: 64px;
      margin-bottom: 12px;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 12px;
      }
      .des_con {
        display: flex;
        flex-direction: column;
        .name {
          font-weight: 500;
          font-size: 14px;
          color: #dbdbdc;
        }
        .role {
          font-size: 12px;
          color: #717171;
        }
      }
    }
  }
}
</style>