import Image from "next/image";
import type { Project } from "@/lib/data";

type Screenshot = NonNullable<Project["screenshot"]>;

/** A screenshot in a phone or a simple browser window. */
export function DeviceFrame({ src, alt, frame, width, height }: Screenshot) {
  if (frame === "phone") {
    return (
      <div className="relative w-[220px] max-w-full rounded-[48px] bg-ink p-2.5">
        <div
          aria-hidden="true"
          className="absolute top-4 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink"
        />
        <div className="aspect-[9/19.5] overflow-hidden rounded-[38px] bg-band">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="220px"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="w-[min(100%,420px)] overflow-hidden rounded-xl bg-ink">
      <div aria-hidden="true" className="flex items-center gap-1.5 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-on-dark-muted" />
        <span className="h-2.5 w-2.5 rounded-full bg-on-dark-muted" />
        <span className="h-2.5 w-2.5 rounded-full bg-on-dark-muted" />
      </div>
      <div className="aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 640px) 420px, 100vw"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
