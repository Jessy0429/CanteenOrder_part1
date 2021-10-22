<template>
  <div>
    <div>
      <span style="font-size: larger; font-family: 'Microsoft JhengHei'">晚上好，今天吃点啥？</span>
    </div>
    <div>
      <el-select v-model="sel_Canteen" placeholder="选择食堂">
        <el-option v-for="Canteen in this.Canteens" :label="Canteen.canteenname" :value="Canteen.canteenID" :key="Canteen.canteenID"></el-option>
      </el-select>
      <el-select v-model="sel_Store" placeholder="选择商家">
        <el-option v-for="StoreID in this.Ct_St[this.sel_Canteen ? this.sel_Canteen : 0].storesID" :label="Stores[StoreID].storename" :value="StoreID" :key="StoreID"></el-option>
      </el-select>
    </div>


  </div>

</template>

<script>
export default {
  name: "UserMain",
  data(){
    return{
      Canteens: [{canteenID: 0, canteenname: '一食堂'},
                {canteenID: 1, canteenname: '二食堂'},
                {canteenID: 2, canteenname: '三食堂'},
                {canteenID: 3, canteenname: '四食堂'}],
      Stores: [{storeID: 0, storename: '东北菜', canteenID: 0},
        {storeID: 1, storename:'烤肉拌饭', canteenID: 0},
        {storeID: 2, storename: '东北菜', canteenID: 1},
        {storeID: 3, storename: '姐妹豆花', canteenID: 1},
        {storeID: 4, storename: '米线', canteenID: 2},
        {storeID: 5, storename: '烤盘饭', canteenID: 2},
        {storeID: 6, storename: '杭州小笼包', canteenID: 3}],
      Ct_St:[{canteenID: 0, storesID: [0, 1]},{canteenID:1, storesID:[2, 3]},{canteenID:2, storesID:[4, 5]},{canteenID:3, storesID:[6]}],
      sel_Canteen: undefined,
      sel_Store: undefined
    }
  },
  mounted() {
    // this.fun1();
  },
  methods: {
    // fun1(){
    //   console.log(this.Stores);
    //   console.log(this.Ct_St[this.sel_Canteen].storesID);
    //   console.log(this.sel_Store);
    // },
    // Change(value){
    //   console.log(value);
    // }
  }
}
</script>

<style scoped>

</style>
