Vue.component("food-input-component",{

    data:function(){
        return{
            food:"",
            url:""
        }
    },
    template:`
    <div class="add-btn">
        <input type="text" placeholder="餐點名稱" v-model.trim="food">
        <input type="text" placeholder="網址" v-model.trim="url" >  
        <button @click="inputHandler">新增</button>    
    </div>
    `,
    methods:{
        inputHandler:function()
        {
            console.log("val")
            this.$emit('addlist', { "foodName":this.food,"foodUrl":this.url}); 
        }
    }


})