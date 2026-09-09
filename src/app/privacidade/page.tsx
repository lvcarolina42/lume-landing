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
      'Para fornecer nossos serviços de prontuário eletrônico, coletamos apenas os dados essenciais para o funcionamento do aplicativo:',
    ],
    list: [
      'Dados de autenticação: Nome e E-mail fornecidos durante o login (via Apple ou Google).',
      'Dados de uso (criados por você): Informações dos seus pacientes (nome, telefone, histórico de procedimentos) e fotografias clínicas tiradas ou enviadas através da câmera e galeria do seu dispositivo.',
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
    title: '4. Permissões do dispositivo',
    body: ['O aplicativo solicita acesso à:'],
    list: [
      'Câmera: Exclusivamente para capturar fotos do "Antes e Depois" e registrar mapeamentos faciais dos pacientes.',
      'Galeria de fotos: Exclusivamente para permitir a importação de fotos de pacientes já existentes no seu dispositivo.',
    ],
  },
  {
    title: '5. Retenção e exclusão de dados (seus direitos)',
    body: [
      'Você tem o controle total sobre seus dados. A qualquer momento, você pode utilizar a opção "Excluir minha conta" dentro das configurações do aplicativo. Esta ação é irreversível e apagará instantaneamente todos os dados do seu perfil, pacientes registrados e fotografias dos nossos servidores.',
    ],
  },
  {
    title: '6. Contato',
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
              Última atualização: 20/03/2026
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
    </>
  )
}
