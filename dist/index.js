"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarCep = buscarCep;
function buscarCep(cep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.ok) {
                throw new Error("Erro na busca do CEP");
            }
            const data = yield response.json();
            if ("erro" in data) {
                console.error("CEP não encontrado");
                return null;
            }
            return data;
        }
        catch (error) {
            console.error("Erro ao buscar o CEP:", error);
            return null;
        }
    });
}
