import { addStyle, shapeStyle, emptyElement, removeElement, getOppositeShape, px2relativeUtil, setOpacity, addClass } from '../util'
import { TRANSPARENT, COMMON_NAME_PREFIX } from '../constant'

interface ISvgData {
    color: string;
    shape: string;
    shapeOpposite: Array<string>;
}

function svgHandler(ele: any, svgData: ISvgData, cssUnit: string, decimal: number) {
    const { width, height } = ele.getBoundingClientRect()
    const { color, shape, shapeOpposite } = svgData
    if (width === 0 || height === 0 || ele.getAttribute('aria-hidden') === 'true') {
        return removeElement(ele)
    }

    const finalShape = shapeOpposite.indexOf(ele) > -1 ? getOppositeShape(shape) : shape

    emptyElement(ele)

    const shapeClassName = COMMON_NAME_PREFIX + shape
    shapeStyle(shape)

    Object.assign(ele.style, {
        width: px2relativeUtil(width, cssUnit, decimal),
        height: px2relativeUtil(height, cssUnit, decimal),
    })

    addClass(ele, [shapeClassName])

    if (color === TRANSPARENT) {
        setOpacity(ele)
    } else {
        const className = COMMON_NAME_PREFIX + 'svg'
        const rule = `{
          background-color: ${color} !important;
        }`
        addStyle(`.${className}`, rule)
        addClass(ele, [className])
    }
}

export default svgHandler
