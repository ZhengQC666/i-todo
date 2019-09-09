<template>
  <div class="panel" :class="{'show-panel':isShowPanel}">
    <ul class="panel-options">
      <li>
        <button class="option-btn" @click="$emit('openThemeTable')">切换主题</button>
      </li>
      <li>
        <button class="option-btn" @click="$emit('openDataTable')">编辑数据</button>
      </li>
      <li>
        <button class="option-btn" @click="$emit('clearAllData')">清空数据</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["isShowPanel"]
};
</script>

<style lang="scss" rel="stylesheet/scss">
.panel {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  padding: 100px 20px 30px;
  box-sizing: border-box;
  transform: translateX(-250px);
  transition: transform 0.3s;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  z-index: 9;
  &.show-panel {
    transform: translateX(0);
  }
  .panel-options {
    & > li {
      line-height: 60px;
    }
  }
  .option-btn {
    width: 100px;
    height: 40px;
    line-height: 26px;
    color: #fff;
    transition: background 0.3s ease-in;
  }
  pre {
    white-space: pre-wrap;
    line-height: 20px;
  }
}
</style>
