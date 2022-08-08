const scren = document.getElementById('screen');

const show = (text) => {
    scren.innerHTML += text;

}


const space = ()=>{
    scren.innerHTML += ' ' 
}

const backspace = ()=>{
    if(scren.innerHTML.includes('    ') && scren.innerHTML.endsWith('    ')){
        scren.innerHTML=scren.innerHTML.trim();
    }else{
        scren.innerHTML = scren.innerHTML.slice(0, -1)
    }
}

const tab = ()=>{
    scren.innerHTML += '    '
}

const enter = ()=>{
    scren.innerHTML += '<br/>'
}

scren.innerHTML.toUpperCase()

const caps = ()=>{
    const indecator = document.getElementById('indic');
    if(indecator.innerHTML==='off'){
        indecator.className='light'
        indecator.innerHTML = 'on'
        scren.innerHTML= scren.innerHTML.toUpperCase();
    }else{
        indecator.className='dark'
        indecator.innerHTML = 'off';
        scren.className = 'screen'
    }
}