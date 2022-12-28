<template>
  <div class="chuliview">
    <el-row>
        <!-- <el-button @click="postHandle" type="primary">发送POST请求</el-button> -->
        <div class="home-page1-vbg" data-v-430cd08b=""><video autoplay="autoplay" loop="loop" muted="muted" playsinline=""
                poster="https://cdn.leoao.com/ow/ow-page1-bg-demo.png" data-v-430cd08b="">
                <source src="https://cdn.leoao.com/ow/home-page1-bg.mp4" type="video/mp4" data-v-430cd08b="">
            </video></div>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        // 发起一个 POST 请求
        postHandle() {
            axios.post('/user', {
                firstName: 'Fred',
                lastName: 'Flintstone'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            // 发起一个post请求
            axios({
                method: 'post',
                url: '/user/12345',
                data: {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                }
            });
        }
    },
}
</script>

<style>
.chuliview{
    background-color: rgb(172, 128, 213);
    height: 100vh;
}
</style>