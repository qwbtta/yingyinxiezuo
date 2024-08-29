<template>
  <div class="fileDetail">
    <div class="head flex">
      <div class="head_left flex">
        <img
          class="left_arrow"
          src="@/assets/img/homePage/downArrow_thin.svg"
          alt=""
          @click="$router.go(-1)"
        />
        <span class="title">夏日海边.mp4</span>
      </div>
    </div>
    <div class="main">
      <div class="main_left column">
        <div class="file_con">
          <!-- <video
            ref="video"
            src="https://highlight-video.cdn.bcebos.com/video/6s/06c3e398-6428-11ef-814a-6c92bf5b3c53.mp4"
          ></video> -->

          <video
            ref="video"
            src="https://video.699pic.com/videos/92/31/51/b_MrvxiuUVNpfY1696923151.mp4"
          ></video>
          <div class="mask" @click="checkStaus"></div>
        </div>
        <div
          ref="progress_bar"
          @click="handleProgress($event)"
          class="progress_bar"
        >
          <div ref="progress_con" class="progress_con"></div>
        </div>
        <div class="annotations_area"></div>
        <div class="functional_area flex">
          <div class="functional_area_left flex">
            <img
              v-if="playStastus == 'pause'"
              src="@/assets/img/homePage/play.svg"
              alt=""
              @click="checkStaus"
            />
            <img
              v-else
              @click="checkStaus"
              src="@/assets/img/homePage/pause.svg"
              alt=""
            />
            <div class="volume_con">
              <img
                v-if="volume == 0"
                src="@/assets/img/homePage/mute.svg"
                alt=""
              />
              <img v-else src="@/assets/img/homePage/volume.svg" alt="" />
              <div class="connect_block flex">
                <div class="range_con">
                  <img
                    v-if="volume == 0"
                    src="@/assets/img/homePage/mute.svg"
                    alt=""
                  />
                  <img v-else src="@/assets/img/homePage/volume.svg" alt="" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="50"
                    class="range_input"
                    v-model="volume"
                    @change="setVolume($event)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="functional_area_middle flex">
            <span class="current">{{ timeFormat.normal.current }}</span
            ><span class="separator">/</span
            ><span>{{ timeFormat.normal.total }}</span>
            <!-- <img
              class="arrow"
              src="@/assets/img/homePage/downArrow_thin.svg"
              alt=""
            /> -->
          </div>
          <div class="functional_area_right flex">
            <div class="rate">
              {{ activeRate == "正常" ? "倍速" : activeRate + "x" }}
              <div class="connect_block flex">
                <div class="rate_list">
                  <div class="title">播放速度</div>
                  <div class="rate_type flex">
                    <span
                      v-for="(item, index) in rateList"
                      :key="'type' + index"
                      @click="changeRate(item)"
                      >{{ item }}</span
                    >
                  </div>
                  <div class="scale flex">
                    <div
                      class="scale_item"
                      v-for="(item, index) in rateList"
                      :key="'scale' + index"
                      @click="changeRate(item)"
                    >
                      <div class="rate_btn" v-if="item == activeRate"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              @click="downloadFile"
              src="@/assets/img/homePage/download.svg"
              alt=""
            />
            <img
              @click="enterFullScreen"
              src="@/assets/img/homePage/full_screen.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="main_right">
        <div class="annotations_tab column">
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
          <div class="filter_area flex">
            <div class="filter_area_left flex">
              <div class="menu_item flex">
                <span class="item_name">全部评论</span>
                <img
                  class="arrow"
                  src="@/assets/img/homePage/downArrow_thin.svg"
                  alt=""
                />
              </div>
              <div class="menu_item flex">
                <span class="item_name">按时间码</span>
                <img
                  class="arrow"
                  src="@/assets/img/homePage/downArrow_thin.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="filter_area_right flex">
              <img src="@/assets/img/homePage/left_menu/search.svg" alt="" />
              <img src="@/assets/img/homePage/download.svg" alt="" />
            </div>
          </div>
          <div class="comment_area">
            <div class="comment_item">
              <img
                class="comment_item_left"
                src="@/assets/img/homePage/sousou_logo.png"
                alt=""
              />
              <div class="comment_item_right column">
                <div class="uerinfo flex">
                  <span class="name">王鹏云</span
                  ><span class="time">07-26 22:36</span>
                </div>
                <div class="text_comments">
                  <span class="time">00:22:23 </span>
                  这是文字的评论内容字的评论内容字的评论内容评论内容
                </div>
                <div class="img_comments">
                  <img src="@/assets/img/homePage/sousou_logo.png" alt="" />
                  <img src="@/assets/img/homePage/sousou_logo.png" alt="" />
                  <img src="@/assets/img/homePage/sousou_logo.png" alt="" />
                  <img src="@/assets/img/homePage/sousou_logo.png" alt="" />
                </div>
                <div class="function_area flex">
                  <span style="color: #4d4d4e">删除</span
                  ><span style="margin-left: auto">编辑</span
                  ><span style="margin-left: 12px">回复</span>
                </div>
                <div class="secondary_comments_list">
                  <div class="secondary_comments_item">
                    <div class="secondary_comments_item_userinfo flex">
                      <img
                        class="avatar"
                        src="@/assets/img/homePage/sousou_logo.png"
                        alt=""
                      />
                      <div class="column">
                        <span class="name">李积敏</span
                        ><span class="time">李积敏</span>
                      </div>
                    </div>
                    <span class="secondary_comment"
                      >大声点撒多少大声点撒多少大声点撒多少大声点撒多少大声点撒多少大声点撒多少</span
                    >
                  </div>
                  <div class="secondary_comments_item">
                    <div class="secondary_comments_item_userinfo flex">
                      <img
                        class="avatar"
                        src="@/assets/img/homePage/sousou_logo.png"
                        alt=""
                      />
                      <div class="column">
                        <span class="name">李积敏</span
                        ><span class="time">李积敏</span>
                      </div>
                    </div>
                    <span class="secondary_comment"
                      >大声点撒多少大声点撒多少大声点撒多少大声点撒多少大声点撒多少大声点撒多少</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="input_area">
            <textarea class="textarea" placeholder="请输入内容"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
          
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      playReady: false, //视频加载完成
      playStastus: "pause",
      timeFormat: {
        normal: {
          current: "",
          total: "",
        },
      },
      activeIndex: "",
      tabList: ["批注", "信息"],
      video: null, //视频dom元素
      volume: "50", //音量
      rateList: ["0.25", "0.5", "0.75", "正常", "1.25", "1.5", "1.75"],
      activeRate: "正常",
    };
  },
  methods: {
    checkStaus() {
      if (!this.playReady) {
        console.log("视频还没加载好");
        return;
      }
      if (this.video.paused) {
        this.video.play();
      } else {
        this.video.pause();
      }
    },
    secondsToHHMMSS(seconds) {
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      let secs = seconds % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      secs = secs < 10 ? "0" + secs : secs;

      return hours + ":" + minutes + ":" + secs;
    },
    //设置时间格式
    setNormalTime() {
      this.timeFormat.normal.current = this.secondsToHHMMSS(
        Math.ceil(this.video.currentTime)
      );
      this.timeFormat.normal.total = this.secondsToHHMMSS(
        Math.ceil(this.video.duration)
      );
      this.upDateProgress();
    },
    //更新进度条
    upDateProgress() {
      let clientWidth = this.$refs.progress_bar?.clientWidth;

      this.$refs.progress_con.style.width =
        (this.video.currentTime / this.video.duration) * clientWidth + "px";
    },
    //手动点击时改变进度条
    handleProgress(e) {
      let clientWidth = this.$refs.progress_bar.clientWidth;
      this.$refs.progress_con.style.width =
        (e.layerX / clientWidth) * clientWidth + "px";
      this.video.currentTime = (e.layerX / clientWidth) * this.video.duration;
    },
    setVolume(e) {
      this.video.volume = e.target.value / 100;
    },
    changeRate(rate) {
      this.activeRate = rate;
      if (rate == "正常") {
        rate = 1;
      }
      this.video.playbackRate = rate;
    },
    downloadFile() {
      axios({
        url: "https://video.699pic.com/videos/92/31/51/b_MrvxiuUVNpfY1696923151.mp4",
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const a = document.createElement("a");
          a.href = url;
          a.download = "视频.mp4";
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          }, 0);
        })
        .catch((err) => console.error("下载失败", err));
    },
    enterFullScreen() {
      if (this.video.requestFullscreen) {
        this.video.requestFullscreen();
      } else if (this.video.mozRequestFullScreen) {
        /* Firefox */
        this.video.mozRequestFullScreen();
      } else if (this.video.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        this.video.webkitRequestFullscreen();
      } else if (this.video.msRequestFullscreen) {
        /* IE/Edge */
        this.video.msRequestFullscreen();
      }
    },
    exitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
    },
  },
  mounted() {
    this.video = this.$refs.video;
    //加载完成监听器
    this.video.addEventListener("canplay", () => {
      this.setNormalTime();
      this.playReady = true;
    });
    //播放位置已更改监听器
    this.video.addEventListener("timeupdate", () => {
      this.setNormalTime();
    });
    // 播放事件监听器
    this.video.addEventListener("play", () => {
      this.playStastus = "play";
    });
    // 暂停事件监听器
    this.video.addEventListener("pause", () => {
      this.playStastus = "pause";
    });

    // 监听窗口宽度变化
    window.onresize = () => {
      this.upDateProgress();
    };
  },
};
</script>
  <style lang="scss" scoped>
.fileDetail {
  width: 100%;
  .head {
    width: 100%;
    height: 64px;
    background: #171718;
    border-bottom: 1px solid #1e1e1f;
    padding: 0 24px;
    .head_left {
      .left_arrow {
        width: 16px;
        height: 16px;
        transform: rotate(90deg);
        margin-right: 6px;
        cursor: pointer;
      }
      .title {
        font-weight: 500;
        font-size: 16px;
        color: #f3f3f3;
      }
    }
  }
  .main {
    display: flex;
    height: calc(100% - 64px);
    .main_left {
      width: 100%;
      height: 100%;
      background: #121213;
      box-shadow: inset -1px 0px 0px 0px #1e1e1f;
      padding: 24px;
      .file_con {
        width: 100%;
        height: 100%;
        position: relative;
        video {
          width: 100%;
          height: 100%;
        }
        .mask {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .progress_bar {
        width: 100%;
        height: 6px;
        background: #2a2a2b;
        flex-shrink: 0;
        position: relative;
        .progress_con {
          height: 6px;
          background: #1963f7;
        }
      }
      .annotations_area {
        height: 32px;
        background: #1e1e1f;
        flex-shrink: 0;
      }
      .functional_area {
        height: 40px;
        background: #1e1e1f;
        flex-shrink: 0;
        justify-content: space-between;
        padding: 0 20px;
        .functional_area_left {
          > * {
            margin-right: 16px;
          }
          img {
            width: 16px;
            height: 16px;
            cursor: pointer;
          }
          .volume_con {
            position: relative;
            &:hover {
              .range_con {
                display: flex;
                align-items: center;
              }
            }
            .connect_block {
              padding-bottom: 10px;
              position: absolute;
              left: -12px;
              top: -36px;
            }
            .range_con {
              display: none;

              width: 168px;
              height: 32px;
              background: #2a2a2b;
              border-radius: 4px;
              padding: 0 12px;
              img {
                margin-right: 8px;
              }
              .range_input {
                width: 120px;
              }
              /* 修改整个轨道的样式 */
              input[type="range"]::-webkit-slider-runnable-track {
                // background: #363636;
                height: 4px;
                border-radius: 20px;
              }

              /* 修改滑块的样式 */
              input[type="range"]::-webkit-slider-thumb {
                width: 10px;
                height: 10px;
                background: #5e92f9;
                border-radius: 50%;
                margin-top: -6px;
              }
            }
          }
        }
        .functional_area_middle {
          font-size: 14px;
          color: #717171;
          .current {
            color: #b8b8b8;
          }
          .separator {
            margin: -2px 4px 0;
          }
          .arrow {
            width: 12px;
            height: 12px;
          }
        }
        .functional_area_right {
          > * {
            margin-left: 24px;
          }
          > img {
            width: 16px;
            height: 16px;

            cursor: pointer;
          }
          .rate {
            position: relative;
            font-size: 14px;
            color: #949495;
            &:hover {
              .rate_list {
                display: block;
              }
            }
            .connect_block {
              padding-bottom: 10px;
              position: absolute;
              top: -112px;
              left: -119px;
            }
            .rate_list {
              display: none;
              width: 264px;
              height: 107px;
              background: #2a2a2b;
              border-radius: 8px;
              padding: 16px;
              .title {
                font-size: 12px;
                color: #a0a0a1;
                margin-bottom: 16px;
              }
              .rate_type {
                width: 232px;
                justify-content: space-between;
                > span {
                  width: 25px;
                  font-size: 12px;
                  color: #dbdbdc;
                  cursor: pointer;
                }
              }
              .scale {
                width: 232px;
                height: 4px;
                background: #363636;
                border-radius: 26px;
                padding: 0 10px;
                margin-top: 14px;
                justify-content: space-between;
                .scale_item {
                  width: 1px;
                  height: 8px;
                  background: #4d4d4e;
                  border-radius: 25px;
                  position: relative;
                  cursor: pointer;
                  .rate_btn {
                    width: 10px;
                    height: 10px;
                    background: #1963f7;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }
    .main_right {
      width: 416px;
      background: #171718;
      border-left: 1px solid #1e1e1f;
      flex-shrink: 0;
      .annotations_tab {
        height: 100%;
        .tab_card_con {
          flex-shrink: 0;
        }
        .filter_area {
          height: 48px;
          background: #171718;
          justify-content: space-between;
          padding: 0 24px;
          flex-shrink: 0;
          .filter_area_left {
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
          .filter_area_right {
            > img {
              width: 12px;
              height: 12px;
              margin-left: 16px;
              cursor: pointer;
            }
          }
        }
        .comment_area {
          height: 100%;
          padding: 0 24px;
          .comment_item {
            margin-top: 24px;
            display: flex;
            .comment_item_left {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              margin-right: 12px;
            }
            .comment_item_right {
              .uerinfo {
                .name {
                  font-size: 14px;
                  color: #dbdbdc;
                }
                .time {
                  font-size: 12px;
                  color: #717171;
                  margin-left: 8px;
                }
              }
            }
            .text_comments {
              margin-top: 6px;
              .time {
                color: #61be74;
              }
              font-size: 14px;
              color: #dbdbdc;
              line-height: 20px;
            }
            .img_comments {
              display: flex;
              flex-wrap: wrap;
              > img {
                width: 87px;
                height: 49px;
                border-radius: 4px;
                margin-right: 12px;
                margin-top: 8px;
                border: 1px solid #1e1e1f;
                &:nth-of-type(3n) {
                  margin-right: 0;
                }
              }
            }
            .function_area {
              margin-top: 8px;
              font-size: 12px;
              color: #949495;
              cursor: pointer;
            }
            .secondary_comments_list {
              border-left: 1px solid #2a2a2b;
              margin-top: 6px;
              padding-top: 4px;
              padding-left: 13px;
              .secondary_comments_item {
                margin-bottom: 12px;
                &:last-of-type {
                  margin-bottom: 0;
                }
                .secondary_comments_item_userinfo {
                  .avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    margin-right: 8px;
                  }
                  .name {
                    font-size: 12px;
                    color: #dbdbdc;
                  }
                  .time {
                    font-size: 10px;
                    color: #4d4d4e;
                  }
                }
                .secondary_comment {
                  font-size: 12px;
                  color: #949495;
                  line-height: 20px;
                  margin-top: 6px;
                }
              }
            }
          }
        }
        .input_area {
          height: 168px;
          background: #171718;
          border-top: 1px solid #1e1e1f;
          padding: 24px;
          flex-shrink: 0;
          .textarea {
            width: 100%;
            height: 80px;
            font-size: 14px;
            color: #dbdbdc;
            line-height: 22px;
            background: #171718;
            &::placeholder {
              color: #4d4d4e;
            }
          }
        }
      }
    }
  }
}
</style>