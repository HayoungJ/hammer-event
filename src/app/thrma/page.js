"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        간단한 산수 문제를 준비해봤어요.
        <br />
        그냥 쉬어가는 차원에서요. 어쨌거나 이건 “크리스마스” 초대장이잖아요?
        <br />
        우리 모두 알다시피, 크리스마스는 12월 25일이죠.
        <br />
        1과 2는 3이고, 2와 5는 14에요.
        <br />
        그리고 크리스마스는 102 겠군요.
        <br />
        그렇다면, 당신들의 20주년은 얼마인가요?
        <br />
        그렇게 겁먹지 말아요, 이건 더하기만 알아도 풀 수 있는 문제니까.
        <br />
        <p className="lang">1</p>
      </content>
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://saltandbaker.com/harry-potter-birthday-cake/">
            Salt & Baker
          </a>
        </p>
      </aside>
    </main>
  );
}
