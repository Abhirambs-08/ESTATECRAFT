import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "https://dev-fx31n4i01zkc2jem.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
