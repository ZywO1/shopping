<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommand></Recommand>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer/index.vue"
import Recommand from "@/pages/Home/Recommand/index.vue"
import Rank from "@/pages/Home/Rank/index.vue"
import Like from "@/pages/Home/Like/index.vue"
import Floor from "@/pages/Home/Floor/index.vue"
import Brand from "@/pages/Home/Brand/index.vue"
export default {
    name:'Home',
    components:{
      ListContainer,
      Recommand,
      Rank,
      Like,
      Floor,
      Brand
    }
}
</script>

<style>

</style>