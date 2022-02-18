Vue.component("show-component",{
    data: function(){
        return {
            
        }
    },
    props:["relist"],
    template:`
    <table>
        <thead>
            <tr>
                <th>姓名</th>
                <th>食物1</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of relist">
                <td>{{item.name}}</td>
                <td>{{item.food1}}</td>
            </tr>
        </tbody>
    </table>
    
    `


    
})