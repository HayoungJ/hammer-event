"use client";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <content className={styles.description}>
        방 안의 풍경은, 그야말로 크리스마스 그 자체이다.
        <br />
        거대한 크리스마스 트리의 존재감에 순간 아직 초대장 속이라는 사실마저
        잊을 뻔 했다.
        <br />
        아니, 사실 아직 ‘크리스마스 트리’라고 볼 수는 없을 것이다.
        <br />
        트리에는 아직 빈 공간이 남아있고, 그 자리를 꾸미는 것이 내 마지막
        문제임은 너무 뻔했으니까.
        <div>
          1. 부엉이가 굶어서야 안 될 노릇이죠. 언제든 먹을 수 있게, 발 바로
          밑에는 먹을 것을 놓아주세요.
          <br />
          2. 진저쿠키가 벗어 던진 옷가지들이 바로 위와 아래에 널려있습니다.
          <br />
          3. 오, 원래 별은 가장 높은 곳에 있어야 하는 법.. 하지만 이 황금별은
          높긴 하지만, 가장 높진 않군요.
          <br />
          4. 원래 크리스마스의 상징은 빨간색과 초록색이죠.
          <br />
          빨간색 사이 어딘가에 초록색을 끼워두면, 아주 그럴싸해 보일 거에요.
          <br />
          오너먼트 : 황금별(gd) 부엉이인형(od) 파란공(bb) 빨간지팡이사탕(rc)
          초록양말(gs) 진저쿠키(gm) 빨간산타모자(rs)
        </div>
        다만, 이 트리에 함정이 없다고 할 수 있을까?
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
          <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%A1%B0%EB%AA%85%EC%9D%B4-%EC%9E%88%EB%8A%94-%EB%85%B9%EC%83%89-%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4-%ED%8A%B8%EB%A6%AC-zvwtt6w2bmM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
          의{" "}
          <a href="https://unsplash.com/ko/@kalebtapp?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            kaleb tapp
          </a>
        </p>
      </aside>
    </main>
  );
}
