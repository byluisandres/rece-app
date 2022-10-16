<template lang="">
  <van-nav-bar title="Recetas" @click-right="onClickRight">
    <template #right>
      <van-icon name="plus" />
    </template>
  </van-nav-bar>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home-o" to="/recipes">Recipes</van-tabbar-item>
    <van-tabbar-item icon="calendar-o" to="/calendar">Calendar</van-tabbar-item>
    <van-tabbar-item icon="setting-o">Configuración</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o">Perfil</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: "app-index",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickRight() {
      this.$router.push({ name: "recipes-new" });
    },
  },
};
</script>
<style lang=""></style>
