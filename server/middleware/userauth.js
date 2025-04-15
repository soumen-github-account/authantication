import jwt from "jsonwebtoken";

const userAuth = async (req, res, next)=>{
    // const token = req.cookies.token;

    // if (!token) {
    //     return res.status(401).json({ success: false, message: "Token not found" });
    // }
    const {token} =req.headers;
    if(!token){
        return res.json({ success: false, message: "not autharized login again" });
    }
    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        } else{
            return res.json({ success: false, message: "Not authorized" });
        }
        console.log("Token:", req.cookies.token);
        console.log("Decoded:", decoded);
        next();
    } catch(error){
        return res.json({ success: false, message: error.message });
    }
}

export default userAuth;