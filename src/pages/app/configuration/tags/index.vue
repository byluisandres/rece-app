<template lang="">
  <van-tab title="Etiquetas" name="tags">
    <van-swipe-cell>
      <van-cell :border="true" title="Cell" />
      <template #right>
        <van-button square icon="edit" type="primary" />
        <van-button square icon="delete-o" type="danger" />
      </template>
    </van-swipe-cell>
    <van-swipe-cell>
      <van-cell :border="true" title="Cell" />
      <template #right>
        <van-button square icon="edit" type="primary" />
        <van-button square icon="delete-o" type="danger" />
      </template>
    </van-swipe-cell>
    <div style="margin: 0.5rem">
      <van-button
        icon="plus"
        type="success"
        round
        block
        size="mini"
        @click="showFormTag"
      />
    </div>
  </van-tab>

  <van-action-sheet v-model:show="show" title="Etiquetas">
    <div class="content">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="form.name"
            name="name"
            label="Nombre"
            placeholder="Nombre"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="success"
            native-type="submit"
            size="small"
          >
            Guardar
          </van-button>
        </div>
      </van-form>
    </div>
  </van-action-sheet>
</template>
<script>
import Form from "../../../../classes/Form";

export default {
  name: "tab-tags",
  data() {
    return {
      show: false,
      form: new Form({
        name: "",
      }),
    };
  },
  methods: {
    showFormTag() {
      this.show = true;
    },
    onSubmit() {
      this.$nextTick(function () {
        this.show = false;
      });
      console.log(this.form.data());
    },
  },
};
</script>
<style lang="css">
.content {
  height: 15vh;
}
</style>
