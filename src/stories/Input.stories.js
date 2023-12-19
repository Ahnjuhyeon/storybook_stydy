import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
};

export const LargeInput = {
  args: {
    size: "large",
    font: "bold",
    label: "search",
  },
};

export const PrimaryLarge = {
  args: {
    ...LargeInput,
    isPrimary: true,
  },
};

export const SecondaryLarge = {
  args: {
    ...LargeInput,
    isPrimary: false,
  },
};

export const PrimarySmall = {
  args: {
    isPrimary: true,
    size: "small",
    font: "regular",
  },
};

export const SecondarySmall = {
  args: {
    isPrimary: false,
    size: "small",
    font: "regular",
  },
};
