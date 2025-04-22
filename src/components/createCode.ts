


export function createCode(code:string,lang:string='html'){
    
    return '```'+lang+'\n'+code.replace(/\/TMXK\/noStyleUiDoc/g,'')+'\n```'
}