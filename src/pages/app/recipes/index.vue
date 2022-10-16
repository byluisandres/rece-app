<template lang="">
  <van-search
    v-model="form.name"
    show-action
    shape="round"
    background="#111827"
    placeholder="Buscar"
    @search="onSearch"
  >
    <template #action>
      <van-button
        icon="search"
        type="primary"
        @click="onClickButton"
        size="small"
        color="#111827"
      />
    </template>
  </van-search>

  <van-swipe-cell>
    <van-card
      desc="Description"
      title="Title"
      class="goods-card"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
    <template #right>
      <van-button
        square
        icon="edit"
        type="primary"
        class="buttons-action"
        @click="recipeEdit"
      />
      <van-button
        square
        icon="delete-o"
        type="danger"
        class="buttons-action"
        @click="recipeDelete"
      />
    </template>
  </van-swipe-cell>
</template>
<script>
export default {
  name: "recipes",
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    onClickButton() {
      console.log(this.form.name);
    },
    onSearch() {
      console.log(this.form.name);
    },
    recipeEdit() {
      this.$router.push({ name: "recipes-edit", params: { id: "4545" } });
    },
    recipeDelete() {
 
    },
  },
};
</script>
<style lang="css">
.goods-card {
  margin: 0;
  background-color: #f3f4f6;
}

.buttons-action {
  height: 100%;
}
</style>
