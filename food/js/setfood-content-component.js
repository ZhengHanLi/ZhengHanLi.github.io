Vue.component("setfood-content-component",{
    data:function(){
        return{

        }
    },
    props:["lists"],
    template:`
    <div class="content">
        <ul>
            <li v-for="item of lists">

                <div>
                    <span>{{item.foodDate}}</span>
                    <span>{{item.foodName}}</span>
                    <button @click="deleteSet(item)" >刪除</button>
                </div>
            </li>
        </ul>
    </div>
    
    `,
    methods:{
        deleteSet:function(val){
            this.$emit("delete-set",val)
        }
    }


})