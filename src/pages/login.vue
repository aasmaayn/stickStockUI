<template>
  <div>
    <div id="main-content" class="container">
      <div class="imgcontainer">
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
          alt="Avatar"
          class="avatar"
        />
      </div>

      <div class="container">
        <label>
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label>
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit">Login</button>
        <input type="checkbox" checked="checked" /> Remember me
      </div>

      <div class="container" style="background-color:#f1f1f1">
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="psw">
          Forgot
          <a href="#">password?</a>
        </span>
      </div>
    </div>
  </div>

  <!-- socket -->
</template>

<script>
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
  methods: {},

  mounted() {}
};
</script>

<style scoped>
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
/*set a style for the buttons*/

button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
/* set a hover effect for the button*/

button:hover {
  opacity: 0.8;
}
/*set extra style for the cancel button*/

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/*centre the display image inside the container*/

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}
/*set image properties*/

img.avatar {
  width: 40%;
  border-radius: 50%;
}
/*set padding to the container*/

.container {
  padding: 16px;
}
/*set the forgot password text*/

span.psw {
  float: right;
  padding-top: 16px;
}
/*set styles for span and cancel button on small screens*/

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>