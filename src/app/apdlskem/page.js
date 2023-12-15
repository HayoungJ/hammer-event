"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        지루한 일에는 제법 자신이 있는 모양이군요.
        <br />
        둘러보니 어떻던가요? 꽤 많은 사람들이 거쳐갔죠?
        <br />
        그 사람들 대다수는 어떤 선택을 했는지 궁금하지 않나요?
        <br />
        그리고 그 선택의 결과로 얼마나 달콤한 보상을 쟁취했는지?
        <br />
        자, 몇 걸음 남지 않았어요.
        <br />
        사소한 가시밭길이 기다리고 있긴하지만, 간단한 문제일 뿐이에요.
        <br />
        <br />
        물에 0.5 몰랄의 CaCl<sub>2</sub> 가 용해된 어떤 마법약이 있습니다.
        <br />
        실온, 대기압 하에서 이 마법약을 무수 CaCl<sub>2</sub> 1몰과 순수한 물로
        분리하는 데
        <br />
        필요한 최소 일(J)을 알아내세요.
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
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%95%BC%EA%B0%84%EC%97%90-%EB%82%98%EB%AC%B4%EC%9D%98-%EB%A1%9C%EC%9A%B0-%EC%95%B5%EA%B8%80-%EC%82%AC%EC%A7%84-%EC%B4%AC%EC%98%81-_OQ8Jc7kBmA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@jrkorpa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jr Korpa
          </a>
        </p>
      </aside>
    </main>
  );
}
