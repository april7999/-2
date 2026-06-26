# 🌟 打卡小伙伴

> 可爱治愈的情侣/好友报备打卡小程序 - 支持多种打卡模式

![cute](https://img.shields.io/badge/风格-可爱治愈-ff69b4)
![pwa](https://img.shields.io/badge/类型-纯前端-blue)
![deploy](https://img.shields.io/badge/部署-GitHub%20Pages-green)

## ✨ 功能亮点

### 🎯 多种打卡模式
- 💧 **喝水打卡** - 每日8杯水目标
- 💪 **运动打卡** - 记录运动次数
- 📚 **学习打卡** - 学习时长记录
- 💭 **心情打卡** - 情绪追踪
- 🌙 **早睡打卡** - 养成早睡习惯
- ✨ **自定义打卡** - 自由定义目标

### 💕 情侣/好友报备
- 📢 **实时报备** - 告诉TA你在干嘛
- 🎭 **丰富场景** - 日常/搬砖/心情/社交/抽象/外出
- 💬 **幽默标语** - 抽象搞笑又可爱
- 🔗 **数据同步** - 导出导入同步给TA

### 🎨 自定义功能
- 添加专属场景
- 自定义报备内容
- 切换打卡模式
- 修改个人信息

### 📱 纯前端实现
- LocalStorage 本地存储
- 无需登录、无需后端
- 数据导出/导入
- 隐私安全

## 🚀 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 **+** → **New repository**
3. 仓库名称：`check-in-buddy`（或自定义）
4. 选择 **Public**
5. 点击 **Create repository**

### 2. 上传代码

#### 方式一：网页上传

1. 进入仓库页面
2. 点击 **Add file** → **Upload files**
3. 上传这5个文件：
   - `index.html`
   - `styles.css`
   - `app.js`
   - `config.js`
   - `README.md`
4. 点击 **Commit changes**

#### 方式二：Git命令

```bash
git clone https://github.com/你的用户名/check-in-buddy.git
cd check-in-buddy
# 复制项目文件
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. 开启 GitHub Pages

1. 进入仓库 **Settings**
2. 左侧菜单 **Pages**
3. **Source** 选择 **Deploy from a branch**
4. **Branch** 选择 **main** → **/(root)**
5. 点击 **Save**
6. 等待1-2分钟，访问：`https://你的用户名.github.io/check-in-buddy/`

## 🎨 自定义配置

编辑 `config.js` 文件：

### 修改打卡模式
```javascript
modes: {
    water: {
        name: "喝水打卡",
        goal: 8,        // 目标数量
        goalUnit: "杯",  // 单位
        slogans: ["💧 又健康了一点！", "..."]  // 打卡标语
    }
}
```

### 添加新场景
```javascript
scenes: {
    myscene: {
        name: "我的场景",
        icon: "🌟",
        items: [
            { emoji: "🎸", name: "弹吉他", sub: "音乐时间" }
        ]
    }
}
```

### 修改报备选项
```javascript
checkInCategories: {
    mycategory: {
        name: "我的分类",
        items: [
            { emoji: "🎨", text: "画画", sub: "创作中" }
        ]
    }
}
```

## 💕 情侣使用指南

### 第一次使用
1. 各自打开部署好的链接
2. 输入你的名字和TA的名字
3. 选择打卡模式

### 日常报备
- 点击 **报备一下** 告诉TA你在干嘛
- 场景打卡选择当前状态
- 自定义添加专属黑话

### 数据同步
1. 点击 **数据管理** → **导出数据**
2. 复制数据发给TA
3. TA点击 **导入数据** 粘贴即可同步

### 连续打卡挑战
- 每天一起打卡，看谁能坚持更久
- 连续7天/30天有特殊提示
- 互相监督，养成好习惯

## 📁 文件结构

```
check-in-buddy/
├── index.html      # 主页面
├── styles.css      # 可爱治愈样式
├── app.js          # 应用逻辑
├── config.js       # 配置文件（可自定义）
└── README.md       # 本文件
```

## 🔒 隐私说明

- ✅ 所有数据存在浏览器本地
- ✅ 不上传服务器
- ✅ 不收集个人信息
- ⚠️ 清浏览器数据会丢失记录
- 💡 定期导出备份数据

## 🌈 使用场景

| 场景 | 用途 |
|------|------|
| 异地恋 | 实时报备，增加安全感 |
| 好朋友 | 分享日常，保持联系 |
| 自律 | 养成喝水/运动/学习习惯 |
| 情绪 | 记录心情，觉察自我 |

## 🛠️ 技术栈

- HTML5 + CSS3 (渐变/动画/响应式)
- Vanilla JavaScript (无框架)
- LocalStorage 本地存储
- Base64 数据导出

## 📝 更新计划

- [ ] 添加更多打卡模式
- [ ] 支持数据云端同步
- [ ] 添加成就徽章系统
- [ ] 支持背景主题切换
- [ ] 添加小组件/快捷指令

## 💖 致谢

祝你每天开心，和TA一起打卡快乐！

记得多喝水、多运动、早点睡~ 🌟

---

Made with 💕 for you and your buddy
