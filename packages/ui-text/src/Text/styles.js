/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import generateComponentTheme from './theme'
/**
 * Generates the style object from the theme and provided additional information
 * @param  {Object} theme The actual theme object.
 * @param  {Object} themeOverride User provided overrides of the default theme mapping.
 * @param  {Object} props the props of the component, the style is applied to
 * @param  {Object} state the state of the component, the style is applied to
 * @return {Object} The final style object, which will be used in the component
 */
const generateStyle = (theme, themeOverride, props, state) => {
  // get the theme variables object for the component
  const componentTheme = generateComponentTheme(theme, themeOverride)
  const {
    size,
    wrap,
    weight,
    fontStyle,
    transform,
    lineHeight,
    letterSpacing,
    color
  } = props

  const colorVariants = {
    primary: componentTheme.primaryColor,
    secondary: componentTheme.secondaryColor,
    'primary-inverse': componentTheme.primaryInverseColor,
    'secondary-inverse': componentTheme.secondaryInverseColor,
    success: componentTheme.successColor,
    brand: componentTheme.brandColor,
    warning: componentTheme.warningColor,
    danger: componentTheme.dangerColor,
    alert: componentTheme.alertColor
  }

  const wrapStyle =
    wrap === 'break-word'
      ? {
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
          hyphens: 'auto'
        }
      : {}

  const weightStyle = {
    normal: componentTheme.fontWeightNormal,
    light: componentTheme.fontWeightLight,
    bold: componentTheme.fontWeightBold
  }

  const fontSizeVariants = {
    'x-small': componentTheme.fontSizeXSmall,
    small: componentTheme.fontSizeSmall,
    medium: componentTheme.fontSizeMedium,
    large: componentTheme.fontSizeLarge,
    'x-large': componentTheme.fontSizeXLarge,
    'xx-large': componentTheme.fontSizeXXLarge
  }

  const lineHeightVariants = {
    default: componentTheme.lineHeight,
    fit: componentTheme.lineHeightFit,
    condensed: componentTheme.lineHeightCondensed,
    double: componentTheme.lineHeightDouble
  }

  const letterSpacingVariants = {
    normal: componentTheme.letterSpacingNormal,
    condensed: componentTheme.letterSpacingCondensed,
    expanded: componentTheme.letterSpacingExpanded
  }

  const textOrInputStyle = {
    '&:focus': {
      outline: 'none'
    },
    color: colorVariants[color],
    ...wrapStyle,
    fontWeight: weightStyle[weight],
    fontStyle: fontStyle,
    fontSize: fontSizeVariants[size],
    lineHeight: lineHeightVariants[lineHeight],
    letterSpacing: letterSpacingVariants[letterSpacing],
    textTransform: transform
  }

  return {
    text: {
      label: 'text',
      fontSize: componentTheme.fontFamily,
      'sub, sup': {
        fontSize: '75%',
        lineHeight: 0,
        position: 'relative',
        verticalAlign: 'baseline'
      },
      sup: {
        top: '-0.4em'
      },
      sub: {
        bottom: '-0.4em'
      },
      'pre, code': {
        all: 'initial',
        fontFamily: componentTheme.fontFamilyMonospace
      },
      'i, em': {
        fontStyle: 'italic'
      },
      'b, strong': {
        fontWeight: componentTheme.fontWeightBold
      },
      p: {
        display: 'block',
        padding: 0,
        margin: componentTheme.paragraphMargin
      },
      '& input': {
        outline: 0,
        appearance: 'none',
        boxSizing: 'border-box',
        background: 'none',
        border: 'none',
        borderRadius: 0,
        padding: 0,
        margin: 0,
        color: 'inherit',
        height: 'auto',
        width: '100%',
        lineHeight: 'inherit',
        textAlign: 'start',
        boxShadow: 'none',
        display: 'block',
        ...textOrInputStyle
      },
      ...textOrInputStyle
    }
  }
}

export default generateStyle
