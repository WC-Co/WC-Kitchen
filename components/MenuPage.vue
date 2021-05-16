<template>
    <div class="menupage">
        <div class="logos">
            <img src="../assets/logo2.png">
            <h1>MENU</h1>
        </div>
        <div class="food1">
        <div class="bg1">
            <img src="../assets/pasta_puttanesca.png">
        </div>
            <p>PASTA</p>
        </div>
        <div class="food2">
            <div class="bg2">
            <img src="../assets/margherita.jpg">
            </div>
            <p>PIZZA</p>
        </div>
        <div class="food3">
            <div class="bg3">
            <img src="../assets/bellini.jpg">
            </div>
            <p>DRINKS</p>
        </div>
        
    </div>
</template>

<script>
export default{ 
    name: 'menupage'
}
</script>

<style scoped>
.menupage{
    width: 1100px;
    min-height: 480px;
    padding: 20px;

    display: flex;
    align-items: center;
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
  
}
.logos img{
    position: absolute;
    left: 43%;
    bottom: 420px;
    display: block;
    width: 135px;
}
.logos h1{
    position: absolute;
    top:50px;
    left: 450px;
    bottom: 435px;
    display: block;
    font-size: 60px;
    color: white;
    letter-spacing: 3px;
    
}

.food1{
    position: absolute;
    top: 130px;
    left: 120px;
    color: rgb(255, 255, 255);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   letter-spacing: 3px;
}
.food1 p{
    text-align: center;
    margin-top: 10px;
    font-size:20px;
     font-weight: bold;  
}

.bg1{
   border: 18px solid rgba(0, 0, 0, 0.6);
   border-radius:25px;
}
.food2{
    padding-bottom: 20px;
    position: absolute;
    top: 130px;
    left: 415px;
    color: rgb(255, 255, 255);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-left: 30px;
    letter-spacing: 3px;
}
.food2 p{
    text-align: center;
    margin-top: 13px;
    font-size:20px;
    font-weight: bold;
}
.bg2{
   border: 18px solid rgba(0, 0, 0, 0.6);
   border-radius:25px;
}
.food3{
    padding-bottom: 20px;
    position: absolute;
    top: 130px;
    left: 753px;
    color: rgb(255, 255, 255);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-left:25px;
    letter-spacing: 3px;
}
.food3 p{
    text-align: center;
    margin-top: 14px;
    font-size:20px;
    font-weight: bold;
}
.bg3{
   border: 18px solid rgba(0, 0, 0, 0.6);
   border-radius:25px;
}

.bg1 img{
    width:160px;
    border-radius: 15px;
}
.bg2 img{
    width:160px;
    height:235px;
    border-radius: 15px;
}
.bg3 img{
    width:160px;
    height:232px;
    border-radius: 15px;
}
.menupage p:hover{
    transform: scale(1) translateY(-15px);
}
</style>