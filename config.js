/**
 * 🌟 打卡小伙伴 - 配置文件
 * 可自定义所有内容，打造专属打卡体验
 */

const CONFIG = {
    // 应用信息
    appName: "打卡小伙伴",
    version: "1.0.0",
    
    // 打卡模式配置
    modes: {
        water: {
            id: "water",
            name: "喝水打卡",
            emoji: "💧",
            desc: "记录每日饮水",
            goal: 8,
            goalUnit: "杯",
            actionText: "喝水打卡",
            actionEmoji: "💧",
            actionSub: "+1杯",
            slogans: [
                "💧 又健康了一点！",
                "🌊 水润润~",
                "✨ 身体感谢你！",
                "💪 离目标更近啦",
                "🎯 自律即自由",
                "🌸 hydrated & happy",
                "💕 为健康干杯",
                "🎉 好样的！",
                "🌟 闪闪发光的水宝宝",
                "🏆 今日饮水冠军就是你",
                "🥤 咕噜咕噜~",
                "💙 蓝蓝的水，美美的你",
                "🌈  hydrated 的灵魂",
                "✌️ 再来一杯！",
                "🎊 水做的美人/帅哥"
            ]
        },
        
        workout: {
            id: "workout",
            name: "运动打卡",
            emoji: "💪",
            desc: "记录运动次数",
            goal: 5,
            goalUnit: "次",
            actionText: "运动打卡",
            actionEmoji: "💪",
            actionSub: "+1次",
            slogans: [
                "💪 肌肉在燃烧！",
                "🔥 汗水是最好的化妆品",
                "🏃 跑起来就有风",
                "⭐ 自律给我自由",
                "🎯 目标又近一步",
                "🎉 运动使人快乐",
                "💦 流汗的感觉真好",
                "🏆 你是最棒的",
                "🌟 闪闪发光的你",
                "💯 满分运动家",
                "🦾 变强ing",
                "⚡ 电量满格",
                "🎊 脂肪在颤抖"
            ]
        },
        
        study: {
            id: "study",
            name: "学习打卡",
            emoji: "📚",
            desc: "记录学习时长",
            goal: 4,
            goalUnit: "小时",
            actionText: "学习打卡",
            actionEmoji: "📖",
            actionSub: "+1h",
            slogans: [
                "📚 知识+1",
                "🧠 大脑在升级",
                "💡 灵光一闪",
                "🎓 学霸模式on",
                "⭐ 进步看得见",
                "📝 笔记记得好",
                "🎯 专注的力量",
                "🌟 智慧的光芒",
                "🏆 未来的博士",
                "💪 学海无涯",
                "✨ 知识点get",
                "📖 书中自有黄金屋"
            ]
        },
        
        mood: {
            id: "mood",
            name: "心情打卡",
            emoji: "💭",
            desc: "记录情绪变化",
            goal: 3,
            goalUnit: "次",
            actionText: "记录心情",
            actionEmoji: "💭",
            actionSub: "+1",
            slogans: [
                "💭 心情被记录了",
                "🌈 每一种情绪都很美",
                "💕 爱自己多一点",
                "📝 情绪日记+1",
                "✨ 觉察即治愈",
                "🎨 情绪的调色盘",
                "💝 善待自己的心情",
                "🌸 温柔对待自己",
                "🎵 心情有声音",
                "💫 情绪稳定器"
            ]
        },
        
        sleep: {
            id: "sleep",
            name: "早睡打卡",
            emoji: "🌙",
            desc: "记录早睡天数",
            goal: 7,
            goalUnit: "天",
            actionText: "早睡打卡",
            actionEmoji: "😴",
            actionSub: "晚安",
            slogans: [
                "🌙 晚安好梦",
                "💤 睡美人/睡王子",
                "⭐ 早睡早起身体好",
                "🛏️ 床在召唤",
                "😴 梦境加载中",
                "🎵 睡眠是最好的音乐",
                "💝 爱睡觉的孩子运气不会差",
                "🌟 明日再战",
                "✨ 美容觉开始",
                "🌸 和月亮说晚安"
            ]
        },
        
        custom: {
            id: "custom",
            name: "自定义打卡",
            emoji: "✨",
            desc: "自由定义目标",
            goal: 10,
            goalUnit: "次",
            actionText: "打卡",
            actionEmoji: "✅",
            actionSub: "+1",
            slogans: [
                "✨ 又完成一项！",
                "🎯 目标达成+1",
                "💪 坚持就是胜利",
                "⭐ 闪闪发光",
                "🎉 太棒了！",
                "✌️ 继续保持",
                "🏆 冠军就是你",
                "💕 为自己鼓掌",
                "🌟 优秀的你",
                "🎊 庆祝一下"
            ]
        }
    },
    
    // 场景配置
    scenes: {
        daily: {
            name: "日常",
            icon: "🏠",
            items: [
                { emoji: "🛏️", name: "刚起床", sub: "早安" },
                { emoji: "🍽️", name: "干饭中", sub: "干饭人" },
                { emoji: "📺", name: "追剧", sub: "停不下来" },
                { emoji: "🎮", name: "打游戏", sub: "峡谷见" },
                { emoji: "🛋️", name: "葛优躺", sub: "摆烂中" },
                { emoji: "🚿", name: "洗澡", sub: "洗香香" },
                { emoji: "🧹", name: "打扫", sub: "家务time" },
                { emoji: "🛒", name: "购物", sub: "剁手快乐" },
                { emoji: "🍳", name: "做饭", sub: "大厨上线" },
                { emoji: "💤", name: "准备睡", sub: "晚安" }
            ]
        },
        
        work: {
            name: "搬砖",
            icon: "💼",
            items: [
                { emoji: "💻", name: "写代码", sub: "头顶发光" },
                { emoji: "📊", name: "开会", sub: "假装很忙" },
                { emoji: "📧", name: "回邮件", sub: "邮件战士" },
                { emoji: "🤯", name: "改需求", sub: "产品经理" },
                { emoji: "🐛", name: "修bug", sub: "捉虫大师" },
                { emoji: "☕", name: "喝咖啡", sub: "续命神器" },
                { emoji: "📱", name: "摸鱼", sub: "老板看不到" },
                { emoji: "😤", name: "被催了", sub: "压力山大" },
                { emoji: "🎉", name: "下班", sub: "解放了" },
                { emoji: "🏠", name: "在家办公", sub: "WFH" }
            ]
        },
        
        mood: {
            name: "心情",
            icon: "💭",
            items: [
                { emoji: "😊", name: "超开心", sub: "美滋滋" },
                { emoji: "😴", name: "好困", sub: "想睡觉" },
                { emoji: "😤", name: "有点烦", sub: "需要冷静" },
                { emoji: "🥰", name: "想你了", sub: "思念模式" },
                { emoji: "🤔", name: "在思考", sub: "人生哲学" },
                { emoji: "😎", name: "很滋润", sub: "状态极佳" },
                { emoji: "😢", name: "emo了", sub: "需要抱抱" },
                { emoji: "🤗", name: "充满能量", sub: "元气满满" },
                { emoji: "😌", name: "很平静", sub: "内心安宁" },
                { emoji: "🥳", name: "想庆祝", sub: "快乐源泉" }
            ]
        },
        
        social: {
            name: "社交",
            icon: "👥",
            items: [
                { emoji: "🍻", name: "聚会", sub: "朋友相聚" },
                { emoji: "📞", name: "打电话", sub: "煲电话粥" },
                { emoji: "💬", name: "聊天", sub: "话痨模式" },
                { emoji: "🎵", name: "K歌", sub: "麦霸上线" },
                { emoji: "🍿", name: "看电影", sub: "约会中" },
                { emoji: "🎮", name: "开黑", sub: "组队中" },
                { emoji: "🎁", name: "送礼物", sub: "小惊喜" },
                { emoji: "🤝", name: "约会", sub: "甜蜜蜜" },
                { emoji: "👨‍👩‍👧", name: "陪家人", sub: "温馨时光" },
                { emoji: "🐱", name: "撸猫", sub: "猫咪教" }
            ]
        },
        
        fun: {
            name: "抽象",
            icon: "🎭",
            items: [
                { emoji: "🐟", name: "摸鱼", sub: "老板看不到" },
                { emoji: "🍉", name: "吃瓜", sub: "前排围观" },
                { emoji: "🏃", name: "假装忙碌", sub: "演技派" },
                { emoji: "🎲", name: "听天由命", sub: "佛系青年" },
                { emoji: "🌚", name: "已黑化", sub: "中二病" },
                { emoji: "🦥", name: "树懒模式", sub: "0.5倍速" },
                { emoji: "🤡", name: "小丑竟是我", sub: "emo了" },
                { emoji: "💀", name: "灵魂出窍", sub: "身体被掏空" },
                { emoji: "🙃", name: "躺平了", sub: "摆烂人生" },
                { emoji: "🦄", name: "做白日梦", sub: "幻想时间" }
            ]
        },
        
        outdoor: {
            name: "外出",
            icon: "🌳",
            items: [
                { emoji: "🚇", name: "通勤", sub: "挤地铁" },
                { emoji: "🏃", name: "跑步", sub: "燃烧卡路里" },
                { emoji: "🚶", name: "散步", sub: "悠闲时光" },
                { emoji: "🚴", name: "骑车", sub: "吹吹风" },
                { emoji: "🌳", name: "逛公园", sub: "亲近自然" },
                { emoji: "☕", name: "探店", sub: "咖啡time" },
                { emoji: "🛍️", name: "逛街", sub: "买买买" },
                { emoji: "📸", name: "拍照", sub: "记录美好" },
                { emoji: "🌅", name: "看风景", sub: "治愈时刻" },
                { emoji: "🚗", name: "开车", sub: "在路上" }
            ]
        }
    },
    
    // 报备分类
    checkInCategories: {
        life: {
            name: "生活",
            items: [
                { emoji: "🍚", text: "干饭", sub: "干饭魂" },
                { emoji: "🚿", text: "洗澡", sub: "洗香香" },
                { emoji: "💤", text: "睡觉", sub: "晚安" },
                { emoji: "🛒", text: "购物", sub: "剁手" },
                { emoji: "🧹", text: "打扫", sub: "家务" },
                { emoji: "🍳", text: "做饭", sub: "大厨" }
            ]
        },
        
        work: {
            name: "工作",
            items: [
                { emoji: "💻", text: "搬砖", sub: "打工中" },
                { emoji: "📊", text: "开会", sub: "摸鱼中" },
                { emoji: "📧", text: "回消息", sub: "社畜" },
                { emoji: "☕", text: "喝咖啡", sub: "续命" },
                { emoji: "🍱", text: "吃外卖", sub: "午餐" },
                { emoji: "🏠", text: "下班", sub: "解放" }
            ]
        },
        
        play: {
            name: "娱乐",
            items: [
                { emoji: "📺", text: "追剧", sub: "上头" },
                { emoji: "🎮", text: "游戏", sub: "上分" },
                { emoji: "🎵", text: "听歌", sub: "循环" },
                { emoji: "📖", text: "看书", sub: "充电" },
                { emoji: "🎨", text: "画画", sub: "创作" },
                { emoji: "🎬", text: "看电影", sub: "放松" }
            ]
        },
        
        social: {
            name: "社交",
            items: [
                { emoji: "💬", text: "聊天", sub: "话痨" },
                { emoji: "🍻", text: "聚会", sub: "嗨皮" },
                { emoji: "📞", text: "打电话", sub: "煲粥" },
                { emoji: "🎁", text: "准备礼物", sub: "惊喜" },
                { emoji: "🤝", text: "约会", sub: "甜蜜" },
                { emoji: "🐱", text: "撸猫", sub: "吸猫" }
            ]
        },
        
        health: {
            name: "健康",
            items: [
                { emoji: "🏃", text: "运动", sub: "健身" },
                { emoji: "🧘", text: "冥想", sub: "静心" },
                { emoji: "💊", text: "吃药", sub: "养生" },
                { emoji: "🥤", text: "喝水", sub: "补水" },
                { emoji: "😴", text: "午睡", sub: "充电" },
                { emoji: "🌞", text: "晒太阳", sub: "补钙" }
            ]
        },
        
        special: {
            name: "特殊",
            items: [
                { emoji: "✈️", text: "出差", sub: "在路上" },
                { emoji: "🏥", text: "看病", sub: "保重" },
                { emoji: "🎂", text: "过生日", sub: "庆祝" },
                { emoji: "🎉", text: "过节", sub: "快乐" },
                { emoji: "🛫", text: "旅行", sub: "游玩" },
                { emoji: "📚", text: "考试", sub: "加油" }
            ]
        }
    },
    
    // 问候语
    greetings: {
        morning: ["早安", "早上好呀", "新的一天", "起床啦", "早鸭"],
        afternoon: ["下午好", "午后时光", "加油", "继续冲", "午安"],
        evening: ["晚上好", "辛苦啦", "休息下", "晚安", "好梦"]
    },
    
    // 本地存储键名
    storageKeys: {
        userInfo: "checkin_user_info",
        records: "checkin_records",
        streak: "checkin_streak",
        customScenes: "checkin_custom_scenes"
    }
};

// 浏览器环境导出
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
