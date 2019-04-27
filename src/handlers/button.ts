import { addStyle, addClass } from '../util';
import { COMMON_NAME_PREFIX } from '../constant'

export interface IButton {
    color: string,
    excludes?: Array<string>
}

export default function buttonHandler(ele: any, buttonInfo: IButton) {
    if (buttonInfo.excludes && buttonInfo.excludes.indexOf(ele) > -1) return false
    const buttonClassname = `${COMMON_NAME_PREFIX}button`
    const color = buttonInfo.color
    const rule = `{
    color: ${color} !important;
    background-color: ${color} !important;
    border: none !important;
    box-shadow: none !important;
  }`
    addStyle(`.${buttonClassname}`, rule)
    addClass(ele, [buttonClassname])
}