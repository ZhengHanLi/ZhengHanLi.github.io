Vue.component("setfood-input-component",{
    data: function (){
        return{

        }
    },
    props:["foodlist"],
    template:`
    <div>
        <div>
            <select name="" id="foodSel">
                <option  v-for="food of foodlist " :value="food.foodUrl">{{food.foodName}}</option>
            </select>
            <input type="date" id="assignDate">
            <button @click="inputHandler">新增</button>    
        </div>
        <div class="line"></div>
    </div>
    `,
    created:function(){
        if( this.foodlist.length===0 )
        {
            // alert("")
        }
    },
    mounted:function(){
        var today = new Date();
        var yyyy = today.getFullYear();
        var mm = today.getMonth()+1; //January is 0!
        var dd = today.getDate();

        if(dd<10){dd='0'+dd} 
        if(mm<10){mm='0'+mm} 
        today = yyyy+'-'+mm+'-'+dd;

        document.getElementById("assignDate").value=today;
    },
    methods:{
        inputHandler:function(){
            if( this.foodlist.length===0 )
                return false;
            let assignedDate=document.getElementById("assignDate").value
            let e = document.getElementById("foodSel");
            let food= e.options[e.selectedIndex].text;
            let url = e.value;

            this.$emit("setfood-infor",{"food":food,"url":url,"date":assignedDate} )
        }

    }



})