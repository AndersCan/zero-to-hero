import { debounce } from "./utils/debounce";

export function activateTrailer() {
  const trailer = document.getElementById("trailer");
  const iconBall = document.getElementById("trailer-icon-ball");
  const iconWizard = document.getElementById("trailer-icon-wizard");

  if (!trailer) {
    throw new Error("no #trailer");
  }
  if (!iconBall || !iconWizard) {
    throw new Error("no #trailer-icon-ball or trailer-icon-wizard");
  }

  function animateTrailer(e: MouseEvent, interacting: boolean) {
    if (!trailer) {
      throw new Error("no #trailer");
    }

    const cursorOffsetX = interacting ? 1 : 2;
    const cursorOffsetY = interacting ? -9 : 2;

    const x = e.pageX - trailer.offsetWidth / 2;
    const y = e.pageY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `translate(calc(${x}px + ${cursorOffsetX}vw), calc(${y}px + ${cursorOffsetY}vw)) scale(${
        interacting ? 1 : 1
      })`,
      // transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`,
    };

    trailer.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  }

  // const getTrailerClass = (type: string) => {
  //   console.warn("getTrailerClass", type);
  //   switch (type) {
  //     case "text-explainer":
  //       return "wizard";
  //     default:
  //       console.warn("no trailer type for ", type);
  //       return "";
  //   }
  // };

  const handleMouseMove = (event: MouseEvent) => {
    if (!event.target) {
      return;
    }
    const interactable = (event.target as HTMLElement).closest(
      "[data-trailer-type]"
    ) as HTMLElement;
    const interacting = interactable !== null;

    animateTrailer(event, interacting);

    trailer.classList.toggle("active", interacting);
    if (interacting) {
      // trailer.classList.toggle()
      // const type = interactable.dataset.trailerType;
      // if (type) {
      // }
    }
  };

  const deb = debounce(handleMouseMove, 2);

  window.addEventListener("mousemove", deb, { passive: true });
}
