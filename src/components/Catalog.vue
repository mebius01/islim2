<template>
  <div class="catalog">
    <aside>
      <div class="filters">
        <div class="price">
          <span class="name_filter">Price</span>
          <form class="price_range">
            <input class="min" :min="MinMaxPrice.min" type="number" v-model="value[0]"/>
            <input class="max" :max="MinMaxPrice.max" type="number" v-model="value[1]"/>
            <vue-slider
              v-model="value"
              :min="MinMaxPrice.min"
              :max="MinMaxPrice.max"
              :tooltip="'none'"
              :enable-cross="false"
              :process-style="{ backgroundColor: '#A3A7A8'}">
              <template v-slot:dot="{ value, focus }">
                <div :class="['custom-dot', { focus }]"></div>
              </template>
            </vue-slider>
          </form>
        </div>
        <div class="gender">
          <span class="name_filter">Gender</span>
          <br>
          <label class="date_filter">Man ({{db.map(a => a.gender).filter(item => item === "man").length}})
            <input type="checkbox"  v-model="gender" value="man">
            <span class="checkmark"></span>
          </label>
          <br>
          <label class="date_filter">Woman ({{db.map(a => a.gender).filter(item => item === "woman").length}})
            <input type="checkbox"  v-model="gender" value="woman">
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="category">
            <span class="name_filter">Product Category</span>
            <div v-show="visible_category">
              <div v-for="i in productCategories.sort().slice(0,4)" v-bind:key="i.id">
                <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.category).filter(item => item === i).length}})</span>
                  <input type="checkbox" :id="i.id" :value="i" v-model="category">
                  <span class="checkmark"></span>
                </label>
                <br>
              </div>
            </div>
            <div v-show="!visible_category">
              <div v-for="i in productCategories.sort()" v-bind:key="i.id">
                <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.category).filter(item => item === i).length}})</span>
                  <input type="checkbox" :id="i.id" :value="i" v-model="category">
                  <span class="checkmark"></span>
                </label>
                <br>
                </div>
              </div>
              <a class="view_more" @click="visible_category=!visible_category">{{visible_category?"View More":"Hide"}}</a>
        </div>
        <div class="size">
          <span class="name_filter">Size</span>
          <!-- <div v-show="visible_size">
              <div v-for="i in productSize.sort().slice(0,4)" v-bind:key="i.id">
                <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.size).filter(item => item === i).length}})</span>
                  <input type="checkbox" :id="i.id" :value="i" v-model="size">
                  <span class="checkmark"></span>
                </label>
                <br>
              </div>
            </div> -->
            <!-- <div v-show="!visible_size"> -->
              <div  class="size_block">
                <div v-for="i in productSize.sort()" v-bind:key="i.id">
                  <label class="date_filter">{{i}} <!-- <span class="count">({{db.map(a => a.size).filter(item => item === i).length}})</span> -->
                    <input type="checkbox" :id="i.id" :value="i" v-model="size">
                    <span class="checkmark"></span>
                  </label>
                  <br>
                </div>
              </div>
            <!-- </div> -->
            <!-- <a class="view_more" @click="visible_size=!visible_size">{{visible_size?"View More":"Hide"}}</a> -->
        </div>
        <div class="brend">
          <span class="name_filter">Brend</span>
          <div v-show="visible_brend">
            <div v-for="i in productBrend.sort().slice(0,4)" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.brend).filter(item => item === i).length}})</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="brend">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
            </div>
            <div v-show="!visible_brend">
              <div v-for="i in productBrend.sort()" v-bind:key="i.id">
                <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.brend).filter(item => item === i).length}})</span>
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
            <div v-for="i in productStyle.sort().slice(0,4)" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.style).filter(item => item === i).length}})</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="style">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
            </div>
            <div v-show="!visible_style">
              <div v-for="i in productStyle.sort()" v-bind:key="i.id">
                <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.style).filter(item => item === i).length}})</span>
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
            <div v-for="i in productSeason.sort().slice(0,2)" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.season).filter(item => item === i).length}})</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="season">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
          </div>
          <div v-show="!visible_season">
            <div v-for="i in productSeason.sort()" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.season).filter(item => item === i).length}})</span>
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
            <div v-for="i in productMaterial.sort().slice(0,4)" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.material).filter(item => item === i).length}})</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="material">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
          </div>
          <div v-show="!visible_material">
            <div v-for="i in productMaterial.sort()" v-bind:key="i.id">
              <label class="date_filter">{{i}} <span class="count">({{db.map(a => a.material).filter(item => item === i).length}})</span>
                <input type="checkbox" :id="i.id" :value="i" v-model="material">
                <span class="checkmark"></span>
              </label>
              <br>
            </div>
          </div>
            <a class="view_more" @click="visible_material=!visible_material">{{visible_material?"View More":"Hide"}}</a>
        </div>
        <div class="color">
            <span class="name_filter">Colour</span>
            <div v-show="visible_color">
              <div class="color_css" v-for="i in productColor.sort().slice(0,6)" v-bind:key="i.id">
                <label class="date_filter">
                  <input type="checkbox" :id="i.id" :value="i" v-model="color">
                  <span class="checkmark" v-bind:style="{background: i}"></span>
                </label>
                <br>
              </div>
            </div>
            <div v-show="!visible_color">
              <div class="color_css" v-for="i in productColor.sort()" v-bind:key="i.id">
                <label class="date_filter">
                  <input type="checkbox" :id="i.id" :value="i" v-model="color">
                  <span class="checkmark" v-bind:style="{background: i}"></span>
                </label>
                <br>
              </div>
            </div>
            <a class="view_more" @click="visible_color=!visible_color">{{visible_color?"View More":"Hide"}}</a>
        </div>
      </div>
    </aside>
    <article>
      <div class="tag_section">
        <div class="tag_list" v-for="a in {gender, category, color, size, brend, style, season, material}" v-bind:key="a.id">
          <div class="tag_list" v-for="(i, index) in a" :key="index">
            <button class="tag" v-on:click="a.splice(index, 1)">{{i}}<span style="color:#E44747"> x </span></button>
          </div>
        </div>
        <a
          @click="gender.splice(0);
          category.splice(0);
          color.splice(0);
          size.splice(0);
          brend.splice(0);
          style.splice(0);
          season.splice(0);
          material.splice(0)">Clear all
        </a>

        <select @change="onChangeSort()" v-model="sortBy">
          <option value="price_desc">Price от меньшего</option>
          <option value="price_asc">Price от большего</option>
          <option value="name_asc">Name A-Z</option>
          <option value="name_desc">Name Z-A</option>
        </select>
        <!-- <v-select :options="options"></v-select> -->
          <!-- | <a  @click="sortPrice_asc()">Price от большего</a>
          | <a  @click="sortPrice_desc()">Price от меньшего</a>
          | <a @click="sortName_asc()">сортировка от A</a>
          | <a @click="sortName_desc()">сортировка от Z</a> -->
      </div>
      <div class="islim">
        <div v-for="(item, index) in pageOfItems" v-bind:key="index">
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
    </article>
    <jw-pagination
      :items="ProductMinMax"
      @changePage="onChangePage"
      :disableDefaultStyles="true"
      :labels="customLabels"
      :pageSize="10"
      :maxPages="3">
    </jw-pagination>
  </div>
</template>

<script>
import db from '../assets/db.json'

const customLabels = {
  previous: '<',
  next: '>'
}

export default {
  name: 'Catalog',
  props: ['search'],
  data () {
    return {
      customLabels,
      value: [0, 10200],
      pageOfItems: [],
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
      sortBy: [],
      // sortBy_activ: false,
      count: 0
    }
  },
  methods: {
    onChangeSort() {
      if (this.sortBy === 'price_desc') {
        return this.db.sort(function(a, b) {return a.price - b.price})
      }
      if (this.sortBy === 'price_asc') {
        this.db.sort(function(a, b) {return b.price - a.price})
      }
      if (this.sortBy === 'name_desc') {
        this.db.sort(function(a, b) {
          if (b.name > a.name) {return 1}
          if (b.name < a.name) {return -1}
        })
      }
      if (this.sortBy === 'name_asc') {
        this.db.sort(function(a, b) {
          if (a.name > b.name) {return 1}
          if (a.name < b.name) {return -1}
        })
      }
    },
    OnLove (l) {
      if (l === true) {this.count--}
      else {this.count++}
      this.$emit('love', {count: this.count})
    },
    sortPrice_desc() { // сортировка по убыванию
      this.db.sort(function(a, b) {return a.price - b.price})
    },
    sortPrice_asc() { // сортировка по возрастанию
      this.db.sort(function(a, b) {return b.price - a.price})
    },
    sortName_asc () { // сортировка имени по возрастанию
      this.db.sort(function(a, b) {
        if (a.name > b.name) {return 1}
        if (a.name < b.name) {return -1}
      })
    },
    sortName_desc () { // сортировка имени по убыванию
      this.db.sort(function(a, b) {
        if (b.name > a.name) {return 1}
        if (b.name < a.name) {return -1}
      })
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems
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
      // a = this.value[0]
      // b = this.value[1]
      return this.db.filter((item) => {
        return (this.search.length === 0 || item.name.includes(this.search.toUpperCase())) &&
        (this.color.length === 0 || this.color.includes(item.color)) &&
        (this.category.length === 0 || this.category.includes(item.category)) &&
        (this.gender.length === 0 || this.gender.includes(item.gender)) &&
        (this.brend.length === 0 || this.brend.includes(item.brend)) &&
        (this.size.length === 0 || this.size.includes(item.size)) &&
        (this.style.length === 0 || this.style.includes(item.style)) &&
        (this.season.length === 0 || this.season.includes(item.season)) &&
        (this.material.length === 0 || this.material.includes(item.material))
        })
    },
    ProductMinMax (a, b) {
      a = this.value[0]
      b = this.value[1]
      return this.computedProducts.filter(function (e) {return e.price >= a && e.price <= b })
    },
    MinMaxPrice() {
      return {
        min: this.computedProducts.map(a => a.price).sort(function(a, b){ return a-b;}).slice(0,1),
        max: this.computedProducts.map(a => a.price).sort(function(a, b){ return a-b;}).slice(-1)
        }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-dot {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #000000;
  }
a {
  cursor: pointer;
}
.color_css{
  display: inline-block;
  margin-bottom: 10px
}
.size_block{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10px
}
.tag_section a{
  cursor: pointer;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 22px;
  text-decoration-line: underline;
  text-transform: capitalize;
  color: #000000;
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
.price_range {
  margin-bottom: 20px;
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
  /* text-align: center; */
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
/* background желтый при checked */
.filters .date_filter input:checked ~ .checkmark {
  background-color: #FFCA28;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
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
.view_more{
  cursor: pointer;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 26px;
  text-decoration-line: underline;
  color: #9AA2A9;
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

.tag_section .sortby{
  float:right;
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
.card .foot_card,
.card .price,
.card .name {
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
  color: #000000;
  margin-bottom: 4px;
}
.paginator {
  justify-self: center;
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
