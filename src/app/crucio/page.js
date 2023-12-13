"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        20년의 여정에도, 시작점은 당연히 존재하는 법이죠.
        <br />
        해리포터와 머글들의 이야기에는 새로운 사람들을 환영하는 승강장이 있다죠?
        <br />
        혹시 가장 처음으로 그 승강장에 올라탄 사람의 이름을 알고 있는지
        궁금한데요.
        <br />
        열심히 찾아보는게 좋을거에요, 이건 당신이 선택한 길이니까.
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
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%98%B8%EA%B7%B8%EC%99%80%ED%8A%B8-%EA%B8%89%ED%96%89-%EC%97%B4%EC%B0%A8-uxzhBjAFO5E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@juniperphoton?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            JuniperPhoton
          </a>
        </p>
      </aside>
    </main>
  );
}
