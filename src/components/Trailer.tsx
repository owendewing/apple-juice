import { useCallback, useEffect, useState } from "react";

/** Documentary stills (UUID-style filenames from `public/images`). */
const STILLS = [
  "/images/C872DD6C-0955-4C0A-BA97-4684FBBE13D3.jpeg",
  "/images/8BD29739-0404-49DE-9E73-666AE421C5CE.jpeg",
  "/images/07D5BFBD-E5B6-4C75-8E07-B62B2D461153.jpeg",
  "/images/7A5E0D90-BF26-44B1-8897-E6FF99757C5E.jpeg",
  "/images/614B65FE-C42A-4440-9948-C84ED704950F.jpeg",
  "/images/37F561EE-1DB6-4A16-90B2-DDCD988E27AC.jpeg",
  "/images/EF135948-D454-44F5-A60D-4ED6426D9686.jpeg",
  "/images/FAF1E0F5-175B-4704-B006-CBEE6B2A0550.jpeg",
  "/images/5FF1BD61-E41D-4D2A-BF56-4F2E6324536D.jpeg",
  "/images/97A05129-039E-49CA-9B6D-BD0809800921.jpeg",
  "/images/CE6C1FEC-A2FD-4D35-9B4B-6C595A29A612.jpeg",
  "/images/94498977-0EA3-478E-9EE7-030B449E42B0.jpeg",
];

const HERO_STILL = STILLS[0];

export default function DocumentaryStills() {
  const [open, setOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const closeAll = useCallback(() => {
    setExpandedIndex(null);
    setOpen(false);
  }, []);

  const closeLightbox = useCallback(() => setExpandedIndex(null), []);

  useEffect(() => {
    if (!open) setExpandedIndex(null);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (expandedIndex !== null) {
          closeLightbox();
        } else {
          closeAll();
        }
        return;
      }
      if (expandedIndex === null) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setExpandedIndex(
          (i) =>
            i === null ? null : (i - 1 + STILLS.length) % STILLS.length,
        );
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setExpandedIndex(
          (i) => (i === null ? null : (i + 1) % STILLS.length),
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, expandedIndex, closeAll, closeLightbox]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div className="relative bg-black flex items-center justify-center h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <img
          src={HERO_STILL}
          alt="Still from Life Is Better With No Ice"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute z-10 border border-white text-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition cursor-pointer rounded-2xl text-center max-w-[min(90vw,28rem)] leading-snug"
        >
          See &ldquo;Life Is Better With No Ice&rdquo; Stills
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Documentary stills"
        >
          <div className="shrink-0 flex justify-end px-6 pt-6 pb-2">
            <button
              type="button"
              onClick={closeAll}
              className="text-white text-lg hover:opacity-70 cursor-pointer"
            >
              Close
            </button>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-10 sm:px-8">
            <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STILLS.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setExpandedIndex(i)}
                  className="group overflow-hidden rounded-lg bg-neutral-900 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label={`View still ${i + 1} larger`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full max-h-[75vh] object-contain mx-auto transition group-hover:opacity-90"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {expandedIndex !== null && (
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92"
              role="presentation"
              onClick={closeLightbox}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="absolute top-6 right-6 z-[70] text-white text-lg hover:opacity-70 cursor-pointer"
              >
                Back
              </button>
              {STILLS.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(
                        (expandedIndex - 1 + STILLS.length) % STILLS.length,
                      );
                    }}
                    className="absolute left-2 sm:left-6 top-1/2 z-[70] -translate-y-1/2 border border-white/60 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer text-xl sm:text-2xl font-light leading-none"
                    aria-label="Previous still"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex((expandedIndex + 1) % STILLS.length);
                    }}
                    className="absolute right-2 sm:right-6 top-1/2 z-[70] -translate-y-1/2 border border-white/60 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer text-xl sm:text-2xl font-light leading-none"
                    aria-label="Next still"
                  >
                    ›
                  </button>
                </>
              )}
              <div
                className="relative z-[65] max-w-[min(96vw,1400px)] max-h-[min(88vh,1200px)] px-14 sm:px-16"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={STILLS[expandedIndex]}
                  alt={`Still ${expandedIndex + 1} of ${STILLS.length} from Life Is Better With No Ice`}
                  className="max-w-full max-h-[min(88vh,1200px)] w-auto h-auto object-contain mx-auto select-none"
                  draggable={false}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
