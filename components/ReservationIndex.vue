<template>
    <div>
    <div class="index">
        <div class="forma">
        <h1 class="hed">Reservation Index</h1>
        <table class="table">
            <thead class="thed">
                <tr>
                    <th># of Guest</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody class="tbod">
                <tr v-for="booking in bookings" :key="booking._id">
                    <td>{{ booking.guest }}</td>
                    <td>{{ booking.name }}</td>
                    <td>{{ booking.date }}</td>
                    <td><router-link :to="{name: 'edit', params: { id: booking._id}}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" @click.prevent="deleteBooking(booking._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bookings: []
            }
        },
        created() {
            let uri = 'http://localhost:4000/bookings';
            this.axios.get(uri).then(response => {
                this.bookings = response.data;
            });
        },
        methods: {
            deleteBooking(id)
            {
                let uri = `http://localhost:4000/bookings/delete/${id}`;
                this.axios.delete(uri).then(() => {
                    this.bookings.splice(this.bookings.indexOf(id), 1);
                });
            }
        }
    }
</script>   

<style scoped>
.hed{
    color: white;
    font-size: 2.5em;
}
.forma{
    margin: auto;

}
.thed{
    color: white;
}
.nav-link{
    color: white;
    
}
.nav-link:hover{
    color: red;
}
.tbod{
    color: white;
}
.index{
    height: 340px;
    min-width: 700px;
    margin: auto;
    
}

</style>