import { ITheme } from '@/styles/themes';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
