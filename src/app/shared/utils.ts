

export function loadStyle(styleUrl: string): Promise<Event> {
    return new Promise<Event>((resolve, reject) => {
        try {
            const styleElement = document.createElement('link');
            styleElement.href = styleUrl;
            styleElement.onload = resolve;
            document.head.appendChild(styleElement);
            console.log(styleUrl + ' loaded');
        } catch {
            reject(`unable to load CSS ${styleUrl}`);
        }
    });
}

export function loadScript(scriptUrl: string): Promise<Event> {
    return new Promise<Event>((resolve, reject) => {
        try {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        } catch {
            reject(`unable to load script ${scriptUrl}`);
        }
    });
}
