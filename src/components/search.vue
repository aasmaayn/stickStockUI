<template>
  <div>
    <div id="main-content" class="container">
      <div class="container">
        <div class="column">
          <div class="row">
            <button class="btn btn-default" @click= addStock> 
              <icon icon="plus"></icon>
            </button>
            <input :class="stocks.length == 0 && value? 'nomatch':'common'"  v-model="value" placeholder="Search Stock..." @input = inquiryStock />
            <select v-model ='selectedSector' class="common">
              <option v-for="sector in sectors" :key="sector">{{sector}}</option>
            </select>

            <div v-if="stocks.length > 0" class="list">
              <ul>
                <li
                  @click="select(stock.symbol,stock.name)"
                  class="itemlist"
                  v-for="stock in stocks"
                  :key="stock.symbol"
                ><span class ='code'>{{stock.symbol}}</span><span class='desc'>{{stock.name}}</span></li>
              </ul>
            </div>
          </div>
          <div v-if="error" class = 'error'>Please choose a valid stock</div>
        </div>
      </div>
    </div>
  </div>
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
    name: {
      type: String,
      default: "",
    }
  },

  data() {
    return {
        selectedSector:null,
        sectors: [],
      value: null,
      selected: null,
      oninput: false,
      symbol: null,
      error: false,
      stocks: [
        // {
        //   symbol: "APPL",
        //   name: "Apple Corp."
        // },
        // {
        //   symbol: "APPL",
        //   name: "Apple Corp."
        // },
        // {
        //   symbol: "APPL",
        //   name: "Apple Corp."
        // },
        // {
        //   symbol: "APPL",
        //   name: "Apple Corp."
        // },
        // {
        //   symbol: "APPL",
        //   name: "Apple Corp."
        // }
      ]
    };
  },
  methods: {
    inquiryStock() {
      this.error = false
      this.symbol = null
      this.oninput = true
      if(!this.value || (this.value && this.value.trim() =='')) return
      HTTP.get("search?stockName=" + this.value + "&sector="+this.selectedSector).then(response => {
        this.stocks = response.data;
      });
    },
    select(symbol, name) {
      this.oninput = false
      this.value = symbol + "-" + name;
      this.selected = symbol;
      this.stocks = [];
      this.symbol = symbol;
      this.$emit('input', this.selected)
    },

    addStock(){
      if(!this.symbol) {
        this.error =true
        return
        }
      HTTP.get("/userstock/add?stockName=" + this.symbol).then();
      this.value = null
    },

    onChange() {
      console.log(this.value);
    }
  },

  mounted() {
      this.sectors = sectors
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

.error{
  color: red;
}
</style>