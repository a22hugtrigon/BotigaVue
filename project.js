import { createApp } from "module";
import { getLibros } from "./communicationManager.js";

createApp({
    data(){
        return{
            message: 'Hello Vue'
        }
    }
})