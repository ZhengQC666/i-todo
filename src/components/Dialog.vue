<template>
  <div class="dialog">
    <div class="dialog-wrapper">
      <div class="dialog-header">
        <span class="dialog-header-title">-&gt;提示&lt;-</span>
      </div>
      <div class="dialog-content">{{msg}}</div>
      <div class="dialog-btn">
        <button type="button" class="cancel-btn" @click="$emit('cancel')">取消</button>
        <button type="button" class="sure-btn" @click="$emit('sure')">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg"]
};
</script>

<style lang="scss" rel="stylesheet/scss">
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  .dialog-wrapper {
    position: absolute;
    left: 50%;
    top: 20%;
    width: 100%;
    max-width: 400px;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    animation: dialog 0.5s;
  }
  .dialog-header {
    padding: 20px 20px 0;
  }
  .dialog-content {
    padding: 30px 20px;
    color: #475669;
    font-size: 18px;
    text-align: center;
    p {
      font-size: 14px;
      margin-top: 10px;
    }
  }
  .dialog-btn {
    padding: 10px 20px 15px;
    text-align: right;
    button {
      font-size: 14px;
    }
    .cancel-btn {
      width: 50px;
      background: #fff;
      border: 1px solid #c0ccda;
      color: #1f2d3d;
    }
    .sure-btn {
      width: 50px;
      margin-left: 5px;
      color: #fff;
      transition: background 0.3s ease-in;
    }
  }
}
@keyframes dialog {
  from {
    top: 15%;
  }
}
</style>