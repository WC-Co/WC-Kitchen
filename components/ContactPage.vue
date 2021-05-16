<template>
    <div class="contactpage">
        <div class="logos">
            <img src="../assets/logo2.png" alt="WClogo">
        </div>
        <div class="bod">
            <h1>CONTACT</h1>
            <p>Contact us through our email or directly use our official phone numbers given below</p>
            <ul>
            <li>Telephone: (632) 123 891 </li>
            <li>Mobile: +0942-34-876 </li>
            <li>E-mail: wckitchen@gmail.com </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{ 
    name: 'contactpage'
}
</script>

<style scoped>
.contactpage{
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
    margin-top: 20px;
    font-size: 45px;
    margin-bottom: 25px;
    
}

.bod p{
    margin-top: 10px;
    font-size: 18px;
    margin-bottom: 25px;
}
.bod ul{
    font-size: 1.2em;
    padding-top:5px;
    margin-bottom: 50px;
    line-height: 1.8;
    text-decoration: none;
    list-style-type:none;
    margin-right:50px;
    border-top: 1px bold;
}

</style>