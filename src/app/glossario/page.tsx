import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'
import { APP_STORE_URL } from '@/lib/stores'

export const metadata: Metadata = {
  title: 'Glossário de Estética e Harmonização Facial — Lume',
  description:
    'Definições completas dos principais termos da estética e harmonização facial: câmera ghost, prontuário visual, botox, filler, regiões anatômicas e muito mais.',
  alternates: {
    canonical: 'https://brlume.app/glossario',
  },
}

const terms = [
  {
    id: 'acido-hialuronico',
    letter: 'A',
    name: 'Ácido Hialurônico',
    body: [
      'O ácido hialurônico é um polissacarídeo naturalmente presente na pele, nas articulações e nos tecidos conjuntivos do corpo humano, com alta capacidade de retenção de água — cada grama pode reter até seis litros. Em sua forma sintetizada e reticulada (cross-linked), é o composto mais utilizado em preenchedores dérmicos injetáveis, usado para repor volume, hidratar profundamente e corrigir sulcos e assimetrias faciais.',
      'Existem diferentes densidades e graus de reticulação de ácido hialurônico, escolhidos conforme a região a ser tratada: produtos mais fluidos para lábios e olheiras, e mais densos e firmes para malar e mandíbula. O efeito é temporário — o corpo metaboliza o produto gradualmente ao longo de meses, e o tempo de duração varia conforme a região, o metabolismo do paciente e a densidade do produto.',
      'No Lume, cada aplicação de filler à base de ácido hialurônico é registrada com marca, lote e volume em ml por região tratada, no formulário clínico específico de filler.',
    ],
  },
  {
    id: 'agenda',
    letter: 'A',
    name: 'Agenda (de clientes)',
    body: [
      'Na estética, a agenda é a organização dos horários marcados com cada cliente — tradicionalmente feita em planilha, caderno ou aplicativo de calendário genérico. O problema desses métodos é que eles não sabem o que é um "serviço" da clínica: não têm preço, duração padrão nem vínculo com o histórico clínico do cliente, exigindo que o profissional preencha manualmente os mesmos dados a cada agendamento.',
      'Uma agenda integrada ao prontuário resolve isso vinculando cada horário marcado ao cliente, ao serviço escolhido e, no dia do atendimento, à própria sessão registrada — eliminando a necessidade de manter uma ferramenta separada só para marcar horário.',
      'No Lume, a agenda tem visão de semana e de mês, é vinculada ao catálogo de serviços (nome, cor, duração e preço) e ao prontuário de cada cliente, com lembrete local automático antes de cada horário marcado.',
    ],
  },
  {
    id: 'anamnese',
    letter: 'A',
    name: 'Anamnese',
    body: [
      'Anamnese é o processo de coleta de informações de saúde e histórico clínico de um paciente antes de um procedimento, feito por meio de um questionário estruturado. Na estética, a anamnese costuma abranger alergias, uso de medicamentos, cirurgias prévias, condições de pele e expectativas em relação ao tratamento — dados que ajudam o profissional a avaliar riscos e contraindicações antes de aplicar botox, filler ou qualquer outro procedimento.',
      'Tradicionalmente preenchida em papel, a anamnese vem sendo digitalizada por clínicas e profissionais autônomos, tanto pela praticidade quanto pela rastreabilidade — um formulário digital não se perde, fica vinculado ao histórico do cliente e pode incluir assinatura eletrônica do termo de responsabilidade.',
      'O Lume oferece anamnese digital com 24 perguntas clínicas padrão, editáveis e reordenáveis, preenchida pela própria cliente no celular ou tablet — presencialmente ou por um link enviado a distância — com assinatura direto na tela e revisão pelo profissional antes da sessão.',
    ],
  },
  {
    id: 'antes-e-depois',
    letter: 'A',
    name: 'Antes e Depois (Before & After)',
    body: [
      'O antes e depois é o comparativo visual entre duas fotos de um mesmo cliente em momentos diferentes — geralmente antes de iniciar um tratamento estético e após uma ou mais sessões. É um dos recursos mais importantes para demonstrar a eficácia de um procedimento e comunicar resultados de forma objetiva tanto para o próprio cliente quanto para o público nas redes sociais.',
      'Um antes e depois de qualidade exige que as duas fotos tenham o mesmo ângulo, enquadramento e iluminação. Quando esses elementos variam entre as fotos, a diferença visual pode ser atribuída à mudança de posicionamento em vez do tratamento — o que compromete a credibilidade do profissional e obscurece o resultado real. Por isso, a consistência fotográfica não é um detalhe estético, mas uma exigência técnica.',
      'O Lume gera imagens de antes e depois diretamente do histórico de sessões do cliente. O profissional seleciona duas datas, posiciona a logo da clínica e escolhe entre os formatos quadrado (1:1), retrato (4:5) e stories (9:16). O resultado é exportado e compartilhado em segundos, sem necessidade de aplicativos externos.',
    ],
  },
  {
    id: 'bioestimulador',
    letter: 'B',
    name: 'Bioestimulador de Colágeno',
    body: [
      'Bioestimuladores de colágeno são substâncias injetáveis que, diferente dos preenchedores tradicionais, não entregam volume imediato — elas estimulam o próprio organismo a produzir colágeno de forma gradual ao longo de semanas ou meses. Os compostos mais utilizados são a hidroxiapatita de cálcio e o poli-L-ácido láctico, indicados principalmente para melhora de flacidez e firmeza da pele.',
      'O resultado de um bioestimulador é progressivo e mais duradouro que o de um preenchedor convencional, mas exige mais de uma sessão de aplicação, geralmente espaçadas em intervalos de 30 a 45 dias, para atingir o efeito completo. Por isso, o planejamento e o registro de cada sessão — data, produto, região e diluição — são especialmente importantes nesse tipo de protocolo.',
      'No Lume, sessões com bioestimulador podem ser documentadas no mesmo formulário clínico usado para filler, com foto da sessão via câmera ghost para acompanhar a evolução da firmeza da pele ao longo do protocolo.',
    ],
  },
  {
    id: 'botox',
    letter: 'B',
    name: 'Botox (Toxina Botulínica)',
    body: [
      'A toxina botulínica — popularmente conhecida como botox — é uma proteína produzida pela bactéria Clostridium botulinum. Em concentrações terapêuticas e estéticas, ela é utilizada para bloquear temporariamente a transmissão de sinais entre nervos e músculos, provocando um relaxamento muscular localizado. O efeito reduz as rugas de expressão e pode ser utilizado para fins funcionais, como o tratamento de bruxismo.',
      'Em procedimentos estéticos, a toxina botulínica é medida em unidades internacionais (UI) e aplicada com agulha fina diretamente no músculo alvo. Cada região anatômica recebe uma quantidade específica de UI, que varia conforme o músculo, a intensidade desejada e o protocolo do profissional. O registro correto de produto, lote, diluição e regiões tratadas é obrigatório em boas práticas clínicas e fundamental para a segurança do paciente.',
      'O Lume possui formulário clínico específico para botox com 13 regiões anatômicas pré-definidas: Frontal, Prócero, Corrugador, Orbicular do Olho, Nasal, Sorriso Gengival, DAO, Mentoniano, Masseter, Platisma, entre outras. O total de UI da sessão é calculado automaticamente conforme as regiões são preenchidas, eliminando erros de soma manual.',
    ],
  },
  {
    id: 'camera-ghost',
    letter: 'C',
    name: 'Câmera Ghost (Ghost Camera)',
    body: [
      'A câmera ghost é uma funcionalidade de câmera que exibe a última foto registrada de um cliente em sobreposição semitransparente sobre a imagem ao vivo da câmera. Isso permite que o profissional alinhe o rosto do cliente exatamente como estava na sessão anterior antes de tirar a nova foto, garantindo consistência de ângulo e enquadramento entre todas as fotografias do mesmo cliente.',
      'O princípio é simples: a imagem de referência age como um "fantasma" guia. O profissional posiciona o cliente até que os pontos de referência anatômicos — nariz, olhos, contorno do rosto — coincidam com a sobreposição, e só então registra a foto. A opacidade da sobreposição é ajustável com um controle deslizante, permitindo equilibrar visibilidade do guia e clareza do cliente ao vivo.',
      'A câmera ghost é compatível com câmera frontal e traseira e aceita uma foto da galeria do celular como imagem de referência, caso o profissional queira comparar com uma foto tirada fora do app. O Lume foi um dos primeiros aplicativos de gestão estética a implementar câmera ghost nativamente, tornando-a acessível a qualquer profissional sem necessidade de equipamentos ou aplicativos adicionais.',
      'O impacto direto da câmera ghost é na qualidade do antes e depois. Fotos com ângulo consistente tornam a diferença entre sessões imediatamente evidente, passam mais credibilidade profissional e geram resultados mais convincentes nas redes sociais.',
    ],
  },
  {
    id: 'catalogo-de-servicos',
    letter: 'C',
    name: 'Catálogo de Serviços',
    body: [
      'O catálogo de serviços é o cadastro dos procedimentos que um profissional ou clínica de estética oferece, geralmente com nome, duração padrão e preço de cada um. Ter esse cadastro centralizado evita que o profissional precise redigitar os mesmos dados toda vez que agenda um novo cliente ou registra uma cobrança.',
      'Quando o catálogo de serviços está integrado à agenda e ao prontuário, agendar um cliente passa a ser só uma questão de escolher o serviço: a duração e o preço já vêm preenchidos automaticamente, e o registro da sessão fica vinculado a qual serviço foi de fato realizado.',
      'No Lume, o catálogo de serviços registra nome, cor, duração e preço de cada procedimento, usado tanto para padronizar o agendamento na agenda quanto para dar contexto ao prontuário da sessão. Está disponível tanto no plano gratuito quanto no Lume Pro.',
    ],
  },
  {
    id: 'comissura-labial',
    letter: 'C',
    name: 'Comissura Labial',
    body: [
      'A comissura labial é o canto da boca, ponto de encontro entre o lábio superior e o inferior. Com o envelhecimento e a perda de sustentação óssea e de colágeno na região, os cantos da boca tendem a cair, formando um sulco vertical — conhecido popularmente como "linha de marionete" — que confere uma expressão de tristeza ou cansaço ao rosto em repouso.',
      'O tratamento da comissura labial costuma combinar preenchimento com ácido hialurônico, para repor volume e suavizar o sulco de marionete, com aplicação pontual de toxina botulínica no músculo depressor do ângulo da boca (DAO), que reduz a tração para baixo. A combinação das duas técnicas costuma gerar resultado mais natural do que qualquer uma isoladamente.',
      'No Lume, a comissura labial está disponível como região pré-cadastrada no formulário clínico de filler, permitindo registrar volume em ml aplicado especificamente nessa área.',
    ],
  },
  {
    id: 'consentimento-informado',
    letter: 'C',
    name: 'Consentimento Informado (Termo de Responsabilidade)',
    body: [
      'O consentimento informado é o documento, assinado pelo paciente, que confirma ter sido esclarecido sobre a natureza do procedimento estético, os riscos envolvidos, os resultados esperados e as alternativas disponíveis, antes de autorizar a aplicação. É uma exigência ética e, em muitos casos, legal, que protege tanto o paciente quanto o profissional.',
      'Historicamente preenchido em papel junto com a ficha de anamnese, o termo de consentimento vem sendo incorporado a fluxos digitais, o que facilita o armazenamento, evita extravio e possibilita assinatura eletrônica com validade jurídica. A ausência de consentimento documentado é um dos principais fatores que fragilizam a defesa de um profissional em caso de contestação judicial.',
      'No Lume, o termo de responsabilidade é parte da anamnese digital: a cliente assina com o dedo na tela ao final do formulário, e o documento assinado fica salvo permanentemente vinculado ao seu perfil.',
    ],
  },
  {
    id: 'dao',
    letter: 'D',
    name: 'DAO (Depressor do Ângulo da Boca)',
    body: [
      'O DAO, sigla para Depressor do Ângulo da Boca (ou Depressor Anguli Oris), é o músculo responsável por puxar os cantos da boca para baixo. Quando hiperativo, contribui para uma expressão de tristeza ou ranço em repouso e pode acentuar a aparência de envelhecimento facial ao longo do tempo.',
      'A aplicação de toxina botulínica no DAO é um procedimento comum em harmonização facial com o objetivo de elevar levemente os cantos da boca e suavizar a expressão em repouso. A técnica exige precisão no ponto de aplicação para evitar assimetrias ou o relaxamento indesejado de músculos adjacentes responsáveis pelo sorriso.',
      'O DAO é uma das 13 regiões anatômicas disponíveis no formulário clínico de botox do Lume, junto com outras regiões da região inferior da face como Mentoniano, Masseter e Platisma.',
    ],
  },
  {
    id: 'diluicao',
    letter: 'D',
    name: 'Diluição (de toxina botulínica)',
    body: [
      'A diluição é o processo de adição de solução salina fisiológica à toxina botulínica liofilizada (em pó) para reconstituí-la em forma líquida e prepará-la para aplicação. A quantidade de solução salina adicionada determina a concentração final do produto: quanto mais diluída a solução, menor a concentração de toxina por volume injetado.',
      'Diferentes protocolos e marcas de toxina botulínica indicam diluições distintas. O registro da diluição utilizada é parte obrigatória da documentação clínica, pois permite que o profissional reproduza ou ajuste o protocolo com precisão em sessões futuras e garante rastreabilidade em caso de intercorrências.',
      'No Lume, a diluição utilizada em cada sessão é registrada no formulário clínico de botox junto com a marca e o número de lote do produto. Esse conjunto de informações compõe a rastreabilidade completa de cada aplicação.',
    ],
  },
  {
    id: 'ficha-clinica',
    letter: 'F',
    name: 'Ficha Clínica Estética',
    body: [
      'A ficha clínica estética é o registro estruturado de cada procedimento realizado em um paciente — produto utilizado, marca, lote, diluição, regiões anatômicas tratadas e quantidades aplicadas. Diferente de uma anotação livre, a ficha clínica segue um formato padronizado que facilita consulta, auditoria e comparação entre sessões.',
      'Manter a ficha clínica atualizada é considerado boa prática em harmonização facial e, em muitos conselhos profissionais, é uma exigência regulatória. Além da função de proteção jurídica em caso de intercorrência, a ficha clínica bem documentada permite ao profissional reproduzir com precisão o protocolo de sessões anteriores.',
      'O Lume digitaliza a ficha clínica com formulários específicos para botox (13 regiões pré-cadastradas) e filler (11 regiões), com cálculo automático do total de UI ou ml da sessão, tudo vinculado ao perfil do cliente e acessível na nuvem.',
    ],
  },
  {
    id: 'filler',
    letter: 'F',
    name: 'Filler (Preenchedor Dérmico)',
    body: [
      'Filler, ou preenchedor dérmico, é o termo genérico para substâncias injetáveis utilizadas para repor volume, preencher sulcos, corrigir assimetrias e rejuvenescer o contorno facial. Os fillers mais utilizados na estética são à base de ácido hialurônico, um polissacarídeo naturalmente presente no organismo humano com alta capacidade de retenção de água. Existem também fillers de outros compostos, como hidroxiapatita de cálcio e poli-L-ácido láctico, indicados para diferentes indicações clínicas.',
      'Diferente da toxina botulínica, que atua nos músculos, o filler age diretamente nos tecidos moles, adicionando volume imediato à região tratada. A dosagem é medida em mililitros (ml) e varia conforme a região, a profundidade de aplicação e o objetivo do procedimento. O registro clínico de cada aplicação deve incluir a marca do produto, o número do lote e o volume utilizado por região.',
      'O Lume disponibiliza formulário clínico de filler com 11 regiões pré-definidas: Lábios, Sulco Nasogeniano, Malar, Olheira, Mento, Ângulo da Mandíbula, Contorno da Mandíbula, Pré-Jowls, Têmpora, Rinomodelação e outras. O volume total em ml é calculado automaticamente, e o profissional pode registrar botox e filler na mesma sessão em formulários separados.',
    ],
  },
  {
    id: 'harmonizacao-facial',
    letter: 'H',
    name: 'Harmonização Facial (HOF)',
    body: [
      'Harmonização facial, frequentemente abreviada como HOF, é o conjunto de procedimentos estéticos minimamente invasivos que visam equilibrar e harmonizar as proporções do rosto. O objetivo não é necessariamente eliminar sinais de envelhecimento, mas sim melhorar a simetria, as proporções e a estética geral do rosto de acordo com a percepção do paciente e os critérios técnicos do profissional.',
      'Os procedimentos mais comuns em harmonização facial incluem a aplicação de toxina botulínica para suavizar rugas e relaxar músculos hiperativos, preenchimentos dérmicos com ácido hialurônico para repor volume e corrigir sulcos, bioremodeladores para melhora da qualidade da pele, e procedimentos como a rinomodelação para ajustes no nariz sem cirurgia. Muitos tratamentos combinam mais de uma técnica na mesma sessão.',
      'A documentação de cada sessão de harmonização facial é essencial tanto para acompanhar a evolução dos resultados quanto para garantir a segurança jurídica do profissional. Registros adequados incluem fotos padronizadas antes e após o procedimento, descrição dos produtos utilizados com marca e lote, regiões tratadas com dosagens e mapa visual dos pontos de aplicação. O Lume centraliza todos esses elementos em um único prontuário digital por cliente.',
    ],
  },
  {
    id: 'lgpd-estetica',
    letter: 'L',
    name: 'LGPD na Estética',
    body: [
      'A Lei Geral de Proteção de Dados (LGPD) classifica dados de saúde — incluindo fotos de procedimentos estéticos, fichas clínicas e anamneses — como dados pessoais sensíveis, sujeitos a regras mais rígidas de tratamento, armazenamento e consentimento. Profissionais de estética que fotografam e documentam clientes são, tecnicamente, controladores de dados sensíveis perante a lei.',
      'Na prática, isso significa que fotos de clientes armazenadas sem controle de acesso — misturadas na galeria pessoal do celular, em grupos de WhatsApp ou em pastas compartilhadas sem autenticação — representam um risco de conformidade. A LGPD exige que o acesso a esses dados seja restrito, que haja consentimento para o uso das informações e que o titular possa solicitar a exclusão dos seus dados a qualquer momento.',
      'O Lume foi desenvolvido em conformidade com a LGPD: cada profissional acessa exclusivamente seus próprios dados, o acesso exige autenticação, e ao encerrar a conta todos os dados do usuário — fotos, fichas e anamneses — são removidos permanentemente.',
    ],
  },
  {
    id: 'lote',
    letter: 'L',
    name: 'Lote (Número de Lote)',
    body: [
      'O número de lote é o código alfanumérico que identifica um conjunto de produtos fabricados nas mesmas condições e no mesmo ciclo de produção. Cada frasco de toxina botulínica ou preenchedor dérmico possui um lote impresso na embalagem primária e secundária, e esse código conecta o produto ao seu histórico de fabricação, testes e distribuição.',
      'O registro do número de lote é obrigatório em boas práticas clínicas por uma razão prática e regulatória: rastreabilidade. Em caso de intercorrências com um paciente, o lote permite identificar se outros pacientes que receberam produtos do mesmo lote apresentaram reações semelhantes. Em caso de recall de um produto, o lote é a informação que determina quais pacientes precisam ser notificados.',
      'No Lume, o número de lote do botox e do filler é registrado em cada sessão como parte da ficha clínica. Junto com a marca e a diluição, forma o conjunto mínimo de rastreabilidade exigido para documentação clínica responsável.',
    ],
  },
  {
    id: 'malar',
    letter: 'M',
    name: 'Malar',
    body: [
      'A região malar corresponde à maçã do rosto, a área sobre o osso zigomático que dá volume e projeção à parte média da face. Com o envelhecimento, a gordura malar tende a se deslocar inferiormente e diminuir em volume, resultando no achatamento da face média e no aprofundamento dos sulcos nasolabiais.',
      'O preenchimento malar com ácido hialurônico é um dos procedimentos mais requisitados em harmonização facial, utilizado tanto para reposição de volume em pacientes mais velhos quanto para projeção e definição em pacientes jovens. A técnica exige conhecimento da anatomia profunda da região para evitar complicações vasculares.',
      'O malar é uma das 11 regiões de filler disponíveis no formulário clínico do Lume, ao lado de regiões como Sulco Nasogeniano, Lábios, Mento e Rinomodelação.',
    ],
  },
  {
    id: 'mapa-de-pontos',
    letter: 'M',
    name: 'Mapa de Pontos de Aplicação',
    body: [
      'O mapa de pontos de aplicação é um registro visual que documenta exatamente onde foram feitas as injeções de botox ou filler durante uma sessão, marcado diretamente sobre a foto do cliente. Ao contrário de uma descrição textual de regiões, o mapa visual preserva a precisão espacial dos pontos — incluindo a profundidade aparente, a lateralidade e a proximidade com estruturas anatômicas específicas.',
      'Um mapa de pontos bem documentado tem três funções principais: serve como referência para o profissional reproduzir ou ajustar o protocolo na sessão seguinte; funciona como documentação clínica em caso de intercorrências ou avaliações posteriores; e permite que o próprio cliente visualize onde foram feitas as aplicações, aumentando a transparência da consulta.',
      'No Lume, o mapa é criado tocando diretamente sobre a foto da sessão. Estão disponíveis cinco cores para as marcações, permitindo diferenciar produtos, regiões ou técnicas dentro de uma mesma sessão. Os pontos podem ser desfeitos individualmente, a imagem pode ser ampliada com gesto de pinça para maior precisão, e o mapa fica salvo permanentemente no prontuário da sessão.',
    ],
  },
  {
    id: 'masseter',
    letter: 'M',
    name: 'Masseter',
    body: [
      'O masseter é o principal músculo da mastigação, localizado na lateral do rosto, sobre o osso mandibular. Visualmente, corresponde à região que se projeta quando o paciente aperta os dentes. Em pessoas com hipertrofia masseterina — seja por bruxismo ou por predisposição genética — o músculo apresenta volume aumentado, alargando o terço inferior do rosto e conferindo um contorno mais quadrado à mandíbula.',
      'A aplicação de toxina botulínica no masseter é utilizada para reduzir o volume muscular ao longo de semanas, afinar o contorno da face e, em pacientes com bruxismo, aliviar os sintomas de dor e desgaste dentário. É um dos procedimentos de harmonização facial mais procurados no Brasil, especialmente por pacientes que desejam um rosto mais oval ou em V.',
      'O masseter é uma das regiões anatômicas disponíveis no formulário clínico de botox do Lume, onde o profissional registra a quantidade em UI aplicada em cada lado do rosto.',
    ],
  },
  {
    id: 'nasalis',
    letter: 'N',
    name: 'Nasalis',
    body: [
      'O nasalis é o músculo responsável pela contração das asas do nariz, ativado principalmente ao sorrir ou franzir o nariz com força — o que gera as chamadas "bunny lines", pequenas rugas horizontais nas laterais do nariz. Nem todas as pessoas apresentam essa contração de forma visível, o que torna a avaliação individual importante antes de indicar tratamento.',
      'A aplicação de toxina botulínica no nasalis é indicada especificamente para quem apresenta as bunny lines de forma acentuada ao sorrir. É um procedimento que exige baixa dosagem e alta precisão, já que a proximidade com outros músculos da região pode gerar efeitos indesejados se a técnica não for cuidadosa.',
      'O nasalis é uma das 13 regiões anatômicas pré-cadastradas no formulário clínico de botox do Lume.',
    ],
  },
  {
    id: 'orbicular-do-olho',
    letter: 'O',
    name: 'Orbicular do Olho',
    body: [
      'O músculo orbicular do olho é o músculo circular que circunda a órbita ocular e controla o fechamento da pálpebra. Sua contração repetida ao longo dos anos — no sorriso, no franzir, na exposição ao sol — cria as linhas de expressão laterais ao canto externo do olho, conhecidas popularmente como "pés de galinha" ou "linhas de sorriso".',
      'A aplicação de toxina botulínica no orbicular do olho é um dos procedimentos mais frequentes em rejuvenescimento facial. A técnica reduz as contrações musculares na região lateral dos olhos, suavizando as linhas de expressão sem comprometer o sorriso ou a expressividade natural do paciente. A precisão no ponto de aplicação é fundamental para evitar ptose palpebral ou comprometimento da musculatura adjacente.',
      'O orbicular do olho é uma das 13 regiões anatômicas disponíveis no formulário clínico de botox do Lume.',
    ],
  },
  {
    id: 'periorbital',
    letter: 'P',
    name: 'Periorbital',
    body: [
      'A região periorbital é a área ao redor dos olhos, que inclui as pálpebras superior e inferior, as têmporas próximas ao canto externo do olho e a região da olheira. É uma das primeiras áreas do rosto a mostrar sinais de envelhecimento — perda de volume, escurecimento e formação de rugas finas (pés de galinha) — por ter pele particularmente fina e delicada.',
      'O tratamento estético da região periorbital combina abordagens diferentes conforme a queixa: toxina botulínica no músculo orbicular lateral para os pés de galinha, preenchimento com ácido hialurônico de baixa densidade para olheiras e sulco lacrimal, e bioestimuladores para melhora da qualidade da pele ao redor dos olhos.',
      'No Lume, a região periorbital está disponível no formulário clínico de filler para registro de volume aplicado em olheiras e áreas adjacentes.',
    ],
  },
  {
    id: 'platisma',
    letter: 'P',
    name: 'Platisma',
    body: [
      'O platisma é um músculo largo e fino localizado na região anterior do pescoço, que se estende desde a clavícula até o queixo. Com o envelhecimento e a perda de tônus, suas fibras verticais tornam-se visíveis como "bandas platismais" — as cordas verticais no pescoço que se acentuam ao contrair o músculo e que estão associadas ao envelhecimento do terço inferior da face e do pescoço.',
      'A aplicação de toxina botulínica no platisma, conhecida como "Nefertiti lift", é utilizada para relaxar as bandas, melhorar o contorno do pescoço e definir o ângulo cervico-mentoniano. O efeito é uma aparência mais definida e jovem na região do pescoço e da mandíbula sem necessidade de procedimentos invasivos.',
      'O platisma é uma das regiões anatômicas disponíveis no formulário clínico de botox do Lume, junto com outras regiões do terço inferior da face como DAO, Mentoniano e Masseter.',
    ],
  },
  {
    id: 'pre-jowl',
    letter: 'P',
    name: 'Pré-Jowl',
    body: [
      'A região pré-jowl fica na linha da mandíbula, entre o queixo e o ângulo mandibular, exatamente onde se forma o "jowl" — o acúmulo de tecido flácido que aparece com o envelhecimento e quebra o contorno reto da mandíbula, dando uma aparência menos definida ao rosto.',
      'O preenchimento da região pré-jowl com ácido hialurônico busca restaurar a continuidade da linha da mandíbula, criando uma transição mais suave entre o queixo e o ângulo mandibular. É uma técnica frequentemente combinada com preenchimento do próprio mento e do ângulo da mandíbula para um resultado de contorno facial mais completo.',
      'A pré-jowl é uma das 11 regiões pré-cadastradas no formulário clínico de filler do Lume.',
    ],
  },
  {
    id: 'preenchimento-labial',
    letter: 'P',
    name: 'Preenchimento Labial',
    body: [
      'O preenchimento labial é a aplicação de ácido hialurônico nos lábios com o objetivo de aumentar volume, definir contorno, corrigir assimetrias ou repor a perda de volume natural que ocorre com a idade. É um dos procedimentos estéticos injetáveis mais procurados, com técnicas que variam desde a hidratação sutil até a projeção mais acentuada.',
      'A técnica de aplicação varia conforme o objetivo: preenchimento do corpo do lábio para volume, definição do contorno (border) para um efeito de delineamento, e reforço do arco do cupido para realçar o formato natural. A escolha do produto — mais fluido ou mais firme — também influencia diretamente o resultado final.',
      'No Lume, os lábios são uma região pré-cadastrada no formulário clínico de filler, com registro de marca, lote e volume em ml aplicado.',
    ],
  },
  {
    id: 'prontuario-estetico',
    letter: 'P',
    name: 'Prontuário Estético',
    body: [
      'O prontuário estético é o documento que reúne todo o histórico clínico e fotográfico de um cliente em tratamentos estéticos. Um prontuário completo inclui dados de identificação do cliente, histórico de saúde relevante, registro fotográfico padronizado antes e após cada sessão, descrição dos procedimentos realizados com produtos, marcas, lotes e dosagens, regiões tratadas com mapa de pontos de aplicação e observações clínicas do profissional.',
      'A manutenção de prontuários adequados não é apenas uma boa prática clínica — é uma necessidade jurídica. Em caso de intercorrências, queixas ou processos, o prontuário é o documento primário de defesa do profissional. Um registro incompleto ou inexistente pode ser interpretado como ausência de diligência clínica. Para médicos, a obrigatoriedade do prontuário está prevista no Código de Ética Médica; para esteticistas e outros profissionais, as normas de seus conselhos de classe estabelecem exigências equivalentes.',
      'O Lume é um prontuário visual digital desenvolvido especificamente para profissionais de estética. Centraliza em um único app os dados do cliente, as fotos de cada sessão com câmera ghost para ângulo consistente, o mapa de pontos de aplicação, a ficha clínica de botox e filler com registro de lote e dosagem, e o gerador de antes e depois com logo. Todos os dados ficam armazenados na nuvem com acesso exclusivo do profissional.',
    ],
  },
  {
    id: 'procero',
    letter: 'P',
    name: 'Prócero',
    body: [
      'O prócero (ou prócer) é um músculo pequeno localizado entre as sobrancelhas, na parte superior do nariz. Sua contração produz as linhas horizontais na raiz do nariz e contribui para as rugas verticais entre as sobrancelhas — conhecidas como "linhas de raiva" ou "glabelares" — em conjunto com o músculo corrugador do supercílio.',
      'A aplicação de toxina botulínica no prócero é frequentemente combinada com a aplicação no corrugador como parte do tratamento da região glabelar. Essa combinação relaxa o conjunto muscular responsável pela expressão de raiva ou preocupação em repouso, suavizando as linhas entre as sobrancelhas.',
      'O prócero é uma das 13 regiões anatômicas disponíveis no formulário clínico de botox do Lume.',
    ],
  },
  {
    id: 'rastreabilidade',
    letter: 'R',
    name: 'Rastreabilidade Clínica',
    body: [
      'Rastreabilidade clínica é a capacidade de identificar, a qualquer momento, exatamente qual produto (marca e lote) foi aplicado em qual paciente, em qual data, em qual região e em qual quantidade. É um princípio fundamental de segurança em procedimentos injetáveis, especialmente em caso de recall de produto ou reação adversa.',
      'Sem rastreabilidade, um evento adverso associado a um lote específico de toxina botulínica ou filler pode ser impossível de correlacionar retroativamente — o profissional simplesmente não tem como saber quais pacientes receberam aquele lote. Isso compromete tanto a resposta clínica ao evento quanto a defesa jurídica do profissional.',
      'O Lume constrói rastreabilidade automaticamente: cada sessão de botox ou filler fica vinculada ao cliente, à data, ao produto, ao lote e à região tratada, permitindo localizar qualquer aplicação em segundos, mesmo anos depois.',
    ],
  },
  {
    id: 'rinomodelacao',
    letter: 'R',
    name: 'Rinomodelação',
    body: [
      'A rinomodelação é um procedimento de harmonização nasal realizado com preenchedores dérmicos, sem cirurgia. Utiliza injeções de ácido hialurônico ou outros fillers para corrigir assimetrias, suavizar irregularidades no dorso nasal, elevar ou definir a ponta do nariz e melhorar a projeção nasal. O resultado é imediato e temporário, com duração que varia conforme o produto e a região tratada.',
      'Por ser um procedimento não cirúrgico, a rinomodelação tem recuperação mínima e risco de complicações menores do que uma rinoplastia cirúrgica. No entanto, exige profundo conhecimento anatômico da vascularização nasal, pois complicações vasculares nessa região podem ser graves. É considerada uma das técnicas de maior exigência técnica entre os procedimentos de harmonização facial.',
      'A rinomodelação é uma das 11 regiões de filler disponíveis no formulário clínico do Lume.',
    ],
  },
  {
    id: 'skinbooster',
    letter: 'S',
    name: 'Skinbooster',
    body: [
      'Skinbooster é uma categoria de produtos injetáveis à base de ácido hialurônico de baixa densidade, aplicados em microinjeções superficiais e distribuídas por toda a área tratada — geralmente rosto, pescoço ou mãos — com o objetivo de hidratar profundamente a pele e melhorar sua qualidade, elasticidade e luminosidade, sem gerar volume perceptível como um preenchedor convencional.',
      'Diferente do preenchimento tradicional, que corrige volume em pontos específicos, o skinbooster trata a pele de forma global e costuma exigir protocolo de mais de uma sessão, com intervalos de semanas, para atingir o resultado completo de melhora textural.',
      'Sessões de skinbooster podem ser documentadas no Lume no formulário clínico de filler, com foto via câmera ghost para acompanhar a evolução da qualidade da pele ao longo do protocolo.',
    ],
  },
  {
    id: 'sorriso-gengival',
    letter: 'S',
    name: 'Sorriso Gengival',
    body: [
      'O sorriso gengival é a exposição excessiva da gengiva superior ao sorrir, geralmente causada por hiperatividade dos músculos elevadores do lábio superior. É uma queixa estética comum, que pode ser tratada de forma minimamente invasiva sem necessidade de cirurgia.',
      'A aplicação de toxina botulínica em pontos específicos da musculatura elevadora do lábio superior reduz temporariamente sua contração, diminuindo a exposição gengival ao sorrir. É um procedimento de dosagem baixa e alta precisão, já que o excesso de relaxamento pode comprometer a simetria do sorriso.',
      'O Lume permite registrar aplicações de botox para sorriso gengival no formulário clínico, com a quantidade em UI documentada junto às demais regiões tratadas na mesma sessão.',
    ],
  },
  {
    id: 'sulco-nasogeniano',
    letter: 'S',
    name: 'Sulco Nasogeniano',
    body: [
      'O sulco nasogeniano é a prega que vai do canto da narina até o canto da boca, separando a bochecha do lábio superior. Presente em diferentes graus em pessoas de todas as idades, ele tende a se aprofundar com o envelhecimento à medida que há perda de gordura e ptose dos tecidos da face média, tornando-se um dos principais marcos visíveis do envelhecimento facial.',
      'O preenchimento do sulco nasogeniano com ácido hialurônico é um dos procedimentos mais realizados em harmonização facial. A técnica deposita volume sob a prega para suavizá-la, criando uma transição mais gradual entre a bochecha e o lábio. A abordagem direta ao sulco pode ser combinada com o preenchimento malar, que ao repor volume na maçã do rosto contribui indiretamente para elevar e suavizar o sulco.',
      'O sulco nasogeniano é uma das 11 regiões de filler disponíveis no formulário clínico do Lume.',
    ],
  },
  {
    id: 'temporal',
    letter: 'T',
    name: 'Têmpora (Temporal)',
    body: [
      'A têmpora, ou região temporal, é a área lateral do rosto, entre o canto externo do olho, a sobrancelha e a linha do cabelo. Com o envelhecimento, essa região costuma perder volume ósseo e de tecido adiposo, criando uma depressão que acentua a aparência de cansaço e afeta o contorno lateral do rosto — inclusive o formato e a sustentação da sobrancelha.',
      'O preenchimento da têmpora com ácido hialurônico é uma técnica de harmonização facial que repõe o volume perdido, suaviza a transição entre a têmpora e a sobrancelha, e pode indiretamente elevar levemente a cauda da sobrancelha. É considerada uma região de risco moderado a alto pela proximidade de estruturas vasculares, exigindo técnica apropriada.',
      'A têmpora é uma das 11 regiões pré-cadastradas no formulário clínico de filler do Lume, com registro de volume em ml por sessão.',
    ],
  },
  {
    id: 'ui',
    letter: 'U',
    name: 'UI (Unidade Internacional)',
    body: [
      'A Unidade Internacional (UI) é a unidade de medida padronizada utilizada para dosagem de toxina botulínica. A UI não é uma medida de volume ou de massa — é uma medida biológica que representa a quantidade de toxina necessária para produzir um efeito específico em condições controladas de laboratório. Diferentes marcas comerciais de toxina botulínica utilizam protocolos de calibração distintos, o que significa que 1 UI de uma marca não é diretamente equivalente a 1 UI de outra.',
      'Cada região anatômica tratada com botox recebe uma quantidade específica de UI, determinada pelo protocolo do profissional com base no músculo, na intensidade desejada e nas características individuais do paciente. A soma das UI de todas as regiões tratadas determina o total da sessão, que é relevante tanto para o cálculo de custo quanto para rastreabilidade clínica.',
      'No Lume, o profissional registra a quantidade em UI para cada região anatômica tratada no formulário de botox. O total de UI da sessão é calculado automaticamente à medida que as regiões são preenchidas, eliminando cálculos manuais e reduzindo riscos de erro na documentação.',
    ],
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://brlume.app/' },
    { '@type': 'ListItem', position: 2, name: 'Glossário', item: 'https://brlume.app/glossario' },
  ],
}

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossário de Estética e Harmonização Facial',
  description:
    'Definições dos principais termos utilizados por esteticistas, médicos estetas, dermatologistas e biomédicos em procedimentos de estética e harmonização facial.',
  hasDefinedTerm: terms.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.name,
    description: t.body[0],
    inDefinedTermSet: 'https://brlume.app/glossario',
  })),
}

const letters = [...new Set(terms.map((t) => t.letter))].sort()

export default function GlossarioPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Referência clínica
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Glossário de Estética e Harmonização Facial
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              Este glossário reúne os principais termos utilizados por esteticistas, médicos estetas,
              dermatologistas e biomédicos no dia a dia clínico e na gestão de clientes. Os termos
              estão organizados em ordem alfabética.
            </p>
          </div>

          {/* Alphabetical index */}
          <nav aria-label="Índice alfabético" className="flex flex-wrap gap-2 mb-12">
            {letters.map((letter) => {
              const firstTerm = terms.find((t) => t.letter === letter)
              return (
                <a
                  key={letter}
                  href={`#${firstTerm!.id}`}
                  className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 font-bold text-sm flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors"
                >
                  {letter}
                </a>
              )
            })}
          </nav>

          <div className="w-full h-px bg-gray-100 mb-12" />

          {/* Terms */}
          <div className="space-y-12">
            {terms.map((term, i) => (
              <div key={term.id} id={term.id}>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                  {term.name}
                </h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  {term.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                {i < terms.length - 1 && (
                  <div className="w-full h-px bg-gray-100 mt-12" />
                )}
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-gray-100 mt-12 mb-12" />

          {/* CTA */}
          <div className="bg-teal-600 rounded-2xl p-8 text-center">
            <p className="text-teal-100 text-xs font-bold tracking-widest uppercase mb-3">
              Experimente grátis
            </p>
            <h2 className="text-2xl font-extrabold text-white mb-2 leading-tight">
              Baixe o Lume gratuitamente
            </h2>
            <p className="text-white/70 text-sm mb-6 max-w-xs mx-auto">
              Prontuário visual para esteticistas, médicos estetas e todos que fazem harmonização facial.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-teal-700 font-bold text-sm px-7 py-3 rounded-full hover:bg-teal-50 transition-colors"
            >
              Baixar na App Store
            </a>
          </div>

        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
