<template>
  <div>
    여기로 이동합시다~!
    <v-btn @click=" dialog=true">눌러보세요~!</v-btn>
    <v-dialog v-model="dialog" width="400">
      <v-card height="400">
        <v-layout row class="pa-5">
          <v-flex xs12 sm8 md4>승짱 바보</v-flex>
          <v-flex xs12 sm8 md4>승짱 똥멍청이</v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>