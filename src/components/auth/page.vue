<template>
  <Layout style="min-height: 100vh">
    <LayoutSider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <MenuItem key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </MenuItem>
        <MenuItem key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </MenuItem>
        <SubMenu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <MenuItem key="3">Tom</MenuItem>
          <MenuItem key="4">Bill</MenuItem>
          <MenuItem key="5">Alex</MenuItem>
        </SubMenu>
        <SubMenu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <MenuItem key="6">Team 1</MenuItem>
          <MenuItem key="8">Team 2</MenuItem>
        </SubMenu>
        <MenuItem key="9">
          <file-outlined />
          <span>File</span>
        </MenuItem>
      </Menu>
    </LayoutSider>
    <Layout>
      <LayoutHeader style="background: #fff; padding: 0" />
      <LayoutContent style="margin: 0 16px">
        <Breadcrumb style="margin: 16px 0">
          <BreadcrumbItem>User</BreadcrumbItem>
          <BreadcrumbItem>Bill</BreadcrumbItem>
        </Breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
      </LayoutContent>
      <LayoutFooter style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </LayoutFooter>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons-vue";
import {
  Layout,
  Menu,
  MenuItem,
  LayoutSider,
  SubMenu,
  LayoutContent,
  Breadcrumb,
  LayoutFooter,
  BreadcrumbItem,
  LayoutHeader,
} from "ant-design-vue";
import { ref } from "vue";
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
