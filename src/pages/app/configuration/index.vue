<template lang="">
  <div class="page-configuration">
    <van-tabs v-model:active="activeName"> 
        <tab-categories/>
        <tab-tags/>
    </van-tabs>
  </div>
</template>
<script>
import TabCategories from "./categories/index.vue";
import TabTags from "./tags/index.vue";

export default {
  name: "configuration",
  components: {
    TabCategories,
    TabTags,
  },
  data() {
    return {
      activeName: "categories",
    };
  },
  methods: {
    
  },
};
</script>
<style lang="css">
.page-configuration {
  height: 90vh;
}
</style>
