const Color = {
  default: "default",
  gray: "gray",
  brown: "brown",
  orange: "orange",
  yellow: "yellow",
  green: "green",
  blue: "blue",
  purple: "purple",
  pink: "pink",
  red: "red",
  gray_background: "gray_background",
  brown_background: "brown_background",
  orange_background: "orange_background",
  yellow_background: "yellow_background",
  green_background: "green_background",
  blue_background: "blue_background",
  purple_background: "purple_background",
  pink_background: "pink_background",
  red_background: "red_background",
} as const;

export type Color = typeof Color[keyof typeof Color];
