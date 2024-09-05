import { RefObject } from "react";

export const scrollToRef = (ref: RefObject<HTMLElement>) => {
  if (ref.current) {
    const offsetTop = ref.current.offsetTop;
    const offset = 100;

    window.scrollTo({
      top: offsetTop - offset,
      behavior: "smooth",
    });
  }
};
