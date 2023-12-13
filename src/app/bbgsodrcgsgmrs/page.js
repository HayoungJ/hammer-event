"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        아, 이런… 벌써 가시나요?
        <br />
        아쉽긴하지만, 저는 약속을 꽤 잘 지키는 편이랍니다.
        <br />
        당신이 받아갈 선물은 해머 운영진들에게 맡겨두었으니, 찾아가시길
        바랍니다.
        <br />
        물론 당신이 정말로 탈출했다는 인증 정도는 필요하겠지만요.
        <br />
        지금 있는 곳을 찍어 가는 정도면 충분할 듯 싶습니다.
        <br />
        즐거우셨나요? 무언가 얻으신 것은 있나요?
        <br />
        제 심술이 당신을 너무 곤혹스럽게 한 것은 아니었으면 좋겠군요.
        <br />
        언젠가 다시 만날 날을 기다리며, 오늘은 이만 보내드리겠습니다.
        <br />
        메리 크리스마스
        <br />
        <div>
          <input type="text" className={styles.input} placeholder="닉네임" />
          <br />
          1. 해당 페이지의 입력 란에 해머 닉네임을 적은 후 스크린샷을
          찍어주세요.
          <br />
          2.{" "}
          <a
            className={styles.link}
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8hfRW1tILyYjzyd3LzcOEMlXOpccWHFIU6Le3NzFb466OCw/viewform"
            target="_blank"
          >
            링크
          </a>
          의 폼으로 제출해주세요.
          <br />
          제출 시점을 기준으로 순위를 매길 예정이니, 참고 부탁드립니다.
        </div>
      </content>
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%A1%B0%EB%AA%85%EC%9D%B4-%EC%BC%9C%EC%A7%84-%EB%85%B8%EB%9E%80-%EB%B3%84-%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4-%ED%8A%B8%EB%A6%AC-%ED%86%A0%ED%8D%BC%EC%9D%98-%ED%81%B4%EB%A1%9C%EC%A6%88%EC%97%85-%EC%82%AC%EC%A7%84-lsZ30VVJZEE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@jon_chng?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jonathan Chng
          </a>
        </p>
      </aside>
    </main>
  );
}
