<template>
  <div class="flex flex-col items-center mt-8">
    <div class="flex w-full">
      <AboutSection title="ABOUT">
        <h3 class="text-7xl mt-2">HN. Tanuki Moon</h3>
        <ul class="text-xl mt-4 font-notojp gap-y-2 flex flex-col">
          <li>出身：奈良県の田舎（2000人未満の村）</li>
          <li>所在地：大阪（北河内エリア）</li>
          <li>年齢：23歳</li>
          <li>趣味：モータースポーツ、ロードバイク</li>
        </ul>
      </AboutSection>
      <section class="w-1/2 flex justify-center">
        <img
          src="@/assets/image.jpg"
          class="w-[400px] h-[400px] rounded-full"
        />
      </section>
    </div>
    <section></section>
    <AboutSection title="HISTORY" class="w-full mt-8">
      <ul class="font-notojp text-xl flex flex-col gap-y-2 mt-2">
        <li>- 1999/08/14 誕生</li>
        <li>- 2018/03/31 奈良県の普通科高校を卒業</li>
        <li>- 2018/04/01 大阪府の情報学部の大学を入学</li>
        <li>- 2020/04/01 画像認識に関するゼミにて、Pythonを使った研究</li>
        <li>- 2022/04/01 大阪府のSES会社に就職</li>
        <li>
          - 2022/10/01
          Javaを使った、交通に関する業務システムを開発（コーディング、テスト）
        </li>
        <li>
          - 2022/02/01 Vue.js + Firebaseを使った、自社の適性検査Webサイトを開発
        </li>
      </ul>
    </AboutSection>

    <AboutSection title="SKILL" class="w-full my-8">
      <ul class="font-notojp text-xl flex flex-col gap-y-2 mt-2">
        <li>Java - 大学・研修で学習 , 実務経験あり</li>
        <li>C - 大学で学習（基礎のみ）</li>
        <li>HTML - 個人開発で使用（細かい属性等は未習得）</li>
        <li>CSS - 個人開発で使用（TailWindCSSとセットで使用）</li>
        <li>JavaScript - 個人開発で使用（Vue.js or Nuxt.jsで主に使用）</li>
        <li>Python - 大学で学習（基礎のみ）</li>
        <li>
          MySQL/PostgresSQL - 大学・研修で学習 , 実務経験あり（簡単なCRUDや結合
          , チューニングは経験無し）
        </li>
        <li>
          NoSQL(FireStore/realtimedb) -
          個人開発で使用経験あり（CRUDやセキュリティルールは習得）
        </li>
      </ul>
    </AboutSection>
  </div>
</template>
