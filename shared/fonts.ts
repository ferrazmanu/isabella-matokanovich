import { createGlobalStyle } from "styled-components";

import { Josefin_Sans, Abril_Fatface } from "next/font/google";

export const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "500"],
});

export const AbrilFatFace = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export const FontStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
p,
span,
strong,
time,
address,
i,
a,
b,
label,
li,
td {
  text-rendering: optimizeLegibility !important;
}

h1, h2, h3, h4, h4, h6{
    font-family: ${AbrilFatFace.style.fontFamily};
    font-weight: 500;
}

p, span, a, ul, li, ol, textarea, input, label{
    font-family: ${JosefinSans.style.fontFamily};
}


/*Font Weights----------------------------------------------------------*/
[class*="-extrabold"] {
  font-weight: 800;
}

[class*="-bold"] {
  font-weight: 700;
}

[class*="-semibold"] {
  font-weight: 600;
}

[class*="-medium"] {
  font-weight: 500;
}

[class*="-regular"] {
  font-weight: 400;
}

[class*="-book"] {
  font-weight: 350;
}

[class*="-light"] {
  font-weight: 300;
}

[class*="-extralight"] {
  font-weight: 200;
}

[class*="-thin"] {
  font-weight: 100;
}

/*-------------------------Titulos*/
[class*="titulo-120"] {
  font-size: clamp(50px, 6.25vw, 120px);
}

[class*="titulo-92"] {
  font-size: clamp(45px, 4.79vw, 92px);
}

[class*="titulo-80"] {
  font-size: clamp(38px, 4.17vw, 80px);
}

[class*="titulo-72"] {
  font-size: clamp(37px, 3.45vw, 72px);
}

[class*="titulo-64"] {
  font-size: clamp(35px, 3.33vw, 64px);
}

[class*="titulo-48"] {
  font-size: clamp(22px, 2.5vw, 48px);
}

[class*="titulo-42"] {
  font-size: clamp(22px, 2.19vw, 42px);
}

[class*="titulo-36"] {
  font-size: clamp(21px, 1.67vw, 36px);
}

[class*="titulo-32"] {
  font-size: clamp(20px, 1.67vw, 32px);
}

[class*="titulo-24"] {
  font-size:clamp(17px, 1.25vw, 24px) ;
}

[class*="titulo-20"] {
  font-size: clamp(15px, 1.04vw, 20px);
}

/*Paragraph*/
[class*="paragraph-24"] {
  font-size: clamp(17px, 1.25vw, 24px);
}

[class*="paragraph-20"] {
  font-size: clamp(14px, 1.04vw, 20px);
}

[class*="paragraph-18"] {
  font-size: clamp(13px, 0.93vw, 18px);
}

[class*="paragraph-16"] {
  font-size: clamp(12px, 0.83vw, 16px);
}

[class*="paragraph-14"] {
  font-size: clamp(12px, 0.62vw, 14px);
}

/*Link*/
[class*="link-24"] {
  font-size: clamp(18px, 1.25vw, 24px);
}

[class*="link-20"] {
  font-size: clamp(14px, 1.04vw, 20px);
}

[class*="link-18"] {
  font-size: clamp(12px, 0.92vw, 18px);
}

[class*="link-16"] {
  font-size: clamp(11.4px, 0.83vw, 16px);
}

[class*="link-14"] {
  font-size: clamp(11px, 0.72vw, 14px);
}
`;
