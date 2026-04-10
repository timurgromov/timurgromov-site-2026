type HeroVideoProps = {
  title: string;
  description: string;
  poster?: string;
  src?: string;
};

export function HeroVideo({ title, description, poster, src }: HeroVideoProps) {
  return (
    <div className="section-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,106,63,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(89,112,93,0.18),transparent_28%)]" />
      {src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-85"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))]" />
      )}
      <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-8 sm:p-10">
        <p className="section-label w-fit">Фоновое видео</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-paper sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/68 sm:text-base">{description}</p>
      </div>
    </div>
  );
}
