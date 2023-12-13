"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        자자, 서두르는게 좋을겁니다. 크리스마스를 이 안에서 보낼게 아니라면
        말이죠.
        <br />아 혹시 바라는게 그건가요?
        <br />
        크리스마스가 지나면 “다 지난 크리스마스 초대장” 같은건 바로 버려질지도
        모르는데요.
        <br />
        제시간을 맞추는건 언제나 중요합니다.
        <br />
        게으름피우지 말고, 잘 들어요.
        <br />
        아직은 쉬운 걸로 준비했으니, 지금 시간을 아끼는게 중요하단걸 기억하세요.
        <br />
        3+3은 6이고, 3+9는 12입니다.
        <br />
        그런데 9+9는 6이군요. 그렇다면 8+6은 무엇인지 알겠나요?
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
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%B6%89%EC%9D%80-%EB%B2%BD%EB%8F%8C-%EB%B2%BD-WYufserVQo8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@kanak96?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Kanak Saini
          </a>
        </p>
      </aside>
    </main>
  );
}
