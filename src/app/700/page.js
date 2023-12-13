"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Page() {
  const [isHide, setIsHide] = useState(true);

  const onMouseEnter = () => {
    setIsHide(false);
  };

  const onMouseLeave = () => {
    setIsHide(true);
  };

  return (
    <main className={styles.main}>
      <content className={styles.description}>
        자, 이제 선택의 시간입니다.
        <br />
        거미는 좋아하시나요?
        <br />
        뭐, 좋아한다고해도… 이렇게 큰 거미까지 좋아하실지는 모르겠습니다만.
        <br />
        하나를 택하세요. 어떤 방법이건, 저 거미가 막고 있는 한 탈출은
        불가능하니까요.
        <br />
        <p className="lang">A</p>
      </content>
      <content className={`${styles.routes} ${isHide ? styles.hide : ""}`}>
        <p>거미를 공중에 띄워보는건 어떤가요?</p>
        <p>아니면.. 돌처럼 굳게 만들 수도 있겠군요.</p>
        <p>
          그마저도 싫다면{" "}
          <strong style={{ color: "red" }}>아주, 아주, 끔찍한 고통</strong>을
          주는 방법도 있을지도요...
        </p>
      </content>
      <Image
        className={styles.wand}
        src="/images/wand.png"
        width={700}
        height={700}
        alt="wand"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B1%B0%EB%8C%80%ED%95%9C-%EA%B1%B0%EB%AF%B8-%EC%95%9E%EC%97%90-%EC%84%9C%EC%9E%88%EB%8A%94-%EC%82%AC%EB%9E%8C-9kbNYzo1XtQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@franku84?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Vadim Bogulov
          </a>
        </p>
        <p>
          사진:{" "}
          <a href="https://www.thetartanweavingmill.co.uk/products/hermione-granger-wand-window-box?variant=40259306356903">
            Tartan Weaving Mill
          </a>
        </p>
      </aside>
    </main>
  );
}
