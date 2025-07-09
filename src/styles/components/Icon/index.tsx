import React from "react";
import { useTheme, DefaultTheme } from "styled-components";
import { addPxSuffix } from "@/helpers";
import { Icons } from "./Icons";

export type Props = {
  src: Icons;
  width?: string | number;
  height?: string | number;
  margin?: string | number;
  color?: keyof DefaultTheme["colors"];
  fill?: boolean;
  style?: React.CSSProperties;
};

const Icon: React.FC<Props> = ({
  src,
  width,
  height,
  margin,
  color,
  fill,
  style,
}) => {
  const theme = useTheme();
  const icon = Icons[src];

  if (!icon) {
    console.error(`Invalid icon source: ${src}`);
    return null; // Return null or a default component
  }

  return React.cloneElement(icon, {
    style: {
      width: addPxSuffix(width || 0),
      height: addPxSuffix(height || width || 0),
      margin: addPxSuffix(margin || 0),
      fill: fill ? theme.colors[color || "black"] : undefined,
      color: theme.colors[color || "black"],
      ...style,
    },
  });
};

export default Icon;
