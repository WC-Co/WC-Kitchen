<template>
    <div class="locationpage">
        <div class="logos">
            <img src="../assets/logo2.png" alt="WClogo">
        </div>

        <div class="bod">
            <div id="loc">
             LOCATION
            </div>
            <ul>
            <li>#222 Baker St., London City, United Kingdom </li>
            <li>Beside the Famous apartment of the iconic Sherlock Holmes </li>
            </ul>
        </div>
        <div class = "map">
            <img src="../assets/map.png" alt="map">
        </div>
    </div>
</template>

<script>
export default{ 
    name: 'locationpage'
}
</script>

<style scoped>
.locationpage{
    width: 75%;
    min-height: 400px;
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
    left: 43%;
    bottom: 338px;
    display: block;
    width: 135px;
}
.bod{
    margin-top: 30px;
    text-align: center;
    color: white;
}
#loc{
    background-color:#796456;;
    width:45%;
    margin-top: 10px;
    margin:absolute;
    font-size: 33px;
    margin-bottom: 25px;
    margin-left:26%;
    font-weight:bold;
    letter-spacing:3px;

}
.bod ul{
    font-size: 1.05em;
    margin-bottom: 50px;
    line-height: 1.8;
    text-decoration: none;
    list-style-type:none;
    margin-right:50px;
}
.map img{
    padding-top:8px;
    width :75%;
    border-radius:50%;
    margin-left: 52px;

}

</style>