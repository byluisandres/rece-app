<template lang="">
  <van-nav-bar title="Rece app" :fixed="true" />
  <div class="page-login">
    <van-form @submit="onSubmit">
      <van-row class="mb">
        <van-col>
          <van-cell-group>
            <van-field
              v-model="form.email"
              name="email"
              label="Email"
              placeholder="Email"
            />
            <van-field
              v-model="form.password"
              type="password"
              name="assword"
              label="Contraseña"
              placeholder="Password"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="mb">
        <van-button round block color="#111827" size="small" native-type="submit">
          Iniciar Sesión
        </van-button>
      </van-row>
      <van-row justify="end" class="mb">
        <van-col>
            <span style="font-size:.8rem">
                Aún no tienes cuenta
                <router-link to="/auth/register">Registrarse</router-link>
            </span>
        </van-col>
      </van-row>
      <van-row justify="end" class="mb">
        <van-col>
          <span style="font-size:.8rem">
            ¿Has olvidado la contraseña?
            <router-link to="/auth/recover-password"
              >Recuperar contraseña</router-link
            >
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
  data() {
    return {
      form: new Form({
        email: "",
        password: "",
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
