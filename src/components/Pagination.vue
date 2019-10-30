<template>
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
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
