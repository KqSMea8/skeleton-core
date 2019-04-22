// 列表元素
export default function listHandler(ele: any) {
    const children = ele.children
    const listLen = Array.from(children).filter((child: any) => child.tagName === "LI").length
    if (listLen === 0) {
        return
    }

}