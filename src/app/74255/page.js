"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        아주, 아주, 끔찍하게 고통스러울거라고 했잖아요?
        <br />
        자, 이제 대가를 치룰 시간이에요.
        <br />
        걱정마세요, 여기에 머무르는 것도 꽤 재밌을테니까.
        <br />
      </content>
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%9A%8C%EC%83%89-%EC%BD%98%ED%81%AC%EB%A6%AC%ED%8A%B8-%ED%91%9C%EB%A9%B4-f-UkGU8GcWo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@beccalavin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Becca Lavin
          </a>
        </p>
      </aside>
    </main>
  );
}
