<template>
    <div>
    <div class="form">
        <form class="forma" @submit.prevent="addBooking">
        <h1 class="hed">Reservation Form</h1>
        <div class="form-group">
            <label for="peeps"># of Guest</label>
            <input type="number" class="form-control" id="peeps" placeholder="Table" v-model="booking.guest">
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" v-model="booking.name"> 
        </div>
        <div class="form-group">
            <label for="Date">Date</label>
            <input type="text" class="form-control" id="date" placeholder="Date" v-model="booking.date">
        </div>
        <button type="submit" class="btn btn-primary">Submit Reservation</button>
    </form> 
    </div>
    </div>  
</template>
<script>
export default{
    name: 'form',
    data() {
        return{
            booking:{}
        }
    },
    methods: {
        addBooking(){
            let uri = 'http://localhost:4000/bookings/add';
            this.axios.post(uri, this.booking).then((response) => {
                this.$router.push({name: 'bookings'});
            if(response){
                alert('You have successfully booked! Please do come in time, or else the reservation will be voided!');
            }
                
            })
            
        }
    }

}
</script>

<style scoped>

.form-group label{
    margin-top: 10px;
    color: white;
}
.forma{
    height: 340px;
    width: 450px;
    margin: auto;

}
.btn{
    margin-left: 269px;
    margin-top: 20px;
    color: white;
    background-color: #555555;
    border: 1px solid #555555;
}
.hed{
    color: white;
    font-size: 2.5em;
}
.btn:hover{
    color: white;
    background-color: #796456;
}
.nav-link{
    color: white;
    
}
.rot{
    margin-top: 0px;
    color: white;
    font-size: 1.4em;
}
.nav-link:hover{
    color: red;
}
</style>