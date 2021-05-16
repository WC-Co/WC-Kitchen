<template>
    <div class="respage">
        <div class="logos">
            <img src="../assets/logo2.png" alt="WClogo">
        </div>
        <div class="bod">
            <router-view></router-view>
        </div>
        <div class="res">
            <ul>
                <li><router-link to='/reservation/form' class="nav-link">Form</router-link></li>
                <li><router-link to='/reservation/index' class="nav-link">Index</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    name: 'respage'
}
</script>

<style scoped>
    .res{
        background-color: #796456;
    }
    .bod{
        height: 480px;
        min-width: 550px;
        padding-top: 70px;
        padding-bottom: 70px;
        padding-right: 50px;
        padding-left: 50px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 20px;
    }
    .logos img{
        width: 135px;
        position: absolute;
        top: 24%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .res li{
        float: left;
        list-style-type: none;
        color: white;
    }
    .res{
        position: absolute;
        bottom: 9%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        padding-right: 25px;
        border-radius: 20px;
    }
    a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    }
    a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    }
    a:hover:after { 
    width: 100%; 
    left: 0; 
    }
    a:hover{
        color: white;
    }
</style>