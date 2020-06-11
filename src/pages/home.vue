<template>
  <div id="app">
    <!-- <canvas id="myChart"></canvas>
    <div>
      <icon class="green" icon="arrow-circle-up" size="lg" />Corticon
    </div>

     <div class='half'> 
    <div v-for="index in 14" v-bind:key="index">
        <div > <icon  class='red' icon="arrow-circle-down" size='lg'/> AEM</div>
    </div>
    </div>-->
    <!-- <b-button @click.native="getData">click</b-button> -->



    <!-- socket -->

     <div>
    <div id="main-content" class="container">
      <div class="row">
        <div class="col-md-6">
          <form class="form-inline">
            <div class="form-group">
              <label for="connect">WebSocket connection:</label>
              <button id="connect" class="btn btn-default" type="submit" :disabled="connected == true" @click.prevent="connect">Connect</button>
              <button id="disconnect" class="btn btn-default" type="submit" :disabled="connected == false" @click.prevent="disconnect">Disconnect
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <form class="form-inline">
            <div class="form-group">
              <label for="name">Stock Name</label>
              <input type="text" id="name" class="form-control" v-model="send_message" placeholder="Your name here...">
            </div>
            <button id="send" class="btn btn-default" type="submit" @click.prevent="send">Add Stock</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table id="conversation" class="table table-striped">
            <thead>
              <tr>
                <th>Stocks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in received_messages" :key="item">
                <td>{{ item }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  </div>

  <!-- socket -->

  
</template>

<script>
// We store the reference to the SSE object out here
// so we can access it from other methods
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

let msgServer;
const axios = require("axios");
export default {
  name: "sse-test",
   name: "websocketdemo",

  data() {
    return {
      messages: [],
      info: "",
      data: [],
      note: null,
      received_messages: [],
      send_message: null,
      connected: false
    };
  },
  methods: {


    send() {
      //console.log("Send message:" + this.send_message);
      if (this.stompClient && this.stompClient.connected) {
        const msg = { name: this.send_message };
        //console.log(JSON.stringify(msg));
        this.stompClient.send("/app/hello", JSON.stringify(msg), {});
      }
    },
    connect() {
      this.socket = new SockJS("http://localhost:8081/websocket");
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.connect(
        {},
        frame => {
          this.connected = true;
          this.stompClient.subscribe("/topic/greetings", tick => {
            if(this.received_messages.length> 6)
            this.received_messages = []
          this.received_messages.push(tick.body) ;
          console.log("le message: ",this.received_messages);

          });
        },
        error => {
          //console.log(error);
          this.connected = false;
        }
      );
    },
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }
      this.connected = false;
    },
    tickleConnection() {
      this.connected ? this.disconnect() : this.connect();
    }

  },

  mounted() {
    this.connect();
  }
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: blue;
  font-family: "Open Sans", sans-serif;
}
.green {
  color: green;
}

.red {
  color: rgb(161, 7, 7);
}

.half {
  height: 100px;
}
</style>