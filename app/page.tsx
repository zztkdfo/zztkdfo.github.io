import { BsGithub, BsGlobe2, BsJournalText } from "react-icons/bs"

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
                <BsGithub />
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
                <img
                  className="w-full h-full object-cover"
                  src="image.jpg"
                  alt="Avatar"
                />
              </div>
              <div>
                저는 대기업 IT 웹 서비스에서{" "}
                <span className="emphasis">풀스택(Java, React) 개발</span>과
                스타트업 (Co-founder)에서{" "}
                <span className="emphasis">프론트엔드 테크 리드</span>로서
                다양한 경험을 쌓았습니다. 현재는 프로젝트의 기술적 방향 설정,
                아키텍처 설계, 기술적 전문성 강화, 팀의 기술적 성장 지원, 리더십
                발휘, 문제 해결 능력 향상, 그리고 효과적인 커뮤니케이션에 중점을
                두고 있습니다.
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
            <div className="mt-4 gap-4 flex flex-col sm:flex-row sm:gap-12 ">
              <div className="w-48">
                <div className="text-lg">2024.08 ~</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프리랜서</span>
                  <span className="xs-badge">퍼스널 브랜딩</span>
                </div>
              </div>
              <div className="sm:pl-12">
                <div className="text-2xl">프리랜서, 퍼스널브랜딩</div>
                <div> ∙ 프리랜서 개발(프론트엔드 개발) 구직 중</div>
                <div> ∙ 개발자 커뮤니티, 퍼스널 브랜딩 커뮤니티 활동 중</div>
              </div>
            </div>

            <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 ">
              <div className="w-48">
                <div className="text-lg">2023.02 ~ 2024.07</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">스타트업</span>
                  <span className="xs-badge">Co-Fonder</span>
                </div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프론트엔드 테크 리드</span>
                </div>
              </div>
              <div className="sm:pl-12">
                <div className="text-2xl">링클로브</div>
                <div>
                  ∙ 스타트업 프론트엔드 테크 리드로 프로젝트 개발 및 회사 운영
                </div>
                <div> ∙ 개발자 커뮤니티, 퍼스널 브랜딩 커뮤니티 활동 중</div>
              </div>
            </div>

            <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 ">
              <div className="w-48">
                <div className="text-lg">2022.02 ~ 2023.01</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">프론트엔드 테크 리드</span>
                </div>
              </div>
              <div className="sm:pl-12">
                <div className="text-2xl">아이준</div>
                <div>
                  ∙ 스타트업 프론트엔드 테크 리드로 프로젝트 개발 및 회사 운영
                </div>
                <div> ∙ 개발자 커뮤니티, 퍼스널 브랜딩 커뮤니티 활동 중</div>
              </div>
            </div>

            <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row sm:gap-12 ">
              <div className="w-48">
                <div className="text-lg">2014.07 ~ 2022.01</div>
                <div className="flex gap-1 pl-2 mt-1">
                  <span className="xs-badge">Backend 개발</span>
                  <span className="xs-badge">Frontend 개발</span>
                </div>
              </div>
              <div className="sm:pl-12">
                <div className="text-2xl">NCITS</div>
                <div>
                  ∙ NCSOFT ITSM(IT Service Management) 시스템 Frontend, Backend
                  개발
                </div>
                <div> ∙ NCSOFT ERP 시스템 Backend 개발</div>
                <div> ∙ NCDINOS 선수 관리 시스템 메인 풀 스택 개발</div>
                <div>
                  ∙ 업무/부서/인사/예약/장애 등등 정보 제공에 필요한 데이터
                  모델링, API, UI/UX 개발
                </div>
                <div>∙ MySQL / MSSQL / Redis 데이터베이스 유지보수 및 관리</div>
                <div>
                  ∙ 사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현
                </div>
                <div> ∙ 레거시 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
