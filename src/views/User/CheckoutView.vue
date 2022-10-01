<template>
  <v-container class="grey lighten-5">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text-secondary mb-3">Orders</h1>
        <v-list flat subheader three-line>
          <v-list-item-group avatar v-for="(order, i) in orders" :key="i">
            <v-list-item>
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox
                    color="success"
                    :input-value="order.done"
                    @change="markDone(order)"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn :to="'/product/' + order.productId" class="primary"
                    >Open</v-btn
                  >
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 'test',
          name: 'Serge',
          phone: '22-22-22',
          productId: '1',
          done: false,
        },
        {
          id: 'test',
          name: 'Serge',
          phone: '22-22-22',
          productId: '1',
          done: false,
        },
      ],
    };
  },
  methods: {
    markDone(order) {
      order.done = true;
    },
  },
};
</script>
