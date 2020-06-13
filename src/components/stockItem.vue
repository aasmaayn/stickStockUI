<template>
       <tr >
           <td class='padded symbol'>{{stock.symbol}}</td>
           <td class='padded'>{{stock.changeInPercent}}</td>
           <td class='padded'>{{stock.price}}</td>
           <td class='padded'>{{stock.volume}}</td>
           <td class='padded'>{{stock.change}}</td>
           <td class='padded'>{{stock.dayHigh}}</td>
           <td class='padded'>{{stock.dayLow}}</td>
           <td class='padded'><button @click="deleteStock(stock.symbol)"><icon icon="trash"></icon></button></td>
       </tr>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { HTTP } from "../http/httpUtils";
import {sectors} from "../data/sectors"

let msgServer;
const axios = require("axios");
export default {
  name: "sse-test",
  name: "websocketdemo",

  props: {
    stock: {
      type: Object,
      default: {},
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
      deleteStock(val){
      HTTP.get("/userstock/remove?stockName=" + val).then();
    },
   
  },

  mounted() {
     
  }
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

.code{
   font-weight: bold;
    padding: 5px;
}

.desc{
    font-weight: normal;
    padding: 5px;
}

.nomatch{
  padding: 5px 10px;
  border: 2px solid rgb(196, 13, 13);
  box-sizing: border-box;
}

.padded{
    padding: 10px;
}

.symbol {
    font-weight: bold;
}
</style>