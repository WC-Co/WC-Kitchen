<template>
    <div class="homepage">
        <div class="sometext">
            <h1>Good food and great vibes.</h1>
            <h3 class="route"><router-link to="/reservation/form">Book a table</router-link></h3>
        </div>
    </div>
</template>
<script>
export default{
    name: 'homepage'
}
</script>

<style scoped>
    .sometext{
        color: white;
    }
    .sometext h1{
        font-size: 5em;
    
    }
    .sometext h3{
        margin-top: 25px;
        margin-left: 875px;
    }
    a{
        color:white;
        padding: 10px;
        text-decoration: none;
        border: 1px solid white;
    }
    a:hover{
        color:black;
        background-color: white;
        transition: 0.5s;
    }
</style>