"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [isHide, setIsHide] = useState(false);

  const onClick = () => {
    setIsHide(!isHide);
  };

  return (
    <main className={styles.main}>
      <content className={styles.description}>
        아, 저 귀엽고 깜찍한 케이크를 보니, 새삼 해그리드에 대해 생각하게
        되는군요.
        <br />
        가여운 사람이죠, 아니 거인이라고 해야하나?
        <br />
        볼드모트의 모함만 아니었어도, 그의 삶이 좀 더 평탄했을 것 같은데
        말이에요.
        <br />
        오, 불편한 표정이군요?
        <br />
        내 말의 어딘가가 당신의 심기를 불편하게 하나요?
        <br />
        이왕 이렇게 된 거, 더 짜증나는 상황을 만들어볼까요.
        <br />
        알아서 찾아봐요, 이젠 그 정도는 할 수 있을겁니다.
        <br />
        <p className={`lang ${styles.lang}`}>
          <span>MMDD</span>
          <span onClick={onClick} className={`${isHide ? styles.hide : ""}`}>
            1
          </span>
        </p>
      </content>
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89%EA%B3%BC-%EA%B2%80%EC%9D%80-%EC%83%89-%EB%B2%88%EA%B0%9C-%EA%B7%B8%EB%A6%BC-1N8iqSsn7ls?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@cooper_baumgartner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Cooper Baumgartner
          </a>
        </p>
      </aside>
    </main>
  );
}
