<template>
    <div class="container">
        <div>
            <b-card no-body class="overflow-hidden" style="max-width: 200px;" footer="Card Footer"
              footer-tag="footer">
              <b-row no-gutters>
                  <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-row>
            </b-card>
          </div>
    </div>
</template>
<script>
    export default{
      name:"IndexBrand",
      props:{
          company:{}
      }
      
    }
</script>
<style scoped>
</style>