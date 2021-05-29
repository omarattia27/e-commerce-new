export const Add = (val,checkout)=> {
    //console.log(val,checkout);
    alert(val.title+" is added to your cart");
    return {
        type: "ADD",
        playload: {product: val}
    };
}    

export const Remove = (id)=> {
    console.log("ID of removed product ",id)
    return{
       type: "REMOVE",
       playload: {id: id}
    }
}

export const SignIn = (token,user)=> {
    console.log("LoggedIn action function is called")
    return{
       type: "LOGGEDIN",
       playload: [token,user]
    }
}

export const UpdateProducts = (products)=> {
    console.log("UpdateProducts: ",products);
    return{
        type: "PRODUCTS",
        playload: products,
    }
}

export const LogOut = ()=> {
    console.log("LogOut Action");
    return{
        type: "LOGGEDOUT",
    }
}