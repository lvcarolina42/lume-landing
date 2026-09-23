import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Lume',
  description:
    'Como o Lume coleta, usa e protege os dados de profissionais de saúde e estética e de seus pacientes.',
  alternates: {
    canonical: 'https://brlume.app/privacidade',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://brlume.app/' },
    { '@type': 'ListItem', position: 2, name: 'Privacidade', item: 'https://brlume.app/privacidade' },
  ],
}

const SECTIONS = [
  {
    title: '1. Introdução',
    body: [
      'O aplicativo Lume ("Nós") valoriza a privacidade dos seus usuários ("Você", profissionais de saúde e estética). Esta política descreve como coletamos, usamos e protegemos as suas informações.',
    ],
  },
  {
    title: '2. Coleta de dados',
    body: [
      'Para fornecer nossos serviços de prontuário eletrônico, coletamos os seguintes dados:',
    ],
    list: [
      'Dados de autenticação: Nome e e-mail fornecidos durante o login (via Apple, Google ou e-mail/senha). Se você optar por usar o app sem criar conta ("continuar como convidado"), seus dados são sincronizados normalmente em nossos servidores sob uma sessão anônima, vinculada a este dispositivo até que você crie uma conta permanente.',
      'Dados de perfil do profissional: Telefone/WhatsApp (opcional) e sua preferência de receber comunicações de marketing/novidades — usados exclusivamente para contato relacionado à sua conta, nunca compartilhados com terceiros para fins publicitários. Você pode atualizar ou remover esse consentimento a qualquer momento em Configurações → Perfil.',
      'Dados de uso (criados por você): Informações dos seus pacientes (nome, telefone, histórico de procedimentos) e fotografias clínicas tiradas ou enviadas através da câmera e galeria do seu dispositivo.',
      'Contatos do dispositivo (opcional): Se você usar a opção "Importar dos contatos" ao cadastrar um paciente, o app lê o nome e telefone do contato selecionado no picker nativo do seu sistema — apenas do contato que você escolhe, nunca a sua agenda inteira, e apenas para preencher o cadastro do paciente.',
      'Anamnese digital — dados de saúde do paciente: Quando você usa o formulário de anamnese, o próprio paciente pode preencher diretamente (presencialmente no seu aparelho, ou remotamente por um link) informações pessoais (nome, data de nascimento, CPF/RG, endereço, e-mail, telefone) e respostas sobre histórico de saúde (por exemplo, alergias, gestação, condições crônicas ou uso de medicação), além de uma assinatura digital confirmando o consentimento. Esses dados são considerados dados sensíveis de saúde pela LGPD, são coletados com o consentimento explícito do paciente (registrado no momento do envio do formulário) e ficam visíveis apenas para o profissional responsável.',
      'Dados de uso do aplicativo: Utilizamos o Firebase Analytics para entender como as funcionalidades do app são usadas (por exemplo, quais telas são mais acessadas), o que nos ajuda a melhorar o produto. Também usamos o Firebase Crashlytics, que recebe relatórios técnicos automáticos quando o app encontra um erro, para identificar e corrigir problemas.',
      'Notificações: Se você permitir notificações, associamos um identificador técnico do seu dispositivo (token) à sua conta para poder enviar avisos sobre o funcionamento do app.',
      'Coleta e uso de imagens e dados faciais: O Lume permite que profissionais de saúde capturem e armazenem fotografias 2D (imagens) dos pacientes para fins exclusivos de prontuário e acompanhamento estético (como comparações de "Antes e Depois"). Nós não utilizamos APIs de mapeamento de profundidade (como o TrueDepth API) e não realizamos reconhecimento facial automatizado. As imagens são armazenadas de forma segura em servidores em nuvem, sob criptografia, e são estritamente visíveis apenas pelo profissional e sua equipe autorizada. Nós não compartilhamos, vendemos ou cedemos essas imagens a terceiros ou redes de anúncios. As imagens são retidas pelo tempo que o profissional mantiver sua conta ativa ou até que solicite a exclusão.',
    ],
  },
  {
    title: '3. Armazenamento e segurança',
    body: [
      'Todos os dados e imagens inseridos no Lume são criptografados e armazenados em servidores seguros na nuvem providos pelo Google Cloud (Firebase). Nós não vendemos, alugamos ou compartilhamos seus dados, nem os dados de seus pacientes, com terceiros para fins publicitários.',
    ],
  },
  {
    title: '4. Compartilhamento com terceiros',
    body: [
      'Alguns dados são processados por prestadores de serviço que nos ajudam a operar o Lume, sempre limitados ao necessário para cada finalidade:',
    ],
    list: [
      'Google Cloud / Firebase: infraestrutura de banco de dados, armazenamento de arquivos, autenticação, notificações e analytics.',
      'RevenueCat: gerencia nossas assinaturas (Lume Pro) e recebe um identificador da sua conta para vincular sua compra — nunca temos acesso aos dados do seu cartão.',
      'Apple App Store / Google Play: processam o pagamento das assinaturas diretamente — o Lume não armazena dados de cartão ou pagamento.',
      'Inteligência artificial (uso interno administrativo): usamos um modelo de IA (Google Gemini) para nos ajudar a redigir comunicados e traduzir conteúdo enviado a usuários. Essa IA nunca tem acesso aos dados ou fotos dos seus pacientes — processa apenas texto administrativo que nós mesmos escrevemos.',
    ],
  },
  {
    title: '5. Transferência internacional de dados',
    body: [
      'Nossa infraestrutura (Google Cloud/Firebase) pode processar e armazenar dados em servidores localizados fora do Brasil, incluindo nos Estados Unidos. Essa transferência é feita sob os padrões de segurança e contratuais do provedor, em conformidade com a LGPD, e é necessária para o funcionamento do serviço.',
    ],
  },
  {
    title: '6. Permissões do dispositivo',
    body: ['O aplicativo solicita acesso à:'],
    list: [
      'Câmera: Exclusivamente para capturar fotos do "Antes e Depois" e registrar mapeamentos faciais dos pacientes.',
      'Galeria de fotos: Exclusivamente para permitir a importação de fotos de pacientes já existentes no seu dispositivo.',
      'Contatos: Somente quando você escolhe "Importar dos contatos" ao cadastrar um paciente — o app abre o seletor nativo do seu sistema e lê apenas o contato que você selecionar.',
    ],
  },
  {
    title: '7. Retenção e exclusão de dados (seus direitos)',
    body: [
      'Você tem o controle total sobre seus dados. A qualquer momento, você pode utilizar a opção "Excluir minha conta" dentro das configurações do aplicativo. Esta ação é irreversível e apagará instantaneamente todos os dados do seu perfil, pacientes registrados, anamneses e fotografias dos nossos servidores, incluindo as bases internas de análise.',
    ],
  },
  {
    title: '8. Contato',
    body: [
      'Em caso de dúvidas ou solicitações sobre seus dados, entre em contato através do e-mail: lvcarolina42@gmail.com.',
    ],
  },
]

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          <div className="mb-10">
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5 uppercase">
              Legal
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Política de Privacidade
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              Última atualização: 09/09/2026
            </p>
          </div>

          <div className="w-full h-px bg-gray-100 mb-12" />

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                  {section.title}
                </h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-gray-600 text-base leading-relaxed mb-3">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-5 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-gray-600 text-base leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
