<head>
  <meta charset="UTF-8">
  <link rel="shortcut icon" href="/logo.svg">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@200..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="./style.css">
  <title>이도건 이력서</title>
</head>
<body>

# 이도건, 소프트웨어 엔지니어

<dl>
  <dt>이메일:</dt>
  <dd>[dev.moreal@gmail.com](mailto:dev.moreal@gmail.com)</dd>
  <dt>GitHub:</dt>
  <dd>[@moreal](https://github.com/moreal)</dd>
  <dt>전화번호:</dt>
  <dd>+82 10-7422-8059</dd>
</dl>

안녕하세요, 소프트웨어 엔지니어 이도건입니다.

제품의 초기부터 성장 과정을 따라 블록체인 코어 엔지니어, DX 엔지니어 등 다양한 역할로 넓게 일하며 경험을 쌓았습니다. 오픈소스 기여를 즐겨하며 이를 통해서도 다양한 경험을 쌓았습니다. 타입 시스템이나 도구를 활용하여 사전에 실수를 방지할 수 있는 시스템을 갖추고자 노력하였고, 반복되는 작업을 자동화하여 생산성 향상에 힘썼습니다.

지금까지 블록체인·게임 도메인에서 5년간 경험을 쌓았지만, 블록체인 이외의 새로운 도메인에서 경험을 쌓고자 기회를 찾고 있습니다.

<div class="work-experience">

## 업무 경험

### 블록체인 코어 엔지니어
<p class='role-metadata'>Planetarium, 2019.08. ~ 2020.12.</p>

P2P 멀티플레이어 온라인 게임을 만들기 위한 오픈소스 라이브러리 [Libplanet] 개발에 주로 참여하였습니다.  

상태 변경 로직이 결정적이지 않아 노드 별로 다른 상태를 가지고 있음에도 적절히 검증하지 않아 알기 어려울 뿐더러, 상태를 조회하는데도 성능 문제가 있었습니다. 머클 트리를 활용하여 상태 검증을 용이하게 하여 결정적인 상태를 유지하도록 하는데 기여하였고, 중복 저장을 줄여 저장 공간도 확보함과 동시에 조회 성능도 향상시켰습니다.

또한 오픈소스 라이브러리를 만들며 Semver 기반으로 배포 및 운영하는 방법에 대해 익혔습니다.

제가 [Libplanet]에 기여한 내용은 GitHub 저장소([이슈 목록](https://github.com/search?q=repo:planetarium/libplanet%20author:moreal&type=issues), [PR 목록](https://github.com/search?q=repo:planetarium/libplanet%20author:moreal&type=pullrequests))에서 확인하실 수 있습니다.

사용한 기술: C#, .NET, Unity, RocksDB, TypeScript.

[Libplanet]: https://github.com/planetarium/libplanet
[Nine Chronicles]: https://nine-chronicles.dev/

<span class="page-break"></span>

### 백엔드 엔지니어
<p class='role-metadata'>Planetarium, 2021.01. ~ 2023.12.</p>

[Libplanet]을 활용한 온체인 게임 [Nine Chronicles] 개발에 참여하였습니다. 주로 블록체인 노드 개발과 게임 로직 구현, Kubernetes를 활용한 운영 업무를 맡았습니다.

외에도, [Nine Chronicles] 메인넷과 Ethereum 사이에 재화가 오갈수 있도록 하는 수탁형 브릿지를 개발하였습니다. 회사 기조에 맞게 오픈소스로 개발하는 것은 물론이고, 투명성을 위해 수동으로 토큰을 발행하는 경우들을 [저장소 README를 통해 기록하여](https://github.com/planetarium/NineChronicles.EthBridge/commits/a61801ea76b14c19b4ee8d8d404e5f7a387c016c/README.md?author=moreal) 이런 것들이 암암리에 진행되지 않도록 주도적으로 챙겼습니다.

사용한 기술: C#, .NET, RocksDB, Kubernetes, Helm, TypeScript, Node.js, SQLite.


### DX 엔지니어
<p class='role-metadata'>Planetarium, 2022.07. ~ 2024.12.</p>

반복되는 작업을 라이브러리, 서비스 모듈 등으로 개발하여 내부 개발자들의 생산성을 높였습니다. 또한 외부 개발자들이 [Nine Chronicles] 관련 모드를 쉽게 만들고 기여할 수 있도록 하는 것을 목표로 활동하였습니다.


#### 동적 플러그인 시스템 방식 개발을 통한 생산성 향상

블록체인은 과거 트랜잭션을 실행하여 검증할 수 있어야 한다는 특징이 있습니다. Libplanet의 방식에서는 트랜잭션 실행 로직을 C# 코드로 작성하기 때문에 과거 로직들을 모두 코드로 보관하는 것으로 이를 지원하고 있었습니다. 하지만 이 방식은 더 이상 관리되지 않는 로직과 테스트가 꾸준히 증가하는 방식이었고, 과거의 로직이 의존하는 코드를 수정하게 되면 하위 호환이 깨지기 때문에 코드를 건드리기 점점 어려워지고 버그를 유발했습니다.

기존에 Libplanet 개발에 참여했던 경험과 Nine Chronicles를 만들었던 경험에 기반하여, Libplanet팀과 협업하며 필요한 인터페이스를 만들고, 그에 맞는 플러그인 시스템을 개발하며 배포 파이프라인까지 구성하여 공유하였습니다.

본 작업을 통해 동적 플러그인 시스템으로 하위호환을 지원할 수 있게 하여 게임 로직 구현의 부담을 줄이고, 버그 발생 횟수를 줄이며, 테스트 실행 시간도 줄어드는 등 인적·컴퓨팅 리소스를 크게 절감할 수 있었습니다.

<span class="page-break"></span>

#### 트랜잭션 유실 없는 큐 서비스 개발 ([GitHub 저장소](https://github.com/planetarium/9c-rudolf))

블록체인을 대상으로 하는 외부 서비스 개발에 있어 가장 큰 문제였던 것은, 트랜잭션 유실로 인한 논스가 중복된 트랜잭션 발행, 그리고 그에 따른 의도치 않은 트랜잭션 실행이었습니다. 이는 의도치 않은 미지급, 과지급 같은 문제를 발생시켰고 이는 트랜잭션 생성 방법에 따른 구조적인 문제였습니다.

모바일 버전 사전 예약 보상을 블록체인 네트워크에 무리를 주지 않고 지급하기 위한 큐 서비스를 개발하며 새로운 구조로 이를 함께 해결하였습니다. 트랜잭션들을 RDB에 저장하고 저장된 트랜잭션 데이터들을 바탕으로 논스를 계산하여 다음 트랜잭션을 발행하는 방식으로 개선하여 트랜잭션 유실을 크게 줄였습니다.

또한 이후 이런 처리 방식은 사내에서 일반화 되었고, 이전에 비해 트랜잭션 유실에 대해서 큰 문제가 발생하지 않을 수 있게 되었습니다.

사용한 기술: TypeScript, Node.js, NestJS, PostgreSQL, Grafana.

#### 최신 상태 API 서비스 개발 ([GitHub 저장소](https://github.com/planetarium/mimir))

블록체인의 특성상 블록들을 모두 연산하면 원하는 상태를 얻을 수 있지만, 스토리지 용량과 성능 등의 문제로 상태를 얻기 어려운 문제가 있습니다. 블록체인 노드와 분리된 형태로, 최신 상태만을 보존하는 동기화 기능을 제공하여 최신 상태를 쉽게 사용할 수 있도록 하는 서비스를 개발하였습니다.

사용하길 기대하는 유저가 사내에 있지 않으므로 요청의 형태를 예측할 수 없기 때문에 유연하게 요청할 수 있도록 GraphQL로 API를 제공했습니다. 이를 활용하여 외부 개발자가 자신만의 마켓 서비스를 만들기도 하였으며, 게임 클라이언트 중 랭킹을 보여주는데 사용되기도 하였습니다.

사용한 기술: C#, .NET, MongoDB, GraphQL.

#### 리플레이 기능을 통한 생산성 향상

기존에는 게임 로직을 디버깅 하기 위해 몇 십 GB나 되는 스냅샷 파일을 받은 뒤, 상태를 추가적으로 계산하고 로컬에서 테스트 환경을 맞춰준 뒤 테스트를 해야했습니다. 몇 십 GB나 되는 파일을 받기 위해서는 인터넷 환경에 따라 1, 2시간을 기다릴 필요도 있었고 이는 체인 상태 크기에 비례하여 점점 늘어갔습니다.

Libplanet을 개발하며 인터페이스에 대한 이해가 있었기 때문에, 상태를 원격에서 읽어오는 구현체를 만들어 대신 사용하도록 하여 커맨드로서 제공했습니다. 이를 통해 매우 쉽게 바로 문제가 발생한 트랜잭션의 해시만 가지고도 디버깅을 수행할 수 있었습니다.

<span class="page-break"></span>

#### 상태 웹뷰어 구현 ([GitHub 저장소](https://github.com/planetarium/9c-board))

게임 기획 및 운영 업무를 수행할 때면 게임의 상태 및 기록을 조회할 필요가 있을 때가 있습니다. 그런 경우에 개발자에게 조회를 요청하여 데이터를 받아가시거나, 나중에는 GraphQL을 직접 조회하는 법을 배워서 사용하시기도 하였습니다. 이는 GraphQL 사용법을 모르는 분들에게 불편한 방법이고 인벤토리 데이터의 경우 아이템 코드로 보였기 때문에 가시성이 좋지 못 했습니다.

이를 해결하기 위해 웹으로 상태를 볼 수 있는 간단한 웹앱을 만들어 슬랙을 통해 공유드리고 변경사항이 생겼을 경우 노션으로 릴리스 노트를 적어 공유드렸습니다. 잘 만든 프론트엔드가 아니기에 아쉬운 점이 많지만, 지나가며 본 슬랙 대화에서 반복되는 요청들을 기능으로 만들어 생산성 향상에 기여한 점을 강조하고 싶습니다. 구체적으로는 밸런스 패치를 위해 진행한 테이블 시트 패치가 잘 진행되었는지 확인할 때, 아이템 보상이 실제로 잘 지급 되었는지 확인할 때, 버그로 아이템이 과다 생산되었을때 얼마나 가지고 있는지를 확인할 때 유용하게 사용되었습니다.

</div>

## 오픈 소스

번역, 오타 수정, 버그 수정 및 기능 추가 등 여러 방식으로 오픈소스에 기여하고 있습니다. 모르는 것들을 배우기도 하고, 업무에 필요한 버그를 직접 수정하기도 합니다. 낯선 코드를 이해하는 것에 크게 어려움을 느끼지 않고 디버깅하는 것을 즐깁니다.

- [RustPython](https://github.com/RustPython/RustPython/pulls?q=author:moreal): 오픈소스 컨트리뷰션 아카데미를 계기로 참여하여 Union 타입 구현 등 기능 구현으로 기여하고 있습니다.  
RustPython 작업을 하며 CPython을 참조하다 발견한 문서 오류를 수정하는 기여를 하기도 하였습니다. ([CPython PR 목록](https://github.com/python/cpython/issues?q=author%3Amoreal))
- [VitePress](https://github.com/vuejs/vitepress/issues?q=author%3Amoreal): [Fedify] 문서를 읽던 중 발견한 localSearch 플러그인 관련 버그를 수정했습니다. ([관련 글][vitepress-localsearch-debugging-post])
- [clig.kr](https://clig.kr) ([GitHub 저장소](https://github.com/moreal/cli-guidelines-kr)): CLI 앱을 작성할 때 종종 참고하던 CLI 앱 작성 가이드인 clig.dev를 번역하였습니다.
- [DefinitelyTyped mixpanel-browser](https://github.com/DefinitelyTyped/DefinitelyTyped/pulls?q=is:pr+moreal): 업무에 사용하던 Mixpanel 라이브러리의 타입 정의에 오류가 있어 수정했습니다. 해당 패키지의 메인테이너로 다른 기여자들의 PR을 리뷰하며 기여하기도 하였습니다.
- [GraphQL .NET](https://github.com/search?q=org:graphql-dotnet+author:moreal&type=pullrequests): 회사 업무 중 문제가 되는 버그를 고치는 PR을 올려 기여하였습니다.
- [rust-analyzer](https://github.com/rust-lang/rust-analyzer/pull/11869): Rust 개발을 하던 중 코드블록 하이라이팅이 잘 되지 않는 문제를 발견하여 해결하였습니다.

<span class="page-break"></span>

다른 오픈소스 프로젝트에 기여하는 것 외에도 개인 프로젝트도 오픈소스 라이선스로 공개하고 있습니다.

- [agilestory.blog](https://agilestory.blog) ([GitHub 저장소](https://github.com/moreal/agilestory.blog)): "애자일 이야기" 블로그 글을 쉽게 찾아 읽을 수 있도록 도와주는 서비스입니다.
  - 저 이외에도 "애자일 이야기" 블로그의 글을 검색하여 찾아보려는 사람들이 있는 것을 알게 되어 개발하였습니다.
- [bencodex-rs](https://crates.io/crates/bencodex-rs) ([GitHub 저장소](https://github.com/moreal/bencodex-rs)): [Libplanet]에서 사용하는 [Bencodex] 직렬화 포맷의 Rust 구현체입니다.
  - 사내 업무 과정 중 상태를 열어보는 것이 불편하여 [Bencodex JSON 스펙][bencodex-json]에 따라 JSON 형식으로 변환하는 기능을 마저 구현하고 CLI로 인터페이스를 만들어서 사내 업무에 활용하였습니다.
- [gif2webp.com](https://gif2webp.com) ([GitHub 저장소](https://github.com/moreal/gif2webp.com)): 서버없이 브라우저에서 GIF를 WebP로 변경하는 간단한 웹 어플리케이션입니다. GIF를 WebP로 변환하기 위해 익숙하지 않은 CLI를 사용하는 동료 디자이너의 불편함을 개선하기 위해 개발하였습니다.
- [9c.market](https://9c.market) ([GitHub 저장소](https://github.com/moreal/9c.market))
  - [Nine Chronicles]의 온체인 마켓의 상품들과 인앱 결제 상품들을 웹에서 볼 수 있게 도와주는 서비스입니다.
  - 인앱 결제 대비 온체인 마켓의 상품이 얼마나 더 싼지를 가격 비교를 제공하여 게이머가 더 합리적인 구매를 할 수 있도록 돕고자 하였습니다.
  - 또한 WNCG 토큰 가격을 활용하여 법정 화폐로는 얼마에 구매하는 꼴인지도 보여주어 편의를 제공하고자 하였습니다.

[Fedify]: https://github.com/fedify-dev/fedify
[Bencodex]: https://github.com/planetarium/bencodex
[bencodex-json]: https://github.com/planetarium/bencodex/blob/e0e5ffcbb7376f294045813e5223a8b6b25ca8e1/JSON.md
[vitepress-localsearch-debugging-post]: https://moreal.hashnode.dev/vitepress-localsearch-debugging

기타 다른 오픈소스 활동들은 제 [GitHub 프로필](https://github.com/moreal)을 참조해주세요.

<span class="page-break"></span>

## 학력

2017-2020 [대덕소프트웨어마이스터고등학교](https://dsmhs.djsch.kr/main.do) 정보보안과

## 병역 사항

산업기능요원 현역 복무 완료.

## 발표

- [직렬화 포맷 개량과 라이브러리 구현 - PyCon Korea 2020](https://www.slideshare.net/slideshow/pycon-korea-2020-238651563/238651563)

## 글

저를 이해하시기에 도움이 되시길 바라며 작성했던 글 중 몇 가지를 첨부합니다.

- 기술
  - [페타바이트 트래픽 원인 분석기](https://blog.moreal.dev/2023/03/petabyte-traffic/)
  - [VitePress localSearch 플러그인 버그 디버깅][vitepress-localsearch-debugging-post]
  - [How Go interface works](https://blog.moreal.dev/2020/02/go-interface/)
  - [deno-vite-plugin 디버깅 1편](https://hackers.pub/@moreal/2025/debugging-deno-vite-plugin-part-1)
  - [객체 프로퍼티 키 평가 과정](https://hackers.pub/@moreal/2025/javascript-to-property-key)
- 비기술
  - [Phanpy 번역 기여하기](https://blog.moreal.dev/2024/09/phanpy-translation-guide/)
  - [Hacktoberfest 2024 후기](https://snack.planetarium.dev/kor/2024/11/hacktoberfest/)

</body>
