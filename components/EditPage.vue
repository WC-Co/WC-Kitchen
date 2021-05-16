<template>
    <div class="form">
        <form class="forma" @submit.prevent="updateBooking">
        <h1 class="hed">Edit Booking</h1>
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
        <button type="submit" class="btn">Update Reservation</button>
    </form> 
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
    created(){
        let uri = `http://localhost:4000/bookings/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.booking = response.data;
        });
    },
    methods: {
        updateBooking() {
            let uri = `http://localhost:4000/bookings/update/${this.$route.params.id}`;
            this.axios.post(uri, this.booking).then(() =>{
                this.$router.push({name: 'bookings'});
            });
        }
    }
}
</script>

<style scoped>
.form{
    height: 340px;
    width: 450px;
    margin: auto;
}
.form-control{
    margin-top: 5px;

}
.form-group label{
    margin-top: 5px;
    color: white;
}
.forma{
    margin: auto;

}
.btn{
    margin-left: 265px;
    margin-top: 20px;
    color: white;
    background-color: #555555;
}
.hed{
    color: white;
    font-size: 2.5em;
}
.btn:hover{
    color: white;
    background-color: #796456;
}
.rot{
    margin-top: 550px;
    color: white;
    font-size: 1.4em;
}
.nav-link{
    color: white;
}
</style>