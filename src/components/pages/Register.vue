<template>
    <div>
        <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goBack">
        </van-nav-bar>
        <div class="register-panel">
            <van-field class="field"
                v-model="username"
                label="用户名" 
                clearable
                bind:click-icon="username=''" 
                placeholder="请输入用户名" 
                required
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
            >
            </van-field>  
            <div class="register-button">
                <van-button type="primary" size="large" @click="axiosRegister">马上注册
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
        data () {
            return {
                username:'',
                password:''
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            axiosRegister(){
                axios({
                    url: url.registerUser,
                    method: 'post',
                    data:{
                        username: this.username,
                        password: this.password
                    }
                }).then(response => {
                    console.log(response);
                    if (response.data.code  == 200) {
                          Toast.success(response.data.message + 'success');  
                    }else{
                        Toast.fail(response.data.message.message + 'fail');  
                    }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style  scoped>
.register-panel{
    width: 96%;
    border-radius: 5px;
    margin: 20px auto;
    padding-bottom: 80px;
}
.register-button{
    padding-top: 10px;
}
.field{
   border-radius: 5px; 
   margin-top: 5px;
}
</style>