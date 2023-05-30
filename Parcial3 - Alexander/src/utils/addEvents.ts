export const clickEvent = (elem: HTMLElement, event: EventListener) => {
    elem.addEventListener("click", event)
}

export const changedEvent = (elem: HTMLElement, event: EventListener) => {
    elem.addEventListener("changed", event)
}
