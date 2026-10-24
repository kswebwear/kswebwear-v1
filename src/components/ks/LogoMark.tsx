import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

/** The KS roundel. `onDark` inverts the black artwork for ink backgrounds. */
export default function LogoMark({ size = 40, onDark = false }: { size?: number; onDark?: boolean }) {
  return (
    <Image
      src={SITE_CONFIG.logoUrl}
      alt=""
      width={size}
      height={size}
      className={onDark ? "brightness-0 invert" : undefined}
      style={{ width: size, height: size }}
    />
  );
}
