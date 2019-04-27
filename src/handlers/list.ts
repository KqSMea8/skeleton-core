import { removeElement } from '../util'
// 列表元素处理
export default function listHandler(ele: any): any {
    const children = ele.children
    const childArray = Array.from(children)
    const listLen = childArray.filter((child: any) => child.tagName === "LI").length
    if (listLen === 0) {
        return
    }
    const firstChild = children[0]
    if (firstChild.tagName !== 'LI') {
        return listHandler(firstChild)
    }
    childArray.forEach((item: any, i: number) => {
        if (i > 0) {
            removeElement(item)
        }
    })
    for (let i = 1; i < listLen; i++) {
        ele.appendChild(firstChild.cloneNode(true))
    }
}