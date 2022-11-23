import { themeObj } from "../theme/themeObj";

type CustomTheme = typeof themeObj;

declare module "styled-components" {
  interface DefaultTheme extends CustomTheme {}
}
