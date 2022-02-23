<template>
  <div id="app">
    <nav>
      <router-link to="/OrderFood">點餐1</router-link> |
      <router-link to="/SetFood">設定餐點</router-link> |
      <router-link to="/FoodSetting">食物設定</router-link> |
      <router-link to="/UsersSetting">人員設定</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
