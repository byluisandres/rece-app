<template lang="">
  <div class="title">
    <h1>Perfil</h1>
  </div>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="form.name"
        name="name"
        label="Nombre"
        placeholder="Nombre"
      />
      <van-field
        v-model="form.email"
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="success" native-type="submit" size="small">
        Guardar
      </van-button>
    </div>
  </van-form>
</template>
<script>
import Form from "../../../classes/Form";

export default {
  name: "profile",
  data() {
    return {
      form: new Form({
        name: "",
      }),
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
<style lang="css">
.title {
  margin: 16px;
}
.title h1 {
  font-size: 1.5rem;
}
</style>
