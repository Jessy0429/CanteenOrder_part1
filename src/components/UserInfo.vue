<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item>
        <template slot="title">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="60"></el-avatar>
          <span style="margin-left: 20px">Username</span>
        </template>
        <el-descriptions :column="2" class="margin-top">
          <el-descriptions-item label="用户名" :labelStyle="{'line-height': '50px'}" :contentStyle="{'line-height': '50px'}">
            <span style="margin-right: 10px">{{this.username}}</span>
            <el-button size="mini" @click="dialogVisible = true; dialogID = 0">修改</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="手机号" :labelStyle="{'line-height': '50px'}" :contentStyle="{'line-height': '50px'}">
            <span style="margin-right: 10px">{{this.telnumber}}    </span>
            <el-button size="mini" @click="dialogVisible = true; dialogID = 1">修改</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="密码" :labelStyle="{'line-height': '50px'}" :contentStyle="{'line-height': '50px'}">
            <el-button size="mini" @click="dialogVisible = true; dialogID = 2">修改密码</el-button>
          </el-descriptions-item>
        </el-descriptions>
      </el-collapse-item>
    </el-collapse>
    <div>
      <el-dialog :visible.sync="dialogVisible" :append-to-body="true">
        <template slot="title">
          <span v-if="dialogID == 2">修改密码</span>
          <span v-else-if="dialogID == 1">修改手机号</span>
          <span v-else-if="dialogID == 0">修改用户名</span>
        </template>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data(){
    return{
      dialogVisible: false,
      dialogID: 0,
      activeNames: ['1'],
      username: '周邹揪',
      userID: 1,
      telnumber: '13823367491',
      password: 'zhou20010429'
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
.el-collapse /deep/ .el-collapse-item__header{
  height: 80px;
  font-size: 25px;
  color: #62a8f0;
}
</style>
