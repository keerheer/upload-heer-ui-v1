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
  <br>
  <br>
<!-- 禁用状态 -->
  <he-switch 
  v-model="switchVisible1"
  :name = 'username_switch'
  disabled></he-switch>
<br>
<br>
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

  <!-- 禁用状态 -->
  <div style="margin-top: 20px;">
    <h3>禁用状态</h3>
    <he-radio label="1" v-model='genderDisabled' name="性别禁用" disabled>男(禁用)</he-radio>
    <he-radio label="0" v-model='genderDisabled' name="性别禁用" disabled>女(禁用)</he-radio>
  </div>

<h2>radio-group 组件</h2>
<he-radio-group v-model="gender">
  <he-radio label="1">男</he-radio>
  <he-radio label="0">女</he-radio>
</he-radio-group>

<!-- 禁用状态的radio-group -->
<div style="margin-top: 20px;">
  <h3>禁用状态的radio-group</h3>
  <he-radio-group v-model="genderDisabled">
    <he-radio label="1" disabled>男(禁用)</he-radio>
    <he-radio label="0" disabled>女(禁用)</he-radio>
  </he-radio-group>
</div>

<h2>checkbox 组件+Group组件</h2>
<!-- checkbox 组件 -->
<he-checkbox v-model="checkbox_activate">是否选中</he-checkbox>
<he-checkbox-group v-model="checkboxGroup">
  <he-checkbox label="吃饭">吃饭</he-checkbox>
  <he-checkbox label="睡觉">睡觉</he-checkbox>
  <he-checkbox label="打游戏">打游戏</he-checkbox>
</he-checkbox-group>

<!-- 禁用状态 -->
<div style="margin-top: 20px;">
  <h3>禁用状态</h3>
  <he-checkbox v-model="checkbox_disabled" disabled>禁用的复选框</he-checkbox>
  <he-checkbox-group v-model="checkboxGroupDisabled">
    <he-checkbox label="吃饭" disabled>吃饭(禁用)</he-checkbox>
    <he-checkbox label="睡觉" disabled>睡觉(禁用)</he-checkbox>
    <he-checkbox label="打游戏" disabled>打游戏(禁用)</he-checkbox>
  </he-checkbox-group>
</div>

<h2>select 组件</h2>
<!-- 基础选择器 -->
<div class="row">
  <h3>基础选择器</h3>
  <he-select 
    v-model="selectedValue" 
    :options="basicOptions" 
    placeholder="请选择"
    @change="handleSelectChange"
  ></he-select>
  <p>选中的值: {{ selectedValue }}</p>
</div>

<!-- 可清空的选择器 -->
<div class="row">
  <h3>可清空的选择器</h3>
  <he-select 
    v-model="selectedValue2" 
    :options="basicOptions" 
    placeholder="请选择" 
    clearable
    @change="handleSelectChange"
    @clear="handleSelectClear"
  ></he-select>
  <p>选中的值: {{ selectedValue2 }}</p>
</div>

<!-- 可搜索的选择器 -->
<div class="row">
  <h3>可搜索的选择器</h3>
  <he-select 
    v-model="selectedValue3" 
    :options="searchOptions" 
    placeholder="请输入关键词搜索" 
    filterable
    @change="handleSelectChange"
  ></he-select>
  <p>选中的值: {{ selectedValue3 }}</p>
</div>

<!-- 远程搜索选择器 -->
<div class="row">
  <h3>远程搜索选择器</h3>
  <he-select 
    v-model="selectedValue4" 
    :options="remoteOptions" 
    placeholder="请输入关键词进行远程搜索" 
    filterable
    remote
    :remote-method="remoteSearch"
    :debounce-delay="500"
    @change="handleSelectChange"
  ></he-select>
  <p>选中的值: {{ selectedValue4 }}</p>
</div>

<!-- 禁用状态 -->
<div class="row">
  <h3>禁用状态</h3>
  <he-select 
    v-model="selectedValue5" 
    :options="basicOptions" 
    placeholder="禁用状态" 
    disabled
  ></he-select>
</div>

<h2>form 组件</h2>
<he-form ref="validateForm" :model="formModel" :rules="formRules" labelWidth="100px">
  <he-form-item label="用户名" prop="username">
    <he-input v-model="formModel.username" placeholder="请输入用户名"></he-input>
  </he-form-item>
  <he-form-item label="密码" prop="password">
    <he-input  type="password" v-model="formModel.password" placeholder="请输入密码"></he-input>
  </he-form-item>
  <he-form-item label="确认密码" prop="password1">
    <he-input  type="password" v-model="formModel.password1" placeholder="请输入确认密码"></he-input>
  </he-form-item>
  <he-form-item label="邮箱" prop="email">
    <he-input v-model="formModel.email" placeholder="请输入邮箱"></he-input>
  </he-form-item>
  <he-form-item label="年龄" prop="age">
    <he-input v-model="formModel.age" type="number" placeholder="请输入年龄"></he-input>
  </he-form-item>
  <!-- <he-form-item label="城市" prop="city">
    <he-select v-model="formModel.city" :options="basicOptions" placeholder="请选择城市" @change="handleSelectChange"></he-select>
  </he-form-item> -->
  <he-form-item label="爱好" >
    <he-checkbox-group v-model="formModel.hobby">
      <he-checkbox label="吃饭">吃饭</he-checkbox>
      <he-checkbox label="睡觉">睡觉</he-checkbox>
      <he-checkbox label="打游戏">打游戏</he-checkbox>
    </he-checkbox-group>
  </he-form-item>
  <he-form-item>
    <he-button type="primary" @click="submitForm">提交</he-button>
    <he-button @click="resetForm">重置</he-button>
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
      switchVisible1:false,
      gender:'1',
      genderDisabled:'1',
      checkbox_activate:false,
      checkbox_disabled:true,
      checkboxGroup:['吃饭','睡觉','打游戏'],
      checkboxGroupDisabled:['吃饭'],
      // select组件相关数据
      selectedValue: '',
      selectedValue2: '',
      selectedValue3: '',
      selectedValue4: '',
      selectedValue5: '',
      // 基础选项数据
      basicOptions: [
        { label: '北京', value: 'beijing' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '深圳', value: 'shenzhen' },
        { label: '杭州', value: 'hangzhou' },
        { label: '成都', value: 'chengdu' }
      ],
      // 搜索选项数据
      searchOptions: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' },
        { label: 'Date', value: 'date' },
        { label: 'Elderberry', value: 'elderberry' },
        { label: 'Fig', value: 'fig' },
        { label: 'Grape', value: 'grape' },
        { label: 'Honeydew', value: 'honeydew' }
      ],
      // 远程搜索选项数据
      remoteOptions: [],
      formModel:{
        username:'',
        password:'',
        password1:'',
        email:'',
        age:'',
        city:'',
        hobby:[]
      },
      // 表单验证规则
      formRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
        ],
        password1: [
           { required: true, message: '请再次输入密码', trigger: 'blur' }
         ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          // { type: 'number', message: '年龄必须为数字值', trigger: 'blur' },
          { min: 1, max: 120, message: '年龄必须在1-120之间', trigger: 'blur' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ]
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
    // select组件相关方法
    handleSelectChange(value, option) {
      console.log('选择器值改变:', value, option);
    },
    handleSelectClear() {
      console.log('选择器已清空');
    },
    // 模拟远程搜索方法
    async remoteSearch(query) {
      console.log('远程搜索:', query);
      
      // 模拟API请求延迟
      return new Promise((resolve) => {
        setTimeout(() => {
          // 模拟根据查询条件返回不同的数据
          const allData = [
            { label: '远程数据1 - ' + query, value: 'remote1_' + query },
            { label: '远程数据2 - ' + query, value: 'remote2_' + query },
            { label: '远程数据3 - ' + query, value: 'remote3_' + query },
            { label: '远程数据4 - ' + query, value: 'remote4_' + query },
            { label: '远程数据5 - ' + query, value: 'remote5_' + query }
          ];
          
          // 如果查询为空，返回默认数据
          if (!query) {
            resolve([
              { label: '默认选项1', value: 'default1' },
              { label: '默认选项2', value: 'default2' },
              { label: '默认选项3', value: 'default3' }
            ]);
          } else {
            // 根据查询条件过滤数据
            const filteredData = allData.filter(item => 
              item.label.toLowerCase().includes(query.toLowerCase())
            );
            resolve(filteredData);
          }
        }, 800); // 模拟800ms的网络延迟
      });
    },
    // 表单验证相关方法
    validatePassword2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formModel.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    submitForm() {
      this.$refs.validateForm.validate((valid) => {
        if (valid) {
          console.log('表单验证通过，提交数据:', this.formModel);
          alert('提交成功!');
        } else {
          console.log('表单验证失败');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.validateForm.resetFields();
    }
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
