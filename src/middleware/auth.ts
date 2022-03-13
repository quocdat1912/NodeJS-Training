import { constants } from "../common/constant";
import * as jwt from "jsonwebtoken";
import { error } from "../common/response_api";

const config = process.env;

export default (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["authorization"] || req.headers["Authorization"];

    if (!token) {
        return res.status(403).send(error(constants.unauthenticated, 403));
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};