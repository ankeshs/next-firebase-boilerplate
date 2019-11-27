import * as functions from "firebase-functions"
import { App } from "./server/server"

const nextApp = functions.https.onRequest(App);

export { nextApp as next }