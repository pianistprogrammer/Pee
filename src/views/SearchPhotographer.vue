<template>
    <div>
        <PHeader />
        <div class="container">
            <div class="row mt-15">

                <div class="col-md-4">
                    <div class="row">
                        <div class="inner-addon right-addon">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                    </div>

                    <p class="p-title-category">
                        Category Type
                    </p>
                    <div>
                        <Searchcategory :name="category.name" v-for="(category, key) in Categories" :key="key" />
                    </div>

                    <p class="p-title-category">
                        Photographer Type
                    </p>
                    <div>
                        <Searchtype :name="type.name" v-for="(type, id) in Types" :key="id" />
                    </div>

                    <p class="p-title-category">
                        Bases Region
                    </p>
                    <h6>Seperate with a comma</h6>
                    <p class="p-title-category">
                        Price
                    </p>
                    <v-flex
        shrink
        style="width: 60px"
      >
        <v-text-field
          v-model="price[1]"
          class="mt-0"
          hide-details
          single-line
          type="number"
        ></v-text-field>
      </v-flex>
                    <p class="p-title-category">
                        Availability
                    </p>
                    <v-layout row wrap>
                        <v-flex sm6 md4>
                            <v-menu
                              v-model="menu2"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              lazy
                              transition="scale-transition"
                              offset-y
                              full-width
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field
                                  v-model="date"
                                  label="From"
                                  readonly
                                  v-on="on"
                                ></v-text-field>
                              </template>
                              <v-date-picker v-model="date" color="green lighten-1" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                          </v-flex>
                          <v-flex sm6 md4>
                            <v-menu
                              v-model="menu2"
                              :close-on-content-click="false"
                              :nudge-right="40"
                              lazy
                              transition="scale-transition"
                              offset-y
                              full-width
                              
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field
                                  v-model="date"
                                  label="To"
                                   
                                  readonly
                                  v-on="on"
                                ></v-text-field>
                              </template>
                              <v-date-picker v-model="date" color="green lighten-1" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                          </v-flex>
                    </v-layout>    
                </div>
                <div class="col-md-8">
                    <h4>320 Photograhers found</h4>
                    <div class="row">

                        <div class="col-md-6" v-for="(card, key) in Photographers" :key="key">
                            <Cardlist :username="card.username" :desc="card.desc" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
    import PHeader from '../components/PHeader'
    import Footer from '../components/Footer'
    import Menu from '../components/Menu'
    import Cardlist from '../components/card-list'
    import Searchcategory from '../components/search-category'
    import Searchtype from '../components/search-type'
     

    export default {

        components: {
            PHeader,
            Footer,
            Menu,
            Cardlist,
            Searchcategory,
            Searchtype,
            
        },
        data: function () {
            return {
                date: new Date().toISOString().substr(0, 10),
                menu2: false,
                slider: 45,
                volume: 10,
                price: [110, 440],
                Photographers: [
                    {
                        id: 1,
                        username: 'Jeremiah Abimbola',
                        desc: 'There is a reason that I am called the god of photographer. I shoot the invicible and',
                    },
                    {
                        id: 2,
                        username: 'Tolulope Wsbdsd',
                        desc: 'There is a reason that I am called the god of photographer. I shoot the invicible and',
                    },
                    {
                        id: 3,
                        username: 'Wale Tinubu',
                        desc: 'There is a reason that I am called the god of photographer. I shoot the invicible and',
                    },
                    {
                        id: 4,
                        username: 'dbashdjbfajhsdfj hasdjf',
                        desc: 'There is a reason that I am called the god of photographer. I shoot the invicible and…',
                    }
                ],
                Categories: [
                    {
                        id: 1,
                        name: 'Portrait'
                    },
                    {
                        id: 2,
                        name: 'Events'
                    },
                    {
                        id: 3,
                        name: 'Real Estate'
                    }
                ],
                Types: [
                    {
                        id: 1,
                        name: 'Select all'
                    },
                    {
                        id: 2,
                        name: 'Still picture (photo)'
                    },
                    {
                        id: 3,
                        name: 'Motion picture (video)'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .p-title-category {
        font-family: 'Montserrat';
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4d4d4d;
        margin-top: 28px
    }

    h4 {
        font-family: 'Montserrat' !important;
        font-size: 24px !important;
        font-weight: normal !important;
        color: #4d4d4d !important;
        margin-left: -15px !important;
        margin-bottom: 20px
    }

    /* enable absolute positioning */
    .inner-addon {
        position: relative;
    }

    /* style glyph */
    .inner-addon .fa {
        position: absolute;
        padding: 10px;
        pointer-events: none;
    }

    .right-addon .fa {
        right: 0px;
    }


    .right-addon input {
        padding-right: 30px;
    }
</style>