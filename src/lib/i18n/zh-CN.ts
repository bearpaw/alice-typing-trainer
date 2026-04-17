import type { Messages } from './types';

const zhCN: Messages = {
  nav: {
    brand: '⌨︎ Alice Typing Trainer',
    home: '首页',
    posture: '姿势',
    lessons: '课程',
    test: '速度测试',
  },
  footer: '专为 Alice 布局键盘设计 —— 纯本地运行，数据不会离开你的浏览器。',
  theme: {
    auto: { aria: '切换到浅色模式', title: '主题：自动（根据时段切换）' },
    light: { aria: '切换到深色模式', title: '主题：浅色' },
    dark: { aria: '切换到自动模式', title: '主题：深色' },
  },
  language: { label: '语言' },
  seo: {
    home: {
      title: 'Alice Typing Trainer —— 学习 Alice 布局键盘',
      description:
        '面向 Alice 布局键盘的免费浏览器打字训练工具。包含引导式课程、人体工学姿势指南和 WPM 测试。通过练习分区敏感键（B, T, G, Y, H, N）来建立 Alice 肌肉记忆。',
    },
    posture: {
      title: 'Alice 键盘姿势与人体工学 —— 预防手腕疼痛',
      description:
        '面向 Alice 布局键盘用户的腕部中立打字姿势、桌椅设置、微休息习惯以及腕管综合征预防建议。',
    },
    lessons: {
      title: 'Alice 布局打字课程 —— 练习分区敏感键',
      description:
        '八节循序渐进的 Alice 布局键盘打字练习，从基准行到分区敏感的 B, T, G, Y, H, N 练习，再到完整句子。',
    },
    test: {
      title: 'Alice 布局打字速度测试 —— WPM 与准确率',
      description:
        '面向 Alice 布局键盘的 30、60 或 120 秒限时 WPM 与准确率测试。进度在浏览器本地保存 —— 无需注册，数据不会离开你的设备。',
    },
    lesson: {
      titleSuffix: 'Alice Typing Trainer',
      descSuffix: '在浏览器中完成这个 Alice 布局练习。',
    },
  },
  home: {
    hero: {
      title: '学习使用 Alice 布局键盘打字',
      desc: 'Alice 布局键盘将左右两半分开，并让它们向内倾斜，让你的手腕保持中立。难点在于重新训练那些换到另一只手上的按键（相比传统行错列键盘）：**B, T, G** 始终*在左*，**Y, H, N** 始终*在右*。这个应用能帮你建立相应的肌肉记忆。',
    },
    cards: {
      posture: {
        title: '🧘 姿势与人体工学',
        desc: '腕部中立姿势、桌面布置、微休息以及何时需要警惕腕管综合征。',
      },
      lessons: {
        title: '📚 引导式课程',
        desc: '八节循序渐进的练习，从基准行开始，逐步过渡到分区敏感键与完整句子。',
      },
      test: {
        title: '⏱ 速度测试',
        desc: '限时 WPM + 准确率测试。进度本地保存，让你看见自己的进步。',
      },
    },
    keyboardHeading: '你的键盘',
    keyboardDesc: '按手指分区着色。带**黄色**边框的按键是分区敏感键。',
  },
  posture: {
    title: 'Alice 键盘姿势与人体工学',
    intro:
      '分体式 Alice 键盘只有在其他配置同样到位时才能发挥作用。下面是一份实用的检查清单，大致按对手腕疼痛和腕管综合征风险的影响从大到小排序。',
    sections: {
      neutral: {
        heading: '1. 保持手腕中立',
        bullets: [
          {
            title: '平直，不要上翘或下压。',
            body: '前臂与手背应大致成一条直线。长时间的腕伸会增加腕管内的压力，是正中神经刺激的主要风险因素 [Mayo Clinic](src:mayo)。',
          },
          {
            title: '平直，不要向两侧偏斜。',
            body: '避免尺偏（手腕向小指方向弯曲）。Alice 布局正是为此而生 —— 让两半向内倾斜，使双手自然落位，而无需侧向扭转。中立、平直的手腕姿势正是各项人体工学指南一致推荐的 [OSHA](src:osha)。让这个角度发挥作用 —— 不要刻意把肘部贴近身体来对抗它。',
          },
          {
            title: '悬浮打字 —— 或者让手掌（而非手腕）承托。',
            body: '主动打字时，不要让腕部褶皱压在坚硬的桌沿或硬质腕托上 —— 那会挤压腕管上方的软组织。*柔软*的掌托可支撑掌根（例如 Logitech K860 及大多数人体工学键盘自带的垫子），这是可以接受的：手腕保持中立，压力落在手掌较厚实的部位。和其他任何腕托一样，它主要是在打字间歇*之间*使用的 [OSHA](src:osha)。',
          },
        ],
        palmCallout: {
          title: '好的掌托应具备：',
          items: [
            '柔软、有填充，不是硬塑料或锋利的桌沿。',
            '位于**掌根**下方，而非腕部褶皱处。',
            '与按键持平（或略低），这样你不需要弯腕去够。',
            '自带腕托的键盘 —— Logitech K860、Kinesis Advantage、Moonlander，以及带泡棉垫的大多数 Alice 外壳 —— 都针对上述三点做了设计。',
          ],
        },
        selfCheck: {
          title: '快速自检：',
          body: '手肘弯曲，将手背贴在墙上。前臂是否与地面平行、手是否保持平直？这就是打字姿势。如果必须用力扭动手腕才能做到，说明你的桌椅高度有问题。',
        },
      },
      geometry: {
        heading: '2. 调好椅子、桌子和显示器',
        bullets: [
          {
            title: '手肘约 90°，',
            body: '或略微打开（100–110°）。先调节椅子高度，再调节键盘高度 [OSHA](src:osha)。',
          },
          {
            title: '肩膀放松，不要耸起。',
            body: '如果键盘过高，你会整天耸肩，起床时颈部疼痛。',
          },
          {
            title: '显示器顶部与视线齐平或略低，',
            body: '与眼睛大约保持一臂的距离。低头看笔记本屏幕会让头部前伸，加重肩颈和手腕紧张 [OSHA](src:osha)。',
          },
          {
            title: '双脚平放在地面或脚踏上。',
            body: '',
          },
        ],
      },
      breaks: {
        heading: '3. 定时进行微休息',
        bullets: [
          {
            title: '每 25–30 分钟，',
            body: '离开键盘 30 秒。短而频繁的休息比一次长时间的休息更有效 [OSHA](src:osha)。站起来，甩甩手，转转肩膀。',
          },
          {
            title: '护眼 20-20-20 法则：',
            body: '每 20 分钟，看向 20 英尺（约 6 米）之外的物体 20 秒。这能重置视觉焦点，并打破会给手腕增加负担的前倾姿势。',
          },
          {
            title: '手腕画圈与合掌拉伸：',
            body: '双手合十，掌心相对，缓慢下压，直到前臂感到轻微拉伸。保持 15–30 秒 [NHS](src:nhs)。',
          },
        ],
      },
      alice: {
        heading: '4. 针对 Alice 布局的建议',
        bullets: [
          {
            title: '让键盘的角度为你服务。',
            body: '双手自然放置时，前臂应沿着键列方向延伸，而不是垂直于桌沿。',
          },
          {
            title: '以基准行定位凸点为锚点',
            body: '（F 和 J）。在 Alice 键盘上非常容易偏位，因为两半是固定的，但你的手是悬空的。',
          },
          {
            title: '有意识地重新训练分区敏感键。',
            body: "B, T, G *在左*。Y, H, N *在右*。如果你是从行错列键盘转过来的，多半会有一个按键跨手误按 —— 通常是用左手食指按 Y，或用右手按 B。请参考 [第 5 课](lesson:bottom-alice) 和 [第 6 课](lesson:split-sensitive)。",
          },
          {
            title: '倾斜（tenting）也有帮助。',
            body: '大多数 Alice 键盘是平的，但略微前倾（前沿低于后沿）或在中间垫一些泡棉，可以减轻前臂旋前带来的紧张。',
          },
        ],
      },
      doctor: {
        heading: '5. 何时需要就医',
        intro: '不要硬扛。如果出现以下情况，请寻求专业帮助 [Mayo Clinic](src:mayo)：',
        symptoms: [
          '拇指、食指、中指或无名指靠拇指一侧出现麻木或刺痛。',
          '夜间被疼醒，或打字后数日仍持续疼痛。',
          '握力下降，或容易掉落物品。',
        ],
        outro:
          '早期干预（佩戴护具、调整姿势、物理治疗）远比拖延有效 —— 未经治疗的腕管综合征可能进展为永久性神经损伤 [Mayo Clinic](src:mayo)。',
      },
    },
    furtherReadingHeading: '延伸阅读',
    furtherReading: [
      {
        label: 'Mayo Clinic — 腕管综合征',
        body: '症状、成因与治疗。',
      },
      {
        label: 'OSHA — 电脑工作站 eTool',
        body: '详细的人体工学检查清单。',
      },
      {
        label: 'NHS — 腕管综合征',
        body: '英国临床概述，含拉伸动作。',
      },
    ],
  },
  lessons: {
    indexTitle: 'Alice 布局打字课程',
    indexIntro:
      '请按顺序完成这些课程。第 5 课和第 6 课对于摆脱行错列键盘在 Alice 键盘上的旧习惯最为关键。',
    cardLabel: '课程',
    backAll: '← 全部课程',
    notFound: '未找到课程',
    complete: '课程完成',
    retry: '重试',
    backToLessons: '返回课程列表',
    stats: { wpm: 'WPM', accuracy: '准确率', time: '用时' },
    items: {
      'home-left': {
        title: '1. 左手基准行',
        desc: '食指锚定在 F。敲击 a s d f。',
      },
      'home-right': {
        title: '2. 右手基准行',
        desc: '食指锚定在 J。敲击 j k l ; —— 仅字母练习（这些键单独无法组成单词）。',
      },
      'home-full': {
        title: '3. 完整基准行',
        desc: '左右手交替敲击 a s d f g h j k l ; —— 每个字母都在基准行上。',
      },
      'top-row': {
        title: '4. 上排',
        desc: '向上延伸：q w e r t y u i o p。',
      },
      'bottom-alice': {
        title: '5. 下排（Alice 重点）',
        desc: 'B 在你的 LEFT 食指上。N 在你的 RIGHT 食指上。重新训练!',
      },
      'split-sensitive': {
        title: '6. 分区敏感键训练',
        desc: 'T/Y、G/H、B/N —— Alice 肌肉记忆最容易失灵的按键。',
      },
      bigrams: {
        title: '7. 常见二元/三元组合',
        desc: '由最常见字母组合构成的单词。',
      },
      sentences: {
        title: '8. 混合句子',
        desc: '涵盖各个区域的短句。',
      },
    },
  },
  test: {
    title: '速度测试',
    intro:
      '限时 WPM + 准确率。结果保存在浏览器的 localStorage 中 —— 数据不会离开本设备。',
    duration: '时长：',
    newQuote: '换一段',
    retrySame: '重来本段',
    timeLeft: '剩余时间',
    wpm: 'WPM',
    accuracy: '准确率',
    result: '结果',
    charsCorrect: '个字符输入正确',
    newTest: '新测试',
    historyHeading: '你的历史记录',
    clearHistory: '清除历史',
    clearConfirm: '确定清除所有打字测试历史记录吗？',
    tableCols: { when: '时间', duration: '时长', wpm: 'WPM', accuracy: '准确率' },
  },
  diagrams: {
    extension: '腕伸 (错误)',
    neutral: '中立 (正确)',
    flexion: '腕屈 (错误)',
    forearm: '前臂',
    hand: '手',
    rowStagger: '行错列 —— 尺偏',
    aliceNeutral: 'Alice 布局 —— 中立',
    floatGood: '打字时悬浮',
    plantBad: '打字时压腕',
    pressure: '压力',
    gap: '间隙',
    elbow: '肘部约 90°',
    eyeLevel: '视线高度 —— 显示器顶部齐平或略低',
    feetFlat: '双脚平放',
  },
  keyboard: {
    splitCalloutPrefix: '分区敏感键 —— 在 Alice 上，',
    splitCalloutBelongsTo: '属于你的',
    hand: { left: '左手', right: '右手' },
    finger: {
      pinky: '小指',
      ring: '无名指',
      middle: '中指',
      index: '食指',
      thumb: '拇指',
    },
  },
};

export default zhCN;
