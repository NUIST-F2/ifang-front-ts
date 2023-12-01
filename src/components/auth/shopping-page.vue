<template>
  <Layout>
    <LayoutHeader class="header">
      <div class="logo" />
      <Menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <MenuItem key="1">nav 1</MenuItem>
        <MenuItem key="2">nav 2</MenuItem>
        <MenuItem key="3">nav 3</MenuItem>
      </Menu>
    </LayoutHeader>
    <LayoutContent style="padding: 0 50px">
      <Breadcrumb style="margin: 16px 0">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>List</BreadcrumbItem>
        <BreadcrumbItem>App</BreadcrumbItem>
      </Breadcrumb>
      <Layout style="padding: 24px 0; background: #fff">
        <LayoutSider width="200" style="background: #fff">
          <Menu
            v-model:selectedKeys="selectedkeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
          >
            <SubMenu key="sub1">
              <template #title>
                <span>
                  <UserOutlined />
                  User
                </span>
              </template>
              <MenuItem key="1">option1</MenuItem>
              <MenuItem key="2">option2</MenuItem>
              <MenuItem key="3">option3</MenuItem>
              <MenuItem key="4">option4</MenuItem>
            </SubMenu>
            <SubMenu key="sub2">
              <template #title>
                <span>
                  <LaptopOutlined />
                  Shopping
                </span>
              </template>
              <MenuItem key="5">option5</MenuItem>
              <MenuItem key="6">option6</MenuItem>
              <MenuItem key="7">option7</MenuItem>
              <MenuItem key="8">option8</MenuItem>
            </SubMenu>
            <SubMenu key="sub3">
              <template #title>
                <span>
                  <NotificationOutlined />
                  Recommendation
                </span>
              </template>
              <MenuItem key="9">option9</MenuItem>
              <MenuItem key="10">option10</MenuItem>
              <MenuItem key="11">option11</MenuItem>
              <MenuItem key="12">option12</MenuItem>
            </SubMenu>
          </Menu>
        </LayoutSider>
        <LayoutContent :style="{ padding: '0 24px', minHeight: '280px' }">
          <shoppingcart/>
        </LayoutContent>
      </Layout>
    </LayoutContent>
    <LayoutFooter style="text-align: center">
      IFANG ©2023 Created by Lixxxuan
    </LayoutFooter>
  </Layout>
</template>
<script setup lang="ts">
import {
  Layout,
  LayoutHeader,
  LayoutFooter,
  LayoutContent,
  LayoutSider,
  Menu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  SubMenu,
} from "ant-design-vue";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import shoppingcart from "../auth/shopping-cart.vue"
const selectedKeys1 = ref<string[]>(["2"]);
const selectedkeys2 = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
</script>
<style>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>

