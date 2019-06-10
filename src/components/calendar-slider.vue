<template>
    <TRVLPicker
        :checkin.sync="checkin"
        :checkout.sync="checkout"
        
    />
</template>

 <script>
 import TRVLPicker from '@trvl/picker'
 export default {
     name:"calendar-slider",
     components:{
         TRVLPicker
     },
     data: function() {
            return {
                checkin: new Date(2019, 2, 13),
                checkout: new Date(2019, 2, 15),
            }
    },
 }
 </script>
 