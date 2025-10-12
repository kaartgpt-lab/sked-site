export default function Hero() {
  return (
    <section id="hero" className="relative bg-white">
      <video
        className="w-full h-[48vh] md:h-[60vh] object-cover"
        src="https://cdn.coverr.co/videos/coverr-a-man-working-on-a-laptop-in-a-cafe-6182/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  )
}