<template>
    <div class="aboutpage">
        <div class="logos">
            <img src="../assets/logo2.png" alt="WClogo">
        </div>
        <div class="bod">
            <h1>ABOUT US</h1>
            <p>At WC kitchen we aspire to reach an absolute balance of flavorful meals and homey italian ambiance. Our restaurant takes pride in serving you up with scrumptious meals with the extraordinary  tastes of italian cuisine. </p>
            <a href="#">Read More</a>
        </div>
    </div>
</template>

<script>
export default{ 
    name: 'aboutpage'
}
</script>

<style scoped>
.aboutpage{
    width: 480px;
    min-height: 480px;
    padding: 20px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}
.logos img{
    position: absolute;
    left: 170px;
    bottom: 415px;
    display: block;
    width: 135px;
}
.bod{

    text-align: center;
    color: white;
}
.bod h1{
    margin-top: 10px;
    font-size: 45px;
    margin-bottom: 25px;
}
.bod a{
    border: 1px solid white;
    padding: 10px;
    font-size: 1.3em;
    text-decoration: none;
    color: white;

}
.bod p{
    font-size: 1.1em;
    margin-bottom: 50px;
    line-height: 1.8;
}
.bod a:hover{
    transition: 0.6s;
    background-color: white;
    color: black;
}
</style>