<template>
  <div>
    <div id="main-content" class="container">
      <div class="container">
        <!-- <div class="row header">
          <span class="padded">Symbole</span>
          <span class="padded">Change %</span>
          <span class="padded">Price $</span>
          <span class="padded">Volume</span>
          <span class="padded">{Change $</span>
          <span class="padded">Day Hight</span>
          <span class="padded">Day Low</span>
        </div>

        <div v-for="(item,index) in stocks" :key="index">
          <stock :stock="item"></stock>
        </div> -->

        <table style="width:100%">
          <tr class='header'>
            <th class='padded'></th>
            <th class='padded'>Change %</th>
            <th class='padded'>Price $</th>
            <th class='padded'>Volume</th>
            <th class='padded'>Change $</th>
            <th class='padded'>Day Hight</th>
            <th class='padded'>Day Low</th>
            <th class='padded'></th>
          </tr>
            <stock  v-for="(item,index) in stocks" :key="index" :stock="item"></stock>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { HTTP } from "../http/httpUtils";
import { sectors } from "../data/sectors";

let msgServer;
const axios = require("axios");
export default {
  name: "sse-test",
  name: "websocketdemo",

  props: {
    stocks: {
      type: Array,
      default: [],
      required: true
    }
  },

  data() {
    return {
      //   stock: {
      //       changeInPercent:null,
      //       timeZone:null,
      //       bid:null,
      //       avgVolume:null,
      //       previousClose:null,
      //       open:null,
      //       ask:null,
      //       askSize:null,
      //       change:null,
      //       dayHight:null,
      //       dayLow:null,
      //       symbol:null,
      //       price:null,
      //       volume:null
      //   }
    };
  },
  methods: {

  },

  mounted() {}
};
</script>

<style scoped>
.row {
  display: inline;
}

.column {
  display: inline-block;
}
/*set a style for the buttons*/

button {
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

li:hover {
  background-color: rgb(218, 250, 208);
  border: solid;
  border-color: #4caf50;
  border-radius: 5px;
}

.itemlist {
  padding-left: 2px;
  padding-right: 2px;
}

.common {
  padding: 5px 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.code {
  font-weight: bold;
  padding: 5px;
}

.desc {
  font-weight: normal;
  padding: 5px;
}

.nomatch {
  padding: 5px 10px;
  border: 2px solid rgb(196, 13, 13);
  box-sizing: border-box;
}

.padded {
  padding: 10px;
}


.header {
  background-color: rgb(218, 250, 208);
  border-color: #4caf50;
  border-radius: 10px;
  font-weight: bold;

}
</style>