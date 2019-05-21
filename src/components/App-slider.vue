<template>
    <div class="">
        <transition-group name='slide-fade' tag='div'>
            <div v-for="number in [currentNumber]" :key='number'>
                <img class="im" :src="currentImage" v-on:mouseover="stopRotation" v-on:mouseout="startRotation" />
            </div>
        </transition-group>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                images: ["https://preview.redd.it/70zqhwmqywl21.jpg?width=960&crop=smart&auto=webp&s=160c185171272b7175421ad750c00b66b698abdc",
                    "https://preview.redd.it/70zqhwmqywl21.jpg?width=960&crop=smart&auto=webp&s=160c185171272b7175421ad750c00b66b698abdc",
                    "https://preview.redd.it/70zqhwmqywl21.jpg?width=960&crop=smart&auto=webp&s=160c185171272b7175421ad750c00b66b698abdc"],
                currentNumber: 0,
                timer: null
            }
        },
        mounted: function () {
            this.startRotation();
        },

        methods: {
            startRotation: function () {
                this.timer = setInterval(this.next, 5000);
            },

            stopRotation: function () {
                clearTimeout(this.timer);
                this.timer = null;
            },

            next: function () {
                this.currentNumber += 1
            },
            prev: function () {
                this.currentNumber -= 1
            }
        },
        computed: {
            currentImage: function () {
                return this.images[Math.abs(this.currentNumber) % this.images.length];
            }
        },
        // created(){
        //     // axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
        //     //     .then(res => res.data.forEach((img) => {
        //     //         this.images.push(img.url)})
        //     //     )
        //     //     .catch(err => console.log(err))
        // }
    }
</script>
<style scoped>
    /* .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s ease;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        position: fixed;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        visibility: hidden;
    } */

    .slide-fade-enter-active {
        transition: all 0.1s ease;
        position: fixed;
        
    }

    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter,
    .slide-fade-leave-to

    /* .slide-fade-leave-active below version 2.1.8 */
        {
        transform: translateX(10px);
        opacity: 0;
        

    }

    .im {
        width: 100%;
    }
</style>