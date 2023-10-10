<template>
    <div class="container">
        <b-row>
            <b-col>
                <div>
                    <p class="h2 mb-2">
                        <b-icon icon="hand-thumbs-up"></b-icon> 专业的售后团队
                    </p>
                </div>
            </b-col>
            <b-col>
                <div>
                    <p class="h2 mb-2">
                        <b-icon icon="truck"></b-icon> 优质物流配送
                    </p>
                </div>
            </b-col>
            <b-col> 
                <div>
                    <p class="h2 mb-2">
                        <b-icon icon="telephone"></b-icon> 欢迎询价
                    </p>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div>
                    <p>
                        Copyright © 2014 ez-Bio Inc. - All rights reserved. {{ company.icp }}
                    </p>
                </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    export default{
        name:"IndexFooter",
        props:{
            company:{}
        }
        
    }
</script>
<style scoped>
</style>