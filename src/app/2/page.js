"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Page() {
  const list = ["right-top", "left-top", "left-bottom", "right-bottom"];

  const [isHide, setIsHide] = useState(true);
  const [where, setWhere] = useState("right-top");

  const onClick = () => {
    const random = Math.floor(Math.random() * 4);
    setWhere(list[random]);
    setIsHide(false);
    setTimeout(() => setIsHide(true), 300);
  };

  return (
    <main className={styles.main}>
      <content className={styles.description}>
        어때요, 할 만 한가요? 꽤나 자신만만한 표정인데요.
        <br />
        하기야, 여기까지는 꽤 잘해왔다는 건 인정할만해요…
        <br />
        저 모르게 반칙을 쓰고 있는 것만 아니라면.
        <br />
        아하, 반칙이라고 하니.. 당신에게 낼 새로운 문제가 떠오르는군요.
        <br />
        <p className={styles.text} onClick={onClick}>
          ‘이것’
        </p>
        에는 몇 종류의 파울이 존재하는지 맞춰보세요.
        <br />
        <p className={styles.text} onClick={onClick}>
          ‘이것’
        </p>
        이 뭐냐구요? 그건 당신이 맞춰야죠.
        <br />
        크리스마스 선물은 그렇게 쉽게 주어지는게 아닙니다.
        <br />
        뭐, 여기저기 잘 둘러보면.. 뭐라도 더 힌트가 나오지 않겠어요?
        <br />
        민첩하게 돌아다녀요, 잡히지 않게 조심하고!
        <br />
        <p className="lang">1</p>
      </content>
      <aside
        className={`${styles.hint} ${isHide ? styles.hide : ""} ${
          styles[where]
        }`}
      >
        <Image src="/images/snitch.png" width={100} height={47} alt="hint" />
      </aside>
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%91%B8%EB%A5%B8-%EC%9E%94%EB%94%94-%EB%95%85%EC%9D%98-%EB%A7%A4%ED%81%AC%EB%A1%9C-%EC%82%AC%EC%A7%84-WdsLOJ5BViU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@bradley_brister?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Bradley Brister
          </a>
        </p>
        <p className={`${isHide ? styles.hide : ""}`}>
          사진:{" "}
          <a href="https://harrypotter.fandom.com/wiki/Golden_Snitch">
            Harry Potter Wiki
          </a>
        </p>
      </aside>
    </main>
  );
}
