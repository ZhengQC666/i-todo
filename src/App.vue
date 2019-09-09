<template>
  <div id="app" :class="[getTheme]">
    <i-header @panel="showPanel"></i-header>
    <section class="container" :class="{'hide': table}">
      <i-add-data></i-add-data>
      <i-data-list></i-data-list>
      <i-sidebar
        :isShowPanel="panel"
        @clearAllData="clearData"
        @openDataTable="table=true; panel=false"
        @openThemeTable="theme=true; panel=false"
      ></i-sidebar>
    </section>
    <i-dialog v-show="dialog" :msg="tips" @cancel="dialog=false" @sure="sureDialog"></i-dialog>
    <i-data-table @deldialog="delData" :isShowTable="table" @close="table=false"></i-data-table>
    <i-theme :is-show="theme" @close="theme=false"></i-theme>
  </div>
</template>

<script>
import IHeader from "./views/Header.vue";
import ISidebar from "./views/Sidebar.vue";
import ITheme from "./components/Theme.vue";
import IDialog from "./components/Dialog.vue";
import IAddData from "./components/AddData.vue";
import IDataList from "./components/DataList.vue";
import IDataTable from "./components/DataTable.vue";

export default {
  data() {
    return {
      panel: false,
      dialog: false,
      table: false,
      theme: false,
      dialog_type: "",
      tips: "",
      del_info: {
        index: 0,
        id: 0
      }
    };
  },
  components: {
    IHeader,
    IAddData,
    ISidebar,
    IDialog,
    IDataTable,
    IDataList,
    ITheme
  },
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    }
  },
  methods: {
    clearData() {
      this.panel = false;
      this.dialog = true;
      this.dialog_type = "clear";
      this.tips = "清空后无法恢复，确认清空吗？";
    },
    delData(index, id) {
      this.dialog = true;
      this.dialog_type = "del";
      this.tips = "删除后无法恢复，确认删除吗？";
      this.del_info = {
        index: index,
        id: id
      };
    },
    sureDialog() {
      switch (this.dialog_type) {
        case "clear":
          this.$store.dispatch("ClearEvent");
          this.$toast("清空数据成功");
          break;
        case "del":
          this.$store.dispatch("DeleteEvent", this.del_info);
          this.$toast("删除成功");
          break;
      }
      this.dialog = false;
    },
    showPanel() {
      if (this.table) {
        this.table = !this.table;
      } else if (this.theme) {
        this.theme = !this.theme;
      } else {
        this.panel = !this.panel;
      }
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss" src="./assets/theme.scss"></style>
<style lang="scss" rel="stylesheet/scss">
@import url("./assets/animate.css");
@import url("./assets/bttn.min.css");
html,
body,
ul,
li,
input,
p {
  margin: 0;
  padding: 0;
}
body {
  background: linear-gradient(lightcyan, white, lightcyan);
  font-size: 16px;
  font-family: "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi,
    sans-serif;
}
input,
button {
  -webkit-tap-highlight-color: transparent;
}
input[type="text"] {
  -webkit-appearance: none;
}
button {
  padding: 7px 0;
  outline: none;
  text-align: center;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
}
html,
body {
  height: 100%;
}
::-webkit-scrollbar {
  width: 0;
}
body,
#app {
  width: 100%;
  overflow-x: hidden;
}
#app {
  height: 100%;
  padding-bottom: 60px;
  box-sizing: border-box;
}

ul {
  list-style: none;
}
.container {
  width: 100%;
  padding: 0 10px;
  max-width: 800px;
  margin: auto;
  box-sizing: border-box;
  &.hide {
    display: none;
  }
}
</style>
