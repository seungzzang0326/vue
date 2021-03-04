<template>
  <div>
    Hello{{route}}
    <v-btn @click="a = true">입력해주세요.</v-btn>
    <v-layout v-if="textOn">
        <v-flex>{{text}}</v-flex>
    </v-layout>
    <v-dialog v-model="a">
      <v-card>
          <v-layout justify-center class="pa-3">
              <v-flex xs5><v-text-field v-model="text" outlined dense></v-text-field></v-flex>
              <v-flex xs3><v-btn @click="write">확인</v-btn></v-flex>
          </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: false,
      textOn:false,
      text:'',
      route:''
    };
  },
  created() {
      this.route=this.$route.params.id
  },
  methods: {
      write(){
          this.textOn=true
          this.a=false
      }
  },
};
</script>