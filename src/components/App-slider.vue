<template>
    <div class="">
        <canvas id="kenburns"  style="display: inline;">
            <p>Your browser doesn't support canvas!</p>
        </canvas>
    </div>
</template>
<script>
    import axios from 'axios'
    import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue';
    export default {
        data: function () {
            return {
                images: [
                        'http://www.kelechiamadiobi.com/wp-content/uploads/2015/06/slider-4.jpg',
                        'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg',
                        'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg'   
                ],
                currentNumber: 0,
                timer: null
            }
        },
        mounted: function () {
                var $canvas = jQuery('#kenburns');
                $canvas.attr('width', jQuery(window).width());
                $canvas.attr('height', jQuery(window).height());

                var kb = $canvas.kenburned({
                    images: this.images,
                    frames_per_second: 100,
                    display_time: 7000,
                    zoom: 1.2,
                    fade_time: 1000,
                });

                jQuery(window).resize(function () {
                    jQuery('#kenburns').remove();
                    jQuery('#kenburns_overlay').remove();

                    jQuery('body #wrapper').append('<canvas id="kenburns"></canvas>');
                    jQuery('body #wrapper').append('<div id="kenburns_overlay"></div>');

                    var $canvas = jQuery('#kenburns');

                    $canvas.attr('width', jQuery(window).width());
                    $canvas.attr('height', jQuery(window).height());

                    var kb = $canvas.kenburned({
                        images: this.images,
                        frames_per_second: 100,
                        display_time: 7000,
                        zoom: 1.2,
                        fade_time: 1000,
                    });
                });
        },
        components: {
            
        },
        methods: {
        // created(){
                //     // axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
                //     //     .then(res => res.data.forEach((img) => {
                //     //         this.images.push(img.url)})
                //     //     )
                //     //     .catch(err => console.log(err))
                // }
        },

       
    }
</script>
<style scoped>
    .im {
        width: 100%;
    }
</style>