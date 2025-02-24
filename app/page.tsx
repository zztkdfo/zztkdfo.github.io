import Link from "next/link";
import { BsGithub, BsGlobe2, BsJournalText } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { articles } from "@/data/articles";

export default function Home() {
  const calculateExperience = () => {
    const startDate = new Date(2014, 6); // 2014년 7월 (월은 0부터 시작)
    const today = new Date();
    const years = today.getFullYear() - startDate.getFullYear();
    const months = today.getMonth() - startDate.getMonth();
    const totalMonths = years * 12 + months;
    const displayYears = Math.floor(totalMonths / 12);
    const displayMonths = totalMonths % 12;
    return `${displayYears}년 ${displayMonths}개월`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-5xl min-w-[320px] bg-white p-4">
        <div className="mt-12 flex justify-between items-center">
          <div className="text-2xl sm:text-3xl font-bold">
            <div>이상래</div>
            <div className="text-sm sm:text-base italic text-[#c3c3c3]">
              프리랜서 개발자 | 퍼스널 브랜딩
            </div>
          </div>

          <div className="">
            <div className="gap-4 flex justify-end ">
              <div className="text-2xl sm:text-3xl cursor-pointer">
                <Link href={"https://github.com/zztkdfo/"} target="_blank">
                  <BsGithub />
                </Link>
              </div>

              <div className="text-2xl sm:text-3xl cursor-pointer">
                <Link
                  href={"https://portfolio-zztkdfo.vercel.app/"}
                  target="_blank"
                >
                  <BsGlobe2 />
                </Link>
              </div>
            </div>
            <div className="mt-2">
              Email:{" "}
              <span className="text-sm sm:text-base font-bold">
                zztkdfo@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-20">
          <div className="text-3xl sm:text-4xl mb-2">Introduce.</div>
          <div className="w-full border border-t border-solid" />
          <div className="text-base">
            <div className="mt-4 gap-4 flex justify-between items-center">
              <div className="hidden sm:block rounded-3xl overflow-hidden min-w-24 max-w-32">
                <Image
                  unoptimized
                  src={`/images/image.jpg`}
                  alt={`edgetech`}
                  width={600}
                  height={400}
                  layout="responsive"
                />
              </div>
              <div>
                반갑습니다. 다수의 IT 웹 서비스에서{" "}
                <span className="emphasis">풀스택(Java, React) 개발</span>
                {"  "}과 스타트업에서{"  "}
                <span className="emphasis">
                  프론트엔드 테크 리드(Co-founder)
                </span>
                {"  "}
                로 다양한 경험을 쌓았습니다. 현재는 기술적 방향 설정, 아키텍처
                설계, 팀의 기술적 성장 지원, 문제 해결 능력 향상, 그리고
                효과적인 커뮤니케이션에 중점을 두고 있습니다.
                <br />
                <br />
                저는 <span className="emphasis">프로젝트의 성공</span>을{"  "}
                <span className="emphasis">사용자 만족</span>
                {"  "}과<span className="emphasis">팀의 성장</span>
                {"  "}으로 정의합니다. 진정한 성공은 목표 달성을 넘어, 사용자와
                팀 모두가 함께 성장하는 것이라 믿습니다. 협업과 소통을 통해
                건강한 개발 문화를 만들고, 모든 팀원이 최대한의 역량을 발휘할 수
                있도록 지원합니다.
              </div>
            </div>

            <div className="mt-4">
              제 삶의 철학은 <span className="emphasis">{`'실천'`}</span>,{"  "}
              <span className="emphasis">{`'꾸준함'`}</span>,{"  "}
              <span className="emphasis">{`'습관화'`}</span>입니다. 이러한
              철학은 운동, 러닝, 독서, 글쓰기를 통해 일상에 적용되며, 직업적인
              성장에도 큰 영향을 미치고 있습니다. 끝으로,{" "}
              <span className="emphasis">
                {`"매일 매일 아무것도 아닌 일을 꾸준히 하다보면 취미가 되고, 일이
                되며, 나의 적성이 된다."`}
              </span>
              {"  "}처럼, 작은 여유 그리고 꾸준함이 큰 변화를 만들어낸다고
              생각합니다.
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-20">
          <div className="text-3xl sm:text-4xl mb-2 text-left">
            Experience.{" "}
            <span className="text-base italic">
              총 경력: {calculateExperience()}
            </span>
          </div>
          <div className="w-full border border-t border-solid"></div>
          <div className="text-base max-w-6xl mx-auto">
            <div className="mt-4 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2025.01 ~ 현재</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프리랜서</span>
                  <span className="xs-badge">SK 하이닉스</span>
                </div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl">SK 하이닉스 프리랜서</div>
                <div className="mt-2 pl-2">
                  <div>
                    • SK 하이닉스 제조 실시간 생산 관리 시스템 프론트엔드 리드
                    개발
                    <br /> (FDC: Fault Detection & Classification)
                  </div>
                  <div>
                    • 반도체 설비 센서 데이터
                    <br />
                    (빅데이터, 초당 15,000 row 데이터, 데이터 수집 주기)에 따른
                    Chart 구현
                  </div>
                  <div> • 설비(FDC) 도메인에 대한 학습 및 개발 진행 중</div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2024.08 ~ 2024.12</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프리랜서</span>
                  <span className="xs-badge">SK 하이닉스</span>
                </div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl">SK 하이닉스 프리랜서</div>
                <div className="mt-2 pl-2">
                  <div> • SK 하이닉스 풀스택 개발 프리랜서</div>
                  <div> • SK 하이닉스 공정 자동화 백오피스 개발</div>
                  <div> • 프론트엔드 아키텍처 설계 및 기술 스택 선정</div>
                  <div>
                    • AI, LLM, Langchain, Python, FastAPI 서비스 데모 개발
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2024.07 ~ 2024.08</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프리랜서</span>
                  <span className="xs-badge">퍼스널 브랜딩</span>
                </div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl">프리랜서, 퍼스널브랜딩</div>
                <div className="mt-2 pl-2">
                  <div> • 프리랜서 풀스택 개발자</div>
                  <div> • 개발자 커뮤니티, 퍼스널 브랜딩 커뮤니티 활동 중</div>
                  <div> • 스타트업 경험을 통한 인사이트와 많은 데이터 축적</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2023.02 ~ 2024.08</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">스타트업</span>
                  <span className="xs-badge">Co-Founder</span>
                </div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프론트엔드 테크 리드</span>
                </div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>링클로브</div>
                  <div className="text-sm">(AI+DX 스타트업)</div>
                </div>
                <div className="mt-2 pl-2">
                  <div>
                    • 스타트업 공동 창업 및 프론트엔드 테크 리드로 프로젝트 개발
                    및 회사 운영
                  </div>
                  <div>
                    • B2B, B2C, B2G 등 다양한 비즈니스 모델에 대한 솔루션 개발
                    및 제공
                  </div>
                  <div>
                    • 다양한 산업 분야의 클라이언트를 위한 맞춤형 솔루션 개발
                  </div>
                  <div> • 프론트엔드 아키텍처 설계 및 기술 스택 선정</div>
                  <div>
                    • React, Nextjs를 사용한 다수의 웹 애플리케이션 개발
                  </div>
                  <div> • 시장 분석을 통한 제품 개선 및 신규 기능 개발</div>
                  <div> • 스타트 업, 개발자 커뮤니티에서의 활발한 활동</div>
                  <div>
                    • 투자 유치 및 비즈니스를 위한 프레젠테이션 및 데모 준비
                  </div>
                  <div>
                    <div> • 다수의 IT 전시회 참가 with 협력사 </div>
                    <div className="pl-4">
                      - 일본 EdgeTech+ 2023 참가 (일본에서 가장 큰 IT 전시회)
                      with brycen jp
                    </div>
                    <div className="pl-4">
                      - 킨텍스 보안 전시회 2024 참가 with cammsys
                    </div>
                    <div className="pl-4">
                      - 코엑스 AI 대전 2024 참가 with brycen kr
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2022.04 ~ 2023.02</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프론트엔드 테크 리드</span>
                </div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>아이준</div>
                  <div className="text-sm">(AIoT 전문기업)</div>
                </div>
                <div className="mt-2 pl-2">
                  <div> • 스마트 팩토리 솔루션 개발</div>
                  <div> • B2B 서버실 출입 통제 솔루션 개발</div>
                  <div>
                    • 3D 디지털트윈 비즈니스를 위한 프레젠테이션 및 데모 개발
                  </div>
                  <div> • 주니어 개발자 멘토링 및 코드 리뷰</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2014.07 ~ 2022.04</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">Backend 개발</span>
                  <span className="xs-badge">Frontend 개발</span>
                </div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>NCITS</div>
                  <div className="text-sm">
                    (엔씨소프트 자회사. 사내용 IT 서비스 구축 및 제공)
                  </div>
                </div>
                <div className="mt-2 pl-2">
                  <div>
                    • 엔씨소프트 ITSM(IT Service Management) 시스템 Frontend,
                    Backend 개발
                  </div>
                  <div> • 엔씨소프트 ERP 시스템 Backend 개발</div>
                  <div> • 엔씨다이노스 선수 관리 시스템 메인 풀 스택 개발</div>
                  <div>
                    • 업무/부서/인사/예약/장애 등등 정보 제공에 필요한 DB, API,
                    UI/UX 개발
                  </div>
                  <div>
                    • MySQL / MSSQL / Redis 데이터베이스 유지보수 및 관리
                  </div>
                  <div>
                    • 사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현
                  </div>
                  <div> • 레거시 청산 및 프론트엔드 개발자로 전환</div>
                  <div> • 프론트엔드 개발 팀장 및 팀 빌딩</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-20">
          <div className="text-3xl sm:text-4xl mb-2 text-left">Project.</div>
          <div className="w-full border border-t border-solid"></div>
          <div className="text-base max-w-6xl mx-auto">
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2024.12 ~ 현재</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>SK 하이닉스 설비 관리 시스템(MES)</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 설계 및 개발
                  </div>
                  <div>
                    • React 기반 SK 하이닉스 설비 관리 시스템(FDC 도메인)
                  </div>
                  <div>• 프로젝트 아키텍처 설계 및 기술 스택 선정</div>
                  <div>• 대규모 데이터 처리 및 Chart 구현</div>
                  <div>• Atomic 개발 패턴 적용</div>

                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">React</div>
                    <div className="skills">Antd</div>
                    <div className="skills">React Query</div>
                    <div className="skills">Jotai</div>
                    <div className="skills">Ag-Grid</div>
                    <div className="skills">Chart.js</div>
                    <div className="skills">Tailwind CSS</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2024.08 ~ 2024.12</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>SK 하이닉스 공정 자동화 백오피스</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 설계 및 개발
                  </div>
                  <div>• React 기반 SK 하이닉스 공정 자동화 백오피스 개발</div>
                  <div>• 프로젝트 아키텍처 설계 및 기술 스택 선정</div>
                  <div>• 공통 컴포넌트 개발</div>
                  <div>• Atomic 개발 패턴 적용</div>
                  <div>
                    • python, langchain, llm 서비스 데모 개발(코드 분석 및 동적
                    UI 설계)
                  </div>

                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">React</div>
                    <div className="skills">Antd</div>
                    <div className="skills">React Query</div>
                    <div className="skills">python</div>
                    <div className="skills">langchain</div>
                    <div className="skills">llm</div>
                    <div className="skills">etc</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2024.07 ~ 2024.08</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>이력서, 포트폴리오</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 설계 및 개발
                  </div>
                  <div>• 본인에 대한 이력서 작성</div>
                  <div>• 본인에 대한 포트폴리오 작성</div>
                  <div className="">
                    •{" "}
                    <a
                      className="text-blue-500"
                      href="https://zztkdfo.github.io/"
                    >
                      관련 정보 (이력서)
                    </a>
                  </div>
                  <div className="">
                    •{" "}
                    <a
                      className="text-blue-500"
                      target="_blank"
                      href="https://portfolio-zztkdfo.vercel.app/"
                    >
                      관련 정보 (포트폴리오)
                    </a>
                  </div>
                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">Next.js</div>
                    <div className="skills">Three.js</div>
                    <div className="skills">Shadcn/UI</div>
                    <div className="skills">Tailwind CSS</div>
                    <div className="skills">Framer Motion</div>
                    <div className="skills">etc</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2024.03 ~ 2024.08</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>AIHADA</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 프론트엔드 아키텍처 설계, 기술
                    스택 선정, 리드 개발
                  </div>
                  <div>
                    • LLM(대형 언어 모델) 캐릭터 대화 기반 다중 도메인
                    멀티에이전트 서비스
                  </div>
                  <div>
                    • Three.js(react-three-fiber, Drei, mixamo)를 통한 3D 모델
                    웹 기능 구현
                  </div>
                  <div>• 대화형 ChatBot UI/UX 개발</div>
                  <div>• LLM Option Admin 백오피스 툴 개발</div>
                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">Next.js</div>
                    <div className="skills">Three.js</div>
                    <div className="skills">TypeScript</div>
                    <div className="skills">Recoil</div>
                    <div className="skills">Ant Design (AntD)</div>
                    <div className="skills">Tailwind CSS</div>
                    <div className="skills">Framer Motion</div>
                    <div className="skills">etc</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2023.08 ~ 2023.12</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>AI + DX 플랫폼</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 프론트엔드 아키텍처 설계, 기술
                    스택 선정, 리드 개발
                  </div>
                  <div>
                    • 일본 EdgeTech+ 2023 전시 참가를 위한 ai, hardware,
                    software 기반(AIOT) ai + dx플랫폼
                  </div>
                  <div className="sm:hidden">
                    • 결품/재고관리, 워크플로우 자동화(RPA)-티켓서비스, 자산
                    반출/입 감지, 데이터센터 자동 상면/자산관리, 온도 및 전력에
                    대한 분석/예측 관리(ESG), 프로젝트 관리(PMS) 서비스 개발
                  </div>
                  <div className="hidden sm:block">
                    • 재고관리, 워크플로우 자동화(RPA)-티켓서비스, 자산 반출/입
                    감지, 데이터센터 자동 상면/자산관리
                  </div>
                  <div className="hidden sm:block sm:pl-3">
                    온도 및 전력에 대한 분석/예측 관리(ESG), 프로젝트 관리(PMS)
                    서비스 개발
                  </div>
                  <div>
                    • Layout에 대한 유동적인 UI/UX를 React DnD로 구현 및 적용
                  </div>
                  <div>
                    • 글로벌 전시회에 맞춰 다국어 적용 및 구현 (영어, 일본어,
                    중국어, 한국어)
                  </div>
                  <div>
                    •{" "}
                    <span className="cursor-pointer text-blue-500">
                      <Dialog>
                        <DialogTrigger>관련 정보</DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>일본 EdgeTech+ 2023</DialogTitle>
                            <DialogDescription className="pt-2">
                              <div className="space-y-2 h-[800px] overflow-auto">
                                <div>
                                  <Image
                                    unoptimized
                                    src={`/images/japan1.jpeg`}
                                    alt={`edgetech`}
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                  />
                                </div>
                                <div>
                                  <Image
                                    unoptimized
                                    src={`/images/japan2.jpeg`}
                                    alt={`edgetech`}
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                  />
                                </div>
                                <div>
                                  <Image
                                    unoptimized
                                    src={`/images/japan3.jpeg`}
                                    alt={`edgetech`}
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                  />
                                </div>
                                <div>
                                  <Image
                                    unoptimized
                                    src={`/images/japan4.jpeg`}
                                    alt={`edgetech`}
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                  />
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </span>
                  </div>
                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">React</div>
                    <div className="skills">Vite</div>
                    <div className="skills">Recoil</div>
                    <div className="skills">React Query</div>
                    <div className="skills">React DnD</div>
                    <div className="skills">i18next</div>
                    <div className="skills">Three.js</div>
                  </div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">GoJS</div>
                    <div className="skills">ApexCharts</div>
                    <div className="skills">TypeScript</div>
                    <div className="skills">Bootstrap</div>
                    <div className="skills">Ant Design (AntD)</div>
                    <div className="skills">Framer Motion</div>
                    <div className="skills">etc</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2023.02 ~ 2023.08</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>패밀리타운(Web PC 버전)</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 프론트엔드 아키텍처 설계, 기술
                    스택 선정, 리드 개발
                  </div>
                  <div>
                    • Sendbird 기반의 라이프스타일 커뮤니티 서비스 플랫폼
                  </div>
                  <div>
                    • 서버 상태는 React Query로 관리, 클라이언트 상태 관리
                    Recoil로 관리 및 구현
                  </div>
                  <div className="sm:hidden">
                    • 사용자, 인증/인가, 그룹/프로필, 대화방(채널), 앨범(파일),
                    알람, 일정관리(기념일, 디데이), 이모티콘 등 다양한 기능 개발
                    및 구현
                  </div>
                  <div className="hidden sm:block">
                    • 사용자, 인증/인가, 그룹/프로필, 대화방(채널), 앨범(파일),
                    알람
                  </div>
                  <div className="hidden sm:block sm:pl-3">
                    일정관리(기념일, 디데이), 이모티콘 등 다양한 기능 개발 및
                    구현
                  </div>
                  <div>
                    • 이전 프로젝트들의 불편함을 보완하기 위한 container /
                    presenter 패턴 적용
                  </div>
                  <div className="">
                    •{" "}
                    <a
                      className="text-blue-500"
                      target="_blank"
                      href="https://www.family-town.com/features"
                    >
                      관련 정보 (PC 버전)
                    </a>
                  </div>
                  <div className="">
                    •{" "}
                    <a
                      className="text-blue-500"
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.bemily.chat.befamily&hl=ko"
                    >
                      관련 정보
                    </a>
                  </div>
                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">Sendbird Platform SDK</div>
                    <div className="skills">Sendbird UI Kit</div>
                    <div className="skills">React</div>
                    <div className="skills">Vite</div>
                    <div className="skills">Recoil</div>
                    <div className="skills">React Query</div>
                    <div className="skills">TypeScript</div>
                  </div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">Figma</div>
                    <div className="skills">Bootstrap</div>
                    <div className="skills">Ant Design (AntD)</div>
                    <div className="skills">Slack</div>
                    <div className="skills">Jira</div>
                    <div className="skills">Confluence</div>
                    <div className="skills">etc</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2019.02 ~ 2022.02</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>엔씨소프트 차세대 ITSM 2.0 구축</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 백엔드 개발, 프론트엔드 개발
                  </div>
                  <div>• 백엔드 개발에서 프론트엔드 개발로 전환</div>
                  <div>• SOA, EDA 아키텍처 기반 서비스 API 개발</div>
                  <div>• 동적 UI 템플릿 엔진 + Workflow 기반 처리 구조</div>
                  <div>• 템플릿 엔진 기반 개인화 대시보드 적용</div>
                  <div>• 업무 알람관리 서비스 개발 (UI 기반 스케줄러)</div>
                  <div>• React Native 모바일 앱 개발</div>
                  <div>
                    • 사용자/부서, 업무, 그룹, 워크플로우, 서비스 요청, 티켓,
                    문의, 템플릿, 등등 여러 서비스 개발 및 개선
                  </div>
                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">Spring Boot</div>
                    <div className="skills">Spring Data JPA</div>
                    <div className="skills">RabbitMQ</div>
                    <div className="skills">Redis</div>
                    <div className="skills">Firebase</div>
                    <div className="skills">MariaDB</div>
                    <div className="skills">Elasticsearch (ELS)</div>
                    <div className="skills">GraphQL</div>
                    <div className="skills">Swagger UI</div>
                  </div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">React</div>
                    <div className="skills">React Native</div>
                    <div className="skills">Styled Components</div>
                    <div className="skills">Ant Design (AntD)</div>
                    <div className="skills">Redux</div>
                    <div className="skills">Lerna</div>
                    <div className="skills">Webpack</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2016.06 ~ 2016.12</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>엔씨소프트 NCDINOS 선수관리 시스템</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 메인 개발, 풀스택 개발
                  </div>
                  <div>
                    • 선수에 대한 야구 데이터를 기록/통계하여 선수관리 시스템
                  </div>
                  <div>• MVC 패턴에 따른 모델 설계</div>
                  <div>• DB 셋팅 Table 설계 및 최적화</div>
                  <div>• Chart를 통한 통계 데이터 Visualization</div>
                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">C# .NET</div>
                    <div className="skills">jQuery</div>
                    <div className="skills">MS SQL</div>
                    <div className="skills">Stored Procedure</div>
                    <div className="skills">Postman</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2015.01 ~ 2019.01</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>엔씨소프트 ITSM 1.0 구축</div>
                  <div className="text-sm">(IT Service Management)</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 풀스택 개발
                  </div>
                  <div>
                    • 서비스데스크, 변경관리, 장애관리, CMS, 문제관리 등의 ITSM
                    솔루션 유지보수 및 기능 개선
                  </div>
                  <div>• 클라이언트와 데이터 통신을 위한 API 개발</div>
                  <div>
                    • MVC 패턴에 따른 모델 설계 및 DB Table 설계 및 최적화
                  </div>
                  <div>
                    • 하이브리드 모바일 앱 백엔드 개발 (React Native 래프트)
                  </div>
                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">C# .NET</div>
                    <div className="skills">jQuery</div>
                    <div className="skills">MS SQL</div>
                    <div className="skills">Stored Procedure</div>
                    <div className="skills">Postman</div>
                    <div className="skills">Spring</div>
                    <div className="skills">MyBatis</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 border-b border-dotted pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2014.07 ~ 2019.01</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>엔씨소프트 ERP</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 풀스택 개발
                  </div>
                  <div>• 기존 시스템의 유지보수 및 기능 개선</div>
                  <div>• 클라이언트와 데이터 통신을 위한 API 개발</div>
                  <div>
                    • MVC 패턴에 따른 모델 설계 및 DB Table 설계 및 최적화
                  </div>
                  <div className="font-semibold"> • Skill Keywords</div>
                  <div className="pl-3 gap-1 flex flex-wrap">
                    <div className="skills">C# .NET</div>
                    <div className="skills">jQuery</div>
                    <div className="skills">MS SQL</div>
                    <div className="skills">Stored Procedure</div>
                    <div className="skills">Postman</div>
                    <div className="skills">Spring</div>
                    <div className="skills">MyBatis</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-4 pb-4">
              <div className="w-full sm:w-1/3 text-left">
                <div className="text-xl">2014.07 ~</div>
              </div>
              <div className="w-full sm:w-2/3 text-left">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>이외 다수 프로젝트 및 토이 프로젝트</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div className="text-lg">
                    <strong>주요 역할:</strong> 풀스택 개발
                  </div>
                  <div>• 학습을 위한 프로젝트 및 학습</div>
                  <div>• 비즈니스 성사를 위한 Demo 개발</div>
                  <div>
                    •{" "}
                    <span className="cursor-pointer text-blue-500">
                      <Dialog>
                        <DialogTrigger>
                          관련 정보(여러 프로젝트 이미지)
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>
                              이외 다수 프로젝트 및 토이 프로젝트
                            </DialogTitle>
                            <DialogDescription className="pt-2">
                              <div className="space-y-2 h-[800px] overflow-auto">
                                {[...Array(23)].map((_, index) => (
                                  <div key={"images" + index}>
                                    <Image
                                      unoptimized
                                      src={`/images/project${index + 1}.png`}
                                      alt={`project${index + 1}`}
                                      width={800}
                                      height={600}
                                      layout="responsive"
                                    />
                                  </div>
                                ))}
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-20">
          <div className="text-3xl sm:text-4xl mb-2">Skill.</div>
          <div className="w-full border border-t border-solid" />

          <div className="mt-4 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-8">
            <div className="w-48">
              <div className="text-2xl font-semibold">Frontend</div>
            </div>
            <div className="sm:pl-12">
              <div>
                Nextjs, React, Threejs, HTMS, Javascript, CSS, Typescript,
                Tailwindcss,
              </div>
              <div>
                Redux, React query, recoil, Antd, Shadcn/ui, MUI, Bootstrap, Etc
              </div>
            </div>
          </div>

          <div className="mt-4 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-8">
            {" "}
            <div className="w-48">
              <div className="text-2xl font-semibold">Backend</div>
            </div>
            <div className="sm:pl-12">
              <div>
                Java, Spring Boot, Spring Data JPA, Redis, Nodejs, Express,
                Mysql,
              </div>
              <div> Mssql, GraphQL, Elastic search, Etc</div>
            </div>
          </div>
        </div>

        <div className="mt-4 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none">
          <div className="w-48">
            <div className="text-2xl font-semibold">Common</div>
          </div>
          <div className="sm:pl-12">
            <div>
              Chatgpt, Git, Github, Jira, Confluence, Trello, Slack, Docker,
              Jenkins,
            </div>
            <div> Visual Studio Code, Figma, Etc</div>
          </div>
        </div>

        <div className="mt-8 sm:mt-20">
          <div className="text-3xl sm:text-4xl mb-2 sm:flex sm:items-end sm:gap-2">
            <div>Writing. </div>
            <div className="text-sm">
              (나의 가치관인 <strong>실천</strong>, <strong>꾸준함</strong>,{" "}
              <strong>습관</strong>에 대해 글로 표현)
            </div>
          </div>
          <div className="w-full border border-t border-solid" />
          <div className="mt-4">
            {articles.map((article, index) => (
              <div key={article.href + index}>
                <a
                  className="text-blue-500"
                  target="_blank"
                  href={article.href}
                >
                  {article.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-8 sm:mt-20">
          <div className="text-3xl sm:text-4xl mb-2">Education.</div>
          <div className="w-full border border-t border-solid" />
        </div> */}
      </div>
    </main>
  );
}
