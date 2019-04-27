import { COMMON_NAME_PREFIX } from '../constant'
import { getOppositeShape, setAttributes, addClass, addStyle, shapeStyle } from '../util'

interface IImg {
    color: string;
    shape: string;
    shapeOpposite: Array<any>;
}

function imgHandler(ele: any, imgData: IImg) {
    const { width, height } = ele.getBoundingClientRect()
    const attrs = {
        width,
        height
    }
    const { color, shape, shapeOpposite } = imgData
    const finalShape = shapeOpposite.indexOf(ele) > -1 ? getOppositeShape(shape) : shape

    setAttributes(ele, attrs)

    const className = COMMON_NAME_PREFIX + 'image'
    const shapeName = COMMON_NAME_PREFIX + finalShape
    const rule = `{
    background-color: ${color} !important;
  }`
    addStyle(`.${className}`, rule)
    shapeStyle(finalShape)

    addClass(ele, [className, shapeName])

    if (ele.hasAttribute('alt')) {
        ele.removeAttribute('alt')
    }
}

export default imgHandler
