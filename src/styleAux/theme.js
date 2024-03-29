export const color = {
  bgPrimary: "rgb(90 90 241 / 93%)",
  bgSecondary: "#3f87a6",
  addBtn: "#0000ffb0",
};

export const displayFlex = (display, direction, justifyContent, alignItem) => {
  return `
    display: ${display};
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItem};
    `;
};
