import { addStyle, getOppositeShape, addClass } from '../util'
import { COMMON_NAME_PREFIX } from '../constant'

interface IEle {
    ele: HTMLElement;
    hasBefore: Boolean;
    hasAfter: Boolean;
}

interface IAttr {
    color: string;
    shape: string;
    shapeOpposite: Array<HTMLElement>;
}

function pseudosHandler(eleInfo: IEle, attrInfo: IAttr) {
    const { ele, hasBefore, hasAfter } = eleInfo
    const { color, shape, shapeOpposite } = attrInfo
    const finalShape = shapeOpposite.indexOf(ele) > -1 ? getOppositeShape(shape) : shape
    const PSEUDO_CLASS = `${COMMON_NAME_PREFIX}pseudo`
    const PSEUDO_RECT_CLASS = `${COMMON_NAME_PREFIX}pseudo-rect`
    const PSEUDO_CIRCLE_CLASS = `${COMMON_NAME_PREFIX}pseudo-circle`

    const rules = {
        [`.${PSEUDO_CLASS}::before, .${PSEUDO_CLASS}::after`]: `{
      background: ${color} !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }`,
        [`.${PSEUDO_RECT_CLASS}::before, .${PSEUDO_RECT_CLASS}::after`]: `{
      border-radius: 0 !important;
    }`,
        [`.${PSEUDO_CIRCLE_CLASS}::before, .${PSEUDO_CIRCLE_CLASS}::after`]: `{
      border-radius: 50% !important;
    }`
    }

    Object.keys(rules).forEach(key => {
        addStyle(key, rules[key])
    })

    addClass(ele, [PSEUDO_CLASS, finalShape === 'circle' ? PSEUDO_CIRCLE_CLASS : PSEUDO_RECT_CLASS])
}

export default pseudosHandler