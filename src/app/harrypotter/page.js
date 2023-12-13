"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Page() {
  const list = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

  const [color, setColor] = useState();

  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 6 + 1);
    setColor(randomColor);
  });

  return (
    <main className={styles.main}>
      <content className={styles.description}>
        오, 크리스마스… 저도 퍽 좋아하는 날이죠. 낭만적이고 달콤한 날이잖아요?
        <br />
        그 멍청한 두들리 가족과 살았던 어린 해리에게는 사실 그다지 좋았던 적이
        없겠다만,
        <br />
        호그와트에 입학하고 나서는 좀 달라지지 않았을까요?
        <br />
        정성들여 손수 만든 선물보다 더 감동적인 선물은 흔치 않죠. 뭐, 한 십 년
        쯤 받으면 질릴 수도 있겠습니다만.
        <br />
        자, 그럼 그 감동적인 스웨터를 묘사해보세요. 쉬운 방법이 있잖아요,
        <strong style={{ color: `${list[color]}` }}> 쉬운, 방법이.</strong>
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
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%8B%B8%EA%B5%AC%EB%A0%A4%EC%99%80-%EB%85%B9%EC%83%89%EA%B3%BC-%EB%B9%A8%EA%B0%84%EC%83%89-%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4-%ED%8A%B8%EB%A6%AC-OF-jMfST9UQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@cbpsc1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Clint Patterson
          </a>
        </p>
      </aside>
    </main>
  );
}
