export function clearElement(selector: string): void {
    const element = document.querySelector(selector) as HTMLElement;
    element.innerHTML = '';
}
