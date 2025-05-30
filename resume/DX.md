<head>
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r931bdi976");

    function setupPollingReload() {
        let lastModified = '';

        fetch(window.location.href, { method: 'HEAD' })
            .then(response => {
                lastModified = response.headers.get('Last-Modified');
                setInterval(() => {
                    fetch(window.location.href, { method: 'HEAD' })
                        .then(response => {
                            const newLastModified = response.headers.get('Last-Modified');
                            if (newLastModified !== lastModified) {
                                lastModified = newLastModified;
                                location.reload();
                            }
                        })
                        .catch(error => console.error('파일 변경 감지 오류:', error));
                }, 1000); // 1초마다 확인
            })
            .catch(error => console.error('초기 파일 정보 가져오기 오류:', error));
    }
    
    window.addEventListener('DOMContentLoaded', function() {
        setupPollingReload();
    });
  </script>
  <meta charset="UTF-8">
  <link rel="shortcut icon" href="/logo.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@200..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="./style.css">
  <title>이도건 이력서</title>
</head>
<body>

# 이도건, 소프트웨어 엔지니어

안녕하세요, 소프트웨어 엔지니어 이도건입니다.

제품의 초기부터 성장 과정을 따라 다양한 역할로써 넓게 일하며 여러 경험을 하였습니다. 오픈소스 기여를 즐겨하며 이를 통해서도 다양한 경험을 쌓고 회사 업무에 활용하여 효용을 보기도 하였습니다.

지금까지 블록체인·게임 도메인에서 5년간 경험을 쌓았지만, 새로운 도메인에서 경험을 쌓고자 기회를 찾고 있습니다. 고객의 불편함을 해결하는 것이 일을 하는 이유로 삼고자 하고 있습니다.

<div id="contact">

## 연락처

- 이메일: [dev.moreal@gmail.com](mailto:dev.moreal@gmail.com)
- LinkedIn: [devmoreal](https://www.linkedin.com/in/devmoreal/)

</div>

<div class="work-experience">

## 업무 경험

### 블록체인 코어 엔지니어
<p class='role-metadata'>Planetarium, 2019.08. ~ 2020.12.</p>

P2P 멀티플레이어 온라인 게임을 만들기 위한 오픈소스 라이브러리 [Libplanet] 개발에 주로 참여하였습니다.  

상태 변경 로직이 결정적이지 않아 노드 별로 다른 상태를 가지고 있음에도 적절히 검증하지 않아 알기 어려울 뿐더러, 상태를 조회하는데도 성능 문제가 있었습니다. 머클 트리를 활용하여 상태 검증을 용이하게 하여 결정적인 상태를 유지하도록 하는데 기여하였고, 중복 저장을 줄여 저장 공간도 확보함과 동시에 조회 성능도 향상시켰습니다.

또한 오픈소스 라이브러리를 만들며 Semver 기반으로 배포 및 운영하는 방법에 대해 익혔습니다.

제가 [Libplanet]에 기여한 내용은 GitHub 저장소([이슈](https://github.com/search?q=repo:planetarium/libplanet%20author:moreal&type=issues), [PRs](https://github.com/search?q=repo:planetarium/libplanet%20author:moreal&type=pullrequests))에서 확인하실 수 있습니다.

사용한 기술: C#, .NET, Unity, RocksDB, TypeScript.

[Libplanet]: https://github.com/planetarium/libplanet
[Nine Chronicles]: https://nine-chronicles.dev/

### 백엔드 엔지니어
<p class='role-metadata'>Planetarium, 2021.01. ~ 2023.12.</p>

[Libplanet]을 활용한 온체임 게임 [Nine Chronicles] 개발에 참여하였습니다. 주로 블록체인 노드 개발과 게임 로직 구현, Kubernetes를 활용한 운영 업무를 맡았습니다.

외에도, [Nine Chronicles] 메인넷과 Ethereum 사이에 WNCG 오갈수 있도록 하는 수탁형 브릿지를 개발하였습니다. 회사 기조에 맞게 오픈소스로 개발하는 것은 물론이고, 투명성을 위해 수동으로 토큰 발행하는 경우들을 [저장소 README를 통해 기록하여](https://github.com/planetarium/NineChronicles.EthBridge/blob/a61801ea76b14c19b4ee8d8d404e5f7a387c016c/README.md#collateral) 이런 것들이 암암리에 진행되지 않도록 주도적으로 챙겼습니다.

사용한 기술: C#, .NET, RocksDB, Kubernetes, Helm, Node.js, SQLite.


### DX 엔지니어
<p class='role-metadata'>Planetarium, 2022.07. ~ 2024.12.</p>

반복되는 작업을 라이브러리, 서비스 모듈 등으로 개발하여 내부 개발자들의 생산성을 높였습니다. 또한 라이브러리 및 서비스, 외부 개발자들이 [Nine Chronicles] 관련 모드를 쉽게 만들고 기여할 수 있도록 하는 것을 목표로 활동하였습니다.

- 모바일 버전 사전 예약 보상을 블록체인 네트워크에 무리를 주지 않고 지급하기 위한 큐 서비스를 개발하였습니다. ([GitHub 저장소](https://github.com/planetarium/9c-rudolf))
  - 기존에 많이 문제가 되었던 부분은 트랜잭션 유실로 인한 논스가 중복된 트랜잭션 발행, 그리고 그에 따른 의도치 않은 트랜잭션 실행이었습니다.
  - 때문에 트랜잭션들을 RDB에 저장하고 저장된 트랜잭션 데이터들을 바탕으로 다음 트랜잭션을 발행하는 방식으로.
- [Nine Chronicles]는 모바일 출시 당시 트랜잭션 수용량을 늘리기 위하여 체인을 여러 개 띄우는 방법을 선택했습니다. 이 체인들 간에 재화를 이동할 수 있도록 브릿지를 하는 서비스를 개발하였습니다. ([GitHub 저장소](https://github.com/planetarium/NineChronicles.Bridge))
- 업무 중 .NET 기반 CLI 앱을 작성할 때 [Cocona] 라이브러리를 활용하여 작성하였습니다. 넘겨줘야 하는 값이나 인자를 
- [Libplanet]은 자체적으로 개발한 라이브러리였기에 블록체인에서 흔히 사용되는 이더리움 생태계의 라이브러리들을 활용할 수 없어 진입 장벽이 높았습니다. 내·외부 개발자들이 쉽게 트랜잭션을 만들 수 있도록 JavaScript 기반 라이브러리들을 개발하였습니다. ([GitHub 저장소](https://github.com/planetarium/lib9c/tree/fce75af69134033b02badf9fabf7e789d981d651/integrations/javascript/%40planetarium))
- 블록체인의 특성상 블록들을 모두 연산하면 원하는 상태를 얻을 수 있지만, 스토리지 용량과 성능 등의 문제로 상태를 얻기 어려운 문제가 있습니다. 최신 상태만을 보존하는 동기화 프레임워크를 제공하여 최신 상태를 쉽게 사용할 수 있도록 하는 서비스를 개발하였습니다 ([GitHub 저장소](https://github.com/planetarium/mimir)). 이를 활용하여 외부 개발자가 자신만의 마켓 서비스를 만들기도 하였으며, 게임 요소 중 랭킹을 보여주는데 사용되기도 하였습니다.
- 외부 개발자를 유치하기 위해 공모전을 기획 및 진행하였습니다. 또한 [Hacktoberfest] 오프라인 행사를 열거나, 

[Cocona]: https://github.com/mayuki/Cocona

</div>

<h2 class="page-break">오픈 소스</h2>

번역, 오타 수정, 버그 수정 및 기능 추가 등 여러 방식으로 오픈소스에 기여하고 있습니다. 모르는 것들을 배우기도 하고, 업무에 필요한 버그를 직접 수정하기도 합니다.

- [RustPython](https://github.com/RustPython/RustPython/pulls?q=author:moreal): 오픈소스 컨트리뷰션 아카데미를 계기로 참여하여 Union 타입 구현 등 기능 구현으로 기여하고 있습니다.
- [clig.kr](https://clig.kr) ([GitHub 저장소](https://github.com/moreal/cli-guidelines-kr)): CLI 앱을 작성할 때 종종 참고하던 CLI 앱 작성 가이드인 clig.dev를 번역하였습니다. [GeekNews에도 공유](https://news.hada.io/topic?id=19007)되었습니다.
- [DefinitelyTyped mixpanel-browser](https://github.com/DefinitelyTyped/DefinitelyTyped/pulls?q=is:pr+moreal): 업무에 사용하던 Mixpanel 라이브러리의 타입 정의에 오류가 있어 수정했습니다. 해당 패키지의 메인테이너로 다른 기여자들의 PR을 리뷰하며 기여하기도 하였습니다.
- [GraphQL .NET](https://github.com/search?q=org:graphql-dotnet+author:moreal&type=pullrequests): 회사 업무 중 만난 버그 직접 기여하였습니다.
- [rust-analyzer](https://github.com/rust-lang/rust-analyzer/pull/11869): Rust 개발을 하던 중 코드블록 하이라이팅이 잘 되지 않는 문제를 발견하여 해결하였습니다.

다른 오픈소스 프로젝트에 기여하는 것 외에도 개인 프로젝트도 오픈소스 라이선스로 공개하고 있습니다.

- [agilestory.blog](https://agilestory.blog) ([GitHub 저장소](https://github.com/moreal/agilestory.blog)): "애자일 이야기" 블로그 글을 쉽게 찾아 읽을 수 있도록 도와주는 서비스입니다.
  - 저 이외에도 "애자일 이야기" 블로그의 글을 검색하여 찾아보려는 사람들이 있는 것을 인지하고 개발하였습니다.
- [bencodex-rs](https://crates.io/crates/bencodex-rs) ([GitHub 저장소](https://github.com/moreal/bencodex-rs)): [Libplanet]에서 사용하는 [Bencodex] 직렬화 포맷의 Rust 구현체입니다.
  - 개인적인 사이드프로젝트로 시작했지만 사내 업무 과정 중 상태를 열어보는 것이 불편하여 [Bencodex JSON 스펙][bencodex-json]에 따라 JSON 형식으로 변환하는 기능을 마저 구현하고 CLI로 인터페이스를 만들어서 사내 업무에 활용하였습니다.
- [gif2webp.com](https://gif2webp.com) ([GitHub 저장소](https://github.com/moreal/gif2webp.com)): 서버없이 브라우저에서 GIF를 WebP로 변경하는 간단한 웹 어플리케이션입니다. GIF를 WebP로 변환하기 위해 익숙하지 않은 CLI를 사용하는 동료 디자이너의 불편함을 개선하기 위해 개발하였습니다.
- [9c.market](https://9c.market) ([GitHub 저장소](https://github.com/moreal/9c.market))
  - [Nine Chronicles]의 온체인 마켓의 상품들과 인앱 결제 상품들을 웹에서 볼 수 있게 도와주는 서비스입니다.
  - 인앱 결제 대비 온체인 마켓의 상품이 얼마나 더 싼지를 가격 비교를 제공하여 게이머가 더 합리적인 구매를 할 수 있도록 돕고자 하였습니다.
  - 또한 WNCG 토큰 가격을 활용하여 법정 화폐로는 얼마에 구매하는 꼴인지도 보여주어 편의를 제공하고자 하였습니다.

[Bencodex]: https://github.com/planetarium/bencodex
[bencodex-json]: https://github.com/planetarium/bencodex/blob/e0e5ffcbb7376f294045813e5223a8b6b25ca8e1/JSON.md


<h2 class="page-break">학력</h2>

2017-2020 [대덕소프트웨어마이스터고등학교](https://dsmhs.djsch.kr/main.do) 정보보안과

## 병역 사항

산업기능요원 현역 복무 완료.

## 발표

- [직렬화 포맷 개량과 라이브러리 구현 - PyCon Korea 2020](https://www.slideshare.net/slideshow/pycon-korea-2020-238651563/238651563)

## 글

전체 글은 [제 블로그](https://moreal.dev/blog/)에서 확인하실 수 있습니다.

- 기술
  - [페타바이트 트래픽 원인 분석기](https://moreal.dev/blog/petabyte-traffic/)
  - [How Go interface works](https://moreal.dev/blog/go-interface/)
- 비기술
  - [Phanpy 번역 기여하기](https://moreal.dev/blog/phanpy-translation-guide/)
  - [Hacktoberfest 2024 후기](https://snack.planetarium.dev/kor/2024/11/hacktoberfest/)

</body>
