// ====================================================================
// 配置文件 — 改这里就行
// ====================================================================
window.CONFIG = {

  // ---------------- 每日任务 ----------------
  // key 是 JS 的星期数：0=周日, 1=周一, ... 6=周六
  // 每个 item 的 id 必须唯一（用于记录完成状态）
  schedule: {
    1: {
      label: '周一 · 通勤日', subtitle: '在路上也是学习',
      items: [
        { id: 'commute',    emoji: '🎧', text: '通勤听 podcast / 看课程' },
        { id: 'short-post', emoji: '✍️', text: '午休发短文' },
        { id: 'sugar',      emoji: '🥦', text: '控糖 — 原型食物优先' },
      ]
    },
    2: {
      label: '周二 · WFH', subtitle: '专注学习日',
      items: [
        { id: 'phone-away', emoji: '📱', text: '开工前手机收起来' },
        { id: 'robotics',   emoji: '🤖', text: 'Robotics 学习' },
        { id: 'short-post', emoji: '✍️', text: '发短文' },
        { id: 'exercise',   emoji: '💪', text: '运动 1hr' },
        { id: 'sugar',      emoji: '🥦', text: '控糖 — 原型食物优先' },
        { id: 'focus-check', emoji: '🧠', text: '下班 check：注意力去了哪里？' },
      ]
    },
    3: {
      label: '周三 · WFH', subtitle: '专注学习日',
      items: [
        { id: 'phone-away', emoji: '📱', text: '开工前手机收起来' },
        { id: 'robotics',   emoji: '🤖', text: 'Robotics 学习' },
        { id: 'short-post', emoji: '✍️', text: '发短文' },
        { id: 'exercise',   emoji: '💪', text: '运动 1hr' },
        { id: 'sugar',      emoji: '🥦', text: '控糖 — 原型食物优先' },
        { id: 'focus-check', emoji: '🧠', text: '下班 check：注意力去了哪里？' },
      ]
    },
    4: {
      label: '周四 · 通勤日', subtitle: '在路上也是学习',
      items: [
        { id: 'commute',    emoji: '🎧', text: '通勤听 podcast / 看课程' },
        { id: 'short-post', emoji: '✍️', text: '午休发短文' },
        { id: 'sugar',      emoji: '🥦', text: '控糖 — 原型食物优先' },
      ]
    },
    5: {
      label: '周五 · WFH', subtitle: '学习 + 放松夜',
      items: [
        { id: 'phone-away', emoji: '📱', text: '开工前手机收起来' },
        { id: 'robotics',   emoji: '🤖', text: 'Robotics 学习' },
        { id: 'short-post', emoji: '✍️', text: '发短文' },
        { id: 'exercise',   emoji: '💪', text: '运动 1hr' },
        { id: 'sugar',      emoji: '🥦', text: '控糖 — 原型食物优先' },
        { id: 'focus-check', emoji: '🧠', text: '下班 check：注意力去了哪里？' },
        { id: 'gaming',     emoji: '🎮', text: '王者荣耀', note: '晚上放松' },
      ]
    },
    6: {
      label: '周六 · 自由日', subtitle: '深度学习 + 社交',
      items: [
        { id: 'robotics',   emoji: '🤖', text: 'Robotics 学习' },
        { id: 'short-post', emoji: '✍️', text: '发短文' },
        { id: 'substack',   emoji: '📝', text: 'Substack 长文', note: '写好下周发' },
        { id: 'exercise',   emoji: '💪', text: '运动 1.5hr' },
        { id: 'sugar',      emoji: '🥦', text: '控糖 — 原型食物优先' },
        { id: 'social',     emoji: '🎮', text: '王者 / 聚会', note: '晚上' },
      ]
    },
    0: {
      label: '周日 · 自由日', subtitle: '学习 + 复盘',
      items: [
        { id: 'robotics',   emoji: '🤖', text: 'Robotics 学习' },
        { id: 'short-post', emoji: '✍️', text: '发短文' },
        { id: 'substack',   emoji: '📝', text: 'Substack 长文' },
        { id: 'exercise',   emoji: '💪', text: '运动 1.5hr' },
        { id: 'sugar',      emoji: '🥦', text: '控糖 — 原型食物优先' },
        { id: 'review',     emoji: '📋', text: '周复盘 + 展望下周' },
      ]
    }
  },

  // ---------------- 段位系统 ----------------
  // min = 解锁该段位所需的「累计全勤天数」
  // gradient 可用预设的 var(--bronze/silver/gold/platinum/diamond/star/king)
  // 或自定义 CSS gradient
  ranks: [
    { name: '青铜', icon: '🥉', min: 0,   gradient: 'var(--bronze)'   },
    { name: '白银', icon: '⚪', min: 7,   gradient: 'var(--silver)'   },
    { name: '黄金', icon: '🥇', min: 21,  gradient: 'var(--gold)'     },
    { name: '铂金', icon: '💎', min: 50,  gradient: 'var(--platinum)' },
    { name: '钻石', icon: '💠', min: 100, gradient: 'var(--diamond)'  },
    { name: '星耀', icon: '🌟', min: 200, gradient: 'var(--star)'     },
    { name: '王者', icon: '👑', min: 365, gradient: 'var(--king)'     },
  ],

  // ---------------- 周期任务 (Substack 类) ----------------
  // 可配置多个周期任务，每个都有自己的徽章 tier
  // type: 'cycle' = 固定天数周期; cycleDays = 周期长度
  // anchor = 周期起点 [年, 月-1, 日] (月份 0-indexed!)
  // tiers = 完成 N 篇时的徽章
  weeklyTasks: [
    {
      id: 'substack',
      title: 'Substack 长文',
      cycleDays: 14,
      anchor: [2025, 11, 29], // 2025-12-29 周一
      tiers: [
        { count: 1, icon: '🥉', label: '1篇·完成',  title: '完成！',   color: '#cd7f32' },
        { count: 2, icon: '🏅', label: '2篇·传奇',  title: '传奇！！', color: '#ffd700' },
        { count: 3, icon: '👑', label: '3篇·传说',  title: '传说！！！', color: '#e040fb' },
      ]
    }
  ],

  // ---------------- 成就徽章 ----------------
  // type 决定解锁条件：
  //   'first-perfect'  → 第一个全勤日 (threshold 无效)
  //   'streak'         → 连续全勤 >= threshold
  //   'perfect-total'  → 累计全勤 >= threshold
  //   'weekly-total'   → 某个 weeklyTask 累计完成 >= threshold (用 taskId 指定)
  achievements: [
    { id: 'first-day',    name: '初心',     icon: '🌱', type: 'first-perfect',                    desc: '完成第一个全勤日' },
    { id: 'streak-3',     name: '三连',     icon: '🔥', type: 'streak',         threshold: 3,    desc: '连续3天全勤' },
    { id: 'streak-7',     name: '周霸',     icon: '⚡', type: 'streak',         threshold: 7,    desc: '连续7天全勤' },
    { id: 'streak-14',    name: '双周王',   icon: '💫', type: 'streak',         threshold: 14,   desc: '连续14天全勤' },
    { id: 'streak-30',    name: '月神',     icon: '🌙', type: 'streak',         threshold: 30,   desc: '连续30天全勤' },
    { id: 'sub-1',        name: '开笔',     icon: '✏️', type: 'weekly-total',   taskId: 'substack', threshold: 1,  desc: '发布第一篇 Substack' },
    { id: 'sub-5',        name: '笔耕',     icon: '📚', type: 'weekly-total',   taskId: 'substack', threshold: 5,  desc: '累计发布 5 篇' },
    { id: 'sub-10',       name: '作家',     icon: '🖋️', type: 'weekly-total',   taskId: 'substack', threshold: 10, desc: '累计发布 10 篇' },
    { id: 'perfect-30',   name: '进阶',     icon: '⭐', type: 'perfect-total',  threshold: 30,   desc: '累计全勤 30 天' },
    { id: 'perfect-100',  name: '百日斩',   icon: '💎', type: 'perfect-total',  threshold: 100,  desc: '累计全勤 100 天' },
    { id: 'perfect-200',  name: '传奇',     icon: '🏆', type: 'perfect-total',  threshold: 200,  desc: '累计全勤 200 天' },
    { id: 'perfect-365',  name: '一年王者', icon: '👑', type: 'perfect-total',  threshold: 365,  desc: '累计全勤 365 天' },
  ],

  // ---------------- App 标题 ----------------
  appTitle: '今天的菜单',
};
