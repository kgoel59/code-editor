export function createTree(name,treeJ) {
    let rJ = {};

    rJ.module = name;
    rJ.collapsed = false;
    rJ.children = [];
    parseTree(rJ, treeJ[0].contents);
    return rJ;
}

function parseTree(rJ,treeJ) {
    for(let i=0;i<treeJ.length;i++) {
        let obj = {};
        obj.module = treeJ[i].name;
        if(treeJ[i].type === "directory") {
            obj.collapsed = true;
            obj.children = [];
            parseTree(obj, treeJ[i].contents);
        } else if(treeJ[i].type ==="file") {
            obj.leaf = true;
        }
        rJ.children.push(obj);   
    }
}