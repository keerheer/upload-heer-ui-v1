<template>
  <h2>一:按钮</h2>
<div class="row">
<he-button type="primary" @button-click="fn">主要按钮</he-button>
<he-button type="success">成功按钮</he-button>
<he-button type="info">信息按钮</he-button>
<he-button type="warning">警告按钮</he-button>
<he-button type="danger">危险按钮</he-button>
</div>
<!-- 朴素按钮 -->
<div class="row"> 
<he-button plain icon="he-icon-a-favorite-full" type="primary">主要按钮</he-button>
<he-button plain icon="he-icon-a-to-up" type="success">成功按钮</he-button>
<he-button plain icon="he-icon-a-aixin" type="info">信息按钮</he-button>  
<he-button plain icon="he-icon-a-select" type="warning">警告按钮</he-button>
<he-button plain icon="he-icon-a-back2" type="danger">危险按钮</he-button>
</div>
<!-- 圆角 -->
<div class="row"> 
<he-button plain round type="primary">主要按钮</he-button>
<he-button plain round type="success">成功按钮</he-button>
<he-button plain round type="info">信息按钮</he-button>
<he-button plain round type="warning">警告按钮</he-button>
<he-button plain round type="danger">危险按钮</he-button>
</div>
<!-- 圆 字体图标-->
 <!-- 圆角一般是放图标 不是放字 使其是圆 -->
<div class="row"> 
<he-button  icon="he-icon-a-favorite-full" circle type="primary"></he-button>
<he-button  icon="he-icon-a-to-up" circle type="success"></he-button>
<he-button  icon="he-icon-a-aixin" circle type="info"></he-button>
<he-button  icon="he-icon-a-select" circle type="warning"></he-button>
<he-button  icon="he-icon-a-back2" circle type="danger"></he-button>
</div>
<!-- 禁用按钮 -->
<div class="row"> 
<he-button  disabled type="primary">主要按钮-禁用</he-button>
<he-button  disabled type="success">成功按钮-禁用</he-button>
<he-button  disabled type="info">信息按钮-禁用</he-button>
<he-button  disabled type="warning">警告按钮-禁用</he-button>
<he-button  disabled type="danger">危险按钮-禁用</he-button>
</div>
<!-- 禁用按钮 plain-->
<div class="row"> 
<he-button  plain disabled type="primary">主要按钮-禁用</he-button>
<he-button  plain disabled type="success">成功按钮-禁用</he-button>
<he-button  plain disabled type="info">信息按钮-禁用</he-button>
<he-button  plain disabled type="warning">警告按钮-禁用</he-button>
<he-button  plain disabled type="danger">危险按钮-禁用</he-button>
</div>

<h2>二:提示框dialog</h2>
<!-- <he-dialog title="温馨提示"> </he-dialog> -->

 <!-- 下面是传利用具名插槽 具体传入不同东西 -->
<!-- <he-dialog>
  <template v-slot:title>
    <h2>二级标题提示</h2>
  </template>
</he-dialog> -->

<!-- 控制位置 -->
 <!-- <he-dialog width="70%" top="5vh">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <template v-slot:footer>
    <he-button>取消</he-button>
    <he-button type="primary">确定</he-button>
  </template>
 </he-dialog> -->

<!-- 事件处理和交互 对话框的控制和隐藏 -->
 <he-button @button-click="fn1">显示对话框</he-button>
 <!-- <he-dialog :visable="visible" @update:close="close"> -->
  <!-- <he-dialog :visible.sync="visible">  属于vue2中的一种语法糖  v3是下面的用法需要将.sync修饰符改为v-model--> 
 <he-dialog v-model:visible="visible">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <template v-slot:footer>
    <he-button :visible="visible" @click="closefn">取消</he-button>
    <he-button type="primary" :visible="visible" @click="closefn"> 确定</he-button>
  </template>
 </he-dialog>

<h2>input 组件</h2>
<!-- type 类型 可选password 那么文字就是不可见的 -->
  <!-- 这里disabled属于可选参数 使用了就表示禁用输入框 -->
  <he-input class="he-input"
  v-model="username" placeholder="请输入内容" type="text" name="username" ></he-input>
    <he-input class="he-input"
  v-model="username" placeholder="请输入内容" type="password" name="username" :showPassword="true"></he-input>
    <he-input class="he-input"
  v-model="username1" placeholder="请输入内容" type="text" name="username1" :clear="true"></he-input>

  <h2>switch 组件</h2>
  <!-- switch 组件的双向绑定 -->
  <he-switch v-model="switchVisible"></he-switch>
  <he-switch 
  v-model="switchVisible"
  active-color="green"
  inactive-color="red"></he-switch>
  <he-switch 
  v-model="switchVisible"
  :name = 'username_switch'></he-switch>

  <he-switch 
  v-model="switchVisible"
  size = 'large'
  :name = 'username_switch'></he-switch>

  <h2>radio 组件</h2>
  <!-- 可选 1双向绑定 ,2label值,3表单name属性  -->
   <!-- 单选框互斥, 绑定同一个值 label给不同 后续也是对label处理 -->
  <he-radio label="1" v-model='gender' name="性别">男</he-radio>
  <he-radio label="0" v-model='gender' name="性别">女</he-radio>

  <he-radio label="1" v-model='gender' name="性别"></he-radio>
  <he-radio label="0" v-model='gender' name="性别"></he-radio>

<h2>radio-group 组件</h2>
<he-radio-group v-model="gender">
  <he-radio label="1">男</he-radio>
  <he-radio label="0">女</he-radio>
</he-radio-group>

<h2>checkbox 组件+Group组件</h2>
<!-- checkbox 组件 -->
<he-checkbox v-model="checkbox_activate">是否选中</he-checkbox>
<he-checkbox-group v-model="checkboxGroup">
  <he-checkbox label="吃饭">吃饭</he-checkbox>
  <he-checkbox label="睡觉">睡觉</he-checkbox>
  <he-checkbox label="打游戏">打游戏</he-checkbox>
</he-checkbox-group>

<h2>form 组件</h2>
<he-form :model="formModel" labelWidth="100px">
  <he-form-item label="用户名" >
    <he-input v-model="formModel.username" placeholder="请输入用户名"></he-input>
  </he-form-item>
  <he-form-item label="密码" >
    <he-input  type="password" v-model="formModel.password" placeholder="请输入密码"></he-input>
  </he-form-item>
  <he-form-item label="确认密码" >
    <he-input  type="password" v-model="formModel.password1" placeholder="请输入确认密码"></he-input>
  </he-form-item>
  <he-form-item label="爱好" >
    <he-checkbox-group v-model="formModel.hobby">
      <he-checkbox label="吃饭">吃饭</he-checkbox>
      <he-checkbox label="睡觉">睡觉</he-checkbox>
      <he-checkbox label="打游戏">打游戏</he-checkbox>
    </he-checkbox-group>
  </he-form-item>
</he-form>
</template>



<script>




export default {
  // setup() {
  //   const username = ref('')
  //   return {
  //     username
  //   }
  // }
  data(){
    return{
      visible:false,
      username:'你好',
      username1:'你好1',
      username_switch:'你好2',
      switchVisible:false,
      gender:'1',
      checkbox_activate:false,
      checkboxGroup:['吃饭','睡觉','打游戏'],
      formModel:{
        username:'',
        password:'',
        password1:'',
        hobby:[]
      }
    }
  },
  methods:{
    fn(){
      console.log('获取点击事件了！');
    },
    fn1(){
      this.visible=true
    },
    closefn(){ //这个属于取消和确定按钮的关闭事件
      // 事实上取消和确定除了关闭对话框之外海有额外的处理 此处简化 后续处理
      this.visible=false
    },
    // close(){ // 这个是点击遮罩层和x号的关闭 是来自子组件的传递的值 如果使用sync语法糖 就不需要写这个了
    //   this.visible=false
    // }
  }
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .he-button {
    margin-right: 10px;
  }
}
#app .he-input{
  width: 280px;
}
</style>
