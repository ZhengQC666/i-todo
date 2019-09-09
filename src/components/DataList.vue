<template>
  <div class="data-list bounceIn bounceInDown">
    <div class="list-table" @click="changeCollapse(0,$event)">
      待完成
      <span :class="{'close-span': !collapse[0].show}"></span>
    </div>
    <div class="list-box" :style="{'height':'auto','display':'block'}">
      <ul>
        <li class="event-list" v-for="item in getTodo" :key="item.id">
          <input type="checkbox" :key="item.id" @click="moveToDone(item.id)" />
          <div>{{item.content}}</div>
          <span class="todo-event-time">{{item.time}}</span>
          <button
            class="cancel-btn bttn-float bttn-lg bttn-primary"
            @click="moveCancel(item.id)"
          >取消</button>
        </li>
      </ul>
    </div>

    <div class="list-table" @click="changeCollapse(1,$event)">
      已完成
      <span :class="{'close-span': !collapse[1].show}"></span>
    </div>
    <div class="list-box">
      <ul>
        <li class="event-list" v-for="item in getDone" :key="item.id">
          <input type="checkbox" :key="item.id" checked @click="moveToDo(item.id)" />
          <div>{{item.content}}</div>
          <span class="done-event-time">{{item.time}}</span>
        </li>
      </ul>
    </div>

    <div class="list-table" @click="changeCollapse(2,$event)">
      已取消
      <span :class="{'close-span': !collapse[2].show}"></span>
    </div>
    <div class="list-box" :class="{'list-box-hide': false}">
      <ul>
        <li class="event-list" v-for="item in getCancel" :key="item.id">
          <div class="event-delete">{{item.content}}</div>
          <span class="cancel-event-time">{{item.time}}</span>
          <button
            class="cancel-btn bttn-material-flat bttn-lg bttn-primary"
            @click="moveToDo(item.id)"
          >恢复</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: [
        {
          show: true
        },
        {
          show: true
        },
        {
          show: true
        }
      ]
    };
  },
  computed: {
    getTodo() {
      return this.$store.getters.getTodo;
    },
    getDone() {
      return this.$store.getters.getDone;
    },
    getCancel() {
      return this.$store.getters.getCancel;
    }
  },
  methods: {
    moveToDone(id) {
      //移至已完成
      this.$store.dispatch("EventDone", id);
    },
    moveToDo(id) {
      //移至未完成
      this.$store.dispatch("TodoEvent", id);
    },
    moveCancel(id) {
      //移至已取消
      this.$store.dispatch("CancelEvent", id);
    },
    changeCollapse(num, event) {
      const show = this.collapse[num].show;
      if (show) {
        this.closeCollapse(event);
      } else {
        this.openCollapse(event);
      }
      this.collapse[num].show = !show;
    },
    closeCollapse(event) {
      // 关闭折叠面板
      let ulElement = event.currentTarget.nextElementSibling,
        children = ulElement.getElementsByTagName("ul")[0];
      ulElement.style.height = children.offsetHeight + "px";
      setTimeout(function() {
        ulElement.style.height = "0px";
        setTimeout(function() {
          ulElement.style.display = "none";
        }, 300);
      }, 10);
    },
    openCollapse(event) {
      // 打开折叠面板
      let ulElement = event.currentTarget.nextElementSibling,
        children = ulElement.getElementsByTagName("ul")[0];
      ulElement.style.display = "block";
      ulElement.style.height = children.offsetHeight + "px";
      setTimeout(function() {
        ulElement.style.height = "auto";
      }, 300);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.data-list {
  margin: 36px;
  .list-table {
    margin: 1%;
    border-radius: 25px;
    position: relative;
    height: 44px;
    line-height: 44px;
    padding-left: 20px;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
    cursor: pointer;
    span {
      position: absolute;
      right: 20px;
      top: 15px;
      width: 10px;
      height: 10px;
      content: "";
      border: {
        top: 2px solid #fff;
        right: 2px solid #fff;
      }
      transform: rotate(135deg);
      transition: transform 0.4s;
      &.close-span {
        transform: rotate(45deg);
      }
    }
  }
  .list-box {
    border-radius: 25px;
    width: 80%;
    margin: 0 auto;
    background: aquamarine;
    list-style: none;
    overflow: hidden;
    border: {
      left: 1px solid #eee;
      right: 1px solid #eee;
    }
    transition: height 0.3s;
    .event-list {
      position: relative;
      min-height: 44px;
      line-height: 25px;
      padding: 10px 100px 10px 50px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      color: #373e40;
      input[type="checkbox"] {
        position: absolute;
        left: 15px;
        top: 12px;
        width: 20px;
        height: 20px;
      }
      input[type="checkbox"]::before {
        content: "U";
        position: absolute;
        top: 0;
        left: 0;
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        color: white;
        font-size: 16px;
        background-color: #999;
        border-radius: 4px;
      }
      input[type="checkbox"]:checked::before {
        color: white;
        background-color: rgb(0, 132, 255);
        content: "F";
      }
      .cancel-btn {
        position: absolute;
        right: 10px;
        top: 6px;
        width: 56px;
        height: 35px;
        line-height: 30px;
        padding: 0;
        font-size: 17px;
      }
      .done-event-time {
        position: absolute;
        right: 10px;
        top: 0;
        line-height: 44px;
        font-size: 12px;
        color: #aaa;
      }
      .todo-event-time {
        position: absolute;
        right: 70px;
        top: 16px;
        line-height: 44px;
        font-size: 12px;
        color: #fd2b4e;
      }
      .cancel-event-time {
        position: absolute;
        right: 70px;
        top: 16px;
        line-height: 44px;
        font-size: 12px;
        color: #2204a367;
      }
      .event-delete {
        text-decoration: line-through;
        color: #999;
      }
    }
  }
}
</style>