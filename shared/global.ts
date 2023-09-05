import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --color-1: #fff;
    --color-2: #000;
    --color-3: #e29578;
    --color-4: #b84e27;
    --color-5: #ffddd2;
}

a{ 
    text-decoration: unset;
}

ul, li{
    list-style: none;
}

    h1, h2, h3, h4, h5, h6, p {
      margin-bottom: 0;
    }

.light-pink-bg{
    background-color: #fef4f1;
}

.section-title {
    text-transform: uppercase;
    color: var(--color-3);
    
    h1, h2, h3{
        line-height: 1;
    }
}

[class*="-detail"] {
    position: absolute;
}

@keyframes hang-sink {
    100% {
    transform: translateY(6px);
    }
}

@keyframes hang {
    0% {
    transform: translateY(6px);
    }
    50% {
    transform: translateY(2px);
    }
    100% {
    transform: translateY(6px);
    }
}

@keyframes icon-float {
    100% {
    transform: translateY(-6px);
    }
}

@keyframes icon-bob {
    0% {
    transform: translateY(-6px);
    }
    50% {
    transform: translateY(-2px);
    }
    100% {
    transform: translateY(-6px);
    }
}

@media only screen and (max-width:1024px){
    [class*="-detail"] {
        display: none;
    }

    .section-title{
        h1, h2, h3{
            text-align: center;
        }
    }
}

`;
