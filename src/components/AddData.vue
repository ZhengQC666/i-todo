<template>
  <div class="add-data bounceIn bounceInUp">
    <input type="text" class="add-input" v-model="content" placeholder="待办事项" @keyup.enter="submit" />
    <button class="add-btn bttn-unite bttn-md bttn-primary" @click="submit">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    submit() {
      let params = {
        id: 0,
        type: 1,
        content: "",
        time: ""
      };
      this.content = this.content.trim();
      if (this.content) {
        params.content = this.content;
        this.$store.dispatch("AddEvent", params);
        this.content = "";
        this.$toast("添加成功");
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.add-data {
  position: relative;
  padding: 30px 90px 30px 0;
  font-size: 16px;
  .add-input {
    width: 100%;
    height: 40px;
    padding: 7px 10px;
    line-height: 26px;
    border: 1px solid #c0ccda;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-sizing: border-box;
    font-size: inherit;
    &:focus {
      outline: none;
    }
  }
  .add-btn {
    position: absolute;
    right: 0;
    top: 30px;
    width: 80px;
    height: 40px;
    line-height: 26px;
    color: #fff;
  }
}
</style>
