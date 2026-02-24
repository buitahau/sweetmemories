import { GoogleIcon } from '../../components/ui/GoogleIcon';

export function HeroSection() {
  return (
    <div className="px-6 md:px-20 py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-slate-900 dark:text-slate-50 text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
              Preserve the moments that matter,{' '}
              <span className="text-primary">without the stress.</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
              A simple, private website for your family&apos;s memories. No passwords, no tech
              friction. Just pure storytelling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-3 rounded-xl h-14 px-8 bg-primary text-background-dark text-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <GoogleIcon className="w-6 h-6" />
              <span>Start with Google</span>
            </button>
            <button className="flex items-center justify-center rounded-xl h-14 px-8 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              Learn More
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-background-light dark:border-background-dark bg-slate-200 overflow-hidden">
                <img
                  alt="Happy family member"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnoTUeeOJo4mNALTnO4x2Vm7-9tbLQYps3RTMmu5e56xsvhjJ9PaZtPIwgj3rDsguI1sGkwG9qkXN_ZRisnY7XQA1V9KekEjkRlJ4wDYfHewwp4VPbQCSrcikNQC-i_ewMO2GSEkCdr0ySTvEVjr5Wf8kgS3DPAXQQ5G45-ZmCaEIjMMWV79n4fIz707Ezm0bpZJsnXOQuorFpvKCJSZLZxP7mpXuoULDsYzwvZ1KvP91l9Gs7ZLsXIkqfemJ-0DagRmClRW4ab3d7"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-background-light dark:border-background-dark bg-slate-200 overflow-hidden">
                <img
                  alt="Smiling parent"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB-tJ7upQzSGLbRZr6Z8AiXOHExBJjfLFiPJ-J5ruL8eyOJ-7WtvIPr6J6sw3Dr0zqpjeQbzt9lmPQD572FDhAITOKrYQl7W4NAUb7x88PoEVnUuqGQzU8SpLLd9WWSz3WlOBpOSrRhihz4LLRi_Eh_gfoGgpAC5eTDksuQcQL7-vuYDKPjIa_izyA-Z55JYIdXOuxYID8cUNmD0zDDyyJdcjPltcLoYpSW7OnJqYnbo4vCutRoPhBFO68eL9fT4psbj36zg6We6Oy"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-background-light dark:border-background-dark bg-slate-200 overflow-hidden">
                <img
                  alt="Joyful family member"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCC8sU1dkaOLIIN2GPkSrXIz0TSGUKRkMRrIhedhw4shYX1mjstdK_5v35bLw03AxWDNlu1e_CS9Dhubq5N47YYYq578kCS62iu0IlRaWRZYW-6O1_E5U2pvE6ibm0lp8uVhf1sI4oD4_3BxxmyGp-YeMzoh-Mq4byRZgkUjxeR49azOgsKYWPqrRzEEFgEp9GcA42D999ZOcGTJrsuGJ8014TDPlLw6HLQrqfCk3kWmo6WNRC2ZQv4gp-02xkf1n3t_Ki9fU3Yne4"
                />
              </div>
            </div>
            <p className="text-sm text-slate-500">Trusted by 2,000+ families</p>
          </div>
        </div>

        <div className="relative">
          <div
            className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
          >
            <img
              alt="Happy family memory in sunlit park"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVIO5LOFfqdELhJezYLajeya5yE9xuv8CTPZlsNhfOtbKmovwXnaMs0tKt_QH-eAue0EuH8639kg-WThK7cuuG204ftTsjSoVivghLqVn-oJ9Ya8UeL5PA95AsCwxmO3_H-HYFv2DAdFhOkCZOWRorAmTnja850CVKCxhfUuPBGHjvF9Bl5fPf0ULbfVuXZ1t1XWyTBOiDLoee5Uzgw3Aqg__8edsAi2AbzALiknBuEOYnqnsXw8eXKWmDoGAqh7uNwW11E4ZX0rOB"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl -rotate-6 hidden md:block">
            <img
              alt="Baby's first steps"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwBs4HsmVE-KpBlL8oXUNpHV9qShdpnsFXoUDU7GLRjFIzRZZcnxk6Mam97zC2TpX_7q6uBsD2oPntnNkj1t_fHbaB9dx_w8LugppwEEsJUbAJobw8YcQfXGHxfq8rUwZP7mEXptQC0vKrI5UNBMs4QLMndCSPR0sosCzJdSEwO_LynI8XYR6tWgU246C_gzJ0tGOxcS5UKGXcwPfbWlkIihmWw2wqQOdVOZuEvdgNpDBzeujMva4FG_RmOQS2GWxD6duz07gYydJw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
