import { GoogleIcon } from '../../components/ui/GoogleIcon';

export function CtaSection() {
  return (
    <div className="px-6 md:px-20 py-20 bg-background-dark text-slate-100 rounded-[2rem] mx-6 md:mx-20 mb-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px]" />
      <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col gap-8 items-center">
        <h2 className="text-4xl md:text-5xl font-black leading-tight">
          Ready to start your family&apos;s digital heirloom?
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Join thousands of families who are preserving their history without the digital clutter.
        </p>
        <button className="flex items-center justify-center gap-3 rounded-xl h-14 px-10 bg-primary text-background-dark text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95">
          <GoogleIcon className="w-6 h-6" />
          <span>Start with Google</span>
        </button>
      </div>
    </div>
  );
}
