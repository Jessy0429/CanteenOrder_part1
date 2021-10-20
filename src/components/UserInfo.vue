<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item>
        <template slot="title">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="60"></el-avatar>
          <span style="margin-left: 20px">{{this.username}}</span>
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
      <el-collapse-item>
        <template slot="title">
          <i class="el-icon-s-home" size="50px"></i>
          <span style="margin-left: 20px">我的收货信息</span>
        </template>

      </el-collapse-item>
    </el-collapse>
    <div>
      <el-dialog :visible.sync="dialogVisible" :append-to-body="true">
        <template slot="title">
          <span v-if="dialogID == 2">修改密码</span>
          <span v-else-if="dialogID == 1">修改手机号</span>
          <span v-else-if="dialogID == 0">修改用户名</span>
        </template>
        <el-row type="flex" justify="center" align="middle" v-if="dialogID == 0">
          <el-col :span="6" style="text-align:center">用户名</el-col>
          <el-col :span="18"><el-input  :placeholder="this.username" v-model="edit_username" @keydown.enter.native="updateInfo"></el-input></el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" v-else-if="dialogID == 1">
          <el-col :span="6" style="text-align:center">手机号</el-col>
          <el-col :span="18"><el-input  :placeholder="this.telnumber" v-model="edit_telnumber" @keydown.enter.native="updateInfo"></el-input></el-col>
        </el-row>
        <div v-else-if="dialogID == 2">
          <el-row type="flex" justify="center" align="middle" style="margin: 10px">
            <el-col :span="6" style="text-align:center">原密码</el-col>
            <el-col :span="18"><el-input  placeholder="请输入原始密码" v-model="input_pw"></el-input></el-col>
          </el-row>
          <el-row type="flex" justify="center" align="middle" style="margin: 10px">
            <el-col :span="6" style="text-align:center">新密码</el-col>
            <el-col :span="18"><el-input  placeholder="请输入更改后的密码" v-model="edit_password"></el-input></el-col>
          </el-row>
          <el-row type="flex" justify="center" align="middle">
            <el-col :span="6" style="text-align:center; color:#f00;" v-if="!this.checkpw">*密码错误</el-col>
          </el-row>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="updateInfo">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>

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
      dialogID: undefined,
      activeNames: ['1'],
      username: '周邹揪',
      userID: 1,
      telnumber: '13823367491',
      password: 'zhou20010429',
      edit_username: '',
      edit_telnumber: '',
      input_pw: '',
      edit_password: '',
      checkpw: true
    };
  },
  methods: {
    updateInfo(){
      if (this.dialogID === 0){
        this.username = this.edit_username;
        this.edit_username = '';
        this.dialogVisible = false;
      }
      else if(this.dialogID === 1){
        this.telnumber = this.edit_telnumber;
        this.edit_telnumber = '';
        this.dialogVisible = false;
      }
      else if(this.dialogID === 2){
        this.checkpw = (this.input_pw === this.password);
        if(this.checkpw) {
          this.password = this.edit_password;
          this.edit_password = '';
          this.dialogVisible = false;
        }
        console.log(this.password);
        this.edit_password = '';
        this.input_pw = '';
      }
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
