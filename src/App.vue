<template>
  <div id="app" class="page">
    <router-view></router-view>
  </div>

</template>

<script>
 
 
  export default {
    name: "app",
    components: {
    }
   
}

</script>
<style >
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
            border: 1px solid #979797;
            padding: 15px;
            border-radius: 5px;
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
            padding: 0px 0px;
            font-size: 13px;
        }
    
        .field-wrapper input:not([disabled]):focus~.field-placeholder {
            color: #b58000;
        }
    
        .field-wrapper input:not([disabled]):focus~.field-placeholder,
        .field-wrapper.hasValue input:not([disabled])~.field-placeholder {
            -webkit-transform: scale(.75) translateY(-39px) translateX(-60px);
            transform: scale(.75) translateY(-39px) translateX(-60px);
    
        }
        
    </style>