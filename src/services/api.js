// src/services/api.js
import axios from "axios";
import { Platform } from "react-native";

/*
let baseURL = "http://localhost:3000"; // padrão para web e iOS

if (Platform.OS === "android") {
  baseURL = "http://10.0.2.2:3000"; // emulador Android oficial
}

const api = axios.create({
  baseURL,
}); */


const api = axios.create({
  baseURL: "estoquecarback-adcugjebakhdcrfw.mexicocentral-01.azurewebsites.net", // caminho relativo! O mesmo domínio serve as duas coisas
});

export default api;
