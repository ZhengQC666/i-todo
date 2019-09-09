<template>
  <header class>
    <h1 class="bounceIn bounceInLeft">
      iTodo
      <a class="panel-btn" @click="$emit('panel')">
        <span></span>
      </a>
    </h1>
  </header>
</template>

<script>
</script>

<style lang="scss" rel="stylesheet/scss">
header {
  position: relative;
  width: 100%;
  height: 70px;
  z-index: 100;
  h1 {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    line-height: 70px;
    text-align: center;
    color: #fff;
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: transparent;
    a.panel-btn {
      position: absolute;
      left: 10px;
      top: 22px;
      width: 30px;
      height: 26px;
      cursor: pointer;
    }
    span,
    span:before,
    span:after {
      position: absolute;
      left: 0;
      width: 30px;
      height: 4px;
      content: "";
      background: #fff;
    }
    span {
      top: 11px;
      &:before {
        top: 0;
        transform: translateY(-9px);
        transition: all 0.3s;
      }
      &:after {
        transform: translateY(9px);
        transition: all 0.3s;
      }
    }
    a:active span {
      top: 11px;
      &:before {
        top: 0;
        transform: rotate(45deg);
        transition: all -1s;
      }
      &:after {
        transform: rotate(-45deg);
        transition: all -1s;
      }
    }
    a:visited span {
      top: 11px;
      &:before {
        top: 0;
        transform: rotate(45deg);
        transition: all 0.3s;
      }
      &:after {
        transform: rotate(-45deg);
        transition: all 0.3s;
      }
    }
  }
}
</style>
