<template>
    <div class="">
        <mdb-carousel :interval="8000"  >
            <mdb-carousel-item  v-for="(img, key) in images" :key="key" 
                img :src='img.url' mask="black-light" :alt='img.alt'>
            </mdb-carousel-item>
        </mdb-carousel>
        
    </div>
</template>
<script>
    import axios from 'axios'
    import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue';
    export default {
        data: function () {
            return {
                images: [
                    {
                        url: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
                        alt: "First Slide"
                    },
                    {
                        url: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
                        alt: "Second Slide"
                    },
                    {
                        url: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
                        alt: "Third Slide"
                    }
                ],
                currentNumber: 0,
                timer: null
            }
        },
        mounted: function () {
            //this.startRotation();
        },
        components:{
            mdbCarousel,
            mdbCarouselItem,
            mdbCarouselCaption
        },
        methods: {
             
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