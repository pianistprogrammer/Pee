<template>
    <div class="row">
        <div class="col-md-12">
            <div>
                <!-- Nav tabs -->
                <ul class="nav nav-tabs nav-justified" role="tablist">
                    <li role="presentation" class="active"><a href="#signin" aria-controls="signin" role="tab"
                            data-toggle="tab">Sign in</a></li>
                    <li role="presentation"><a href="#signup" aria-controls="signup" role="tab" data-toggle="tab">Sign
                            Up</a></li> 
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="signin">
                        <form>
                            <div class="field-wrapper">
                                <input type="email" name="email" id="">
                                <div class="field-placeholder"><span>Enter your email</span></div>
                            </div>
                            <div class="field-wrapper">
                                <input type="password" name="password" id="">
                                <div class="field-placeholder"><span>Enter your password</span></div>
                            </div>
                            <div class="form-button">
                                <button type="button" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="signup">desdasd</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "loginmodal",
        mounted: {

        }

    }
</script>

<style scoped>
    .form-wrapper-outer {
        padding: 40px;
        border-radius: 8px;
        margin: auto;
        width: 460px;
        border: 1px solid #DADCE0;
        margin-top: 7%;
    }

    .form-wrapper-outer .form-logo {
        margin: 0px auto 15px;
        width: 100px;
    }

    .form-wrapper-outer .form-logo img {
        width: 100%;
    }

    .form-greeting {
        text-align: center;
        font-size: 25px;
        margin-bottom: 15px;
    }

    .form-button {
        text-align: right;
    }

    .field-wrapper {
        position: relative;
        margin-bottom: 15px;
    }

    .field-wrapper input {
        border: 1px solid #DADCE0;
        padding: 15px;
        border-radius: 4px;
        width: 100%;
    }

    .field-wrapper .field-placeholder {
        font-size: 16px;
        position: absolute;
        /* background: #fff; */
        bottom: 17px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #80868b;
        left: 8px;
        padding: 0 8px;
        -webkit-transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;

        text-align: left;
        width: 100%;
    }

    .field-wrapper .field-placeholder span {
        background: #ffffff;
        padding: 0px 8px;
    }

    .field-wrapper input:not([disabled]):focus~.field-placeholder {
        color: #1A73E8;
    }

    .field-wrapper input:not([disabled]):focus~.field-placeholder,
    .field-wrapper.hasValue input:not([disabled])~.field-placeholder {
        -webkit-transform: scale(.75) translateY(-39px) translateX(-60px);
        transform: scale(.75) translateY(-39px) translateX(-60px);

    }
</style>