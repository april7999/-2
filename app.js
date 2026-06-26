/**
 * 🌟 打卡小伙伴 - 主应用逻辑
 */

// 全局状态
let appState = {
    userInfo: null,
    currentMode: 'water',
    todayRecords: [],
    streak: 0,
    currentSceneTab: 'daily',
    currentCheckInCategory: 'life',
    customScenes: []
};

// 初始化
function init() {
    loadUserInfo();
    loadTodayRecords();
    loadStreak();
    loadCustomScenes();
    
    if (appState.userInfo) {
        showMainApp();
    } else {
        initSetupPage();
    }
}

// 初始化设置页面
function initSetupPage() {
    const modeGrid = document.getElementById('modeGrid');
    modeGrid.innerHTML = Object.values(CONFIG.modes).map(mode => `
        <div class="mode-option ${mode.id === 'water' ? 'selected' : ''}" data-mode="${mode.id}" onclick="selectMode('${mode.id}')">
            <span class="mode-emoji">${mode.emoji}</span>
            <span class="mode-name">${mode.name}</span>
            <span class="mode-desc">${mode.desc}</span>
        </div>
    `).join('');
}

// 选择模式
function selectMode(modeId) {
    document.querySelectorAll('.mode-option').forEach(el => el.classList.remove('selected'));
    document.querySelector(`[data-mode="${modeId}"]`).classList.add('selected');
    appState.currentMode = modeId;
}

// 开始应用
function startApp() {
    const myName = document.getElementById('myName').value.trim();
    const partnerName = document.getElementById('partnerName').value.trim();
    
    if (!myName) {
        showToast('请输入你的名字哦~ 💕');
        return;
    }
    
    appState.userInfo = {
        myName,
        partnerName,
        mode: appState.currentMode
    };
    
    localStorage.setItem(CONFIG.storageKeys.userInfo, JSON.stringify(appState.userInfo));
    showToast(`你好呀，${myName}！开始打卡之旅~ 🌟`);
    showMainApp();
}

// 显示主应用
function showMainApp() {
    document.getElementById('setupPage').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    
    appState.currentMode = appState.userInfo.mode || 'water';
    
    updateHeader();
    updateOverview();
    initSceneTabs();
    renderSceneGrid();
    renderTimeline();
    updateProgressRing();
}

// 更新头部信息
function updateHeader() {
    const hour = new Date().getHours();
    let greetingList;
    let emoji = '🌅';
    
    if (hour < 12) {
        greetingList = CONFIG.greetings.morning;
        emoji = '🌅';
    } else if (hour < 18) {
        greetingList = CONFIG.greetings.afternoon;
        emoji = '☀️';
    } else {
        greetingList = CONFIG.greetings.evening;
        emoji = '🌙';
    }
    
    const greeting = greetingList[Math.floor(Math.random() * greetingList.length)];
    
    document.getElementById('headerEmoji').textContent = emoji;
    document.getElementById('greetingText').textContent = greeting;
    document.getElementById('displayName').textContent = appState.userInfo.myName;
    
    const now = new Date();
    const dateStr = `${now.getMonth() + 1}月${now.getDate()}日`;
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    document.getElementById('headerDate').textContent = `${dateStr} ${weekdays[now.getDay()]}`;
}

// 更新概览卡片
function updateOverview() {
    const mode = CONFIG.modes[appState.currentMode];
    
    document.getElementById('modeIcon').textContent = mode.emoji;
    document.getElementById('modeTitle').textContent = mode.name;
    document.getElementById('modeDesc').textContent = `今日${mode.goal}${mode.goalUnit}目标`;
    
    document.getElementById('mainActionEmoji').textContent = mode.actionEmoji;
    document.getElementById('mainActionText').textContent = mode.actionText;
    document.getElementById('mainActionSub').textContent = mode.actionSub;
    document.getElementById('progressTotal').textContent = `/${mode.goal}`;
    
    updateStats();
}

// 更新统计
function updateStats() {
    const mode = CONFIG.modes[appState.currentMode];
    const count = appState.todayRecords.filter(r => r.type === 'main').length;
    
    document.getElementById('progressNum').textContent = count;
    document.getElementById('streakCount').textContent = appState.streak;
    
    updateProgressRing();
}

// 更新进度环
function updateProgressRing() {
    const mode = CONFIG.modes[appState.currentMode];
    const count = appState.todayRecords.filter(r => r.type === 'main').length;
    const percent = Math.min(count / mode.goal, 1);
    
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - percent * circumference;
    
    const ring = document.getElementById('progressRing');
    ring.style.strokeDashoffset = offset;
    
    // 动态颜色
    const hue = 250 + percent * 60;
    ring.style.stroke = `hsl(${hue}, 80%, 60%)`;
}

// 主打卡
function mainCheckIn() {
    const mode = CONFIG.modes[appState.currentMode];
    const slogan = mode.slogans[Math.floor(Math.random() * mode.slogans.length)];
    
    const record = {
        type: 'main',
        emoji: mode.actionEmoji,
        text: `${mode.actionText} +1`,
        sub: slogan,
        time: new Date().toISOString()
    };
    
    appState.todayRecords.push(record);
    saveRecords();
    updateStreak();
    updateStats();
    renderTimeline();
    
    // 动画效果
    document.getElementById('mainActionBtn').classList.add('pulse');
    setTimeout(() => document.getElementById('mainActionBtn').classList.remove('pulse'), 1000);
    
    showToast(slogan);
    
    // 达成目标提示
    const count = appState.todayRecords.filter(r => r.type === 'main').length;
    if (count === mode.goal) {
        setTimeout(() => showToast(`🎊 恭喜达成今日${mode.goal}${mode.goalUnit}目标！`), 1500);
    }
}

// 初始化场景标签
function initSceneTabs() {
    const tabsContainer = document.getElementById('sceneTabs');
    const scenes = { ...CONFIG.scenes };
    
    // 添加自定义场景
    appState.customScenes.forEach(scene => {
        scenes[scene.id] = scene;
    });
    
    tabsContainer.innerHTML = Object.entries(scenes).map(([key, scene], index) => `
        <button class="scene-tab ${index === 0 ? 'active' : ''}" data-scene="${key}" onclick="switchSceneTab('${key}')">
            ${scene.name}
        </button>
    `).join('');
}

// 切换场景标签
function switchSceneTab(sceneKey) {
    document.querySelectorAll('.scene-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-scene="${sceneKey}"]`).classList.add('active');
    appState.currentSceneTab = sceneKey;
    renderSceneGrid();
}

// 渲染场景网格
function renderSceneGrid() {
    const grid = document.getElementById('sceneGrid');
    let items = [];
    
    // 查找场景
    const builtinScene = CONFIG.scenes[appState.currentSceneTab];
    const customScene = appState.customScenes.find(s => s.id === appState.currentSceneTab);
    
    if (builtinScene) {
        items = builtinScene.items;
    } else if (customScene) {
        items = customScene.items;
    }
    
    grid.innerHTML = items.map(item => `
        <div class="scene-item" onclick="sceneCheckIn('${item.name}', '${item.emoji}', '${item.sub}')">
            <span class="scene-emoji">${item.emoji}</span>
            <span class="scene-name">${item.name}</span>
        </div>
    `).join('');
}

// 场景打卡
function sceneCheckIn(name, emoji, sub) {
    const record = {
        type: 'scene',
        emoji,
        text: name,
        sub,
        time: new Date().toISOString()
    };
    
    appState.todayRecords.push(record);
    saveRecords();
    renderTimeline();
    
    const myName = appState.userInfo.myName;
    const partnerName = appState.userInfo.partnerName;
    
    if (partnerName) {
        showToast(`${emoji} ${myName}正在${name}，${partnerName}快来看！`);
    } else {
        showToast(`${emoji} 正在${name}~ ${sub}`);
    }
}

// 显示报备弹窗
function showCheckInModal() {
    const modal = document.getElementById('checkInModal');
    const categoryTabs = document.getElementById('categoryTabs');
    
    // 生成分类标签
    categoryTabs.innerHTML = Object.entries(CONFIG.checkInCategories).map(([key, cat], index) => `
        <button class="category-tab ${index === 0 ? 'active' : ''}" data-category="${key}" onclick="switchCategory('${key}')">
            ${cat.name}
        </button>
    `).join('');
    
    renderCheckInGrid('life');
    modal.classList.add('show');
}

// 切换分类
function switchCategory(category) {
    document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    appState.currentCheckInCategory = category;
    renderCheckInGrid(category);
}

// 渲染打卡网格
function renderCheckInGrid(category) {
    const grid = document.getElementById('checkinGrid');
    const items = CONFIG.checkInCategories[category].items;
    
    grid.innerHTML = items.map(item => `
        <div class="checkin-item" onclick="checkIn('${item.text}', '${item.emoji}', '${item.sub}')">
            <span class="checkin-emoji">${item.emoji}</span>
            <span class="checkin-text">${item.text}</span>
        </div>
    `).join('');
}

// 报备打卡
function checkIn(text, emoji, sub) {
    const record = {
        type: 'checkin',
        emoji,
        text: `报备：${text}`,
        sub,
        time: new Date().toISOString()
    };
    
    appState.todayRecords.push(record);
    saveRecords();
    renderTimeline();
    closeModal('checkInModal');
    
    const myName = appState.userInfo.myName;
    const partnerName = appState.userInfo.partnerName;
    
    if (partnerName) {
        showToast(`${emoji} ${myName}正在${text}，${partnerName}快来看！`);
    } else {
        showToast(`${emoji} 正在${text}~`);
    }
}

// 自定义报备
function customCheckIn() {
    const input = document.getElementById('customCheckInText');
    const text = input.value.trim();
    
    if (!text) {
        showToast('请输入报备内容哦~');
        return;
    }
    
    checkIn(text, '📢', '自定义报备');
    input.value = '';
}

// 渲染时间线
function renderTimeline() {
    const container = document.getElementById('timeline');
    
    if (appState.todayRecords.length === 0) {
        container.innerHTML = `
            <div class="timeline-empty">
                <p>还没有打卡记录哦~</p>
                <p>快去开始第一次打卡吧！✨</p>
            </div>
        `;
        return;
    }
    
    const sorted = [...appState.todayRecords].reverse();
    
    container.innerHTML = sorted.map(record => {
        const time = new Date(record.time);
        const timeStr = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;
        
        return `
            <div class="timeline-item">
                <span class="timeline-time">${timeStr}</span>
                <div class="timeline-content">
                    <span class="timeline-icon">${record.emoji}</span>
                    <span class="timeline-text">${record.text}</span>
                    ${record.sub ? `<p class="timeline-sub">${record.sub}</p>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// 关闭弹窗
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// 显示设置
function showSettings() {
    document.getElementById('editMyName').value = appState.userInfo.myName;
    document.getElementById('editPartnerName').value = appState.userInfo.partnerName || '';
    
    const modeSelect = document.getElementById('modeSelect');
    modeSelect.innerHTML = Object.values(CONFIG.modes).map(mode => `
        <option value="${mode.id}" ${mode.id === appState.currentMode ? 'selected' : ''}>${mode.name}</option>
    `).join('');
    
    document.getElementById('settingsModal').classList.add('show');
}

// 保存设置
function saveSettings() {
    const myName = document.getElementById('editMyName').value.trim();
    const partnerName = document.getElementById('editPartnerName').value.trim();
    const mode = document.getElementById('modeSelect').value;
    
    if (!myName) {
        showToast('名字不能为空哦~');
        return;
    }
    
    appState.userInfo.myName = myName;
    appState.userInfo.partnerName = partnerName;
    appState.userInfo.mode = mode;
    appState.currentMode = mode;
    
    localStorage.setItem(CONFIG.storageKeys.userInfo, JSON.stringify(appState.userInfo));
    
    closeModal('settingsModal');
    updateHeader();
    updateOverview();
    showToast('设置已保存！✨');
}

// 切换模式
function changeMode(modeId) {
    // 临时保存，等点击保存才生效
}

// 清除所有数据
function clearAllData() {
    if (confirm('确定要清除所有数据吗？此操作不可恢复！')) {
        localStorage.removeItem(CONFIG.storageKeys.userInfo);
        localStorage.removeItem(CONFIG.storageKeys.records);
        localStorage.removeItem(CONFIG.storageKeys.streak);
        localStorage.removeItem(CONFIG.storageKeys.customScenes);
        location.reload();
    }
}

// 导出数据
function exportData() {
    const data = {
        userInfo: appState.userInfo,
        records: appState.todayRecords,
        exportTime: new Date().toISOString()
    };
    
    const dataStr = btoa(JSON.stringify(data));
    
    // 创建临时文本区域供复制
    const textarea = document.createElement('textarea');
    textarea.value = dataStr;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    showToast('数据已复制到剪贴板！📋');
}

// 显示导入弹窗
function showImportModal() {
    document.getElementById('importModal').classList.add('show');
}

// 导入数据
function importData() {
    const input = document.getElementById('importDataText');
    const dataStr = input.value.trim();
    
    if (!dataStr) {
        showToast('请输入数据代码哦~');
        return;
    }
    
    try {
        const data = JSON.parse(atob(dataStr));
        
        if (data.userInfo && data.records) {
            // 合并记录
            const today = getTodayKey();
            const saved = localStorage.getItem(CONFIG.storageKeys.records);
            const allRecords = saved ? JSON.parse(saved) : {};
            
            allRecords[today] = [...(allRecords[today] || []), ...data.records];
            localStorage.setItem(CONFIG.storageKeys.records, JSON.stringify(allRecords));
            
            loadTodayRecords();
            renderTimeline();
            updateStats();
            
            closeModal('importModal');
            input.value = '';
            showToast('数据导入成功！🎉');
        }
    } catch (e) {
        showToast('数据格式错误，请检查~');
    }
}

// 分享给TA
function shareWithPartner() {
    const data = {
        userInfo: appState.userInfo,
        records: appState.todayRecords,
        exportTime: new Date().toISOString()
    };
    
    const dataStr = btoa(JSON.stringify(data));
    document.getElementById('shareDataText').value = dataStr;
    document.getElementById('shareModal').classList.add('show');
}

// 复制分享数据
function copyShareData() {
    const textarea = document.getElementById('shareDataText');
    textarea.select();
    document.execCommand('copy');
    showToast('已复制！快发给TA吧~ 💕');
}

// 场景编辑
function toggleSceneEdit() {
    renderCustomScenesList();
    document.getElementById('sceneEditModal').classList.add('show');
}

// 添加自定义场景
function addCustomScene() {
    const emoji = document.getElementById('newSceneEmoji').value.trim();
    const name = document.getElementById('newSceneName').value.trim();
    const sub = document.getElementById('newSceneSub').value.trim();
    
    if (!emoji || !name) {
        showToast('请填写表情和名称~');
        return;
    }
    
    const sceneId = 'custom_' + Date.now();
    const newScene = {
        id: sceneId,
        name: '自定义',
        icon: emoji,
        items: [{ emoji, name, sub: sub || '自定义' }]
    };
    
    appState.customScenes.push(newScene);
    saveCustomScenes();
    
    // 清空输入
    document.getElementById('newSceneEmoji').value = '';
    document.getElementById('newSceneName').value = '';
    document.getElementById('newSceneSub').value = '';
    
    renderCustomScenesList();
    initSceneTabs();
    showToast('场景添加成功！✨');
}

// 删除自定义场景
function removeCustomScene(sceneId) {
    appState.customScenes = appState.customScenes.filter(s => s.id !== sceneId);
    saveCustomScenes();
    renderCustomScenesList();
    initSceneTabs();
}

// 渲染自定义场景列表
function renderCustomScenesList() {
    const container = document.getElementById('customScenesList');
    
    if (appState.customScenes.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#999;padding:20px;">还没有自定义场景~</p>';
        return;
    }
    
    container.innerHTML = appState.customScenes.map(scene => `
        <div class="custom-scene-item">
            <span class="scene-emoji">${scene.items[0].emoji}</span>
            <div class="scene-info">
                <div class="scene-name">${scene.items[0].name}</div>
                <div class="scene-sub">${scene.items[0].sub}</div>
            </div>
            <button onclick="removeCustomScene('${scene.id}')">删除</button>
        </div>
    `).join('');
}

// 数据持久化
function loadUserInfo() {
    const saved = localStorage.getItem(CONFIG.storageKeys.userInfo);
    if (saved) {
        appState.userInfo = JSON.parse(saved);
    }
}

function loadTodayRecords() {
    const saved = localStorage.getItem(CONFIG.storageKeys.records);
    const today = getTodayKey();
    
    if (saved) {
        const allRecords = JSON.parse(saved);
        appState.todayRecords = allRecords[today] || [];
    }
}

function saveRecords() {
    const saved = localStorage.getItem(CONFIG.storageKeys.records);
    const today = getTodayKey();
    const allRecords = saved ? JSON.parse(saved) : {};
    
    allRecords[today] = appState.todayRecords;
    localStorage.setItem(CONFIG.storageKeys.records, JSON.stringify(allRecords));
}

function loadStreak() {
    const saved = localStorage.getItem(CONFIG.storageKeys.streak);
    if (saved) {
        const data = JSON.parse(saved);
        const today = getTodayKey();
        const yesterday = getYesterdayKey();
        
        if (data.lastDate === today || data.lastDate === yesterday) {
            appState.streak = data.count;
        } else {
            appState.streak = 0;
        }
    }
}

function updateStreak() {
    const today = getTodayKey();
    const saved = localStorage.getItem(CONFIG.storageKeys.streak);
    let data = saved ? JSON.parse(saved) : { count: 0, lastDate: null };
    
    if (data.lastDate !== today) {
        const yesterday = getYesterdayKey();
        if (data.lastDate === yesterday) {
            data.count++;
        } else {
            data.count = 1;
        }
        data.lastDate = today;
        
        localStorage.setItem(CONFIG.storageKeys.streak, JSON.stringify(data));
        appState.streak = data.count;
        
        if (appState.streak === 7) showToast('🔥 连续打卡7天！周冠军！');
        if (appState.streak === 30) showToast('🏆 连续打卡30天！月度大师！');
    }
}

function loadCustomScenes() {
    const saved = localStorage.getItem(CONFIG.storageKeys.customScenes);
    if (saved) {
        appState.customScenes = JSON.parse(saved);
    }
}

function saveCustomScenes() {
    localStorage.setItem(CONFIG.storageKeys.customScenes, JSON.stringify(appState.customScenes));
}

function getTodayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function getYesterdayKey() {
    const now = new Date();
    now.setDate(now.getDate() - 1);
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// 提示
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 点击外部关闭弹窗
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
};

// 启动
document.addEventListener('DOMContentLoaded', init);
