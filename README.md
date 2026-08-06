# Grade de Horários — Oferta de Disciplinas PPGCC

Este repositório contém uma página web estática desenvolvida em HTML, CSS e JavaScript para visualizar a oferta de disciplinas do PPGCC/UFMG em formato de grade semanal de horários.

A interface permite consultar rapidamente disciplinas, turmas, salas, docentes, tipos de oferta, disciplina isolada e demais detalhes em uma visualização simples e interativa.

### Acesso público:

- Fork: https://jluckmay.github.io/oferta-ppgcc-ufmg/
- Original: https://ricardo.bib.br/horario_ia_20262/

## Objetivo

O projeto foi pensado como uma ferramenta auxiliar de consulta para a oferta acadêmica, mantendo a navegação em um único arquivo estático e permitindo expansão por semestre via arquivos JSON independentes.

## Funcionalidades

- Grade semanal por dia e horário;
- Lista completa das disciplinas ofertadas;
- Busca textual por disciplina, código, turma, docente ou sala;
- Busca de múltiplas disciplinas separadas por ponto e vírgula (`;`), com resultado combinado por OR;
- Seleção de semestre por meio do filtro `Semestre`;
- Filtros por código, tipo e disciplina isolada;
- Modal com detalhes completos da disciplina;
- Seleção por mouse na grade e na lista para marcar disciplinas de interesse;
- Exportação para o Google Agenda em arquivo `.ics` com eventos recorrentes para o semestre inteiro das disciplinas selecionadas;
- Exportação em JSON da oferta filtrada;
- Exportação em imagem da grade utilizando html2canvas;
- Importação de JSON local para uso direto pelo navegador;
- Suporte a múltiplos semestres através de arquivos JSON separados;
- Deploy estático no GitHub Pages com manifesto de semestres.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- html2canvas para exportação de imagem
- GitHub Actions para geração automática do manifesto de semestres e deploy no GitHub Pages

## Estrutura do projeto

```txt
.
├── index.html
├── style.css
├── script.js
├── semester-data.js
├── semesters/
│   ├── manifest.json
│   └── 2026-2.json
├── .github/
│   └── workflows/
│       └── pages.yml
└── README.md
```

## Modelo de dados por semestre

A pasta `semesters/` contém um arquivo JSON por semestre. Cada arquivo representa a oferta de um período específico, por exemplo `2026-2.json`.

Além disso, existe um `manifest.json` que lista os arquivos disponíveis. Esse manifesto é usado pelo navegador para montar o seletor de semestres e para o deploy automático do GitHub Pages.

## Seleção de semestre

A seleção de semestre é feita pelo campo `Semestre` no filtro da toolbar. O valor escolhido carrega o arquivo correspondente em `semesters/` e atualiza a grade, a lista e os filtros para o período selecionado.

## Busca de múltiplas disciplinas

A busca aceita múltiplos termos separados por ponto e vírgula (`;`).

Exemplo:

```txt
DCC001; DCC002
```

Nesse caso, a busca retorna disciplinas que correspondam a qualquer um dos termos informados.

## Seleção por mouse e Google Agenda

A interface agora permite selecionar disciplinas com o mouse diretamente na grade semanal e na lista de disciplinas. As disciplinas marcadas podem ser exportadas para o Google Agenda por meio do botão `📅 Google Agenda`.

Quando há várias disciplinas selecionadas, a ação gera um arquivo `.ics` com múltiplos eventos recorrentes para o semestre, em vez de tentar abrir várias janelas do Google Calendar ao mesmo tempo. Isso evita que o navegador bloqueie o fluxo e mantém a criação compatível com a importação pelo Google Agenda.

O comportamento da exportação segue o semestre ativo selecionado. Para cada disciplina, o evento recorrente respeita os dias de aula e o intervalo do semestre:

- 1º semestre: da primeira segunda-feira de março até a primeira sexta-feira de julho;
- 2º semestre: da primeira segunda-feira de agosto até a primeira sexta-feira de dezembro.

Se houver conflitos de horário entre disciplinas selecionadas, a página avisa antes da exportação para que o usuário saiba que duas aulas não poderão ser adicionadas ao mesmo horário.

## Fluxo de uso

1. Adicione um novo arquivo JSON em `semesters/`.
2. Atualize o `manifest.json` com o nome desse arquivo, ou deixe o workflow do GitHub Actions gerar o manifesto automaticamente.
3. Abra o site e escolha o semestre desejado no seletor.
4. Use os filtros, selecione as disciplinas com o mouse e use o botão `Google Agenda` quando quiser abrir os eventos recorrentes no calendário.

## Deploy no GitHub Pages

O workflow em `.github/workflows/pages.yml` gera o `manifest.json` automaticamente com base nos arquivos `.json` da pasta `semesters/` e publica o site em GitHub Pages.

Isso permite que novos semestres sejam adicionados apenas pela criação do arquivo correspondente no projeto e pelo envio para o repositório.

## Observações

- O projeto foi desenhado para funcionamento como site estático, sem backend.
- O arquivo `semester-data.js` serve como fallback local para carregamento direto no navegador em modo `file://`.
- Em deploy real via GitHub Pages, o caminho principal de leitura é o `manifest.json` + arquivos JSON em `semesters/`.

## Aviso importante

Este projeto não é um sistema oficial da UFMG. Ele foi criado como uma ferramenta auxiliar para consulta e visualização da oferta acadêmica.

A validação final das informações acadêmicas deve sempre ser conferida no sistema oficial da universidade.

## Licença

Este projeto pode ser adaptado livremente para fins acadêmicos, pessoais ou educacionais.
