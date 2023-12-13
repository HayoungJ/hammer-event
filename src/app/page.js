import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <content className={styles.intro}>
        안녕하세요 <strong className={styles.bold}>해리포터</strong>와 머글들의
        이야기 여러분,
        <br />
        저는... 글쎄요, 당신이 받은 초대장을 보낸 A라고 할까요?
        <br />
        <strong className={styles.bold}>해리포터</strong>를 사랑하는 여러분의
        마음이 어느덧 20년이 되어가니, 저로서도 여러분에게 약간의 호기심이
        생기더군요.
        <br />
        마침 즐거운 크리스마스 파티를 계획하고 계신 것 같아, 누추하게나마 한 손
        보태고자 끼어들게 되었답니다.
        <br />
        지금부터 여러분들은 이 초대장 속에서{" "}
        <strong className={styles.bold}>해리포터</strong>와 해머에 대한 추억을
        찾아 헤매게 되실 겁니다.
        <br />
        모든 추억을 다 찾아 초대장 밖으로 탈출하는데 성공한다면, 무사히
        크리스마스 파티에 참석하실 수 있을 뿐만 아니라,
        <br />
        제가 드리는 소정의 상품도 받아 가실 수 있죠.
        <br />
        어디까지나, 다 찾아 탈출할 때의 이야기지만...{" "}
        <strong className={styles.bold}>해리포터</strong>와 해머를 사랑하는
        여러분에게 그 정도야, 별것도 아니리라 믿습니다.
        <br />
        여러분의 실력을 믿는 만큼 따로 힌트가 필요할까 싶긴 합니다만, 그래도
        즐거운 날이니 지나치게 못되게 굴 수는 없죠.
        <br />
        그래서 약간의 힌트를 드릴 예정이니, 잘 읽어본 후 탐험을 시작하시면
        도움이 될 것 같군요.
        <br />
        <div className={styles.hint}>
          1. 정답이 한글<p className="lang">한</p>일 경우, 띄어쓰기 없이, 한글
          단어를 영타로 입력해 작성합니다. (ex. 해머가 정답일 경우 goaj)
          <br />
          2. 정답이 영어<p className="lang">A</p>일 경우, 띄어쓰기 없이
          소문자로만 작성합니다. (ex. hammerwarts)
          <br />
          3. 정답이 숫자
          <p className="lang">1</p>일 경우, 띄어쓰기 및 단위 없이 작성합니다.
          (ex. 1213)
          <br />
          4. 알아낸 정답은 주소창에 hammer-event.netlify.app/정답 형태로
          입력합니다.
          <br />
          예를 들어 정답이 해머라면, hammer-event.netlify.app/goaj를 입력하시면
          됩니다.
        </div>
        자 그럼, 이제 시작하세요. 문제 말인가요? 문제라면... 이미 내지
        않았습니까?
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
