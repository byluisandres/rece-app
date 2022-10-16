<template lang="">
  <div class="page-recipes">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <!-- titulo -->
        <van-field
          v-model="form.title"
          name="title"
          label="Título"
          placeholder="Título"
        />
        <!-- descripcion-->
        <van-field
          v-model="form.description"
          label="Descripción"
          type="textarea"
          placeholder="Descripción"
          rows="1"
          autosize
        />
        <!-- categoria -->
        <van-field
          v-model="form.category"
          is-link
          readonly
          label="Categoría"
          placeholder="Categoría"
          @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" round position="bottom">
          <van-picker
            title="Categorías"
            :columns="categories"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          >
            <template #cancel> Cancelar </template>
            <template #confirm> Confirmar </template>
          </van-picker>
        </van-popup>
        <!-- etiquetas -->
        <van-field
          v-model="form.tag"
          is-link
          readonly
          label="Etiquetas"
          placeholder="Etiquetas"
          @click="showPickerTags = true"
        />
        <van-popup v-model:show="showPickerTags" round position="bottom">
          <van-picker
            title="Etiquetas"
            :columns="tags"
            @cancel="showPickerTags = false"
            @confirm="onConfirmTag"
          >
            <template #cancel> Cancelar </template>
            <template #confirm> Confirmar </template>
          </van-picker>
        </van-popup>
        <!-- ingredientes -->
        <van-field
          v-model="form.ingredients"
          label="Ingredientes"
          type="textarea"
          placeholder="Ingredientes"
        />
        <!-- instrucciones -->
        <van-field
          v-model="form.instructions"
          label="Instrucciones"
          type="textarea"
          placeholder="Instrucciones"
        />

        <!-- imagen -->
        <van-field readonly label="Imagenes" />
        <van-uploader
          style="margin: 16px"
          v-model="form.imagen"
          :after-read="afterRead"
          multiple
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block color="#14532D" native-type="submit">
          Guardar
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import Form from "../../../classes/Form";

export default {
  name: "recipes-edit",
  data() {
    return {
      form: new Form({
        title: "",
        description: "",
        category: "",
        tag: "",
        ingredients: "",
        instructions: "",
        imagenes: [],
      }),
      showPicker: false,
      showPickerTags: false,
      categories: [
        { text: "Entrada", value: "Entrada" },
        { text: "Plato Principal", value: "Plato Principal" },
        { text: "Postre", value: "Postre" },
      ],
      tags: [
        { text: "Rápido", value: "Rápido" },
        { text: "Fácil", value: "Fácil" },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form.data());
    },
    onConfirm(data) {
      this.form.category = data.value;
      this.showPicker = false;
    },
    onConfirmTag(data) {
      this.form.tag = data.value;
      this.showPickerTags = false;
    },
    afterRead(file) {
      console.log(file);
    },
  },
};
</script>
<style lang="css">
.page-recipes {
  height: 90vh;
  margin-top: 1rem;
}
</style>
