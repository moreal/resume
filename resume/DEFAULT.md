<head>
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r931bdi976");
  </script>
  <link rel="shortcut icon" href="/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="./style.css">
  <title>이력서</title>
</head>
<body>

# 이력서

2013년 즈음 마인크래프트 플러그인 개발과 RPG Maker를 통해 처음 개발에 관심을 가졌습니다.  
2017년 고등학교에서 개발을 처음 시작하였고, 2019년 중 초기 스타트업에 입사하여 소프트웨어 엔지니어로 일해오고 있습니다.  

불편함을 해결하는 것과 같이 사람들에게 도움이 되는 일을 하고 싶어하고, 기술적인 부분은 물론이고 비기술적인 부분도 포함하여 문제를 해결하는 것에 관심이 많습니다.  
직군에 따른 업무 경계 없이 필요에 따라 기여하는 것을 개인적으로 선호합니다.

<div id="contact">

## 연락처

- 이메일: [dev.moreal@gmail.com](mailto:dev.moreal@gmail.com)
- LinkedIn: [devmoreal](https://www.linkedin.com/in/devmoreal/)

</div>

<div class="work-experience">

## 업무 경험

### 블록체인 코어 엔지니어
<p class='role-metadata'>Planetarium, 2019.08. ~ 2020.12.</p>

P2P 멀티플레이어 온라인 게임을 만들기 위한 오픈소스 라이브러리 [Libplanet] 개발에 주로 참여하였습니다. 머클 트리를 활용하여 상태 검증 관련 로직을 구현하였습니다.

기여한 내용은 [GitHub 저장소](https://github.com/search?q=repo:planetarium/libplanet%20author:moreal&type=issues)에서 확인하실 수 있습니다.

사용한 기술: C#, .NET, Unity, RocksDB, TypeScript.

[Libplanet]: https://github.com/planetarium/libplanet
[Nine Chronicles]: https://nine-chronicles.dev/

### 백엔드 엔지니어
<p class='role-metadata'>Planetarium, 2021.01. ~ 2023.12.</p>

[Libplanet]을 활용한 [Nine Chronicles] 게임 개발에 참여하였습니다. 주로 블록체인 노드 개발과 게임 로직 구현, Kubernetes를 활용한 운영 업무를 진행했습니다.

외에도, [Nine Chronicles] 메인넷과 Ethereum 사이에 WNCG 오갈수 있도록 하는 수탁형 브릿지를 개발하였습니다.  
이 과정에서 Geth와 Lighthouse 노드를 직접 운영해보기도 하였습니다.  
또한 수동으로 WNCG 발행하는 경우들을 [저장소 README에 기록](https://github.com/planetarium/NineChronicles.EthBridge/blob/a61801ea76b14c19b4ee8d8d404e5f7a387c016c/README.md#collateral)하여 투명성을 제공하고자 노력했습니다.

사용한 기술: C#, .NET, RocksDB, Kubernetes, Helm, Node.js, SQLite.


### DX 엔지니어
<p class='role-metadata'>Planetarium, 2022.07. ~ 2024.12.</p>

내부 개발자들의 생산성을 높이고 외부 개발자들이 [Nine Chronicles] 관련 모드를 쉽게 만들고 기여할 수 있도록 서비스 및 라이브러리를 제작하였습니다. 또한 외부 개발자들을 대상으로 Hacktoberfest([관련 글](https://snack.planetarium.dev/kor/2024/11/hacktoberfest/)) 와 모드 공모전을 기획하고 진행하기도 하였습니다.

2024년 1분기에는 잠시 팀 리드를 맡기도 하였습니다.

진행했던 프로젝트들 중 몇 가지를 나열하면 아래와 같습니다:

- 모바일 버전 사전 예약 보상을 순차적으로 블록체인 네트워크에 무리를 주지 않고 지급하기 위한 큐 서비스를 개발하였습니다. ([GitHub 저장소](https://github.com/planetarium/9c-rudolf))
  
  사용한 기술: TypeScript, Node.js, NestJS, Prisma, PostgreSQL.
- 게임 체인 간 재화를 이동할 수 있도록 브릿지를 하는 서비스를 개발하였습니다. ([GitHub 저장소](https://github.com/planetarium/NineChronicles.Bridge))

  사용한 기술: TypeScript, Node.js, Prisma, PostgreSQL.
- 외부 개발자들이 쉽게 트랜잭션을 만들수 있도록 JavaScript 라이브러리들을 개발하여 배포하였습니다. ([GitHub 저장소](https://github.com/planetarium/lib9c/tree/fce75af69134033b02badf9fabf7e789d981d651/integrations/javascript/%40planetarium))
- [Nine Chronicles] 체인의 최신 상태를 보다 쉽게 사용할 수 있도록 하는 데이터 적재 및 API 서버를 개발하였습니다. ([GitHub 저장소](https://github.com/planetarium/mimir))
  
  사용한 기술: C#, .NET, GraphQL, MongoDB.

</div>

<h2 class="page-break">오픈 소스</h2>

번역, 오타 수정, 버그 수정 및 기능 추가 등 여러 방식으로 오픈소스에 기여하고 있습니다. 모르는 것들을 배우기도 하고, 업무에 필요한 버그를 수정하기도 합니다.

- [RustPython](https://github.com/RustPython/RustPython/pulls?q=author:moreal): 오픈소스 컨트리뷰션 아카데미를 계기로 참여하여 Union 타입 구현 등 기능 구현으로 기여하고 있습니다.
- [clig.kr](https://clig.kr) ([GitHub 저장소](https://github.com/moreal/cli-guidelines-kr)): Planetarium Labs 에서 근무하며 CLI 앱을 만들일이 많았습니다. CLI 앱 작성 가이드인 clig.dev를 번역했습니다. [GeekNews에도 공유](https://news.hada.io/topic?id=19007)되었습니다.
- [DefinitelyTyped mixpanel-browser](https://github.com/DefinitelyTyped/DefinitelyTyped/pulls?q=is:pr+author:moreal): 업무에 사용하던 Mixpanel 라이브러리의 타입 정의에 오류가 있어 수정했습니다. 해당 패키지의 메인테이너로 다른 기여자들의 PR을 리뷰하기도 하였습니다.
- [GraphQL .NET](https://github.com/search?q=org:graphql-dotnet+author:moreal&type=pullrequests): graphql-dotnet을 사용하던 중 만난 버그를 수정하여 기여하였습니다.
- [rust-analyzer](https://github.com/rust-lang/rust-analyzer/pull/11869): Rust 개발을 하던 중 코드블록 하이라이팅이 잘 되지 않는 문제를 발견하여 해결하였습니다.

다른 오픈소스 프로젝트에 기여하는 것 외에도 개인 프로젝트도 오픈소스 라이선스로 공개하고 있습니다.

- [gif2webp.com](https://gif2webp.com) ([GitHub 저장소](https://github.com/moreal/gif2webp.com)): 서버없이 브라우저에서 GIF를 WebP로 변경하는 간단한 웹 어플리케이션입니다. GIF를 WebP로 변환하기 위해 익숙하지 않은 CLI를 사용하는 디자이너 지인의 불편함을 개선하기 위해 개발하였습니다.
- [agilestory.blog](https://agilestory.blog) ([GitHub 저장소](https://github.com/moreal/agilestory.blog)): "애자일 이야기" 블로그 글을 쉽게 찾아 읽을 수 있도록 도와주는 서비스입니다.
- [bencodex-rs](https://github.com/moreal/bencodex-rs): [Libplanet]에서 사용하는 [Bencodex] 직렬화 포맷의 Rust 구현체입니다.  역직렬화하여 JSON으로 변환하는 기능도 구현하여 사내 업무에 활용하였습니다.

[Bencodex]: https://github.com/planetarium/bencodex


<h2 class="page-break">학력</h2>

2017-2020 [대덕소프트웨어마이스터고등학교](https://dsmhs.djsch.kr/main.do) 정보보안과


## 발표

- [직렬화 포맷 개량과 라이브러리 구현 - PyCon Korea 2020](https://www.slideshare.net/slideshow/pycon-korea-2020-238651563/238651563)

## 글

- 기술
  - [How Go interface works](https://moreal.dev/blog/go-interface/)
  - [페타바이트 트래픽 원인 분석기](https://moreal.dev/blog/petabyte-traffic/)
- 비기술
  - [Phanpy 번역 기여하기](https://moreal.dev/blog/phanpy-translation-guide/)

</body>
