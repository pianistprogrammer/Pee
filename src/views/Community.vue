<template>
    <div>
        <PHeader />
        <div class="black-header">
            <h3>Join the Community</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
            <button class="btn btn-p btn-rounded btn-peexoo">Join the Community</button>
        </div>
        <div class="row">
            <div class="column col-3">
                <img src="" alt="">
            </div>
            <div class="column col-3">
                <img src="" alt="">
            </div>
            <div class="column col-6">
                <img src="" alt="">
            </div>
        </div>
    </div>

</template>
<script>
    import PHeader from '../components/PHeader'
    import Footer from '../components/Footer'
    import Menu from '../components/Menu'
    export default {
        name: "community",
        components: {
            PHeader,
            Footer,
            Menu
        }

    }
</script>
<style scoped>
    .black-header{
        height: 420px !important;
    }
    .black-header p{
        padding: 10px 460px 10px 460px;
        font-weight: normal !important
    }
     .column {

            padding: 0 4px;
        }
        .column img {
            margin-top: 5px;
            vertical-align: middle;
            padding: 5px;
        }

</style>
