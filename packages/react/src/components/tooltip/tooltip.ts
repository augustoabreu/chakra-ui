"use client"

import {
  Tooltip as ArkTooltip,
  TooltipArrowProps as ArkTooltipArrowProps,
  TooltipArrowTipProps as ArkTooltipArrowTipProps,
  TooltipContentProps as ArkTooltipContentProps,
  TooltipPositionerProps as ArkTooltipPositionerProps,
  TooltipRootProps as ArkTooltipRootProps,
  TooltipTriggerProps as ArkTooltipTriggerProps,
} from "@ark-ui/react/tooltip"
import {
  HTMLChakraProps,
  SlotRecipeProps,
  UnstyledProp,
  createStyleContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withRootProvider,
  withContext,
  useStyles: useTooltipStyles,
} = createStyleContext("Tooltip")

export { useTooltipStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipRootProps
  extends ArkTooltipRootProps,
    SlotRecipeProps<"Tooltip">,
    UnstyledProp {}

export const TooltipRoot = withRootProvider<TooltipRootProps>(ArkTooltip.Root)

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipTriggerProps
  extends HTMLChakraProps<"button", ArkTooltipTriggerProps> {}

export const TooltipTrigger = withContext<
  HTMLButtonElement,
  TooltipTriggerProps
>(ArkTooltip.Trigger, "trigger")

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipPositionerProps
  extends HTMLChakraProps<"div", ArkTooltipPositionerProps> {}

export const TooltipPositioner = withContext<
  HTMLDivElement,
  TooltipPositionerProps
>(ArkTooltip.Positioner, "positioner")

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipContentProps
  extends HTMLChakraProps<"section", ArkTooltipContentProps> {}

export const TooltipContent = withContext<HTMLDivElement, TooltipContentProps>(
  ArkTooltip.Content,
  "content",
)

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipArrowProps
  extends HTMLChakraProps<"div", ArkTooltipArrowProps> {}

export const TooltipArrow = withContext<HTMLDivElement, TooltipArrowProps>(
  ArkTooltip.Arrow,
  "arrow",
)

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipArrowTipProps
  extends HTMLChakraProps<"div", ArkTooltipArrowTipProps> {}

export const TooltipArrowTip = withContext<
  HTMLDivElement,
  TooltipArrowTipProps
>(ArkTooltip.ArrowTip, "arrowTip")