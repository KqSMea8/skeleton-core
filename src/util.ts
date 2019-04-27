import { COMMON_NAME_PREFIX, MOCK_TEXT_ID } from './constant'
export const styleCache = new Map()

export const addStyle = function (selector: string, rule: any) {
    if (!styleCache.has(selector)) {
        styleCache.set(selector, rule)
    }
}

export const shapeStyle = function (shape: string) {
    const selector = `.${COMMON_NAME_PREFIX}${shape}`
    const rule = `{
    border-radius: ${shape === 'rect' ? '0' : '50%'}
  }`
    addStyle(selector, rule)
}

export const addClass = function (ele: any, classArray: Array<string>) {
    classArray.forEach(item => {
        ele.classList.add(item)
    })
}

export const px2relativeUtil = (px: string, unit = 'rem', decimal = 4) => {
    const pxValue = Number(px.match(/(\d+)/)[0])
    if (unit === 'rem') {
        const htmlElementFontSize = getComputedStyle(document.documentElement).fontSize
        return `${(pxValue / parseFloat(htmlElementFontSize)).toFixed(decimal)}${unit}`
    } else {
        const dimensions: { [key: string]: number } = getViewPortSize()
        const base = dimensions[unit]
        return `${(pxValue / base * 100).toFixed(decimal)}${unit}`
    }
}

export const getTextWidth = (text: string, style: any) => {
    let offScreenParagraph = document.querySelector(`#${MOCK_TEXT_ID}`) as HTMLElement
    if (!offScreenParagraph) {
        const wrapper = document.createElement('p')
        offScreenParagraph = document.createElement('span')
        Object.assign(wrapper.style, {
            width: '10000px'
        })
        offScreenParagraph.id = MOCK_TEXT_ID
        wrapper.appendChild(offScreenParagraph)
        document.body.appendChild(wrapper)
    }
    Object.assign(offScreenParagraph.style, style)
    offScreenParagraph.textContent = text
    return offScreenParagraph.getBoundingClientRect().width
}

export const transparent = function (ele: any) {
    const className = COMMON_NAME_PREFIX + 'transparent'
    const rule = '{color: transparent} !important;'
    addStyle(`.${className}`, rule)
    addClass(ele, [className])
}

export const queryAll = document.querySelectorAll.bind(document)

export const query = document.querySelector.bind(document)

export const isBase64Img = (img: any) => {
    return /base64/.test(img.src)
}

export const removeElement = (ele: any) => {
    const theParent = ele.parentNode
    if (theParent) {
        theParent.removeChild(ele)
    }
}

export const emptyElement = (ele: any) => {
    ele.innerHTML = ''
}

export const isInViewPort = (ele: any) => {
    const rectInfo = ele.getBoundingClientRect()
    return ele.top < window.innerHeight && rectInfo.left < window.innerWidth
}

export const checkHasBorder = (styles: any) => {
    return ['border', 'border-style', 'border-top-style', 'border-bottom-style', 'border-left-style', 'border-right-style'].some((item: string) => {
        return styles.getPropertyStyle(item)
    })
}

// 查看是否存在伪元素
export const checkHasPseudoEle = (ele: any) => {
    const hasBefore = getComputedStyle(ele, '::before').getPropertyValue('content') !== ''
    const hasAfter = getComputedStyle(ele, '::after').getPropertyValue('content') !== ''
    if (hasBefore || hasAfter) {
        return { hasBefore, hasAfter, ele }
    }
    return false
}

export const getViewPortSize = () => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    return {
        vh,
        vw,
        vmax: Math.max(vw, vh),
        vmin: Math.min(vw, vh)
    }
}

export const getOppositeShape = (shape: string) => shape === 'circle' ? 'rect' : 'circle'

export const setAttributes = (ele: any, attrs: any) => {
    Object.keys(attrs).forEach(k => ele.setAttribute(k, attrs[k]))
}

export const setOpacity = (ele: any) => {
    const className = COMMON_NAME_PREFIX + 'opacity'
    const rule = `{
      opacity: 0 !important;
    }`
    addStyle(`.${className}`, rule)
    addClass(ele, [className])
}

export const checkHasTextDecoration = (styles: any) => !/none/.test(styles.textDecorationLine)