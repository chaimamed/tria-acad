import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Put your video in /public/assets/ and update these two paths.
const VIDEO_SRC = "/assets/tria-video.mp4";
const POSTER_SRC = "/assets/tria-video-poster.jpg";

const VideoShowcase = () => {
  return (
    <section id="video" className="tria-section pt-0">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="tria-kicker">
            <PlayCircle size={16} aria-hidden="true" />
            شاهد الفيديو
          </p>
          <h2 className="tria-title">تعرّف على أكاديمية TRIA في دقائق</h2>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[320px] sm:max-w-[360px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* Phone-style frame, ratio 9:14 */}
          <div className="rounded-[2.25rem] bg-[#14285C] p-2.5 shadow-2xl">
            <div
              className="relative w-full overflow-hidden rounded-[1.75rem] bg-black"
              style={{ aspectRatio: "9 / 14" }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={VIDEO_SRC}
                poster={POSTER_SRC}
                controls
                playsInline
                preload="metadata"
              >
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;