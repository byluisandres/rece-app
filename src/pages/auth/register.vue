<template lang="">
  <van-nav-bar title="Rece app" :fixed="true" />
  <div class="page-login">
    <van-form @submit="onSubmit">
      <van-row class="mb">
        <van-col>
          <van-cell-group>
            <van-field
              v-model="form.name"
              name="name"
              label="Nombre"
              placeholder="Nombre"
            />
            <van-field
              v-model="form.email"
              name="email"
              label="Email"
              placeholder="Email"
            />
            <van-field
              v-model="form.password"
              type="password"
              name="Password"
              label="Contraseña"
              placeholder="Password"
            />
            <van-field
              v-model="form.password_confirmation"
              type="password"
              name="Password"
              label="Confirmar contraseña"
              placeholder="Confirmar contraseña"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="mb">
        <van-button round block color="#111827" size="small" native-type="submit">
          Registrarse
        </van-button>
      </van-row>
      <van-row justify="end" class="mb">
        <van-col>
          <span style="font-size: 0.8rem">
            Ya tiene cuenta
            <router-link to="/">Iniciar sesión</router-link>
          </span>
        </van-col>
      </van-row>
    </van-form>
  </div>
</template>
<script>
import Form from "../../classes/Form";

export default {
  name: "login",
  components: {},
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      }),
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form.data());
    },
  },
};
</script>
<style scoped lang="css">
.page-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
