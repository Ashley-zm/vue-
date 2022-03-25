<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
//  列表 组件
import ListContainer from '@/pages/Home/ListContainer'
// 今日推荐 组件
import Recommend from '@/pages/Home/Recommend.vue'
// 商品排行榜 组件
import Rank from '@/pages/Home/Rank.vue'
// 猜你喜欢 组件
import Like from '@/pages/Home/Like.vue'
// 家用组件 组件（手机通讯 复用组件）
import Floor from '@/pages/Home/Floor.vue'
// 品牌logo 组件
import Brand from '@/pages/Home/Brand.vue'
export default {
  name: '',
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  data () {
    return {

    };
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
};
</script>

<style scoped lang="less">
</style>
