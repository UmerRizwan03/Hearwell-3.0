const Loader = () => {
  return (
    <div className="h-[100dvh] flex items-center justify-center relative bg-white">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] animate-[bounce_1.4s_infinite_ease-in-out_both] [animation-delay:-0.32s]"></div>
        <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] animate-[bounce_1.4s_infinite_ease-in-out_both] [animation-delay:-0.16s]"></div>
        <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] animate-[bounce_1.4s_infinite_ease-in-out_both]"></div>
      </div>
    </div>
  );
};

export default Loader;
