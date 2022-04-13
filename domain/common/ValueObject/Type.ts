const Type = {
  text: "text",
  mention: "mention",
  equation: "equation",
} as const;

export type Type = typeof Type[keyof typeof Type];
