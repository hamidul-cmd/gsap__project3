let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "0% 100%",
    end: "70% 50%",
    scrub: true,
  },
});

tl.to(
  ".fanta",
  {
    top: "110%",
    left: "-4%",
    scale: 0.8,
  },
  "orenge"
);
tl.to(
  ".lemon",
  {
    top: "155%",
    left: "20%",
    scale: 0.8,
  },
  "orenge"
);
tl.to(
  ".leaf1",
  {
    top: "110%",
    left: "69%",
    rotate: "70deg",
    scale: 0.8,
  },
  "orenge"
);
tl.to(
  ".leaf2",
  {
    top: "105%",
    left: "0%",
    rotate: "-150deg",
    scale: 0.8,
  },
  "orenge"
);
tl.to(
  ".lemon2",
  {
    top: "168%",
    left: "80%",
    scale: 0.7,
  },
  "orenge"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "0% 100%",
    end: "20% 40%",
    scrub: true,
  },
});

tl2.to(
  ".fanta",
  {
    top: "202%",
    left: "25%",
    scale: 0.7,
  },
  "page3"
);
tl2.to(
    ".lemon",
    {
      top: "190%",
      left: "39%",
      scale: 0.8,
    },
    "page3"
  );
tl2.from(
    ".cola",
    {
      left: "-5%",
      rotate: "-40deg",
      scale: 0.8,
    },
    "page3"
  );
tl2.from(
    ".papsi",
    {
      right: "-5%",
      rotate: "40deg",
      scale: 0.8,
    },
    "page3"
  );
tl2.from(
    ".page3__lemon",
    {
      top: "10%",
    },
    "page3"
  );