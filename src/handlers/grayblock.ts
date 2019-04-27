import { addStyle, addClass } from '../util';
import { COMMON_NAME_PREFIX, TEXT_NODE } from '../constant'

export default function grayHandler(ele: any, color: string) {
    const grayClassname = COMMON_NAME_PREFIX + 'gray'
    const rule = `{
    color: ${color} !important;
    background-color: ${color} !important;
  }`
    addStyle(`.${grayClassname}`, rule)
    addClass(ele, [grayClassname])

    const childElements = ele.querySelectorAll('*')
    Array.from(childElements).forEach((element: any) => {
        const childNodes = element.childNodes
        if (Array.from(childNodes).some((n: any) => n.nodeType === TEXT_NODE)) {
            addClass(element, [grayClassname])
        }
    })
}
