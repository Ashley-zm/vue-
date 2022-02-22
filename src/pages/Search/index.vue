<template>
  <div>
    我是搜索
    <h2>params:{{this.$route.params.searchText}}-------------{{searchText}}</h2>
    <h2>query:{{this.$route.query.data}}------{{data}}</h2>
  </div>
</template>

<script>
export default {
  name: '',
  // props: ['props1', 'props2'],
  props: ['searchText', 'data'],
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
