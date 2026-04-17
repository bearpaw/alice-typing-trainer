import type { Messages } from './types';

const zhTW: Messages = {
  nav: {
    brand: '⌨︎ Alice Typing Trainer',
    home: '首頁',
    posture: '姿勢',
    lessons: '課程',
    test: '速度測驗',
  },
  footer: '專為 Alice layout 鍵盤設計——僅在本機運作,不會傳送任何資料離開您的瀏覽器。',
  theme: {
    auto: { aria: '切換至淺色模式', title: '主題:自動(依時段切換)' },
    light: { aria: '切換至深色模式', title: '主題:淺色' },
    dark: { aria: '切換至自動模式', title: '主題:深色' },
  },
  language: { label: '語言' },
  seo: {
    home: {
      title: 'Alice Typing Trainer — 學習 Alice layout 鍵盤',
      description:
        '免費的瀏覽器打字訓練工具,專為 Alice layout 鍵盤設計。提供引導式課程、人體工學姿勢指南,以及 WPM 測驗。練習分邊敏感鍵(B, T, G, Y, H, N),建立 Alice 的肌肉記憶。',
    },
    posture: {
      title: 'Alice 鍵盤姿勢與人體工學 — 預防手腕疼痛',
      description:
        '為 Alice layout 鍵盤使用者提供手腕中立打字姿勢、桌椅擺設、微休息習慣,以及腕隧道症候群預防要點。',
    },
    lessons: {
      title: 'Alice Layout 打字課程 — 練習分邊敏感鍵',
      description:
        '為 Alice layout 鍵盤設計的八堂漸進式打字練習,從基準列到分邊敏感鍵 B, T, G, Y, H, N,再到完整句子。',
    },
    test: {
      title: 'Alice Layout 打字速度測驗 — WPM 與準確度',
      description:
        '為 Alice layout 鍵盤設計的 30、60 或 120 秒計時 WPM 與準確度測驗。成績保存於本機瀏覽器——不需註冊,也不會傳送任何資料離開您的裝置。',
    },
    lesson: {
      titleSuffix: 'Alice Typing Trainer',
      descSuffix: '在您的瀏覽器中練習這個 Alice layout 課程。',
    },
  },
  home: {
    hero: {
      title: '學習在 Alice layout 鍵盤上打字',
      desc: 'Alice layout 鍵盤將左右兩半分開並向內傾斜,讓您的手腕保持中立。最棘手的是要重新訓練那些在一般錯列式鍵盤上位於另一隻手的按鍵:**B, T, G** 永遠屬於*左手*,而 **Y, H, N** 永遠屬於*右手*。本應用程式能協助您建立這份肌肉記憶。',
    },
    cards: {
      posture: {
        title: '🧘 姿勢與人體工學',
        desc: '手腕中立姿勢、桌面擺設、微休息,以及何時該留意腕隧道症候群。',
      },
      lessons: {
        title: '📚 引導式課程',
        desc: '八堂漸進式練習,從基準列開始,一路進階到分邊敏感鍵與完整句子。',
      },
      test: {
        title: '⏱ 速度測驗',
        desc: '計時 WPM 與準確度測驗。成績保存於本機,方便您觀察自己的進步。',
      },
    },
    keyboardHeading: '您的鍵盤',
    keyboardDesc: '依手指分區著色。邊框為**黃色**的按鍵即為分邊敏感鍵。',
  },
  posture: {
    title: 'Alice 鍵盤姿勢與人體工學',
    intro:
      '分體式 Alice 鍵盤只有在整體擺設也配合時才能真正發揮作用。以下是一份實用清單,大致依照對手腕疼痛與腕隧道症候群風險的影響程度由大到小排列。',
    sections: {
      neutral: {
        heading: '1. 保持手腕中立',
        bullets: [
          {
            title: '手腕打直,不要上下彎折。',
            body: '前臂與手背應大致呈一直線。長時間的腕伸會提高腕隧道內部壓力,是正中神經受刺激的主要風險因子 [Mayo Clinic](src:mayo)。',
          },
          {
            title: '手腕打直,不要左右偏折。',
            body: '避免尺側偏位(手腕往小指方向彎)。Alice layout 之所以存在,就是因為將兩半向內傾斜後,雙手可以自然落下而不需要這種側向扭轉。一致建議的打字姿勢是手腕中立、平直 [OSHA](src:osha)。讓鍵盤的角度為您服務——不要把手肘不自然地夾在身側來對抗它。',
          },
          {
            title: '懸空——或靠手掌,而非手腕。',
            body: '在主動打字時,不要把手腕橫紋壓在硬邊桌緣或硬質腕托上——這會壓迫腕隧道上方的軟組織。一塊*柔軟*、支撐掌根的手掌墊(例如 Logitech K860 和大多數人體工學鍵盤內建的墊子)是可以的:手腕保持中立,壓力會落在手掌較厚實的部位。與任何腕托一樣,它主要是用在打字*之間*的休息時段 [OSHA](src:osha)。',
          },
        ],
        palmCallout: {
          title: '好的手掌墊具備下列條件:',
          items: [
            '柔軟有襯墊,不是硬塑膠或銳利的桌緣。',
            '位於**掌根**下方,而非手腕橫紋處。',
            '與按鍵同高(或略低),這樣手腕才不用向下彎才搆得到。',
            '鍵盤內建的手掌墊——如 Logitech K860、Kinesis Advantage、Moonlander,以及大多數附泡棉墊的 Alice 外殼——都是為了同時滿足這三點而設計。',
          ],
        },
        selfCheck: {
          title: '快速自我檢查:',
          body: '將手背壓在牆上,手肘彎曲。您的前臂是否與地面平行、手掌是否打直?那就是打字姿勢。若您必須刻意扭轉手腕才能做到,那就代表您的桌面或椅子高度有問題。',
        },
      },
      geometry: {
        heading: '2. 調整椅子、桌面與螢幕',
        bullets: [
          {
            title: '手肘約 90°,',
            body: '或略為開闊一些(100–110°)。先調整椅子高度,再調整鍵盤高度 [OSHA](src:osha)。',
          },
          {
            title: '肩膀放鬆,不要聳起。',
            body: '若鍵盤太高,您會整天聳肩,醒來時頸部痠痛。',
          },
          {
            title: '螢幕頂端與視線齊平或略低,',
            body: '距離約為一個手臂長。低頭看筆電螢幕會讓頭部前傾,進而造成肩膀與手腕的緊繃 [OSHA](src:osha)。',
          },
          {
            title: '雙腳平放在地面或腳踏墊上。',
            body: '',
          },
        ],
      },
      breaks: {
        heading: '3. 做微休息',
        bullets: [
          {
            title: '每 25–30 分鐘,',
            body: '離開鍵盤 30 秒。短暫而頻繁的休息比一次長時間休息更有效 [OSHA](src:osha)。站起來,甩甩手,轉轉肩膀。',
          },
          {
            title: '20-20-20 護眼法則:',
            body: '每 20 分鐘,看著 20 英尺(約 6 公尺)外的物體 20 秒。這能重設焦距,並打斷讓手腕負擔加重的前傾姿勢。',
          },
          {
            title: '手腕繞圈與祈禱式伸展:',
            body: '雙手合十、掌心相貼,緩緩將手下壓,直到感覺到前臂有輕微的伸展感。維持 15–30 秒 [NHS](src:nhs)。',
          },
        ],
      },
      alice: {
        heading: '4. Alice layout 專屬要訣',
        bullets: [
          {
            title: '讓鍵盤角度為您服務。',
            body: '雙手應自然擺放,讓前臂沿著按鍵縱列方向,而非垂直於桌緣。',
          },
          {
            title: '以基準列凸點定位',
            body: '(F 和 J)。Alice 鍵盤上很容易手會漂移,因為兩半是固定的、但雙手是懸空的。',
          },
          {
            title: '刻意重新訓練分邊敏感鍵。',
            body: 'B, T, G 屬於*左手*。Y, H, N 屬於*右手*。若您是從錯列式鍵盤轉過來的,您很可能會對其中某個鍵跨手——通常是用左手食指按 Y,或用右手按 B。請參閱[第 5 課](lesson:bottom-alice)與[第 6 課](lesson:split-sensitive)。',
          },
          {
            title: '搭配一點傾斜(tenting)也有幫助。',
            body: '大多數 Alice 鍵盤是平的,但稍微前低後高的傾斜,或在中央墊一點泡棉,可以減輕前臂旋前的負擔。',
          },
        ],
      },
      doctor: {
        heading: '5. 何時該就醫',
        intro: '不要硬撐。如果您有下列情況,請尋求專業協助 [Mayo Clinic](src:mayo):',
        symptoms: [
          '拇指、食指、中指或無名指一半出現麻木或刺痛。',
          '夜間痛醒,或打字後疼痛持續數日不退。',
          '握力變弱,或容易把東西摔掉。',
        ],
        outro:
          '及早介入(護具、調整姿勢、物理治療)遠比拖延有效——未經治療的腕隧道症候群可能惡化為永久性神經損傷 [Mayo Clinic](src:mayo)。',
      },
    },
    furtherReadingHeading: '延伸閱讀',
    furtherReading: [
      {
        label: 'Mayo Clinic — Carpal Tunnel Syndrome',
        body: '症狀、成因與治療。',
      },
      {
        label: 'OSHA — Computer Workstations eTool',
        body: '詳細的人體工學檢查清單。',
      },
      {
        label: 'NHS — Carpal Tunnel Syndrome',
        body: '英國臨床概述,含伸展動作。',
      },
    ],
  },
  lessons: {
    indexTitle: 'Alice layout 打字課程',
    indexIntro:
      '請依序練習。第 5 課與第 6 課對於擺脫錯列式鍵盤習慣、適應 Alice 鍵盤最為重要。',
    cardLabel: '第',
    backAll: '← 所有課程',
    notFound: '找不到此課程',
    complete: '課程完成',
    retry: '重新練習',
    backToLessons: '返回課程列表',
    stats: { wpm: 'WPM', accuracy: '準確度', time: '時間' },
    items: {
      'home-left': {
        title: '1. 左手基準列',
        desc: '食指定位於 F。輕敲 a s d f。',
      },
      'home-right': {
        title: '2. 右手基準列',
        desc: '食指定位於 J。輕敲 j k l ;——僅做字母練習(這些鍵單獨無法組字)。',
      },
      'home-full': {
        title: '3. 完整基準列',
        desc: '雙手交替練習 a s d f g h j k l ;——每個字母都位於基準列。',
      },
      'top-row': {
        title: '4. 上排',
        desc: '向上延伸:q w e r t y u i o p。',
      },
      'bottom-alice': {
        title: '5. 下排(Alice 重點)',
        desc: 'B 位於您的左手食指。N 位於您的右手食指。重新訓練!',
      },
      'split-sensitive': {
        title: '6. 分邊敏感鍵練習',
        desc: 'T/Y、G/H、B/N——Alice 肌肉記憶最容易出錯的幾個鍵。',
      },
      bigrams: {
        title: '7. 常見雙字母/三字母組合',
        desc: '由最常見字母組合構成的單字。',
      },
      sentences: {
        title: '8. 綜合句子',
        desc: '混合各區域按鍵的短句。',
      },
    },
  },
  test: {
    title: '速度測驗',
    intro:
      '計時 WPM 與準確度。成績儲存於瀏覽器的 localStorage——不會離開本裝置。',
    duration: '時長:',
    newQuote: '換一段',
    retrySame: '重新練習同一段',
    timeLeft: '剩餘時間',
    wpm: 'WPM',
    accuracy: '準確度',
    result: '結果',
    charsCorrect: '個字元正確輸入',
    newTest: '新測驗',
    historyHeading: '您的歷史紀錄',
    clearHistory: '清除紀錄',
    clearConfirm: '確定要清除所有打字測驗紀錄嗎?',
    tableCols: { when: '時間', duration: '時長', wpm: 'WPM', accuracy: '準確度' },
  },
  diagrams: {
    extension: '腕伸(不良)',
    neutral: '中立(良好)',
    flexion: '腕屈(不良)',
    forearm: '前臂',
    hand: '手',
    rowStagger: '錯列式——尺側偏位',
    aliceNeutral: 'Alice layout——中立',
    floatGood: '打字時懸空',
    plantBad: '打字時壓貼',
    pressure: '壓力',
    gap: '間隙',
    elbow: '手肘約 90°',
    eyeLevel: '視線高度——螢幕頂端與其齊平或略低',
    feetFlat: '雙腳平放',
  },
  keyboard: {
    splitCalloutPrefix: '分邊敏感鍵——在 Alice 上,',
    splitCalloutBelongsTo: '屬於您的',
    hand: { left: '左手', right: '右手' },
    finger: {
      pinky: '小指',
      ring: '無名指',
      middle: '中指',
      index: '食指',
      thumb: '拇指',
    },
  },
};

export default zhTW;
