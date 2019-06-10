<template>
    <div>
        <p-header />
        <section class="banner-area-wraper">
            <div class="banner-slider-area">
                <img src="../assets/images/hero.png" alt="">
            </div>
        </section><!-- end agency banner section -->
        <div class="container">
            <div class="row photo-name">
                <div class="col-md-6 user">
                    Afroshots <img src="../assets/images/google-verified.svg" alt="">
                </div>
                <div class="col-md-6 float-right">
                    <button class="btn btn-p btn-rounded btn-peexoo btn-new-peexo">Book Now</button>
                </div>
            </div>
            <div class="row mgt">
                <div class="col-md-6">
                    <p id="desc">
                        I am Jonathan, everyone call me Jo, or Afro because I shoot beautiful pictures in an African
                        way. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="col-md-6">
                    <div id="details">
                        <div class="container">
                            <div class="span-grp">
                                <span> <img style="margin-bottom: 3px" src="../assets/images/bookmark-star.svg" alt="">
                                    300 reviews</span>
                                <span> <img src="../assets/images/old-fashion-briefcase.svg" alt=""> 139k jobs
                                    completed</span>
                                <span> <img src="../assets/images/favorite-heart-button.svg" alt=""> 999 likes</span>
                            </div>
                            <p class="provided">
                                Jonathan Provided
                            </p>
                            <div class="provided-details">
                                <p>
                                    Government ID
                                </p>
                                <p>
                                    BVN
                                </p>
                                <p>
                                    Email address
                                </p>
                                <p>
                                    Phone number
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <div class="speciality">
                    <span> <img src="../assets/images/icons/interlocking-rings.svg" alt=""> Wedding</span>
                    <span> <img src="../assets/images/icons/camera-portrait-mode.svg" alt=""> Portrait</span>
                    <span> <img src="../assets/images/icons/dress-long-and-black-shape.svg" alt=""> Fashion</span>
                    <span> <img src="../assets/images/icons/icons-8-bottom-90.jpg" alt=""> Nude Art</span>
                    <span> <img src="../assets/images/icons/camera-portrait-mode.svg" alt=""> Sport</span>
                </div>
            </div>
            <p class="text-center img-head-title">
                Portfolio
            </p>
            <div class="row">
                <div class="col-md-3" v-for="(img, key) in imgs" :key="key">
                    <Portfolio :imgs="img.url"></Portfolio>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-p btn-rounded btn-peexoo btn-another-peexo">Book Now</button>
            </div>
        </div>
    </div>
</template>
<script>
    import PHeader from '../components/PHeader'
    import Footer from '../components/Footer'
    import Menu from '../components/Menu'
    import Portfolio from '../components/Gallery-portfolio'
    export default {
        name: "photographer-page",
        components: {
            PHeader,
            Footer,
            Menu,
            Portfolio
        },
        data: function () {
            return {
                imgs: [
                    {
                        url: "images/top-one.png",
                    },
                    {
                        url: "images/top-two.png",
                    },
                    {
                        url: "images/third-top.png",
                    },
                    {
                        url: "images/top-fourth.png",
                    },
                    {
                        url: "images/bottom-one.png",
                    },
                    {
                        url: "images/bottom-two.png",
                    },
                    {
                        url: "images/bottom-third.png",
                    },
                    {
                        url: "images/bottom-fourth.png",
                    }
                ],
            }
        }
    }
</script>
<style scoped>
    .img-head-title {
        font-family: Lora !important;
        font-size: 38px;
        font-weight: bold;
        text-align: center;
        color: #4d4d4d !important;
        margin-top: 70px;
        margin-bottom: 29px
    }

    .speciality {
        margin-top: 50px;
        border-top: solid 1px #979797;
        border-bottom: solid 1px #979797;
        padding: 38px 0 38px 0
    }

    .speciality span {
        margin-right: 34px
    }

    .btn-new-peexo {
        color: #ffffff !important;
        margin-top: 30px !important;
        float: right;
    }
    .btn-another-peexo {
        color: #ffffff !important;
        margin-top: 56px !important;
    }
    #desc {
        color: #4d4d4d !important;
    }

    .photo-name {
        margin-top: 70px
    }

    .photo-name .user {
        font-family: Lora !important;
        font-size: 64px;
        font-weight: bold;
        color: #4d4d4d !important;
    }

    .photo-name p#desc {
        font-family: 'Montserrat' !important;
        font-size: 18px !important;
        font-weight: 400;
        font-style: normal;
        font-stretch: normal;
        line-height: 2.22;
        letter-spacing: normal;
        color: #4d4d4d !important;
    }

    #details {
        border-radius: 6px;
        border: solid 1px #979797;
    }

    #details span {
        margin-right: 37px;
        font-family: 'Montserrat' !important;
        font-size: 16px !important;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4d4d4d !important;
    }

    .span-grp {
        padding-bottom: 39px;
        border-bottom: solid 1px #979797;
    }

    .mgt {
        margin-top: 36px
    }

    .provided {
        margin-top: 37px;
        font-family: 'Montserrat' !important;
        font-size: 18px !important;
        font-weight: 500;
        color: #4d4d4d !important;
    }

    .provided-details p {
        font-family: 'Montserrat' !important;
        font-size: 16px;
        font-weight: 400;
        color: #4d4d4d !important;
    }

    .container {
        padding: 47px 30px 47px 30px !important
    }

    .col-md-3 {
        padding-right: 0 !important;
        padding-left: 0 !important
    }
</style>