import styles from "./error.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <content className={styles.intro}>
        여기는 아닌 것 같군요.
        <br />
        돌아가서, 다시 생각하세요.
      </content>
      <aside className="credit">
        <p>
          제작: 네이버카페{" "}
          <a href="https://cafe.naver.com/muggle">해리포터와 머글들의 이야기</a>
        </p>
        <p>
          사진:{" "}
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B0%88%EC%83%89-%EC%A2%85%EC%9D%B4-%EB%B0%B0%EA%B2%BD%EC%97%90-%ED%9D%91%EB%B0%B1-%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80-%EC%95%89%EC%95%84-%EC%9E%88%EB%8B%A4-xt79nQxc9Q0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Annie Spratt
          </a>
        </p>
      </aside>
    </main>
  );
}
