<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex>
          <v-carousel>
            <v-carousel-item
              v-for="(product, i) in promoProducts"
              :key="i"
              :src="product.imageSrc"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="(product, i) in products" :key="i">
          <router-link
            :aria-label="product.title"
            :to="'/product/' + product.id"
          >
            <v-img height="250" :src="product.imageSrc"></v-img>
          </router-link>
          <v-card class="mx-auto my-12" max-width="374">
            <v-card-title>{{ product.title }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
              </v-row>
              <v-card-text>
                <div>{{ product.description }}</div>
              </v-card-text>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <p class="subheading card_price">
              <span class="title">Price:</span>${{ product.price }}
            </p>

            <v-card-actions>
              <v-btn
                dark
                color="light-blue darken-4"
                rounded
                :to="'/product/' + product.id"
              >
                Description
              </v-btn>
              <v-btn dark color="light-blue darken-4" rounded>
                Add to Card
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout></v-container
    >
  </div>
</template>

<script>
export default {
  computed: {
    promoProducts() {
      return this.$store.getters.promoProducts;
    },
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style scoped>
.card_heading {
  font-weight: bold;
  word-wrap: break-word;
  text-align: center;
  margin-bottom: 1.5rem;
}
.card_describe {
  margin-top: auto;
  padding-left: 1rem;
}
.card_price {
  color: #c00f1b;
  font-size: 18px;
}
</style>

