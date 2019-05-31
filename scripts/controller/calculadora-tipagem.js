class Calculadora {

    constructor() {

        // NAO CONSIGO USAR O METODO toLocaleDateString na linha 13 PORQUE _dataAtual NAO É DATE, E SIM OBJECT (ACREDITO).
        // EXISTE COMO EU FAZER ELA SER CONSIDERADA DATE PRA FAZER O GET DA LINHA 13 FUNCIONAR? ALGO COMO O COMENTADO ABAIXO:
        // Date this._dataAtual;
        this._dataAtual;

    }

    get dataAtual() {
        return this._dataAtual.toLocaleDateString("pt-br");
    }

}