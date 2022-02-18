Vue.component("users-input-component",{

    data:function(){
        return{
            name:"",
        }
    },
    template:`
    <div class="add-btn">
        <input type="text" placeholder="人員名稱" v-model.trim="name">
        <button @click="inputHandler">新增</button>    
    </div>
    `,
    methods:{
        inputHandler:function()
        {
            this.$emit('adduserlist', { "userName":this.name}); 
            this.name="";
        }
    }


})