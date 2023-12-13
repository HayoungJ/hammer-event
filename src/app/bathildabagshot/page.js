"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [leftPos, setLeftPos] = useState(-100);
  const [topPos, setTopPos] = useState(-100);

  useEffect(() => {
    const left = Math.floor(Math.random() * 500) + 500;
    const top = Math.floor(Math.random() * 500) + 200;
    setLeftPos(left);
    setTopPos(top);
  }, []);

  return (
    <main className={styles.main}>
      <content className={styles.description}>
        <div>
          202020202020202020202020202020202020202020202020202020202020202020202020
          <span className={styles.drag}>200000</span>
          2020202020202020202020202020202020202020202020202020202020202020
          <span className={styles.drag}>200000</span>
          20202020202020202020202020202020202020202020202020202020202020202020202020202020
          <span className={styles.drag}>200000</span>
          20202020202020202020202020202020202020202020202020202020202020202020202020202020202020
          <span className={styles.drag}>200000</span>
          20202020202020202020202020202020202020202020202020202020202020202020202020202020202020
        </div>
        <strong
          className={styles.hidden}
          style={{ left: `${leftPos}px`, top: `${topPos}px` }}
        >
          누굴까요?
        </strong>
        <p className={`lang ${styles.lang}`}>한</p>
      </content>
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%82%AC%EB%9E%8C-%EC%86%90%EC%97%90-%EB%85%B8%EB%9E%80-%ED%8C%BD%EC%B0%BD%EC%8B%9D-%EB%B0%98%EC%A7%80-TFE_-9eLmEs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@tex450?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Matthew Ball
          </a>
        </p>
      </aside>
    </main>
  );
}
