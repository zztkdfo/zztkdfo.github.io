import Link from "next/link"
import { BsGithub, BsGlobe2, BsJournalText } from "react-icons/bs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-5xl min-w-[320px] bg-white p-4">
        <div className="mt-12 flex justify-between items-center">
          <div className="text-2xl sm:text-3xl font-bold">
            <div>이상래</div>
            <div className="text-sm sm:text-base italic text-[#c3c3c3]">
              프론트엔드 개발자
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
                <BsJournalText />
              </div>
              <div className="text-2xl sm:text-3xl cursor-pointer">
                <BsGlobe2 />
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
                반갑습니다. 저는 다수의 IT 웹 서비스에서{" "}
                <span className="emphasis">풀스택(Java, React) 개발</span>과
                스타트업 (Co-founder)에서{" "}
                <span className="emphasis">프론트엔드 테크 리드</span>로서
                다양한 경험을 쌓았습니다. 현재는 프로젝트의 기술적 방향 설정,
                아키텍처 설계, 기술적 전문성 강화, 팀의 기술적 성장 지원, 리더십
                발휘, 문제 해결 능력 향상, 그리고 효과적인 커뮤니케이션에 중점을
                두고 있습니다.
                <br />
                <br />
                <span className="emphasis">
                  프로젝트의 성공을 최우선으로 생각합니다.
                </span>{" "}
                제가 생각하는{" "}
                <span className="emphasis">
                  프로젝트의 성공은 사용자의 만족과 팀의 성장을 의미합니다.
                </span>{" "}
                성공적인 프로젝트는 단순히 목표를 달성하는 것을 넘어, 사용자와
                팀 모두가 성장하고 발전할 수 있는 기회를 제공해야 한다고
                믿습니다.
              </div>
            </div>

            <div className="mt-8">
              협업과 소통을 강조하여 팀 내 시너지를 극대화하며, 건강한 개발
              문화를 조성하는 것이 제가 지향하는 팀 문화입니다. 모든 팀원이
              자신의 역량을 최대한 발휘할 수 있도록 지원하고, 서로의 의견을
              존중하며, 창의적인 해결책을 함께 모색합니다.
            </div>

            <div className="mt-8">
              끝으로, 운동, 러닝, 독서, 글쓰기를 좋아하며, 커피 타임을 매우
              좋아합니다. 인생의 가치관으로{" "}
              <span className="emphasis">실천하기</span>,{" "}
              <span className="emphasis">꾸준하게 하기</span>,{" "}
              <span className="emphasis">습관화하기</span>를 중요하게 생각하며,
              그런 사람이 되기 위해 노력하고 있습니다. 이러한 가치관은 저의
              일상뿐만 아니라, 직업적인 성장에도 큰 영향을 미치고 있습니다.
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-20">
          <div className="text-3xl sm:text-4xl mb-2">Experience.</div>
          <div className="w-full border border-t border-solid" />
          <div className="text-base">
            <div className="mt-4 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
              <div className="w-48">
                <div className="text-xl">2024.08 ~</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프리랜서</span>
                  <span className="xs-badge">퍼스널 브랜딩</span>
                </div>
              </div>
              <div className="sm:pl-12">
                <div className="text-2xl">프리랜서, 퍼스널브랜딩</div>
                <div className="mt-2 sm:pl-2">
                  <div> • 프리랜서 프론트엔드 개발자</div>
                  <div> • 개발자 커뮤니티, 퍼스널 브랜딩 커뮤니티 활동 중</div>
                  <div> • 스타트업 경험을 통한 인사이트와 많은 데이터 축적</div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
              <div className="w-48">
                <div className="text-xl">2023.02 ~ 2024.07</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">스타트업</span>
                  <span className="xs-badge">Co-Fonder</span>
                </div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프론트엔드 테크 리드</span>
                </div>
              </div>
              <div className="sm:pl-12">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>링클로브</div>
                  <div className="text-sm ">(AI+DX 스타트업 )</div>
                </div>
                <div className="mt-2 sm:pl-2">
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
                      - 킨테스 보안 전시회 2024 참가 with cammsys
                    </div>
                    <div className="pl-4">
                      - 코엑스 AI 대전 2024 참가 with brycen kr
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
              <div className="w-48">
                <div className="text-xl">2022.02 ~ 2023.01</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프론트엔드 테크 리드</span>
                </div>
              </div>
              <div className="sm:pl-12">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>아이준</div>
                  <div className="text-sm ">(AIoT 전문기업)</div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div> • 스마트 팩토리 솔루션 개발</div>
                  <div> • B2B 서버실 출입 통제 솔루션 개발</div>
                  <div>
                    • 3D 디지털트윈 비즈니스를 위한 프레젠테이션 및 데모 개발
                  </div>
                  <div> • 주니어 개발자 멘토링 및 코드 리뷰</div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
              <div className="w-48">
                <div className="text-xl">2014.07 ~ 2022.01</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">Backend 개발</span>
                  <span className="xs-badge">Frontend 개발</span>
                </div>
              </div>
              <div className="sm:pl-12">
                <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                  <div>NCITS</div>
                  <div className="text-sm ">
                    (NCSOFT 자회사. 사내용 IT 서비스 구축 및 제공)
                  </div>
                </div>
                <div className="mt-2 sm:pl-2">
                  <div>
                    • NCSOFT ITSM(IT Service Management) 시스템 Frontend,
                    Backend 개발
                  </div>
                  <div> • NCSOFT ERP 시스템 Backend 개발</div>
                  <div> • NCDINOS 선수 관리 시스템 메인 풀 스택 개발</div>
                  <div>
                    • 업무/부서/인사/예약/장애 등등 정보 제공에 필요한 데이터
                    모델링, API, UI/UX 개발
                  </div>
                  <div>
                    • MySQL / MSSQL / Redis 데이터베이스 유지보수 및 관리
                  </div>
                  <div>
                    • 사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현
                  </div>
                  <div> • 레거시 청산 및 프론트엔드 개발자로 전환</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-20">
          <div className="text-3xl sm:text-4xl mb-2">Project.</div>
          <div className="w-full border border-t border-solid" />
          <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
            <div className="w-48">
              <div className="text-xl">2024.03 ~ </div>
            </div>
            <div className="sm:pl-12">
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
                  {" "}
                  • Threejs(react-three-fiber, Drei, mixamo)를 통한 3D 모델 웹
                  기능 구현
                </div>
                <div> • 대화형 ChatBot UI/UX 개발</div>
                <div> • LLM Option Admin 백오피스 툴 개발</div>
                <div className="font-semibold"> • Skill Keywords</div>
                <div className="pl-3 gap-1 flex flex-wrap">
                  <div className="skills">nextjs</div>
                  <div className="skills">trheejs</div>
                  <div className="skills">typescript</div>
                  <div className="skills">recoil</div>
                  <div className="skills">antd</div>
                  <div className="skills">tailwindcss</div>
                  <div className="skills">framer motion</div>
                  <div className="skills">etc</div>
                </div>
                {/* <div className="">
                  <a
                    className="text-blue-500"
                    target="_blank"
                    href="https://digitalchosun.dizzo.com/site/data/html_dir/2024/04/22/2024042280158.html"
                  >
                    • 관련 기사
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
            <div className="w-48">
              <div className="text-xl"> 2023.08 ~ 2023.12</div>
            </div>
            <div className="sm:pl-12">
              <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                <div>AI + DX 플랫폼</div>
              </div>
              <div className="mt-2 sm:pl-2">
                <div className="text-lg">
                  <strong>주요 역할:</strong> 프론트엔드 아키텍처 설계, 기술
                  스택 선정, 리드 개발
                </div>
                <div>
                  {" "}
                  • 일본 EdgeTech+ 2023 전시 참가를 위한 ai, hardware, software
                  기반(AIOT) ai + dx플랫폼
                </div>
                <div className="sm:hidden">
                  • 결품/재고관리, 워크플로우 자동화(RPA)-티켓서비스, 자산
                  반출/입 감지, 데이터센터 자동 상면/자산관리, 온도 및 전력에
                  대한 분석/예측 관리(ESG), 프로젝트 관리(PMS) 서비스 개발
                </div>
                <div className="hidden sm:block">
                  • 결품/재고관리, 워크플로우 자동화(RPA)-티켓서비스, 자산
                  반출/입 감지, 데이터센터 자동 상면/자산관리
                </div>
                <div className="hidden sm:block sm:pl-3">
                  온도 및 전력에 대한 분석/예측 관리(ESG), 프로젝트 관리(PMS)
                  서비스 개발
                </div>
                <div>
                  • Layout에 대한 유동적인 UI/UX를 react dnd로 구현 및 적용
                </div>
                <div>
                  • 글로벌 전시회에 맞춰 다국어 적용 및 구현 (영어, 일본어,
                  중국어, 한국어)
                </div>
                <div>• 작성 중</div>

                <div className="">
                  {" "}
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
                                />{" "}
                              </div>
                              <div>
                                <Image
                                  unoptimized
                                  src={`/images/japan3.jpeg`}
                                  alt={`edgetech`}
                                  width={600}
                                  height={400}
                                  layout="responsive"
                                />{" "}
                              </div>
                              <div>
                                <Image
                                  unoptimized
                                  src={`/images/japan4.jpeg`}
                                  alt={`edgetech`}
                                  width={600}
                                  height={400}
                                  layout="responsive"
                                />{" "}
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
                  <div className="skills">react</div>
                  <div className="skills">vite</div>
                  <div className="skills">recoil</div>
                  <div className="skills">react query</div>
                  <div className="skills">react dnd</div>
                  <div className="skills">i18next</div>
                  <div className="skills">trheejs</div>
                </div>

                <div className="pl-3 gap-1 flex flex-wrap">
                  <div className="skills">goJS</div>
                  <div className="skills">apexCharts</div>
                  <div className="skills">typescript</div>
                  <div className="skills">bootstrap</div>
                  <div className="skills">antd</div>
                  <div className="skills">framer motion</div>
                  <div className="skills">etc</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
            <div className="w-48">
              <div className="text-xl"> 2023.02 ~ 2023.08</div>
            </div>
            <div className="sm:pl-12">
              <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                <div>패밀리타운(Web PC 버전)</div>
              </div>
              <div className="mt-2 sm:pl-2">
                <div className="text-lg">
                  <strong>주요 역할:</strong> 프론트엔드 아키텍처 설계, 기술
                  스택 선정, 리드 개발
                </div>
                <div>• Sendbird 기반의 라이프스타일 커뮤니티 서비스 플랫폼</div>
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
                  일정관리(기념일, 디데이), 이모티콘 등 다양한 기능 개발 및 구현
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
                  <div className="skills">sendbird platform sdk</div>
                  <div className="skills">sendbird ui kit</div>
                  <div className="skills">react</div>
                  <div className="skills">vite</div>
                  <div className="skills">recoil</div>
                  <div className="skills">react query</div>
                  <div className="skills">typescript</div>
                </div>
                <div className="pl-3 gap-1 flex flex-wrap">
                  <div className="skills">figma</div>
                  <div className="skills">bootstrap</div>
                  <div className="skills">antd</div>
                  <div className="skills">slack</div>
                  <div className="skills">jira</div>
                  <div className="skills">confluence</div>
                  <div className="skills">etc</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
            <div className="w-48">
              <div className="text-xl"> 2019.02 ~ 2022.02</div>
            </div>
            <div className="sm:pl-12">
              <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                <div>엔씨소프트 ITSM 리뉴얼 TF</div>
              </div>
              <div className="mt-2 sm:pl-2">
                <div className="text-lg">
                  <strong>주요 역할:</strong> 백엔드 개발, 프론트엔드 개발
                </div>
                <div> • 백엔드 개발에서 프론트엔드 개발로 전환</div>
                <div> • 동적 UI + Workflow 기반 처리 구조</div>
                <div> • 설정 기반 개인화 대시보드 적용</div>
                <div>
                  {" "}
                  • 사용자/부서, 업무, 그룹, 워크플로우, 서비스 요청, 티켓,
                  문의, 템플릿, 등등 여러 서비스 개발 및 개선
                </div>

                <div className="font-semibold"> • Skill Keywords</div>
                <div className="pl-3 gap-1 flex flex-wrap">
                  <div className="skills">spring boot</div>
                  <div className="skills">spring data jpa</div>
                  <div className="skills">rabbitmq</div>
                  <div className="skills">redis</div>
                  <div className="skills">firebase</div>
                  <div className="skills">mariadB</div>
                  <div className="skills">els</div>
                  <div className="skills">graphql</div>
                  <div className="skills">swagger ui</div>
                </div>

                <div className="pl-3 gap-1 flex flex-wrap">
                  <div className="skills">react</div>
                  <div className="skills">react native</div>
                  <div className="skills">styled components</div>
                  <div className="skills">antd</div>
                  <div className="skills">redux</div>
                  <div className="skills">lerna</div>
                  <div className="skills">webppack</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
            <div className="w-48">
              <div className="text-xl"> 2016.06 ~ 2016.12</div>
            </div>
            <div className="sm:pl-12">
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
                <div>• Chart를 통한 통계 데이터 visualization</div>
                <div className="font-semibold"> • Skill Keywords</div>
                <div className="pl-3 gap-1 flex flex-wrap">
                  <div className="skills">c# .net</div>
                  <div className="skills">jquery</div>
                  <div className="skills">ms sql</div>
                  <div className="skills">stored procedure</div>
                  <div className="skills">post man</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
            <div className="w-48">
              <div className="text-xl"> 2015.01 ~ 2019.01</div>
            </div>
            <div className="sm:pl-12">
              <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                <div>엔씨소프트 레거시 ITSM </div>
                <div className="text-sm ">(IT Service Management)</div>
              </div>
              <div className="mt-2 sm:pl-2">
                <div className="text-lg">
                  <strong>주요 역할:</strong> 풀스택 개발
                </div>
                <div> • 기존 시스템의 유지보수 및 기능 개선</div>
                <div> • 클라이언트와 데이터 통신을 위한 API 개발</div>
                <div>
                  {" "}
                  • MVC 패턴에 따른 모델 설계 및 DB Table 설계 및 최적화
                </div>
                <div className="font-semibold"> • Skill Keywords</div>
                <div className="pl-3 gap-1 flex flex-wrap">
                  <div className="skills">c# .net</div>
                  <div className="skills">jquery</div>
                  <div className="skills">ms sql</div>
                  <div className="skills">stored procedure</div>
                  <div className="skills">post man</div>
                  <div className="skills">spring</div>
                  <div className="skills">mybitis</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
            <div className="w-48">
              <div className="text-xl"> 2014.07 ~ 2019.01</div>
            </div>
            <div className="sm:pl-12">
              <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                <div>엔씨소프트 ERP</div>
              </div>
              <div className="mt-2 sm:pl-2">
                <div className="text-lg">
                  <strong>주요 역할:</strong> 풀스택 개발
                </div>
                <div> • 기존 시스템의 유지보수 및 기능 개선</div>
                <div> • 클라이언트와 데이터 통신을 위한 API 개발</div>
                <div>
                  • MVC 패턴에 따른 모델 설계 및 DB Table 설계 및 최적화
                </div>
                <div className="font-semibold"> • Skill Keywords</div>
                <div className="pl-3 gap-1 flex flex-wrap">
                  <div className="skills">c# .net</div>
                  <div className="skills">jquery</div>
                  <div className="skills">ms sql</div>
                  <div className="skills">stored procedure</div>
                  <div className="skills">post man</div>
                  <div className="skills">spring</div>
                  <div className="skills">mybitis</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
            <div className="w-48">
              <div className="text-xl"> 2014.07 ~ </div>
            </div>
            <div className="sm:pl-12">
              <div className="text-2xl sm:flex sm:items-end sm:gap-1">
                <div>이외 다수 프로젝트 및 토이 프로젝트</div>
              </div>
              <div className="mt-2 sm:pl-2">
                <div className="text-lg">
                  <strong>주요 역할:</strong> 풀스택 개발
                </div>
                <div> • 학습을 위한 프로젝트 및 학습</div>
                <div> • 비즈니스 성사를 위한 Demo 개발</div>
                <div className="">
                  {" "}
                  •{" "}
                  <span className="cursor-pointer text-blue-500">
                    <Dialog>
                      <DialogTrigger>
                        관련 정보(대외비로 이미지가 흐릿할 수 있음)
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        {" "}
                        {/* 크기 조정 */}
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
              </div>
              <div>
                Tailwindcss, Redux, React query, recoil, Antd, MUI, Bootstrap,
                Etc
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

        <div className="mt-4 gap-4 flex flex-col sm:flex-row sm:gap-12 border-b border-dotted pb-4 sm:border-none sm:pb-0">
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
            <div className="text-sm ">
              (나의 가치관인 <strong>실천</strong>, <strong>꾸준함</strong>,{" "}
              <strong>습관</strong>에 대해 글로 표현)
            </div>
          </div>
          <div className="w-full border border-t border-solid" />
          <div className="mt-4">
            <div>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://disquiet.io/@zztkdfo/makerlog/%EB%82%AB%ED%88%AC%EB%91%90-not-to-do-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EC%9D%B8%EC%83%9D%EC%9D%84-%EB%B3%80%ED%99%94%EC%8B%9C%ED%82%A4%EB%8A%94-%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%8B%9C%EA%B0%81"
              >
                낫투두(Not To Do) 리스트: 인생을 변화시키는 새로운 시각
              </a>
            </div>

            <div>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://disquiet.io/@zztkdfo/makerlog/%EC%88%98%EC%9A%94%EC%9E%90%EC%97%90%EC%84%9C-%EA%B3%B5%EA%B8%89%EC%9E%90%EB%A1%9C%EC%9D%98-%EB%B3%80%ED%99%98-%EA%B8%80%EC%9D%84-%EC%93%B0%EB%A9%B4%EC%84%9C-%EB%B3%80%ED%99%94%ED%95%9C-%EC%83%9D%EA%B0%81%EA%B3%BC-%EB%A7%88%EC%9D%B8%EB%93%9C"
              >
                수요자에서 공급자로의 변환: 글을 쓰면서 변화한 생각과 마인드
              </a>
            </div>
            <div>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://disquiet.io/@zztkdfo/makerlog/%EB%B8%8C%EB%9E%9C%EB%94%A9-%ED%95%9C-%EC%82%AC%EB%9E%8C%EC%97%90%EA%B2%8C-%EA%B0%90%EB%8F%99%EC%9D%84-%EC%A3%BC%EC%96%B4%EB%9D%BC"
              >
                브랜딩: 한 사람에게 감동을 주어라
              </a>
            </div>
            <div>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://disquiet.io/@zztkdfo/makerlog/%EC%9D%BC%EC%9D%84-%ED%95%A0-%EB%95%8C-%EC%96%B4%EB%96%A4-why%EC%99%80-how%EA%B0%80-%EC%9E%88%EC%9C%BC%EC%8B%A0%EA%B0%80%EC%9A%94"
              >
                일을 할 때, 어떤 Why와 How가 있으신가요??
              </a>
            </div>
            <div>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://disquiet.io/@zztkdfo/makerlog/%EC%9A%B0%EB%A6%AC%EB%8A%94-%EC%99%9C-%EA%B1%B0%EC%A0%88%ED%95%98%EA%B8%B0-%ED%9E%98%EB%93%A4%EA%B9%8C"
              >
                우리는 왜 거절하기 힘들까??
              </a>
            </div>
            <div>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://disquiet.io/@zztkdfo/makerlog/%EB%82%B4%EA%B0%80-%EB%9F%AC%EB%8B%9D%EC%9D%84-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-%EB%82%B4-%EC%9D%BC%EC%9D%84-%EB%8D%94-%EC%9E%98%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4%EC%84%9C"
              >
                내가 러닝을 하는 이유.. 내 일을 더 잘하기 위해서!
              </a>
            </div>
            <div>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://disquiet.io/@zztkdfo/makerlog/%EC%99%9C-%EC%8B%A4%EC%B2%9C%EC%9D%B4-%EC%96%B4%EB%A0%A4%EC%9A%B8%EA%B9%8C-%EC%9E%91%EA%B2%8C-%EC%9E%91%EA%B2%8C"
              >
                왜 실천이 어려울까?? 작게.. 작게..
              </a>
            </div>
            <div>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://disquiet.io/@zztkdfo/makerlog/%EC%B2%AB-%EA%B8%80%EC%93%B0%EA%B8%B0%EC%97%90-%EB%8C%80%ED%95%9C-%EC%84%A4%EB%A0%88%EC%9E%84-%EC%9E%91%EA%B2%8C-%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94-%EC%9A%A9%EA%B8%B0%EC%99%80-%EA%BE%B8%EC%A4%80%ED%95%A8%EC%9D%98-%EC%B2%A0%ED%95%99"
              >
                첫 글쓰기에 대한 설레임: 작게 시작하는 용기와 꾸준함의 철학
              </a>
            </div>
            <div>
              <a
                className="text-blue-500"
                target="_blank"
                href="https://disquiet.io/@zztkdfo/makerlog/%EB%AC%B4%EC%8B%A0%EC%82%AC%EC%9D%98-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B0%9C%ED%8E%B8-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%A4%91%EC%8B%AC%EC%9C%BC%EB%A1%9C%EC%9D%98-%EC%A0%84%ED%99%98"
              >
                무신사의 웹 사이트 개편:모바일 중신으로의 전환
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-20">
          <div className="text-3xl sm:text-4xl mb-2">Education.</div>
          <div className="w-full border border-t border-solid" />
        </div>
      </div>
    </main>
  )
}
