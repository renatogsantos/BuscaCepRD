interface CepData {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

export async function buscarCep(cep: string): Promise<CepData | null> {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!response.ok) {
            throw new Error("Erro na busca do CEP");
        }

        const data: CepData = await response.json();

        if ("erro" in data) {
            console.error("CEP não encontrado");
            return null;
        }

        return data;
    } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        return null;
    }
}
