import { BsGithub, BsGlobe2, BsJournalText } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-7xl min-w-[320px] bg-white p-4">
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
        <div className="mt-20">
          <div className="text-4xl mb-2">Introduce.</div>
          <div className="w-full border border-t border-solid" />
          <div className="mt-4 text-lg">
            대기업 IT 웹 풀스택(Java, React) 개발과 스타트업(Co-funder)
            프론트엔드 테크 리드로서의 다양한 경험이 있습니다.
          </div>
        </div>
      </div>
    </main>
  );
}
