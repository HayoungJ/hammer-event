"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        방금은 정말 제법이었어요,
        <br />그 거대한 거미가 발버둥 치는데 그 아래를 지나갈 생각을 하다니.
        <br />
        그러다 거미가 떨어지기라도 했다면, 그다지 좋은 광경은 아니었을텐데
        말이에요.
        <br />
        왜 하필 공중부양 마법을 선택했죠? 거미라고 해도 공격을 하긴 싫어서?
        <br />
        아니면… 아는 마법이 달리 없었나요?
        <br />
        어느 쪽이건 좋아요, 당신은 성공했으니.
        <br />
        자, 다음 단계로 가기 전에 오렌지주스라도 한 잔 줄까요? 사실 거부권은
        없답니다.
        <br />
        <br />
        맛이 좀 개성있죠? 당신들의 모임이 제법 즐거웠던 것 같아, 따라해
        보았답니다.
        <br />
        쭉 마셔요, 쭉. 맛이야 이상하더라도, 해로운건 아니니까.
        <br />
        <p className="lang">한</p>
      </content>
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%88%AC%EB%AA%85%ED%95%9C-%EB%A7%88%EC%8B%9C%EB%8A%94-%EC%9C%A0%EB%A6%AC%EC%97%90-%EC%98%A4%EB%A0%8C%EC%A7%80-%EC%A3%BC%EC%8A%A4-TmOGarNOGFs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@mateusz_feliksik?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Mateusz Feliksik
          </a>
        </p>
      </aside>
    </main>
  );
}
