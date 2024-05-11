const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('calcular valor total do projeto quando o pacote for basico', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    });
    test('deve retornar 924 quando valor hora for 35 reais', () => {
        const funcionalidades = ['setup', 'formulario',];
        const valorHora = 35;

        const esperado = 924;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    })
    test('deve retornar 1003 quando valor hora for 38 reais', () => {
        const funcionalidades = ['setup', 'formulario',];
        const valorHora = 38;

        const esperado = 1003;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    })
})

describe('calcular valor total do projeto quando o pacote for intermediario', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    });
    test('deve retornar 2150 quando valor hora for 40 reais', () => {
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 40;

        const esperado = 2150;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    })

    test('deve retornar 2688 quando valor hora for 50 reais', () => {
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 50;

        const esperado = 2688;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    })
})
describe('calcular valor total do projeto quando o pacote for premium', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
    });
    test('deve retornar 3542 quando valor hora for 55 reais', () => {
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina', 'construcao_1_pagina'];
        const valorHora = 55;

        const esperado = 3542;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    })

    test('deve retornar 4057 quando valor hora for 63 reais', () => {
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina', 'construcao_1_pagina'];
        const valorHora = 63;

        const esperado = 4057;
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperado).toBe(retornado);
    })
})

