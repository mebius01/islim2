<template>
    <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <IsLim /> -->
    <!-- <router-view/> -->
    <div class="head">
        <div class="welcome">
          <p class="leftstr"><a href="">Welcome</a> | <a href="">Sin in</a> | <a href="">Register</a></p>
          <p class="rightstr"> <a href="">How to buy</a> | <a href="">Customer</a> | <a href="">Payment</a></p>
        </div>
        <hr>
        <div class="control">
          <div class="logo">
            ISLIM
          </div>
          <form role="search" action="">
            <select name="Categories">
              <option value="Categories">Categories</option>
            </select>
            <input type="text" name="search" v-model="searchName">
            <button><i class="fas fa-search"></i> Search</button>
          </form>
          <div class="love">
            <i class="far fa-user"></i>
            <i class="far fa-heart"><span v-if="ParentcounterLove !== 0">{{ ParentcounterLove}}</span></i>
            <i class="fas fa-shopping-bag"><span>9</span></i>
          </div>
        </div>
        <hr>
        <div class="bread_crumb">
          <span>Clothing</span>
          <ul class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">All categories</a></li>
            <li>Clothing</li>
          </ul>
        </div>
    </div>
    <!-- Component Catalog -->
    <Catalog @love = "OncounterLove"/>
    <!-- Component Catalog -->
    <footer>
      <div class="footer">
        <div class="logo_foo">
            <div class="logo">
              ISLIM
            </div>
            <p>contact@leebros.us/p>
            <p>+1 (00) 86 868 868 777</p>
            <p>© 2019 ISLIM America Inc.</p>
            <p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
            </p>
        </div>
        <div class="help_foo">
          <div class="help">
            HELP
          </div>
          <p>Orders & Returns</p>
          <p>Search Terms</p>
          <p>Advance Search</p>
          <p>Affiliates</p>
        </div>
        <div class="acc_foo">
          <div class="account">
            MY ACCOUNT
          </div>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div class="contact_foo">
          <div class="contact">
            CONTACT
          </div>
          <form action="">
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Email Address">
            <button type="submit">OK</button>
          </form>
        </div>
        <div class="pay">
          <p>
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-stripe"></i>
            <i class="fab fa-cc-paypal"></i>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import Catalog from './components/Catalog.vue'

export default {
  name: 'app',
  // components: {Catalog},
  data() {
    return {
      ParentcounterLove: null,
      ParentId_product: null
    }
  },
  methods: {
    OncounterLove (data) {
      this.ParentcounterLove = data.count
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese');
html, body {
    width: 100%;
    height: 100%;
    font-family: Montserrat;
}
:root{
  --global-width:1130px;
}
hr{
  align: center;
  width: 100%;
  size: 1;
  color: #B0BEC5;
}
#app{
  /* width: 1130px;
  margin-left: auto;
  margin-right: auto; */
  min-height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "head"
    "bread_crumb"
    "catalog"
    /* "aside article" */
    /* "paginator paginator" */
    "footer"

}
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2d3e4e;
} */
.head{
  grid-area: head;
}
.welcome{
  width: var(--global-width);
  margin-left: auto;
  margin-right: auto;
  color: #B1B8BB;
}
.welcome a{
  color: #B1B8BB;
  text-decoration: none;
  font-size: 14px;
  line-height: 17px;
}
.leftstr, .rightstr {
  float: left; /* Обтекание справа */
  width: 50%; /* Ширина текстового блока */
}
.rightstr {
  text-align: right; /* Выравнивание по правому краю */
}
.control{
  width: var(--global-width);
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 15% 1fr 15%;
  margin-top: 38px;
  margin-bottom: 38px;
}
.control .logo{
  width: 101px;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: #424140;
}
.control .love{
  justify-self: end;
  height: 38px;
}
.control .love i{
  position: relative;
  margin-left: 21px;
  margin-top: 15px;
  font-size: 21px;
  text-align: left;
  color: #B1B8BB;
}
/* for 0>=9  */
/* padding: 0px 4px 0px 4px; */
/* for 10>=99
padding: 2px 2px 2px 2px; */
/* for 100>=999
padding: 4px 1px 4px 1px; */

.control .love span{
  color: #FFFFFF;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  position: absolute;
  bottom: 14px;
  left: 15px;
  padding: 0px 4px 0px 4px;
	background: red;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
}

.control input{
  border: 1px solid #B1B8BB;
  width: 570px;
  height: 34px;
}
.control select, .control button{
  border: 1px solid #B1B8BB;
  height: 38px;
  box-sizing: border-box;
  color: #B1B8BB;
}
.control select{
  border-right: none;
  border-radius: 4px 0px 0px 4px;
  background-color: #ffffff;
  width: 113px;
}
.control button{
  border-left: none;
  border-radius: 0px 4px 4px 0px;
  width: 97px;
}
.bread_crumb{
  width: var(--global-width);
  margin-left: auto;
  margin-right: auto;
  grid-area: bread_crumb;
}
.bread_crumb span{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;
  color: #000000;
}
ul.breadcrumb {
  margin-top: 6px;
  padding: 0;
  list-style: none;
}
ul.breadcrumb li {
  display: inline;
  color: #828C90;
}
ul.breadcrumb a{
  text-decoration: none;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 29px;
  color: #828C90;
}
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "\003e";
  color: #828C90;
}
aside{
  width: 250px;
  justify-self: end;
  grid-area: aside;
}

article{
  width: 880px;
  grid-area: article;
}
footer {
  /* height: 258px; */
  background-color: #E5E5E5;
  grid-area: footer;
}
.footer{
  width: var(--global-width);
  margin-left: auto;
  margin-right: auto;
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(5 1fr);
  grid-template-rows: 80% 20%;
  grid-template-areas:
    "l_foo h_foo a_foo c_foo"
    "pay pay pay pay"
}
.logo_foo{
  grid-area: l_foo;
}
.help_foo{
  grid-area: h_foo;
}
.acc_foo{
  grid-area: a_foo;
}
.contact_foo{
  grid-area: c_foo;
}
.pay{
  grid-area: pay;
  justify-self: end;
}
</style>
