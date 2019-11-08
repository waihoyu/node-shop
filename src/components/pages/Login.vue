<template>
    <div>
        <van-nav-bar title="用户登陆" left-text="返回" left-arrow @click-left="goBack">
        </van-nav-bar>
        <div class="login-panel">
            <van-field class="field"
                v-model="username"
                label="用户名" 
                clearable
                bind:click-icon="username=''" 
                placeholder="请输入用户名" 
                required
                :error-message="usernameErrorMsg"
            >
            </van-field>
            <van-field 
                class="field"
                v-model="password"
                label="密码"
                type="password"
                clearable
                bind:click-icon="password=''" 
                placeholder="请输入密码" 
                required
                :error-message="passwordErrorMsg"
            >
            </van-field>  
            <div class="login-button">
                <van-button type="primary" size="large" @click="login" :loading = "openLoading">用户登陆
                </van-button>
            </div>          
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import url from '@/serviceAPI.config'
    import { Toast } from 'vant'
    export default {
        data(){
            return {
                username:'',
                password:'',
                openLoading:false ,  //是否开启注册的loading状态
                usernameErrorMsg:'',
                passwordErrorMsg:''
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            login(){
                this.checkForm() && this.axioslogin();
            },
            axioslogin(){
                this.openLoading = true;
                axios({
                    url: url.loginUser,
                    method: 'post',
                    data:{
                        username: this.username,
                        password: this.password
                    }
                }).then(response => {
                    // console.log(response);
                    if (response.data.code  == 200) {
                          Toast.success(response.data.message + ' 登陆成功'); 
                          this.$router.push('/'); 
                    }else{
                        // console.log(response)
                        this.openLoading = false;
                        Toast.fail(response.data.message.errmsg + ' 登陆失败'); 
                    }
                }).catch(error => {
                    // console.log(error);
                    this.openLoading = false;
                });
            },
            //表单验证方法
            checkForm(){
                let isOK = true;
                if (this.username.length < 5) {
                       this.usernameErrorMsg = '用户名不能小于五位';
                       isOK = false;
                }else{
                       this.usernameErrorMsg = '';
                }
                if (this.password.length < 6) {
                       this.passwordErrorMsg = '用户名不能少于六位';
                       isOK = false;                        
                }
                return isOK;
            }
        }
    }
</script>

<style  scoped>
.login-panel{
    width: 96%;
    border-radius: 5px;
    margin: 20px auto;
    padding-bottom: 80px;
}
.login-button{
    padding-top: 10px;
}
.field{
   border-radius: 5px; 
   margin-top: 5px;
}
</style>