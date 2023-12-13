"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        (방 안에는, 쪽지 한 장만 덩그러니 놓여있을 뿐이다.)
        <br />
        별도 없는 낮은 하늘 아래 두 번의 비극이 있었다네.
        <br />
        첫 번째는 그저 우롱당했을 뿐.
        <br />
        두 번째는 비극 끝에 되살아나, 동반자의 곁으로 돌아갈 수 있었지.
        <br />
        아, 그럼 비극은 하나라고 보아야하나?
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
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B0%88%EC%83%89-%EB%82%98%EB%AC%B4-%EC%B2%9C%EC%9E%A5-%ED%91%9C%EB%A9%B4-ZTO5ntSqUKA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@hudsonhintze?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Hudson Hintze
          </a>
        </p>
      </aside>
    </main>
  );
}
