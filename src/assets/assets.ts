

export function path(file:string){
    return import.meta.env.VITE_APP_PUBLIC_PATH +file
}

export const as = {
    img: path('/img.png'),
    head: path('/head.png'),
    turn0: path('/turn0.webp')
}
