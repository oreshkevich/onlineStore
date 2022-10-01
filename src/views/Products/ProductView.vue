<template>
  <v-container>
    <section class="product mt-3 elevation-10">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img :src="product.imageSrc" class="product__img" />
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product__info">
            <h5 class="product__title display-1 mb-3 mt-3">
              {{ product.title }}
            </h5>
            <p class="product__category title">
              <span class="product__title">Vendor: </span>
              {{
                product.vendor.charAt(0).toUpperCase() +
                product.vendor.substr(1)
              }}
            </p>
            <p class="product__price title">
              <span class="product__title">Price: </span> $ {{ product.price }}
            </p>
            <p class="product__color title">
              <span class="product__title">Color: </span>
              <span
                :title="product.color"
                :style="{ backgroundColor: product.color }"
                class="product__color_bg"
              ></span>
            </p>
            <p class="title">
              <span class="product__title">Material: </span>
              {{
                product.material.charAt(0).toUpperCase() +
                product.material.substr(1)
              }}
            </p>
            <div class="title mb-5">
              <p class="product__title mb-2">Description:</p>
              {{ product.description }}
            </div>
            <v-btn color="primary" class="headline mr-3">Edit</v-btn>
            <v-btn color="primary" class="headline">Buy</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    product() {
      const id = this.id;
      return this.$store.getters.productById(id);
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #1c77ad;
  padding: 30px;
  margin-bottom: 100px;
}
.product__img {
  height: 100%;
  width: 550px;
}
.product__info {
  margin-left: 50px;
}
.product__title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #1875d0;
  margin-bottom: 0;
}
.product__price {
  color: red;
}
.product__color_bg {
  display: inline-block;
  width: 50px;
  height: 20px;
  border: 1px solid #2b2b2b;
  border-radius: 10px;
}
</style>
