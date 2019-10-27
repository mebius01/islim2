<template>
  <div class="catalog">
    <aside>
      <div class="filters">
        <div class="price">
          <span class="name_filter">Price</span>
          <form action="" name="price">
            <input class="min" type="number" placeholder="min">
            <input class="max" type="number" placeholder="max">
            <input type="range" name="points" min="0" max="10">
          </form>
        </div>
        <div class="gender">
          <span class="name_filter">Gender</span>
          <br>
          <label class="date_filter">Man
            <input type="checkbox"  v-model="gender" value="man">
            <span class="checkmark"></span>
          </label>
          <br>
          <label class="date_filter">Woman <span class="count">(118)</span>
            <input type="checkbox"  v-model="gender" value="woman">
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="category">
            <span class="name_filter">Product Category</span>
            <div v-show="visible_category">
              <div v-for="i in productCategories.slice(0,4)" v-bind:key="i.id">
                <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                  <input type="checkbox" :id="i.id" :value="i" v-model="category">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div v-show="!visible_category">
              <div v-for="i in productCategories" v-bind:key="i.id">
                <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                  <input type="checkbox" :id="i.id" :value="i" v-model="category">
                  <span class="checkmark"></span>
                </label>
                </div>
              </div>
              <a class="view_more" @click="visible_category=!visible_category">{{visible_category?"View More":"Hide"}}</a>
        </div>
        <div class="color">
            <span class="name_filter">Colour</span>
            <div v-show="visible_color">
              <div class="color_css" v-for="i in productColor.slice(0,4)" v-bind:key="i.id">
                <label class="date_filter">
                  <input type="checkbox" :id="i.id" :value="i" v-model="color">
                  <span class="checkmark" v-bind:style="{background: i}"></span>
                </label>
                <br>
              </div>
            </div>
            <div v-show="!visible_color">
              <div class="color_css" v-for="i in productColor" v-bind:key="i.id">
                <label class="date_filter">
                  <input type="checkbox" :id="i.id" :value="i" v-model="color">
                  <span class="checkmark" v-bind:style="{background: i}"></span>
                </label>
                <br>
              </div>
            </div>
            <a class="view_more" @click="visible_color=!visible_color">{{visible_color?"View More":"Hide"}}</a>
        </div>
        <div class="size">
          <span class="name_filter">Size</span>
          <div v-show="visible_size">
              <div v-for="i in productSize.slice(0,4)" v-bind:key="i.id">
                <label class="date_filter">{{i}}
                  <input type="checkbox" :id="i.id" :value="i" v-model="size">
                  <span class="checkmark"></span>
                </label>
                <br>
              </div>
            </div>
            <div v-show="!visible_size">
              <div v-for="i in productSize" v-bind:key="i.id">
                <label class="date_filter">{{i}}
                  <input type="checkbox" :id="i.id" :value="i" v-model="size">
                  <span class="checkmark"></span>
                </label>
                <br>
              </div>
            </div>
            <a class="view_more" @click="visible_size=!visible_size">{{visible_size?"View More":"Hide"}}</a>
        </div>
        <div class="brend">
          <span class="name_filter">Brend</span>
          <div v-show="visible_brend">
            <div v-for="i in productBrend.slice(0,4)" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="brend">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
            </div>
            <div v-show="!visible_brend">
              <div v-for="i in productBrend" v-bind:key="i.id">
                <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                  <input type="checkbox" :id="i.id" :value="i" v-model="brend">
                  <span class="checkmark"></span>
                </label>
                <br>
              </div>
            </div>
            <a class="view_more" @click="visible_brend=!visible_brend">{{visible_brend?"View More":"Hide"}}</a>
        </div>
        <div class="style">
            <span class="name_filter">Style</span>
            <div v-show="visible_style">
            <div v-for="i in productStyle.slice(0,4)" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="style">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
            </div>
            <div v-show="!visible_style">
              <div v-for="i in productStyle" v-bind:key="i.id">
                <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                  <input type="checkbox" :id="i.id" :value="i" v-model="style">
                  <span class="checkmark"></span>
                </label>
                <br>
              </div>
            </div>
            <a class="view_more" @click="visible_style=!visible_style">{{visible_style?"View More":"Hide"}}</a>
        </div>
        <div class="season">
          <span class="name_filter">Season</span>
          <div v-show="visible_season">
            <div v-for="i in productSeason.slice(0,2)" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="season">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
          </div>
          <div v-show="!visible_season">
            <div v-for="i in productSeason" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="season">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
          </div>
            <a class="view_more" @click="visible_season=!visible_season">{{visible_season?"View More":"Hide"}}</a>
        </div>
        <div class="material">
            <span class="name_filter">Material</span>
            <div v-show="visible_material">
            <div v-for="i in productMaterial.slice(0,4)" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="material">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
          </div>
          <div v-show="!visible_material">
            <div v-for="i in productMaterial" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">(COUNTER)</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="material">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
          </div>
            <a class="view_more" @click="visible_material=!visible_material">{{visible_material?"View More":"Hide"}}</a>
        </div>
      </div>
    </aside>
    <article>
      <div>
        <div class="tag_section">
          <div class="tag_list" v-for="a in {gender, category, color, size, brend, style, season, material}" v-bind:key="a.id">
            <div class="tag_list" v-for="i in a" :key="i.id">
              <button class="tag">{{i}}<span style="color:#E44747">x</span></button>
            </div>
          </div>
        <a href="">Clear all</a>
        <select name="Sort By" v-model="sortBy">
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="brend">Brend</option>
          <option value="material">Material</option>
          <option value="color">Color</option>
          <option value="size">Size</option>
        </select>
        <!-- <select name="Sort By">
          <option value="Categories">Sort By +</option>
          <option value="Categories">Sort By -</option>
        </select> -->
      </div>
      <div class="islim">
        <div v-for="(item, index) in computedProducts" v-bind:key="index">
          <div class="card">
            <div class="sale" v-if="item.sale === true">SALE</div>

            <a class="heart" 
            @click="OnLove(item.like);
            item.like = !item.like">
            <i :class="{ like: item.like }" class="far fa-heart"></i>
            </a>

            <img src="../assets/250.png" :alt="item.name" :title="item.name" width="250" height="250">
            <div class="name">
                {{item.name}}
              </div>
            <div class="foot_card">
              <div class="descript">
                {{item.description}}
              </div>
            </div>
            <div class="price">
                $ {{item.price}}
              </div>
          </div>
        </div>
      </div>
      </div>
    </article>
    <div class="paginator">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a class="active" href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>
</template>

<script>
import db from '../assets/db.json'
export default {
  name: 'Catalog',
  data () {
    return {
      db: db.products,
      visible_category: true,
      visible_color: true,
      visible_brend: true,
      visible_size: true,
      visible_style: true,
      visible_season: true,
      visible_material: true,
      color: [],
      category: [],
      gender: [],
      brend: [],
      size: [],
      style: [],
      season: [],
      material: [],
      sortBy: 'name',
      count: 0
    }
  },
  methods: {
    OnLove (l) {
      if (l === true) {
        this.count--
      }
      else {
        this.count++
      }
      this.$emit('love', {count: this.count})
    }
  },
  computed: {
    productCategories () {
      return [...new Set(this.db.map(({ category }) => category))]
    },
    productColor () {
      return [...new Set(this.db.map(({ color }) => color))]
    },
    productSize () {
      return [...new Set(this.db.map(({ size }) => size))]
    },
    productBrend () {
      return [...new Set(this.db.map(({ brend }) => brend))]
    },
    productStyle () {
      return [...new Set(this.db.map(({ style }) => style))]
    },
    productSeason () {
      return [...new Set(this.db.map(({ season }) => season))]
    },
    productMaterial () {
      return [...new Set(this.db.map(({ material }) => material))]
    },
    computedProducts () {
      return this.db.filter((item) => {
        return (this.color.length === 0 || this.color.includes(item.color)) &&
        (this.category.length === 0 || this.category.includes(item.category)) &&
        (this.gender.length === 0 || this.gender.includes(item.gender)) &&
        (this.brend.length === 0 || this.brend.includes(item.brend)) &&
        (this.size.length === 0 || this.size.includes(item.size)) &&
        (this.style.length === 0 || this.style.includes(item.style)) &&
        (this.season.length === 0 || this.season.includes(item.season)) &&
        (this.material.length === 0 || this.material.includes(item.material))
        }).sort((a, b) => {return a[this.sortBy].toString().localeCompare(b[this.sortBy].toString())})
    }
  }
}
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color_css{
  display: inline-block;
  margin-bottom: 10px
}

.like {
  color: red;
}
.catalog{
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-area: catalog;
  grid-template-areas:
    "aside article"
    "paginator paginator"
}
.view_more{
  cursor: pointer;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 26px;
  text-decoration-line: underline;
  color: #9AA2A9;
}
.max, .min{
  width: 100px;
  height: 33px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 20px;
}
.max{
  float: right;
}
.filters .date_filter {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  text-transform: capitalize;
}

/* Hide the browser's default checkbox */
.filters .date_filter input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* квадраты */
.filters .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 19px;
  width: 19px;
  border: 1px solid #C4C4C4;
  background-color: #FFFFFF;
}

/* Навести мышой на квадрат background color
.filters .date_filter:hover input ~ .checkmark {
  background-color: #C4C4C4;
} */

/* background желтый при checked */
.filters .date_filter input:checked ~ .checkmark {
  background-color: #FFCA28;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.filters .date_filter input:checked ~ .checkmark:after {
  display: block;
}

/* Style для галки */
.filters .date_filter .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: 1px solid #000000;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.price .name_filter, .gender .name_filter,
.category .name_filter, .size .name_filter,
.brend .name_filter, .style .name_filter,
.season .name_filter, .material .name_filter,
.color .name_filter{
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
}
.price, .gender,
.category, .size,
.brend, .style,
.season, .material,
.color{
  margin-bottom: 20px;
}
/* .price label, .gender label,
.category label, .size label,
.brend label, .style label,
.season label, .material label,
.color label{
  margin-top: 10px;
} */
.price .count, .gender .count,
.category .count, .size .count,
.brend .count, .style .count,
.season .count, .material .count {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 26px;
  text-transform: lowercase;
  color: #C4C4C4;
}
input[type=range]{
  width: 100%;
}

.islim{
  margin-left: 40px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-template-rows: repeat(auto-fit, minmax(350, auto));
}
.tag_list {
  display: inline;
}
.tag_section{
  margin-top: 0px;
  margin-bottom: 22px;
  margin-left: 40px;
}
.tag_section button{
  margin-right: 9px;
  border: 1px solid #B0BEC5;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #FFFFFF;
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  color: #000000;
}
.tag_section a{
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  text-decoration: none;
  text-transform: capitalize;
  color: #000000;
}
.tag_section select{
  float:right;
  width: 150px;
  height: 28px;
  border: 1px solid #B0BEC5;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #FFFFFF;
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  text-transform: capitalize;
  color: #000000;
}
.card {
  position: relative;
  border-radius: 4px;
  width: 250px;
  height: 350px;
  display: grid;
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color:  var(--global_text_color);
  text-align:left;
}
.card img{
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.heart{
  cursor: pointer;
  position: absolute;
  top: 13px;
  right: 13px;
  color: #A3A3A3;
}

.sale{
  position: absolute;
  top:12px;
  left:9px;
  transform: rotate(-90deg);
  background-color: #FFCA28;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  padding-right: 9px;
  padding-left: 2px;
}
.card .foot_card, .card .price, .card .name{
  /* margin-top: 7px;
  margin-bottom: 7px; */
  margin-left: 12px;
  margin-right: 14px;
}
.name{
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #000000;
}
.descript{
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}
.price{
  align-self: end;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #000000;
  margin-bottom: 4px;
}
.paginator {
    justify-self: center;
    /* background-color: bisque; */
    grid-area: paginator;
    display: inline-block;
    margin-top: 40px;
    margin-bottom: 40px;
}
.paginator a {
    border: 1px solid #EAF1F4;
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    margin-left: 10px;
    border-radius: 5px;
    color: #B0BEC5;
}
.paginator a.active{
    background: #4A5E69;
}
.paginator a:hover{
    background: #4A5E69;
}
</style>
