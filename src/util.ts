let styleCache = new Map()
const COMMON_NAME_PREFIX = 'skeleton-'

const addStyle = function (selector: string, rule: any) {
    if (!styleCache.has(selector)) {
        styleCache.set(selector, rule)
    }
}

const addClass = function (ele: any, classArray: Array<string>) {
    classArray.forEach(item => {
        ele.classList.add(item)
    })
}

const transparent = function (ele: any) {
    const className = COMMON_NAME_PREFIX + 'transparent'
    const rule = '{color: transparent} !important;'
    addStyle(`.${className}`, rule)
    addClass(ele, [className])
}

export default {
    queryAll: document.querySelectorAll.bind(document),
    query: document.querySelector.bind(document),
    isBase64Img(img: any) {
        return /base64/.test(img.src)
    },
    addStyle,
    removeElement(ele: any) {
        const theParent = ele.parentNode
        if (theParent) {
            theParent.removeChild(ele)
        }
    },
    emptyElement(ele: any) {
        ele.innerHTML = ''
    },
    isInViewPort(ele: any) {
        const rectInfo = ele.getBoundingClientRect()
        return ele.top < window.innerHeight && rectInfo.left < window.innerWidth
    },
    hasBorder(styles: any) {
        return ['border', 'border-style', 'border-top-style', 'border-bottom-style', 'border-left-style', 'border-right-style'].some((item: string) => {
            return styles.getPropertyStyle(item)
        })
    },
    getViewPortSize() {
        const vw = window.innerWidth
        const vh = window.innerHeight
        return {
            vh,
            vw,
            vmax: Math.max(vw, vh),
            vmin: Math.min(vw, vh)
        }
    },

}