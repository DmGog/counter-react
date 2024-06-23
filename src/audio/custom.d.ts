// создаем декларацию типов, чтобы typeScript мог читать наши файлы как строки

declare module "*.mp3" {
    const src: string;
    export default src;
}

declare module "*.wav" {
    const src: string;
    export default src;
}

declare module "*.ogg" {
    const src: string;
    export default src;
}