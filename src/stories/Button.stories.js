import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export const LargeButton = {
  args: {
    size: "largeCircle",
    font: "bold",
    label: "click",
  },
};

export const PrimaryLarge = {
  args: {
    ...LargeButton,
    isPrimary: true,
  },
};

export const SecondaryLarge = {
  args: {
    ...LargeButton,
    isPrimary: false,
  },
};

export const PrimarySmall = {
  args: {
    isPrimary: true,
    size: "smallCircle",
    font: "regular",
  },
};

export const SecondarySmall = {
  args: {
    isPrimary: false,
    size: "smallCircle",
    font: "regular",
  },
};
