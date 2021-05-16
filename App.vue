<template>
<div class="app">
  <div class="body">
	<section class="showcase">
    <header>
      <div class="logo"><img src="./assets/logo5.png" alt=""></div>
      <div class="toggle"></div>
    </header>
    <div class="route">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <ul class="social">
      <li><a href="https://www.facebook.com/"><img src="https://i.ibb.co/x7P24fL/facebook.png"></a></li>
      <li><a href="https://twitter.com/"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png"></a></li>
      <li><a href="https://www.instagram.com/"><img src="https://i.ibb.co/ySwtH4B/instagram.png"></a></li>
    </ul>
  </section>
  <div class="menu">
    <ul>
      <li  class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
      <li  class="nav-item"><router-link to="/About" class="nav-link">About</router-link></li>
      <li  class="nav-item"><router-link to="/menu" class="nav-link">Menu</router-link></li>
      <li  class="nav-item"><router-link to="/location" class="nav-link">Location</router-link></li>
      <li  class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
      <li  class="nav-item"><router-link to="/reservation" class="nav-link">Reservation</router-link></li>
    </ul>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.showcase{
  background-image: url('./assets/first.png');
  background-repeat: no-repeat;
  background-size: cover;
  animation: slide 10s infinite;
}
@keyframes slide{
  35%{
    background-image: url('./assets/fourth.png');
  }
  70%{
    background-image: url('./assets/sixth.png');
  }
}
.logo img{
  display: block;
  margin-top: 25px;
  margin-left: 70px;
  width: 200px;

}
.route{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.route transition{
  transition: fade;
}
.trans{
  animation-duration: 1s;
}
</style>
