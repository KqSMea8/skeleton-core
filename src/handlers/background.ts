import { addStyle, shapeStyle, addClass } from '../util';
import { COMMON_NAME_PREFIX } from '../constant'

export interface Ibackground {
    color: string,
    shape: string
}

export default function backgroundHandler(ele: any, bgInfo: Ibackground) {
    const imageClass = `${COMMON_NAME_PREFIX}image`
    const shapeClass = `${COMMON_NAME_PREFIX}${bgInfo.shape}`
    const rule = `{
    background: ${bgInfo.color} !important;
  }`
    addStyle(`.${imageClass}`, rule)
    shapeStyle(bgInfo.shape)
    addClass(ele, [imageClass, shapeClass])
}