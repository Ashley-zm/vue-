<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>畅购物欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link
              to="/register"
              class="register"
            >免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的畅购物</a>
          <a href="###">畅购物会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注畅购物</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link
          class="logo"
          to="/home"
        >
          <svg-icon
            style-object=""
            icon-class="logo"
          ></svg-icon>
          <div class="title"><span>畅购物</span> </div>
          <!-- <span class="title">畅购物</span> -->
        </router-link>

      </h1>
      <div class="searchArea">
        <form
          action="###"
          class="searchForm"
        >
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="searchText"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      searchText: ''//search 条件
    };
  },
  created () {

  },
  mounted () {

  },
  methods: {
    // 搜索按钮的回调函数：需要想search路由进行跳转
    goSearch () {
      // console.log(this.searchText);
      // this.$router.push('/search')
      //对象类型
      this.$router.push({
        name: 'search',
        params: {
          searchText: 'props'
        },
        query: {
          data: this.searchText
        }
      })
      // 字符串形式
      // this.$router.push("/search/" + this.searchText);
      // this.$router.push("/search/" + this.searchText + "?data=" + this.searchText);
      // 模版字符串形式
      // this.$router.push(`/search/${this.searchText}?data=${this.searchText}`);
    },
  }
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;
      position: absolute;

      .logo {
        .title {
          position: relative;
          top: -40px;
          left: 55px;
          color: #427dff;
          font-size: larger;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #427dff;
          // border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #427dff;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
