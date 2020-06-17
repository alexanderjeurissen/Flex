import styled from "styled-components";
import { layout, flexbox, space, compose } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

// NOTE: Flex Display types:
type FLEX = "flex";
type INLINE_FLEX = "inline-flex";

export type DISPLAY =  FLEX | INLINE_FLEX;

// NOTE: Flex direction types:
type COLUMN = "column";
type COLUMN_REVERSE = "column-reverse";
type ROW = "row";
type ROW_REVERSE = "row-reverse";

export type DIRECTION = COLUMN | COLUMN_REVERSE | ROW | ROW_REVERSE;

// NOTE: Flex alignment types:
type BASELINE = "baseline";
type CENTER = "center";
type FLEX_END = "flex-end";
type FLEX_START = "flex-start";
type SPACE_AROUND = "space-around";
type SPACE_BETWEEN = "space-between";
type SPACE_EVENLY = "space-evenly";
type STRETCH = "stretch";

export type Align = BASELINE | CENTER | FLEX_END | FLEX_START | SPACE_AROUND | SPACE_BETWEEN | SPACE_EVENLY | STRETCH;

// NOTE: Flex wrap types:
type WRAP = "wrap";
type NO_WRAP = "nowrap";
type WRAP_REVERSE = "wrap-reverse";

export type WRAPPING = WRAP | NO_WRAP | WRAP_REVERSE;

interface FlexProps {
  alignContent?: FLEX_START | FLEX_END | CENTER | STRETCH | SPACE_AROUND | SPACE_BETWEEN;
  alignItems?: FLEX_START | FLEX_END | CENTER | STRETCH | BASELINE;
  alignSelf?: FLEX_START |  FLEX_END |  CENTER |  STRETCH | BASELINE;
  children: any;
  display?: FLEX| INLINE_FLEX;
  flex?: string | number;
  flexBasis?: string| number;
  flexDirection?: COLUMN | COLUMN_REVERSE | ROW | ROW_REVERSE;
  flexGrow?: string | number;
  flexShrink?: string | number;
  flexWrap?: NO_WRAP | WRAP_REVERSE | WRAP;
  height?: string | number;
  justifyContent?: FLEX_START | FLEX_END | CENTER | SPACE_BETWEEN | SPACE_AROUND | SPACE_EVENLY
  margin?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  order?: number;
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  style?: object
  width?: string | number
}

const Flex = styled('div').withConfig<FlexProps>({ shouldForwardProp })(
  {
    display: 'flex',
    minWidth: 0,
    minHeight: 0
  },
  compose(layout, flexbox, space)
);

Flex.displayName = 'Flex';

export default Flex;
