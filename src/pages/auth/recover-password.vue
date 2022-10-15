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
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="mb">
        <van-button round block color="#111827" native-type="submit">
          Recuperar contraseña
        </van-button>
      </van-row>
      <van-row justify="end" class="mb">
        <van-col>
            <span style="font-size:.8rem">
                Ya tiene cuenta
                <router-link to="/">Iniciar sesión</router-link>
            </span>
        </van-col>
      </van-row>
    </van-form>
  </div>
</template>
<script>
import FormClase from "../../classes/Form";
import { Form, Field, CellGroup, NavBar, Col, Row } from "vant";

export default {
  name: "login",
  components: {
    Form,
    Field,
    CellGroup,
    NavBar,
    Col,
    Row,
  },
  data() {
    return {
      form: new FormClase({
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
