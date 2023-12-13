"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        그러고보니, 이 주문의 피해자가 한 명 떠오르는군요.
        <br />
        그도 참 기구한 운명의 소유자인데 말이에요.
        <br />
        생각해보세요, 가깝지는 않더라도…
        <br />
        아주 오래 알고, 심지어 전 날 만나기까지 했던 사람이,
        <br />
        갑자기 실종되어 버리는 기분을 말이에요
        <br />
        아, 당신은 ‘실종자’ 쪽이던가요?
        <br />
        <p className="lang">A</p>
      </content>
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%8B%9C%EA%B3%84%EA%B0%80%EC%9E%88%EB%8A%94-%EA%B1%B4%EB%AC%BC%EC%9D%98-%ED%9D%91%EB%B0%B1-%EC%82%AC%EC%A7%84-YULJM2YqtnI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@ktlikescoffee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            KT Likes Coffee
          </a>
        </p>
      </aside>
    </main>
  );
}
