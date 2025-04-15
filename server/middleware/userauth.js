import jwt from "jsonwebtoken";

const userAuth = async (req, res, next)=>{
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized, login again" });
    }
    // const {token} =req.headers;
    // if(!token){
    //     return res.json({ success: false, message: "not autharized login again" });
    // }
    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        } else{
            return res.json({ success: false, message: "not autharised login again" });
        }
        next();
    } catch(error){
        return res.json({ success: false, message: error.message });
    }
}

export default userAuth;