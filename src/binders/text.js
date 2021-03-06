// returns a binder for textContent of an element
export default function text() {
    return {
        on: 'input', // the event name fires only in contenteditable mode
        getValue() {
            return this.textContent;
        },
        setValue(value) {
            this.textContent = `${value}`;
        }
    };
}
