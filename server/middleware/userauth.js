import jwt from "jsonwebtoken";

const userAuth = async (req, res, next)=>{
    let token = req.headers.token || req.headers.authorization;

    // Check for token in cookies
    if (!token && req.cookies?.token) {
        token = req.cookies.token;
    }

    // Strip 'Bearer' if needed
    if (token && token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized, please login again." });
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