import "./index.css";

interface ProjectProps {
	title: string;
	period: string;
	descriptions: string[];
	repositories: string[];
	links: string[];
}

// From primer octicon

function GitHubIcon() {
	return (
		<svg
			className="size-4 mt-1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
		</svg>
	);
}

function PhoneIcon() {
	return (
		<svg
			className="size-4 mt-1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path d="M3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V1.75C2 .784 2.784 0 3.75 0ZM3.5 1.75v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
		</svg>
	);
}

function EmailIcon() {
	return (
		<svg
			className="size-4 mt-1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
		</svg>
	);
}

function ResumeIcon() {
	return (
		<svg
			className="size-4 mt-1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
		</svg>
	);
}

function LinkIcon() {
	return (
		<svg
			className="size-4 mt-1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
		</svg>
	);
}

function VideoIcon() {
	return (
		<svg
			className="size-4 mt-1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width="16"
			height="16"
		>
			<path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25Z"></path>
			<path d="M6 10.559V5.442a.25.25 0 0 1 .379-.215l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559Z"></path>
		</svg>
	);
}

function Link({
	link,
}: {
	link: string;
}) {
	return (
		<a className="text-blue-500 hover:underline" href={link}>
			{link}
		</a>
	);
}

function Project({
	title,
	repositories,
	descriptions,
	links,
	period,
}: ProjectProps) {
	return (
		<div className="flex flex-col mt-4 gap-2">
			<h3 className="text-xl font-bold">{title}</h3>
			<p>{period}</p>
			<ul className="flex flex-col gap-1">
				{repositories.map((repo) => (
					<li>
						<p className="flex text-sm gap-2 align-middle">
							<GitHubIcon />
							<Link link={repo} />
						</p>
					</li>
				))}
				{links.map((link) => (
					<li>
						<p className="flex text-sm gap-2 align-middle">
							<LinkIcon />
							<Link link={link} />
						</p>
					</li>
				))}
			</ul>
			<ul className="list-disc ml-5">
				{descriptions.map((desc) => (
					<li>{desc}</li>
				))}
			</ul>
		</div>
	);
}

interface PresentationProps {
	title: string;
	videoLink: string;
	description: string;
}

function Presentation({ title, videoLink, description }: PresentationProps) {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-2xl font-bold">{title}</h2>
			<p className="flex text-sm gap-2 align-middle">
				<VideoIcon />
				<Link link={videoLink} />
			</p>
			<p>{description}</p>
		</div>
	);
}

interface ActivityProps {
	title: string;
	link: string;
	descriptions: string[];
}

function Activity({ title, link, descriptions }: ActivityProps) {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-2xl font-bold">{title}</h2>
			<p className="flex text-sm gap-2 align-middle">
				<GitHubIcon />
				<Link link={link} />
			</p>
			<ul className="list-disc ml-5">
				{descriptions.map((desc) => (
					<li>{desc}</li>
				))}
			</ul>
		</div>
	);
}

interface JobProps {
	company: string;
	keywords: string[];
	projects: ProjectProps[];
}

function Job({ company, keywords, projects }: JobProps) {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-2xl font-bold">{company}</h2>
			<p>2019.08. ~ 재직 중</p>
			<p className="text-sm">
				블록체인 기술을 이용한 게임을 제작하는 기업입니다.
				<br />
				블록체인 기반 게임을 만들수 있도록 하는 .NET 라이브러리, Libplanet와
				이를 통해 만든 나인크로니클이라는 게임 및 관련 서비스 제작에 참여하였습니다.
				<br />
				오픈소스로 프로젝트를 진행하며 라이센스, 협업 과정에 대해 많이 배울 수
				있었습니다.
			</p>
			<ul className="flex flex-row gap-1">
				{keywords.map((x) => (
					<div
						key={x}
						className="text-xs px-2 py-1 rounded-lg font-medium bg-blue-900 text-white"
					>
						{x}
					</div>
				))}
			</ul>

			{projects.map((proj) => (
				proj.title === "Cocona.Docs"
					? <>
						<span className="print:mt-[100px]"/>
						<Project {...proj} />
					  </>
					: <Project {...proj} />
			))}
		</div>
	);
}

function getIcon(iconName: "Email" | "GitHub" | "Phone" | "Resume") {
	if (iconName === "GitHub") {
		return <GitHubIcon />;
	}

	if (iconName === "Email") {
		return <EmailIcon />;
	}

	if (iconName === "Phone") {
		return <PhoneIcon />;
	}

	if (iconName === "Resume") {
		return <ResumeIcon />;
	}
}

function PersonalInfo({
	title,
	value,
	isLink,
}: {
	title: "Email" | "GitHub" | "Phone" | "Resume";
	value: string;
	isLink?: boolean;
}) {
	return (
		<li>
			<p className="flex align-middle gap-2">
				{getIcon(title)}
				{isLink ? (
					<a className="text-blue-500" href={value}>
						{value}
					</a>
				) : (
					<span>{value}</span>
				)}
			</p>
		</li>
	);
}

function App() {
	return (
		<div className="container mx-auto pt-16 pb-32 px-4 flex flex-col text-gray-800 font-light">
			<div className="flex flex-col gap-8">
				<div id="info" className="flex flex-col gap-6">
					<h1 className="font-extrabold text-4xl">이도건</h1>
					<ul className="grid gap-1 mt-4">
						<PersonalInfo title="Email" value="dev.moreal@gmail.com" />
						<PersonalInfo title="Phone" value="+82 10-7422-8059" />
						<PersonalInfo
							title="GitHub"
							value="https://github.com/moreal"
							isLink
						/>
						<PersonalInfo
							title="Resume"
							value="https://resume.moreal.dev/"
							isLink
						/>
					</ul>
					<p className="mt-4">
						안녕하세요, 5년차 소프트웨어 개발자{" "}
						<strong className="font-bold">이도건</strong> 입니다.
						<br />
						<strong className="font-bold">.NET, TypeScript</strong> 등 을
						활용하여 프로덕션 서비스를 개발, 런칭 및 운영한 경험이 있습니다.
						<br />
						<br />
						코드로 <strong className="font-bold">현실 문제를 해결하는 것</strong> 에 관심이 많습니다.<br/>
						<br/>
						반복되는 리뷰보다는 <strong className="font-bold">자동화나 도구를 통해 정말 필요한 리뷰만 할 수 있도록</strong> 노력합니다.<br/>
						한 기술 스택 만을 고집하기 보단 <strong className="font-bold">문제 상황과 팀 상황에 맞는 기술</strong>을 유연하게 사용하고자 노력합니다.<br/>
					</p>
				</div>

				<div id="work" className="flex flex-col gap-4 print:mt-[450px]">
					<h1 className="text-4xl font-bold mt-16 mb-4">업무 경험</h1>
					<Job
						company="Planetarium"
						keywords={[".NET", "C#", "Kubernetes", "Helm", "TypeScript", "NestJS"]}
						projects={[
							{
								title: "Libplanet",
								period: "2019.08. ~ 2020.12.",
								repositories: ["https://github.com/planetarium/libplanet"],
								descriptions: [
									"Unity에서 사용가능한 블록체인 게임을 위한 라이브러리 구현에 참여하였습니다.",
									"머클 트리 기반의 상태 저장 로직 구현하여 상태 조회 속도를 개선 하였습니다.",
								],
								links: [
									"https://docs.libplanet.io/",
								],
							},
							{
								title: "NineChronicles.Headless",
								period: "2020.06. ~ 2023.10.",
								repositories: ["https://github.com/planetarium/NineChronicles.Headless"],
								descriptions: [
									"나인크로니클 게임의 체인을 운영하기 위한 노드 구현체 입니다.",
									"GraphQL을 통해 상태 및 노드 관련 API를 제공하고 MagicOnion, gRPC를 통해 Unity 클라이언트와 통신합니다.",
									"Prometheus에 메트릭을 수집하고 Grafana을 통해 모니터링 합니다.",
								],
								links: [
									"https://planetarium.github.io/NineChronicles.Headless",
									"https://planetarium.github.io/NineChronicles.Headless/cli",
									"https://planetarium.github.io/NineChronicles.Headless/graphql",
								],
							},
							{
								title: "NineChronicles.EthBridge",
								repositories: [
									"https://github.com/planetarium/NineChronicles.EthBridge",
								],
								descriptions: [
									"Nine Chronicles 네트워크와 이더리움 네트워크 간에 토큰을 브릿지 할 수 있는 수탁형 브릿지를 구현하였습니다.",
								],
								period: "2021.04. ~ 2022.11.",
								links: [],
							},
							{
								title: "Cocona.Docs",
								repositories: ["https://github.com/planetarium/Cocona.Docs"],
								descriptions: [
									"Cocona, .NET CLI 프레임워크로 생성된 커맨드라인 앱에 2줄을 추가하여 문서를 생성할 수 있게 하였습니다. 이 라이브러리를 통해 Cocona를 활용한 사내 CLI 앱의 문서들을 자동으로 생성하게 되었습니다.",
								],
								period: "2022.04. ~ 2022.04. / 2023.08 ~ 2023.08.",
								links: [
									"https://planetarium.github.io/Cocona.Docs/",
									"https://planetarium.github.io/NineChronicles.Headless/cli",
								],
							},
							{
								title: "9c-board",
								period: "2022.12. ~ 2023.11.",
								repositories: ["https://github.com/moreal/9c-board"],
								descriptions: [
									"나인크로니클 체인의 상태를 웹에서 가시성 있게 보기 위한 도구입니다.",
									"슬랙 채널 대화 중 사내 팀원 분들이 작업하실때 매번 개발자 분께 요청하시는 모습을 보고 만들기 시작하여 운영에 필요한 여러 상태를 확인할 수 있는 기능을 만들어 운영에 도움을 주었고, 긍정적인 피드백을 받았습니다.",
								],
								links: [
									"https://9c-board.netlify.app/odin/avatar/0xaa6265Ba002fF2f6c2bB94D0b0bD06500b35680B",
								],
							},
							{
								title: "9c-rudolf",
								period: "2023.10. ~ 2023.11.",
								repositories: ["https://github.com/planetarium/9c-rudolf"],
								descriptions: [
									"나인크로니클 모바일 사전 예약 이벤트의 보상을 안전히 대량으로 지급하기 위해 만들어졌습니다.",
									"RDB 기반으로 요청을 쌓고 순차적으로 트랜잭션으로 묶어 아이템을 지급하였습니다.",
								],
								links: [],
							},
							{
								title: "NineChronicles.Bridge",
								repositories: [
									"https://github.com/planetarium/NineChronicles.Bridge",
									"https://github.com/planetarium/NineChronicles.Bridge.API",
								],
								descriptions: [
									"Nine Chronicles 네트워크 간 재화를 주고 받을수 있는 수탁형 브릿지를 구현하였습니다.",
									"코드 수정 과정에서 발생할 수 있는 문제를 방지하기 위해 인터페이스를 통해 RDB 기반으로 운영할 수 있게 점진적으로 마이그레이션 하였습니다.",
									"이후 기타 프로젝트에서 사용할 수 있도록 NineChronicles.Bridge.API를 개발하고, Swagger와 간이 프론트엔드를 제공하여 데이터를 사용할 수 있게 하였습니다.",
								],
								period: "2023.11. ~ 2023.12.",
								links: [
									"https://planetarium.github.io/NineChronicles.Bridge.API",
								],
							},
						]}
					/>
				</div>

				<div id="presentation" className="flex flex-col gap-4 mt-4">
					<h1 className="text-4xl font-bold mt-16 mb-4">발표</h1>
					<Presentation
						title="PyCon Korea 2020 - 직렬화 포맷 개량과 라이브러리 구현"
						videoLink="https://www.youtube.com/watch?v=Z4nx-cONpAc"
						description="BitTorrent에서 사용되던 Bencode를 개량하여 만든 Bencodex 직렬화 포맷에 대해 소개했습니다."
					/>
				</div>

				<div id="activity" className="flex flex-col gap-4 mt-4">
					<h1 className="text-4xl font-bold mt-16 mb-4">오픈소스 활동</h1>
					<Activity
						title="RustPython/RustPython"
						link="https://github.com/RustPython/RustPython"
						descriptions={[
							"2021, 2022 컨트리뷰톤 행사를 통해 Rust로 Python을 구현하는 프로젝트에 참여했습니다."
						]}
					/>
					<Activity
						title="moreal/bencodex-rs"
						link="https://github.com/moreal/bencodex-rs"
						descriptions={[
							"Planetarium 에서 사용하는 Bencodex 직렬화 포맷의 Rust 구현체 입니다."
						]}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
