"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <Image src="/images/bag_and_shot.jpg" layout="fill" alt="bag and shot" />
      <content className={styles.description}>
        (고요한 방, 성가신 목소리도, 알 수 없는 문제들도 보이지 않는다.)
        <br />
        (방 가운데의 소파에 앉으니, 구석에 쳐박힌 가방이 눈에 들어온다.)
        <br />
        (어딘지 모르게 너덜한 가방은 알 수 없는 구멍이 몇 개 뚫려있다.)
        <br />
        (가방 안에는 총 한 자루와 역사 책 한 권만 덜렁 들어있을 뿐인데..)
        <br />
        (설마 이 구멍, 총에 맞아서 생긴건 아니겠지?)
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
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%B9%A8%EA%B0%84%EC%83%89%EA%B3%BC-%ED%9D%B0%EC%83%89-%EC%B2%B4%ED%81%AC-%EB%AC%B4%EB%8A%AC-%EC%95%88%EB%9D%BD-%EC%9D%98%EC%9E%90-%EC%98%86-%EC%84%A0%EB%B0%98-Pa-kKr31C7o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@joncstout?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jonathan Stout
          </a>
        </p>
      </aside>
    </main>
  );
}
