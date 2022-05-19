class InterceptorManager {
    handlers: any[] = []
    constructor() {}

    use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options?.synchronous || false,
            runWhen: options?.runWhen || null
        })
    }

    eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null
        }
    }

    clear() {
        this.handlers = []
    }

    forEach(fn) {
        this.handlers.forEach((h) => {
            if (h !== null) {
                fn(h)
            }
        })
    }
}
