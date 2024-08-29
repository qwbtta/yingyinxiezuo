<template>
  <div class="projectDetail">
    <div class="functional_area_head flex">
      <div class="head_left flex">
        <div class="thumbnail_con"></div>
        <span class="title">文件名</span>
        <div class="setStatus flex">
          <span>设置状态</span>
          <img src="@/assets/img/homePage/downArrow_thin.svg" alt="" />
        </div>
      </div>
      <div class="head_right flex">
        <div class="input_con">
          <img
            class="search_icon"
            src="@/assets/img/homePage/left_menu/search.svg"
            alt=""
          />
          <input
            class="search_input"
            type="text"
            placeholder="搜索项目或文件"
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
        <div class="normal_btn">收集文件</div>
        <div class="normal_btn">
          上传<img src="@/assets/img/homePage/downArrow_thin.svg" alt="" />
        </div>
        <div class="normal_btn">新建文件夹</div>
        <div class="generic_btn">
          <img
            class="btn_icon"
            src="@/assets/img/homePage/left_menu/search.svg"
            alt=""
          />
          分享
        </div>
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
      <div class="func_area">
        <img
          v-if="displayMode == 'img'"
          class="display_mode"
          src="@/assets/img/homePage/img_mode.svg"
          alt=""
          @click="displayMode = 'list'"
        />
        <img
          v-else
          class="display_mode"
          src="@/assets/img/homePage/list_mode.svg"
          alt=""
          @click="displayMode = 'img'"
        />
      </div>
    </div>
    <div class="content_area">
      <div v-if="displayMode == 'img'" class="folder_list">
        <div
          class="folder_item"
          v-for="(item, index) in [1, 1, 11, 1, 1, 1, , 1, 1]"
          :key="index"
          @click="$router.push('/fileDetail')"
        >
          <div class="folder_con flex">
            <img src="@/assets/img/homePage/folder_icon.svg" alt="" />
          </div>
          <span class="item_title ellipsis">好看的沙滩</span>
          <div class="item_des flex">
            <span class="item_des_left ellipsis">周祥·2022-12-25 22:35:46</span>
            <div class="item_des_right flex">
              <img src="@/assets/img/homePage/annotations.svg" alt="" />
              <span>16个批注</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="folder_list_table">
        <table>
          <tr>
            <th>名称</th>
            <th>状态</th>
            <th>批注</th>
            <th>大小</th>
            <th>上传日期</th>
            <th>上传者</th>
            <th>操作</th>
          </tr>

          <tr v-for="(item, index) in [1, 1, 1, 1, 1, 1, 1]" :key="index">
            <td>
              <div class="flex">
                <img
                  class="cover"
                  src="@/assets/img/homePage/sousou_logo.png"
                  alt=""
                />
                <span class="name">郑婷雅</span>
              </div>
            </td>
            <td style="color: #dbdbdc">待审核</td>
            <td>
              <img
                class="annotations"
                src="@/assets/img/homePage/annotations.svg"
                alt=""
              />
              <span>98个批注</span>
            </td>
            <td>30MB</td>
            <td>2022/07/07 10:52</td>
            <td>王丽杰</td>
            <td>...</td>
          </tr>
        </table>
      </div>
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
      tabList: ["文件", "分享", "回收站"],
      displayMode: "img", // img/list mode
    };
  },
};
</script>
<style lang="scss" scoped>
.projectDetail {
  width: 100%;
  .functional_area_head {
    .head_left {
      .thumbnail_con {
        width: 44px;
        height: 44px;
        background: #dedede;
        border-radius: 2px;
      }
      .title {
        margin: 0 12px;
      }
      .setStatus {
        width: 88px;
        height: 24px;
        background: #2a2a2b;
        border-radius: 4px;
        font-size: 14px;
        color: #dbdbdc;
        justify-content: center;
        cursor: pointer;
        > img {
          width: 12px;
          height: 12px;
          margin-left: 8px;
        }
      }
    }
    .head_right {
      .normal_btn {
        padding: 0 16px;
        height: 32px;
        background: #2a2a2b;
        border-radius: 4px;
        font-size: 14px;
        color: #dbdbdc;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        cursor: pointer;
        > img {
          width: 12px;
          height: 12px;
          margin-left: 8px;
        }
      }
    }
  }
  .func_area {
    margin-left: auto;
    .display_mode {
      width: 14px;
      height: 14px;
      cursor: pointer;
    }
  }
  .content_area {
    padding: 0 24px 24px;
    .folder_list {
      display: flex;
      flex-wrap: wrap;
      .folder_item {
        display: flex;
        flex-direction: column;
        margin-right: 24px;
        margin-top: 24px;
        .folder_con {
          width: 264px;
          height: 194px;
          background: #1e1e1f;
          border-radius: 8px;
          border: 1px solid #2a2a2b;
          justify-content: center;
          img {
            width: 88px;
            height: 88px;
          }
        }
        .file_con {
          width: 264px;
          height: 194px;
          border-radius: 8px;
          border: 1px solid #2a2a2b;
          position: relative;
          .checkbox {
            position: absolute;
            left: 8px;
            top: 8px;
            display: none;
          }
          .show {
            display: block;
          }
          cursor: pointer;
          &:hover {
            border: 2px solid #61be74;
            .checkbox {
              display: block;
            }
          }
        }
        .active_file_con {
          border: 2px solid #61be74;
        }
        .item_title {
          font-size: 14px;
          color: #dbdbdc;
          margin-top: 12px;
          max-width: 264px;
        }
        .item_des {
          justify-content: space-between;
          .item_des_left {
            font-size: 12px;
            color: #717171;
            margin-top: 4px;
            max-width: 190px;
          }
          .item_des_right {
            font-size: 12px;
            color: #949495;
            > img {
              width: 12px;
              height: 12px;
              margin-right: 6px;
            }
          }
        }
      }
    }
    .folder_list_table {
      .cover {
        width: 60px;
        height: 46px;
        border-radius: 4px;
      }
      .name {
        font-weight: 500;
        font-size: 14px;
        color: #dbdbdc;
        margin-left: 12px;
      }
      .annotations {
        width: 12px;
        height: 12px;
        margin-right: 4px;
      }
    }
  }
}
</style>