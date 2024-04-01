"use client"

import {
  Slider as ArkSlider,
  SliderControlProps as ArkSliderControlProps,
  SliderLabelProps as ArkSliderLabelProps,
  SliderMarkerGroupProps as ArkSliderMarkerGroupProps,
  SliderMarkerProps as ArkSliderMarkerProps,
  SliderRangeProps as ArkSliderRangeProps,
  SliderRootProps as ArkSliderRootProps,
  SliderThumbProps as ArkSliderThumbProps,
  SliderTrackProps as ArkSliderTrackProps,
  SliderValueTextProps as ArkSliderValueTextProps,
} from "@ark-ui/react/slider"
import {
  HTMLChakraProps,
  SlotRecipeProps,
  UnstyledProp,
  createStyleContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useSliderStyles,
} = createStyleContext("Slider")

export { useSliderStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface SliderRootProps
  extends HTMLChakraProps<"div", ArkSliderRootProps>,
    SlotRecipeProps<"Slider">,
    UnstyledProp {}

export const SliderRoot = withProvider<HTMLDivElement, SliderRootProps>(
  ArkSlider.Root,
  "root",
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderControlProps
  extends HTMLChakraProps<"div", ArkSliderControlProps> {}

export const SliderControl = withContext<HTMLDivElement, SliderControlProps>(
  ArkSlider.Control,
  "control",
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderTrackProps
  extends HTMLChakraProps<"div", ArkSliderTrackProps> {}

export const SliderTrack = withContext<HTMLDivElement, SliderTrackProps>(
  ArkSlider.Track,
  "track",
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderRangeProps
  extends HTMLChakraProps<"div", ArkSliderRangeProps> {}

export const SliderRange = withContext<HTMLDivElement, SliderRangeProps>(
  ArkSlider.Range,
  "range",
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderThumbProps
  extends HTMLChakraProps<"div", ArkSliderThumbProps> {}

export const SliderThumb = withContext<HTMLDivElement, SliderThumbProps>(
  ArkSlider.Thumb,
  "thumb",
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderValueTextProps
  extends HTMLChakraProps<"div", ArkSliderValueTextProps> {}

export const SliderValueText = withContext<
  HTMLDivElement,
  SliderValueTextProps
>(ArkSlider.ValueText, "valueText")

////////////////////////////////////////////////////////////////////////////////////

export interface SliderLabelProps
  extends HTMLChakraProps<"label", ArkSliderLabelProps> {}

export const SliderLabel = withContext<HTMLLabelElement, SliderLabelProps>(
  ArkSlider.Label,
  "label",
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderMarkerGroupProps
  extends HTMLChakraProps<"div", ArkSliderMarkerGroupProps> {}

export const SliderMarkerGroup = withContext<
  HTMLDivElement,
  SliderMarkerGroupProps
>(ArkSlider.MarkerGroup, "markerGroup")

////////////////////////////////////////////////////////////////////////////////////

export interface SliderMarkerProps
  extends HTMLChakraProps<"div", ArkSliderMarkerProps> {}

export const SliderMarker = withContext<HTMLDivElement, SliderMarkerProps>(
  ArkSlider.Marker,
  "marker",
)
