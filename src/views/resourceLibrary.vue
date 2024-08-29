<template>
  <div class="resourceLibrary">
    <div class="functional_area_head flex">
      <span class="title">资源库</span>
      <div class="input_con">
        <img
          class="search_icon"
          src="@/assets/img/homePage/left_menu/search.svg"
          alt=""
        />
        <input
          class="search_input"
          type="text"
          placeholder="搜索关键词"
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
      <div class="generic_btn">上传</div>
    </div>
    <div class="filter_area flex">
      <div class="menu_item flex">
        <span class="item_name">文件夹</span>
        <img
          class="arrow"
          @click="changeFold(0)"
          src="@/assets/img/homePage/downArrow_thin.svg"
          alt=""
        />
        <div
          class="select_list"
          style="width: 360px"
          v-if="funcListFoldable[0]"
        >
          <div
            class="select_item flex"
            v-for="(item, index) in folderList"
            :key="index"
          >
            <el-checkbox v-model="item.isSelect"></el-checkbox>
            <span @click="item.isSelect = !item.isSelect"
              >文件夹{{ index + 1 }}</span
            >
          </div>
        </div>
      </div>
      <div class="menu_item flex">
        <span class="item_name">类型</span>
        <img
          class="arrow"
          @click="changeFold(1)"
          src="@/assets/img/homePage/downArrow_thin.svg"
          alt=""
        />
        <div class="select_list" v-if="funcListFoldable[1]">
          <div
            class="select_item flex"
            v-for="(item, index) in fileType"
            :key="index"
          >
            <el-checkbox v-model="item.isSelect"></el-checkbox>
            <span @click="item.isSelect = !item.isSelect">{{
              item.typeName
            }}</span>
          </div>
        </div>
      </div>
      <div class="menu_item flex">
        <span class="item_name">添加时间</span>
        <img
          class="arrow"
          @click="changeFold(2)"
          src="@/assets/img/homePage/downArrow_thin.svg"
          alt=""
        />
        <div class="select_list" v-if="funcListFoldable[2]">
          <div
            class="select_item flex"
            v-for="(item, index) in createTime.timeType"
            :key="index"
          >
            <el-radio
              v-model="createTime.timeSelected"
              :label="item"
            ></el-radio>
            <span @click="createTime.timeSelected = item">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="menu_item flex">
        <span class="item_name">时长</span>
        <img
          class="arrow"
          @click="changeFold(3)"
          src="@/assets/img/homePage/downArrow_thin.svg"
          alt=""
        />
        <div class="select_list" v-if="funcListFoldable[3]">
          <div
            class="select_item flex"
            v-for="(item, index) in duration.durationType"
            :key="index"
          >
            <el-radio
              v-model="duration.durationSelected"
              :label="item"
            ></el-radio>
            <span @click="duration.durationSelected = item">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="menu_item flex">
        <span class="item_name">标签</span>
        <img
          class="arrow"
          src="@/assets/img/homePage/downArrow_thin.svg"
          alt=""
        />
      </div>
    </div>
    <div class="main">
      <div class="main_left">
        <div class="title_row flex">
          <div class="row_left flex">
            <span>子文件夹（2）</span
            ><img src="@/assets/img/homePage/downArrow_3.svg" alt="" />
          </div>
          <div class="row_right flex">
            <el-checkbox v-model="checked"></el-checkbox>
            <span @click="checked = !checked">显示子文件夹内容</span>
          </div>
        </div>
        <div class="folder_list">
          <div
            class="folder_item"
            v-for="(item, index) in [1, 1, 1]"
            :key="index"
          >
            <div class="folder_con flex">
              <img src="@/assets/img/homePage/folder_icon.svg" alt="" />
            </div>
            <span class="item_title ellipsis">好看的沙滩</span>
            <span class="item_des ellipsis">周祥·2022-12-25 22:35:46</span>
          </div>
        </div>
        <div class="title_row flex">
          <div class="row_left flex">
            <span>文件（3）</span>
          </div>
        </div>
        <div class="folder_list">
          <div
            class="folder_item"
            v-for="(item, index) in fileList"
            :key="index"
          >
            <div
              class="file_con flex"
              :class="{ active_file_con: item.isSelect }"
              @click="item.isSelect = !item.isSelect"
            >
              <el-checkbox
                class="checkbox"
                :class="{ show: item.isSelect }"
                v-model="item.isSelect"
              ></el-checkbox>
            </div>
            <span class="item_title ellipsis">好看的沙滩</span>
            <span class="item_des ellipsis">周祥·2022-12-25 22:35:46</span>
          </div>
        </div>
      </div>
      <div class="main_right column">
        <img class="preview_img" src="@/assets/img/homePage/clear.png" alt="" />
        <input
          class="normal_input"
          type="text"
          value="这能写多少个字我也不知道"
        />
        <input class="normal_input" type="text" placeholder="添加描述" />
        <textarea class="normal_textarea"></textarea>
        <span class="basic_information"></span>
        <div class="info_row flex">
          <span class="info_title">格式</span><span class="info">mp3</span>
        </div>
        <div class="info_row flex">
          <span class="info_title">文件大小</span
          ><span class="info">23,32MB</span>
        </div>
        <div class="info_row flex">
          <span class="info_title">创建日期</span
          ><span class="info">2022/05/04 10:47</span>
        </div>
        <div class="info_row flex">
          <span class="info_title">修改日期</span
          ><span class="info">2022/05/04 10:47</span>
        </div>
        <div class="add_btn">添加到项目</div>
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
      funcListFoldable: [0, 0, 0, 0, 0],
      folderList: [
        { isSelect: false },
        { isSelect: true },
        { isSelect: false },
      ],
      fileType: [
        { typeName: "MP4", isSelect: false },
        { typeName: "MOV", isSelect: true },
        { typeName: "PNG", isSelect: false },
        { typeName: "JPG/JPEG", isSelect: true },
        { typeName: "GIF", isSelect: false },
        { typeName: "文档", isSelect: false },
        { typeName: "其他", isSelect: false },
      ],
      createTime: {
        timeType: [
          "今天",
          "昨天",
          "最近7天",
          "最近30天",
          "最近半年",
          "最近一年",
        ],
        timeSelected: "",
      },
      duration: {
        durationType: [
          "0s - 15s",
          "15s - 30s",
          "30s - 1min",
          "1min - 2mins",
          "2mins以上",
        ],
        durationSelected: "",
      },
      fileList: [{ isSelect: false }, { isSelect: false }, { isSelect: false }],
      checked: false,
    };
  },
  methods: {
    changeFold(index) {
      for (let i = 0; i < this.funcListFoldable.length; i++) {
        if (i == index) {
          this.$set(
            this.funcListFoldable,
            index,
            !this.funcListFoldable[index]
          );
        } else {
          this.$set(this.funcListFoldable, i, 0);
        }
      }
    },
  },
};
</script>
  <style lang="scss" scoped>
.resourceLibrary {
  width: 100%;
  .filter_area {
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #1e1e1f;
    padding: 0 24px;
    .menu_item {
      margin-right: 16px;
      position: relative;
      .item_name {
        font-size: 14px;
        color: #dbdbdc;
      }
      .arrow {
        width: 12px;
        height: 12px;
        margin-left: 4px;
        cursor: pointer;
      }
      .select_list {
        position: absolute;
        left: 0;
        top: 24px;
        width: 168px;
        background: #2a2a2b;
        border-radius: 8px;
        padding: 3px 16px 19px;
        ::v-deep .el-radio__label {
          display: none;
        }
        ::v-deep .el-radio__original {
          cursor: pointer;
        }
        .select_item {
          margin-top: 16px;
          span {
            font-weight: 500;
            font-size: 14px;
            color: #dbdbdc;
            margin-left: 8px;
            user-select: none;
            cursor: pointer;
          }
        }
      }
    }
  }
  .main {
    width: 100%;
    display: flex;
    .main_left {
      width: 100%;
      padding: 0 24px;
      .title_row {
        width: 100%;
        justify-content: space-between;
        margin-top: 24px;
        .row_left {
          font-size: 12px;
          color: #dbdbdc;
          img {
            width: 14px;
            height: 14px;
          }
        }
        .row_right {
          font-size: 12px;
          color: #949495;
          // img {
          //   width: 12px;
          //   height: 12px;
          //   margin-right: 2px;
          // }
          span {
            margin-left: 2px;
            user-select: none;
            cursor: pointer;
          }
        }
      }
      .folder_list {
        display: flex;
        flex-wrap: wrap;
        .folder_item {
          display: flex;
          flex-direction: column;
          margin-right: 24px;
          margin-top: 12px;
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
            font-size: 12px;
            color: #717171;
            margin-top: 4px;
            max-width: 264px;
          }
        }
      }
    }
    .main_right {
      width: 288px;
      height: 100%;
      border-left: 1px solid #1e1e1f;
      padding: 24px;
      flex-shrink: 0;
      .preview_img {
        width: 240px;
        height: 240px;
        border-radius: 8px;
        margin-bottom: 32px;
      }
      .normal_input {
        width: 240px;
        height: 32px;
        background: #171718;
        border-radius: 4px;
        border: 1px solid #1e1e1f;
        font-weight: 500;
        font-size: 13px;
        color: #dbdbdc;
        padding: 0 12px;
        margin-bottom: 12px;
        &::placeholder {
          font-weight: 400;
          font-size: 12px;
          color: #4d4d4e;
        }
      }
      .normal_textarea {
        width: 240px;
        height: 64px;
        background: #171718;
        border-radius: 4px;
        border: 1px solid #1e1e1f;
        font-weight: 500;
        font-size: 13px;
        color: #dbdbdc;
        padding: 8px 12px;
        margin-bottom: 12px;
        &::placeholder {
          font-weight: 400;
          font-size: 12px;
          color: #4d4d4e;
        }
      }
      .basic_information {
        margin: 12px 0;
        font-size: 12px;
        color: #dbdbdc;
      }
      .info_row {
        margin-bottom: 4px;
        .info_title {
          width: 44px;
          font-size: 11px;
          color: #949495;
          margin-right: 24px;
        }
        .info {
          font-size: 11px;
          color: #dbdbdc;
        }
      }
      .add_btn {
        width: 240px;
        height: 32px;
        background: rgba(97, 190, 116, 0.03);
        border-radius: 4px 4px 4px 4px;
        border: 1px solid rgba(97, 190, 116, 0.2);
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #61be74;
        margin-top: 28px;
        cursor: pointer;
      }
    }
  }
}
</style>