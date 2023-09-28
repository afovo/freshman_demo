# Nuxt 3+pinia+tailwind+element-plus

## Function

白板-新手demo标准：[新手Demo项目标准 - Feishu Docs](https://blankspace.feishu.cn/wiki/TBz3wXNQWinnSCkwP82czSvJnLf)

### Details

├─assets //静态文件
│  ├─css
│  ├─json //假数据
│  └─pic
│          
├─components
│      button1.vue
│      button2.vue
│      navBar.vue //页头，同时用于拦截未登录用户
│      userInfo.vue //管理员视图的用户详情

├─pages
│  ├─admin //管理员页面：查看用户列表，修改用户信息
│  │      index.vue
│  │      
│  ├─index 
│  │      index.vue //首页&登录
│  │      reg.vue //注册表单页
│  │      
│  └─user //用户页：查看&修改个人信息
│          index.vue

└─stores //pinia store
        users.ts
        

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn(Recommanded)
yarn install

# bun
bun install
```

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



## Conclusion

两天从vue+js+vuex转nuxt+ts+pinia，很多地方不够优雅也不够熟练，踩过的坑都有记录下来。

- To be continued：
  - admin页面的[添加用户]按钮功能因为没要求就没写
  - pinia相关及localStorage的部分用得有点别扭，需要进一步熟练
  - 首页[关于]按钮功能因为没要求就没写



## References

[介绍 · 开始使用Nuxt3 Nuxt中文站](https://nuxt.com.cn/docs/getting-started/introduction)

[定义 Store | Pinia (vuejs.org)](https://pinia.vuejs.org/zh/core-concepts/)

[Tailwind CSS Components - Tailwind UI](https://tailwindui.com/components)

[Icon Sets • Iconify](https://icon-sets.iconify.design/)

[Form 表单 | Element Plus (element-plus.org)](https://element-plus.org/zh-CN/component/form.html)