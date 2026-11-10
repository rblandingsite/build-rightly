import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import emberBold from "./assets/fonts/amazon-ember-bold.ttf.asset.json";
import emberLight from "./assets/fonts/amazon-ember-light.ttf.asset.json";
import "./styles.css";

// Absolute asset URLs also work on the independently hosted GitHub Pages domain.
const assetOrigin = "https://build-refined-vision.lovable.app";
const fonts = document.createElement("style");
fonts.textContent = `
  @font-face { font-family: 'Amazon Ember'; src: url('${assetOrigin}${emberLight.url}') format('truetype'); font-weight: 300 500; font-style: normal; font-display: swap; }
  @font-face { font-family: 'Amazon Ember'; src: url('${assetOrigin}${emberBold.url}') format('truetype'); font-weight: 600 900; font-style: normal; font-display: swap; }
`;
document.head.appendChild(fonts);
const root = document.getElementById("root");
if (!root) throw new Error("Application root is missing");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
