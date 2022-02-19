Vue.component("order-content-component",{
    data: function(){
        return {

        }
    },
    props:["lists"],
    template:`
    <table>
        <caption>{{this.lists[0].food}} <a :href="this.lists[0].url" target="_blank">{{this.lists[0].url}}</a>  </caption>
        <thead>
            <tr>
                <th>姓名</th>
                <th>食物</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of this.lists[0].order">
                <td>{{item.name}}</td>
                <td><input type="text" v-model="item.food" ></input></td>
            </tr>
        </tbody>
    </table>
    
    `,
    mounted:function(){

    },


    
})