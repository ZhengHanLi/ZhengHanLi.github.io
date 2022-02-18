Vue.component("order-content-component",{
    data: function(){
        return {
            contentList:[],
        }
    },
    props:["relist"],
    template:`
    <table>
        <thead>
            <tr>
                <th>姓名</th>
                <th>食物</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of contentList">
                <td>{{item.name}}</td>
                <td>{{item.food}}</td>
            </tr>
        </tbody>
    </table>
    
    `,
    mounted:function(){
       
    },
    watch:{
        relist()
        {
            this.contentList=[];
            this.contentList=this.relist[0].order;
        }
    }


    
})