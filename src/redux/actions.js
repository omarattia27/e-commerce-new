export const Add = (val,checkout)=> {
    console.log(val,checkout);
    return {
        type: "ADD",
        playload: {product: val}
    };
}    

export const Remove = (id)=> {
    return{
       type: "REMOVE",
       playload: {id: id}
    }
}