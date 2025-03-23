<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>学友会イベント局</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
      background-color: #f8f9fa;
      color: #212529;
      line-height: 1.5;
    }
    .min-h-screen {
      min-height: 100vh;
    }
    .flex {
      display: flex;
    }
    .flex-col {
      flex-direction: column;
    }
    .flex-row {
      flex-direction: row;
    }
    .justify-center {
      justify-content: center;
    }
    .justify-between {
      justify-content: space-between;
    }
    .items-center {
      align-items: center;
    }
    .text-center {
      text-align: center;
    }
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .sticky {
      position: sticky;
      top: 0;
    }
    .relative {
      position: relative;
    }
    .absolute {
      position: absolute;
    }
    .z-40 {
      z-index: 40;
    }
    header {
      background-color: white;
      border-bottom: 1px solid #dee2e6;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .h-16 {
      height: 4rem;
    }
    .py-4 {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .py-12 {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    .py-16 {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    .py-6 {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
    .pt-4 {
      padding-top: 1rem;
    }
    .pt-6 {
      padding-top: 1.5rem;
    }
    .pt-8 {
      padding-top: 2rem;
    }
    .gap-2 {
      gap: 0.5rem;
    }
    .gap-4 {
      gap: 1rem;
    }
    .gap-6 {
      gap: 1.5rem;
    }
    .gap-8 {
      gap: 2rem;
    }
    .text-sm {
      font-size: 0.875rem;
    }
    .text-lg {
      font-size: 1.125rem;
    }
    .text-xl {
      font-size: 1.25rem;
    }
    .text-2xl {
      font-size: 1.5rem;
    }
    .text-3xl {
      font-size: 1.875rem;
    }
    .font-bold {
      font-weight: 700;
    }
    .font-medium {
      font-weight: 500;
    }
    .text-white {
      color: white;
    }
    .text-gray-300 {
      color: #dee2e6;
    }
    .bg-white {
      background-color: white;
    }
    .bg-gradient-to-b {
      background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    }
    .from-\[\#ffe3e3\] {
      --tw-gradient-from: #ffe3e3;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 227, 227, 0));
    }
    .to-\[\#fff5f5\] {
      --tw-gradient-to: #fff5f5;
    }
    .bg-\[\#ff6b6b\] {
      background-color: #ff6b6b;
    }
    .bg-\[\#495057\] {
      background-color: #495057;
    }
    .bg-\[\#fff5f5\] {
      background-color: #fff5f5;
    }
    .bg-\[\#ffe3e3\] {
      background-color: #ffe3e3;
    }
    .bg-\[\#f1f3f5\] {
      background-color: #f1f3f5;
    }
    .text-\[\#ff6b6b\] {
      color: #ff6b6b;
    }
    .text-\[\#212529\] {
      color: #212529;
    }
    .text-\[\#495057\] {
      color: #495057;
    }
    .text-\[\#868e96\] {
      color: #868e96;
    }
    .border {
      border: 1px solid;
    }
    .border-t {
      border-top: 1px solid;
    }
    .border-b {
      border-bottom: 1px solid;
    }
    .border-l-4 {
      border-left: 4px solid;
    }
    .border-\[\#ffe3e3\] {
      border-color: #ffe3e3;
    }
    .border-gray-600 {
      border-color: #6c757d;
    }
    .border-\[\#ff6b6b\] {
      border-color: #ff6b6b;
    }
    .border-4 {
      border-width: 4px;
    }
    .rounded-md {
      border-radius: 0.375rem;
    }
    .rounded-lg {
      border-radius: 0.5rem;
    }
    .rounded-xl {
      border-radius: 0.75rem;
    }
    .rounded-full {
      border-radius: 9999px;
    }
    .shadow-md {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .shadow-sm {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    .transition-colors {
      transition-property: color;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .transition-shadow {
      transition-property: box-shadow;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .transition-transform {
      transition-property: transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .duration-300 {
      transition-duration: 300ms;
    }
    .hover\:scale-105:hover {
      transform: scale(1.05);
    }
    .hover\:shadow-lg:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .hover\:text-\[\#ff6b6b\]:hover {
      color: #ff6b6b;
    }
    .hover\:bg-\[\#fa5252\]:hover {
      background-color: #fa5252;
    }
    .hover\:bg-\[\#fff5f5\]:hover {
      background-color: #fff5f5;
    }
    .hover\:underline:hover {
      text-decoration: underline;
    }
    .space-y-2 > * + * {
      margin-top: 0.5rem;
    }
    .space-y-3 > * + * {
      margin-top: 0.75rem;
    }
    .space-y-4 > * + * {
      margin-top: 1rem;
    }
    .space-y-6 > * + * {
      margin-top: 1.5rem;
    }
    .space-y-8 > * + * {
      margin-top: 2rem;
    }
    .mt-2 {
      margin-top: 0.5rem;
    }
    .mt-4 {
      margin-top: 1rem;
    }
    .mt-8 {
      margin-top: 2rem;
    }
    .mb-2 {
      margin-bottom: 0.5rem;
    }
    .mb-4 {
      margin-bottom: 1rem;
    }
    .ml-2 {
      margin-left: 0.5rem;
    }
    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }
    .w-full {
      width: 100%;
    }
    .w-5 {
      width: 1.25rem;
    }
    .w-6 {
      width: 1.5rem;
    }
    .w-12 {
      width: 3rem;
    }
    .h-5 {
      height: 1.25rem;
    }
    .h-6 {
      height: 1.5rem;
    }
    .h-10 {
      height: 2.5rem;
    }
    .h-12 {
      height: 3rem;
    }
    .min-h-\[120px\] {
      min-height: 120px;
    }
    .max-w-\[800px\] {
      max-width: 800px;
    }
    .max-w-3xl {
      max-width: 48rem;
    }
    .max-w-4xl {
      max-width: 56rem;
    }
    .overflow-hidden {
      overflow: hidden;
    }
    .overflow-visible {
      overflow: visible;
    }
    .object-cover {
      object-fit: cover;
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    .transform {
      transform: translateX(-50%);
    }
    .-translate-x-1\/2 {
      transform: translateX(-50%);
    }
    .-top-2 {
      top: -0.5rem;
    }
    .-top-8 {
      top: -2rem;
    }
    .left-1\/2 {
      left: 50%;
    }
    .rotate-45 {
      transform: rotate(45deg);
    }
    .grid {
      display: grid;
    }
    .grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .p-4 {
      padding: 1rem;
    }
    .p-6 {
      padding: 1.5rem;
    }
    .p-8 {
      padding: 2rem;
    }
    .px-8 {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .px-3 {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
    .py-2 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    .pl-4 {
      padding-left: 1rem;
    }
    .italic {
      font-style: italic;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    .btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.375rem;
      padding: 0.5rem 1rem;
      font-weight: 500;
      transition-property: color, background-color, border-color;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .btn-primary {
      background-color: #ff6b6b;
      color: white;
    }
    .btn-primary:hover {
      background-color: #fa5252;
    }
    .btn-outline {
      background-color: transparent;
      border: 1px solid #ff6b6b;
      color: #ff6b6b;
    }
    .btn-outline:hover {
      background-color: #fff5f5;
    }
    input, textarea {
      width: 100%;
      border: 1px solid #dee2e6;
      border-radius: 0.375rem;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: #ff6b6b;
    }
    
    /* レスポンシブ */
    @media (min-width: 768px) {
      .md\:flex {
        display: flex;
      }
      .md\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .md\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .md\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      .md\:py-16 {
        padding-top: 4rem;
        padding-bottom: 4rem;
      }
      .md\:inline-flex {
        display: inline-flex;
      }
      .md\:hidden {
        display: none;
      }
    }
    @media (min-width: 1024px) {
      .lg\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .lg\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .lg\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .lg\:gap-12 {
        gap: 3rem;
      }
    }
    @media (max-width: 767px) {
      .hidden {
        display: none;
      }
      .md\:hidden {
        display: block;
      }
    }
    @media (min-width: 400px) {
      .min-\[400px\]\:flex-row {
        flex-direction: row;
      }
    }
  </style>
</head>
<body>
  <div class="flex flex-col min-h-screen bg-[#f8f9fa]">
    <!-- ヘッダー -->
    <header class="sticky top-0 z-40 w-full bg-white border-b shadow-sm">
      <div class="container flex h-16 items-center justify-between py-4">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-[#ff6b6b]">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span class="text-xl font-bold text-[#ff6b6b]">学友会イベント局</span>
        </div>
        <nav class="hidden md:flex gap-6">
          <a href="#about" class="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
            団体紹介
          </a>
          <a href="#activities" class="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
            活動内容
          </a>
          <a href="#events" class="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
            イベント
          </a>
          <a href="#members" class="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
            メンバー
          </a>
          <a href="#join" class="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
            入会方法
          </a>
        </nav>
        <a href="#join" class="btn btn-primary hidden md:inline-flex">
          新入生募集中！
        </a>
        <button class="md:hidden">
          <span class="sr-only">メニューを開く</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>

    <main class="flex-1">
      <!-- ヒーローセクション -->
      <section class="w-full py-12 md:py-16 bg-gradient-to-b from-[#ffe3e3] to-[#fff5f5]">
        <div class="container px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div class="flex flex-col justify-center space-y-4">
              <div class="space-y-2">
                <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#212529]">
                  大学生活を最高に楽しもう！
                  <br>
                  <span class="text-[#ff6b6b]">学友会イベント局</span>
                </h1>
                <p class="text-lg text-[#495057]">
                  学園祭やスポーツ大会など、大学の思い出になるイベントを一緒に作りませんか？
                  新入生大歓迎！一緒に大学生活を盛り上げよう！
                </p>
              </div>
              <div class="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="#join" class="btn btn-primary px-8">
                  新歓に参加する！
                </a>
                <a href="#about" class="btn btn-outline px-8">
                  もっと知りたい
                </a>
              </div>
            </div>
            <div class="mx-auto overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=550&width=550"
                width="550"
                height="550"
                alt="学園祭の様子"
                class="mx-auto h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- SNSバナー -->
      <section class="w-full py-4 bg-[#ff6b6b] text-white">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p class="font-bold">最新情報はSNSでチェック！</p>
            <div class="flex gap-4">
              <a href="#" class="flex items-center gap-2 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@univ_event_official</span>
              </a>
              <a href="#" class="flex items-center gap-2 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span>@univ_event_official</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 団体紹介 -->
      <section id="about" class="w-full py-12 md:py-16">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                <span class="text-[#ff6b6b]">イベント局</span>ってどんなところ？
              </h2>
              <p class="max-w-[800px] text-[#495057] text-lg">
                私たちは大学公認の学生団体として、学園祭や新入生歓迎会、スポーツ大会など、
                大学生活を彩るイベントを企画・運営しています！
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div class="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3] hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-bold mb-2 text-[#ff6b6b]">楽しいイベントがいっぱい！</h3>
              <p class="text-[#495057]">
                学園祭、新入生歓迎会、スポーツ大会、クリスマスパーティーなど、
                年間を通して様々なイベントを企画・運営しています。
              </p>
              <img
                src="/placeholder.svg?height=200&width=300"
                width="300"
                height="200"
                alt="イベントの様子"
                class="mt-4 rounded-md w-full object-cover"
              />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3] hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-bold mb-2 text-[#ff6b6b]">仲間がたくさんできる！</h3>
              <p class="text-[#495057]">
                様々な学部・学科の学生が集まるので、普段関わることのない人とも
                友達になれます。一生の友達ができるかも！？
              </p>
              <img
                src="/placeholder.svg?height=200&width=300"
                width="300"
                height="200"
                alt="メンバーの集合写真"
                class="mt-4 rounded-md w-full object-cover"
              />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3] hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-bold mb-2 text-[#ff6b6b]">スキルが身につく！</h3>
              <p class="text-[#495057]">
                企画力、コミュニケーション能力、リーダーシップなど、 社会に出ても役立つスキルが自然と身につきます。
              </p>
              <img
                src="/placeholder.svg?height=200&width=300"
                width="300"
                height="200"
                alt="ミーティングの様子"
                class="mt-4 rounded-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- 活動内容 -->
      <section id="activities" class="w-full py-12 md:py-16 bg-[#fff5f5]">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                年間の<span class="text-[#ff6b6b]">イベント</span>スケジュール
              </h2>
              <p class="max-w-[800px] text-[#495057] text-lg">
                イベント局では年間を通して様々なイベントを企画・運営しています！
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
              <div class="flex items-center gap-4 mb-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] text-white font-bold">
                  4月
                </div>
                <h3 class="text-xl font-bold text-[#212529]">新入生歓迎会</h3>
              </div>
              <p class="text-[#495057] mb-4">
                新入生を歓迎するイベントを開催！サークル紹介や交流会を通じて、
                新入生の大学生活のスタートをサポートします。
              </p>
              <img
                src="/placeholder.svg?height=200&width=400"
                width="400"
                height="200"
                alt="新入生歓迎会の様子"
                class="rounded-md w-full object-cover"
              />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
              <div class="flex items-center gap-4 mb-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] text-white font-bold">
                  6月
                </div>
                <h3 class="text-xl font-bold text-[#212529]">スポーツ大会</h3>
              </div>
              <p class="text-[#495057] mb-4">
                学部・学科対抗のスポーツ大会を開催！サッカー、バスケ、バレーなど 様々な競技で盛り上がります！
              </p>
              <img
                src="/placeholder.svg?height=200&width=400"
                width="400"
                height="200"
                alt="スポーツ大会の様子"
                class="rounded-md w-full object-cover"
              />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
              <div class="flex items-center gap-4 mb-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] text-white font-bold">
                  10月
                </div>
                <h3 class="text-xl font-bold text-[#212529]">学園祭</h3>
              </div>
              <p class="text-[#495057] mb-4">
                大学最大のイベント！模擬店やステージイベントなど、 大学全体が盛り上がる最高の2日間を作り上げます！
              </p>
              <img
                src="/placeholder.svg?height=200&width=400"
                width="400"
                height="200"
                alt="学園祭の様子"
                class="rounded-md w-full object-cover"
              />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
              <div class="flex items-center gap-4 mb-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] text-white font-bold">
                  12月
                </div>
                <h3 class="text-xl font-bold text-[#212529]">クリスマスイベント</h3>
              </div>
              <p class="text-[#495057] mb-4">
                クリスマスシーズンに合わせたイベントを開催！ イルミネーションやパーティーで冬を楽しみます！
              </p>
              <img
                src="/placeholder.svg?height=200&width=400"
                width="400"
                height="200"
                alt="クリスマスイベントの様子"
                class="rounded-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- イベント写真 -->
      <section id="events" class="w-full py-12 md:py-16">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                イベントの<span class="text-[#ff6b6b]">写真</span>ギャラリー
              </h2>
              <p class="max-w-[800px] text-[#495057] text-lg">
                過去のイベントの様子をご紹介！こんな感じで楽しんでます！
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} class="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={`/placeholder.svg?height=300&width=300&text=イベント写真${i + 1}`}
                  width="300"
                  height="300"
                  alt={`イベント写真${i + 1}`}
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div class="flex justify-center mt-8">
            <a href="#" class="btn btn-primary">もっと見る</a>
          </div>
        </div>
      </section>

      <!-- メンバー紹介 -->
      <section id="members" class="w-full py-12 md:py-16 bg-[#fff5f5]">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                <span class="text-[#ff6b6b]">先輩</span>からのメッセージ
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Twitter, ArrowRight, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      {/* ヘッダー - よりカジュアルに */}
      <header className="sticky top-0 z-40 w-full bg-white border-b shadow-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-[#ff6b6b]" />
            <span className="text-xl font-bold text-[#ff6b6b]">学友会イベント局</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
              団体紹介
            </Link>
            <Link href="#activities" className="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
              活動内容
            </Link>
            <Link href="#events" className="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
              イベント
            </Link>
            <Link href="#members" className="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
              メンバー
            </Link>
            <Link href="#join" className="text-sm font-medium hover:text-[#ff6b6b] transition-colors">
              入会方法
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-[#ff6b6b] hover:bg-[#fa5252]">
            <Link href="#join">新入生募集中！</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">メニューを開く</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* ヒーローセクション - より活気のあるデザインに */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-[#ffe3e3] to-[#fff5f5]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#212529]">
                    大学生活を最高に楽しもう！
                    <br />
                    <span className="text-[#ff6b6b]">学友会イベント局</span>
                  </h1>
                  <p className="text-lg text-[#495057]">
                    学園祭やスポーツ大会など、大学の思い出になるイベントを一緒に作りませんか？
                    新入生大歓迎！一緒に大学生活を盛り上げよう！
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="px-8 bg-[#ff6b6b] hover:bg-[#fa5252]">
                    <Link href="#join">新歓に参加する！</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-8 border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#fff5f5]"
                  >
                    <Link href="#about">もっと知りたい</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="学園祭の様子"
                  className="mx-auto h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SNSバナー - サークルらしくSNSを目立たせる */}
        <section className="w-full py-4 bg-[#ff6b6b] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <p className="font-bold">最新情報はSNSでチェック！</p>
              <div className="flex gap-4">
                <Link href="#" className="flex items-center gap-2 hover:underline">
                  <Instagram className="h-5 w-5" />
                  <span>@univ_event_official</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 hover:underline">
                  <Twitter className="h-5 w-5" />
                  <span>@univ_event_official</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 団体紹介 - よりカジュアルに */}
        <section id="about" className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                  <span className="text-[#ff6b6b]">イベント局</span>ってどんなところ？
                </h2>
                <p className="max-w-[800px] text-[#495057] text-lg">
                  私たちは大学公認の学生団体として、学園祭や新入生歓迎会、スポーツ大会など、
                  大学生活を彩るイベントを企画・運営しています！
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3] hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-[#ff6b6b]">楽しいイベントがいっぱい！</h3>
                <p className="text-[#495057]">
                  学園祭、新入生歓迎会、スポーツ大会、クリスマスパーティーなど、
                  年間を通して様々なイベントを企画・運営しています。
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="イベントの様子"
                  className="mt-4 rounded-md w-full object-cover"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3] hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-[#ff6b6b]">仲間がたくさんできる！</h3>
                <p className="text-[#495057]">
                  様々な学部・学科の学生が集まるので、普段関わることのない人とも
                  友達になれます。一生の友達ができるかも！？
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="メンバーの集合写真"
                  className="mt-4 rounded-md w-full object-cover"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3] hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-[#ff6b6b]">スキルが身につく！</h3>
                <p className="text-[#495057]">
                  企画力、コミュニケーション能力、リーダーシップなど、 社会に出ても役立つスキルが自然と身につきます。
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  width={300}
                  height={200}
                  alt="ミーティングの様子"
                  className="mt-4 rounded-md w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 活動内容 - 写真を多く、カジュアルに */}
        <section id="activities" className="w-full py-12 md:py-16 bg-[#fff5f5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                  年間の<span className="text-[#ff6b6b]">イベント</span>スケジュール
                </h2>
                <p className="max-w-[800px] text-[#495057] text-lg">
                  イベント局では年間を通して様々なイベントを企画・運営しています！
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] text-white font-bold">
                    4月
                  </div>
                  <h3 className="text-xl font-bold text-[#212529]">新入生歓迎会</h3>
                </div>
                <p className="text-[#495057] mb-4">
                  新入生を歓迎するイベントを開催！サークル紹介や交流会を通じて、
                  新入生の大学生活のスタートをサポートします。
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="新入生歓迎会の様子"
                  className="rounded-md w-full object-cover"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] text-white font-bold">
                    6月
                  </div>
                  <h3 className="text-xl font-bold text-[#212529]">スポーツ大会</h3>
                </div>
                <p className="text-[#495057] mb-4">
                  学部・学科対抗のスポーツ大会を開催！サッカー、バスケ、バレーなど 様々な競技で盛り上がります！
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="スポーツ大会の様子"
                  className="rounded-md w-full object-cover"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] text-white font-bold">
                    10月
                  </div>
                  <h3 className="text-xl font-bold text-[#212529]">学園祭</h3>
                </div>
                <p className="text-[#495057] mb-4">
                  大学最大のイベント！模擬店やステージイベントなど、 大学全体が盛り上がる最高の2日間を作り上げます！
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="学園祭の様子"
                  className="rounded-md w-full object-cover"
                />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] text-white font-bold">
                    12月
                  </div>
                  <h3 className="text-xl font-bold text-[#212529]">クリスマスイベント</h3>
                </div>
                <p className="text-[#495057] mb-4">
                  クリスマスシーズンに合わせたイベントを開催！ イルミネーションやパーティーで冬を楽しみます！
                </p>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="クリスマスイベントの様子"
                  className="rounded-md w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* イベント写真 - 写真ギャラリー形式に */}
        <section id="events" className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                  イベントの<span className="text-[#ff6b6b]">写真</span>ギャラリー
                </h2>
                <p className="max-w-[800px] text-[#495057] text-lg">
                  過去のイベントの様子をご紹介！こんな感じで楽しんでます！
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=イベント写真${i + 1}`}
                    width={300}
                    height={300}
                    alt={`イベント写真${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button className="bg-[#ff6b6b] hover:bg-[#fa5252]">もっと見る</Button>
            </div>
          </div>
        </section>

        {/* メンバー紹介 - よりカジュアルに */}
        <section id="members" className="w-full py-12 md:py-16 bg-[#fff5f5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                  <span className="text-[#ff6b6b]">先輩</span>からのメッセージ
                </h2>
                <p className="max-w-[800px] text-[#495057] text-lg">現役メンバーからのリアルな声をお届け！</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="bg-white border-[#ffe3e3] overflow-visible relative pt-8">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-full border-4 border-white overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={80}
                      height={80}
                      alt="山田太郎さん"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <h3 className="font-bold text-[#212529]">山田太郎</h3>
                    <p className="text-sm text-[#868e96]">文学部3年</p>
                    <div className="bg-[#f1f3f5] p-4 rounded-lg relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-[#f1f3f5]"></div>
                      <p className="text-[#495057] text-sm italic">
                        「イベント局に入って本当に良かった！企画を考えるのは大変だけど、
                        イベントが成功したときの達成感がたまらない！ 大学生活で一番の思い出になってます！」
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#ffe3e3] overflow-visible relative pt-8">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-full border-4 border-white overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={80}
                      height={80}
                      alt="佐藤花子さん"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <h3 className="font-bold text-[#212529]">佐藤花子</h3>
                    <p className="text-sm text-[#868e96]">経済学部2年</p>
                    <div className="bg-[#f1f3f5] p-4 rounded-lg relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-[#f1f3f5]"></div>
                      <p className="text-[#495057] text-sm italic">
                        「最初は不安だったけど、先輩たちが優しくて楽しい！ イベントを通じて友達もたくさんできたし、
                        大学生活が充実してます！新入生のみんなも絶対来てね！」
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#ffe3e3] overflow-visible relative pt-8">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-full border-4 border-white overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      width={80}
                      height={80}
                      alt="鈴木一郎さん"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <h3 className="font-bold text-[#212529]">鈴木一郎</h3>
                    <p className="text-sm text-[#868e96]">工学部4年</p>
                    <div className="bg-[#f1f3f5] p-4 rounded-lg relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-[#f1f3f5]"></div>
                      <p className="text-[#495057] text-sm italic">
                        「4年間イベント局で活動して、本当に充実した大学生活だった！
                        就活でもイベント局での経験が評価されたよ。 後輩たちにもこの楽しさを味わってほしい！」
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 入会方法 - よりカジュアルに */}
        <section id="join" className="w-full py-12 md:py-16 bg-[#ffe3e3]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                  <span className="text-[#ff6b6b]">新入生</span>大募集中！
                </h2>
                <p className="max-w-[800px] text-[#495057] text-lg">イベント局で一緒に大学生活を盛り上げよう！</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mt-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-[#ff6b6b] mb-4 text-center">新歓イベント情報</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-[#ff6b6b] pl-4">
                  <h4 className="font-bold text-lg text-[#212529]">新歓説明会</h4>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#ff6b6b] font-bold">●</span>
                      <span>4月10日（水）12:30〜13:30 第1会議室</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#ff6b6b] font-bold">●</span>
                      <span>4月12日（金）16:30〜17:30 学生ホール</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#ff6b6b] font-bold">●</span>
                      <span>4月15日（月）12:30〜13:30 第2会議室</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#ff6b6b] pl-4">
                  <h4 className="font-bold text-lg text-[#212529]">新歓パーティー</h4>
                  <p className="mt-2">
                    4月17日（水）18:00〜20:00 学生食堂
                    <br />
                    <span className="text-sm text-[#868e96]">※参加費500円（軽食・ドリンク付き）</span>
                  </p>
                </div>

                <div className="border-l-4 border-[#ff6b6b] pl-4">
                  <h4 className="font-bold text-lg text-[#212529]">入会方法</h4>
                  <p className="mt-2">
                    説明会に参加して、その場で入会申込書を提出するだけ！
                    <br />
                    説明会に参加できない場合は、SNSでDMを送ってね！
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button className="bg-[#ff6b6b] hover:bg-[#fa5252] text-lg px-8">
                  <Link href="#contact">
                    問い合わせる <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせ - シンプルに */}
        <section id="contact" className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#212529]">
                  <span className="text-[#ff6b6b]">お問い合わせ</span>
                </h2>
                <p className="max-w-[800px] text-[#495057] text-lg">質問や相談があれば、気軽に連絡してね！</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
                  <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">連絡先</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-[#ff6b6b]" />
                      <span>Instagram：@univ_event_official</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Twitter className="h-5 w-5 text-[#ff6b6b]" />
                      <span>Twitter：@univ_event_official</span>
                    </li>
                    <li>メール：event@example-university.ac.jp</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
                  <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">活動場所</h3>
                  <p>
                    学生会館2階 学友会イベント局室
                    <br />
                    平日 10:00〜18:00 に常時開室しています。
                    <br />
                    いつでも遊びに来てね！
                  </p>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="学友会イベント局室"
                    className="mt-4 rounded-md w-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-[#ffe3e3]">
                <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">メッセージを送る</h3>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      お名前
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      メールアドレス
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="example@mail.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      メッセージ
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="質問や相談内容を入力してください"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#ff6b6b] hover:bg-[#fa5252]">
                    送信する
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター - カジュアルに */}
      <footer className="w-full py-6 bg-[#495057] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-[#ff6b6b]" />
                <span className="text-xl font-bold">学友会イベント局</span>
              </div>
              <p className="text-sm text-gray-300">
                〒123-4567 東京都○○区△△1-2-3
                <br />
                ○○大学 学生会館2階
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-[#ff6b6b]">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-white hover:text-[#ff6b6b]">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">クイックリンク</h3>
              <nav className="grid grid-cols-2 gap-2">
                <Link href="#about" className="text-sm hover:text-[#ff6b6b] transition-colors">
                  団体紹介
                </Link>
                <Link href="#activities" className="text-sm hover:text-[#ff6b6b] transition-colors">
                  活動内容
                </Link>
                <Link href="#events" className="text-sm hover:text-[#ff6b6b] transition-colors">
                  イベント
                </Link>
                <Link href="#members" className="text-sm hover:text-[#ff6b6b] transition-colors">
                  メンバー
                </Link>
                <Link href="#join" className="text-sm hover:text-[#ff6b6b] transition-colors">
                  入会方法
                </Link>
                <Link href="#contact" className="text-sm hover:text-[#ff6b6b] transition-colors">
                  お問い合わせ
                </Link>
              </nav>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} 学友会イベント局 All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

