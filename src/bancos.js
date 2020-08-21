const bancos = [
  {
    codigo: '246',
    nome: 'Banco ABC Brasil S.A.',
  },
  {
    codigo: '075',
    nome: 'Banco ABN AMRO S.A.',
  },
  {
    codigo: '121',
    nome: 'Banco Agibank S.A.',
  },
  {
    codigo: '025',
    nome: 'Banco Alfa S.A.',
  },
  {
    codigo: '641',
    nome: 'Banco Alvorada S.A.',
  },
  {
    codigo: '065',
    nome: 'Banco Andbank (Brasil) S.A.',
  },
  {
    codigo: '213',
    nome: 'Banco Arbi S.A.',
  },
  {
    codigo: '096',
    nome: 'Banco B3 S.A.',
  },
  {
    codigo: '024',
    nome: 'Banco BANDEPE S.A.',
  },
  {
    codigo: '330',
    nome: 'Banco Bari de Investimentos e Financiamentos S/A',
  },
  {
    codigo: '318',
    nome: 'Banco BMG S.A.',
  },
  {
    codigo: '752',
    nome: 'Banco BNP Paribas Brasil S.A.',
  },
  {
    codigo: '107',
    nome: 'Banco BOCOM BBM S.A.',
  },
  {
    codigo: '063',
    nome: 'Banco Bradescard S.A.',
  },
  {
    codigo: '036',
    nome: 'Banco Bradesco BBI S.A.',
  },
  {
    codigo: '122',
    nome: 'Banco Bradesco BERJ S.A.',
  },
  {
    codigo: '204',
    nome: 'Banco Bradesco Cartões S.A.',
  },
  {
    codigo: '394',
    nome: 'Banco Bradesco Financiamentos S.A.',
  },
  {
    codigo: '237',
    nome: 'Banco Bradesco S.A.',
  },
  {
    codigo: '218',
    nome: 'Banco BS2 S.A.',
  },
  {
    codigo: '208',
    nome: 'Banco BTG Pactual S.A.',
  },
  {
    codigo: '473',
    nome: 'Banco Caixa Geral - Brasil S.A.',
  },
  {
    codigo: '412',
    nome: 'Banco Capital S.A.',
  },
  {
    codigo: '040',
    nome: 'Banco Cargill S.A.',
  },
  {
    codigo: '266',
    nome: 'Banco Cédula S.A.',
  },
  {
    codigo: '739',
    nome: 'Banco Cetelem S.A.',
  },
  {
    codigo: '233',
    nome: 'Banco Cifra S.A.',
  },
  {
    codigo: '745',
    nome: 'Banco Citibank S.A.',
  },
  {
    codigo: '241',
    nome: 'Banco Clássico S.A.',
  },
  {
    codigo: '756',
    nome: 'Banco Cooperativo do Brasil S.A. - BANCOOB',
  },
  {
    codigo: '748',
    nome: 'Banco Cooperativo Sicredi S.A.',
  },
  {
    codigo: '222',
    nome: 'Banco Credit Agricole Brasil S.A.',
  },
  {
    codigo: '505',
    nome: 'Banco Credit Suisse (Brasil) S.A.',
  },
  {
    codigo: '069',
    nome: 'Banco Crefisa S.A.',
  },
  {
    codigo: '003',
    nome: 'Banco da Amazônia S.A.',
  },
  {
    codigo: '083',
    nome: 'Banco da China Brasil S.A.',
  },
  {
    codigo: '707',
    nome: 'Banco Daycoval S.A.',
  },
  {
    codigo: '51',
    nome: 'Banco de Desenvolvimento do Espírito Santo S.A.',
  },
  {
    codigo: '300',
    nome: 'Banco de La Nacion Argentina',
  },
  {
    codigo: '495',
    nome: 'Banco de La Provincia de Buenos Aires',
  },
  {
    codigo: '494',
    nome: 'Banco de La Republica Oriental del Uruguay',
  },
  {
    codigo: '654',
    nome: 'Banco Digimais S.A.',
  },
  {
    codigo: '001',
    nome: 'Banco do Brasil S.A.',
  },
  {
    codigo: '047',
    nome: 'Banco do Estado de Sergipe S.A.',
  },
  {
    codigo: '037',
    nome: 'Banco do Estado do Pará S.A.',
  },
  {
    codigo: '041',
    nome: 'Banco do Estado do Rio Grande do Sul S.A.',
  },
  {
    codigo: '004',
    nome: 'Banco do Nordeste do Brasil S.A.',
  },
  {
    codigo: '265',
    nome: 'Banco Fator S.A.',
  },
  {
    codigo: '224',
    nome: 'Banco Fibra S.A.',
  },
  {
    codigo: '626',
    nome: 'Banco Ficsa S.A.',
  },
  {
    codigo: '094',
    nome: 'Banco Finaxis S.A.',
  },
  {
    codigo: '612',
    nome: 'Banco Guanabara S.A.',
  },
  {
    codigo: '012',
    nome: 'Banco Inbursa S.A.',
  },
  {
    codigo: '604',
    nome: 'Banco Industrial do Brasil S.A.',
  },
  {
    codigo: '653',
    nome: 'Banco Indusval S.A.',
  },
  {
    codigo: '077',
    nome: 'Banco Inter S.A.',
  },
  {
    codigo: '249',
    nome: 'Banco Investcred Unibanco S.A.',
  },
  {
    codigo: '184',
    nome: 'Banco Itaú BBA S.A.',
  },
  {
    codigo: '029',
    nome: 'Banco Itaú Consignado S.A.',
  },
  {
    codigo: '479',
    nome: 'Banco ItauBank S.A',
  },
  {
    codigo: '376',
    nome: 'Banco J. P. Morgan S.A.',
  },
  {
    codigo: '074',
    nome: 'Banco J. Safra S.A.',
  },
  {
    codigo: '217',
    nome: 'Banco John Deere S.A.',
  },
  {
    codigo: '076',
    nome: 'Banco KDB S.A.',
  },
  {
    codigo: '757',
    nome: 'Banco KEB HANA do Brasil S.A.',
  },
  {
    codigo: '600',
    nome: 'Banco Luso Brasileiro S.A.',
  },
  {
    codigo: '243',
    nome: 'Banco Máxima S.A.',
  },
  {
    codigo: '389',
    nome: 'Banco Mercantil do Brasil S.A.',
  },
  {
    codigo: '370',
    nome: 'Banco Mizuho do Brasil S.A.',
  },
  {
    codigo: '746',
    nome: 'Banco Modal S.A.',
  },
  {
    codigo: '066',
    nome: 'Banco Morgan Stanley S.A.',
  },
  {
    codigo: '456',
    nome: 'Banco MUFG Brasil S.A.',
  },
  {
    codigo: '007',
    nome: 'Banco Nacional de Desenvolvimento Econômico e Social - BNDES',
  },
  {
    codigo: '169',
    nome: 'Banco Olé Bonsucesso Consignado S.A.',
  },
  {
    codigo: '079',
    nome: 'Banco Original do Agronegócio S.A.',
  },
  {
    codigo: '212',
    nome: 'Banco Original S.A.',
  },
  {
    codigo: '712',
    nome: 'Banco Ourinvest S.A.',
  },
  {
    codigo: '623',
    nome: 'Banco PAN S.A.',
  },
  {
    codigo: '611',
    nome: 'Banco Paulista S.A.',
  },
  {
    codigo: '643',
    nome: 'Banco Pine S.A.',
  },
  {
    codigo: '658',
    nome: 'Banco Porto Real de Investimentos S.A.',
  },
  {
    codigo: '747',
    nome: 'Banco Rabobank International Brasil S.A.',
  },
  {
    codigo: '633',
    nome: 'Banco Rendimento S.A.',
  },
  {
    codigo: '741',
    nome: 'Banco Ribeirão Preto S.A.',
  },
  {
    codigo: '720',
    nome: 'BANCO RNX S.A',
  },
  {
    codigo: '120',
    nome: 'Banco Rodobens S.A.',
  },
  {
    codigo: '422',
    nome: 'Banco Safra S.A.',
  },
  {
    codigo: '033',
    nome: 'Banco Santander (Brasil) S.A.',
  },
  {
    codigo: '743',
    nome: 'Banco Semear S.A.',
  },
  {
    codigo: '754',
    nome: 'Banco Sistema S.A.',
  },
  {
    codigo: '630',
    nome: 'Banco Smartbank S.A.',
  },
  {
    codigo: '366',
    nome: 'Banco Société Générale Brasil S.A.',
  },
  {
    codigo: '637',
    nome: 'Banco Sofisa S.A.',
  },
  {
    codigo: '464',
    nome: 'Banco Sumitomo Mitsui Brasileiro S.A.',
  },
  {
    codigo: '082',
    nome: 'Banco Topázio S.A.',
  },
  {
    codigo: '634',
    nome: 'Banco Triângulo S.A.',
  },
  {
    codigo: '018',
    nome: 'Banco Tricury S.A.',
  },
  {
    codigo: '655',
    nome: 'Banco Votorantim S.A.',
  },
  {
    codigo: '610',
    nome: 'Banco VR S.A.',
  },
  {
    codigo: '119',
    nome: 'Banco Western Union do Brasil S.A.',
  },
  {
    codigo: '124',
    nome: 'Banco Woori Bank do Brasil S.A.',
  },
  {
    codigo: '102',
    nome: 'Banco XP S.A.',
  },
  {
    codigo: '081',
    nome: 'BancoSeguro S.A.',
  },
  {
    codigo: '021',
    nome: 'BANESTES S.A. Banco do Estado do Espírito Santo',
  },
  {
    codigo: '755',
    nome: 'Bank of America Merrill Lynch Banco Múltiplo S.A.',
  },
  {
    codigo: '250',
    nome: 'BCV - Banco de Crédito e Varejo S.A.',
  },
  {
    codigo: '144',
    nome: 'BEXS Banco de Câmbio S.A.',
  },
  {
    codigo: '017',
    nome: 'BNY Mellon Banco S.A.',
  },
  {
    codigo: '126',
    nome: 'BR Partners Banco de Investimento S.A.',
  },
  {
    codigo: '070',
    nome: 'BRB - Banco de Brasília S.A.',
  },
  {
    codigo: '092',
    nome: 'Brickell S.A. Crédito, Financiamento e Investimento',
  },
  {
    codigo: '104',
    nome: 'Caixa Econômica Federal',
  },
  {
    codigo: '114-7',
    nome: 'Central das Cooperativas de Economia e Crédito Mútuo do Estado do Espírito Santo Ltda.',
  },
  {
    codigo: '320',
    nome: 'China Construction Bank (Brasil) Banco Múltiplo S.A.',
  },
  {
    codigo: '477',
    nome: 'Citibank N.A.',
  },
  {
    codigo: '163',
    nome: 'Commerzbank Brasil S.A. - Banco Múltiplo',
  },
  {
    codigo: '085',
    nome: 'Cooperativa Central de Crédito - AILOS',
  },
  {
    codigo: '097',
    nome: 'Cooperativa Central de Crédito Noroeste Brasileiro Ltda.',
  },
  {
    codigo: '090-2',
    nome: 'Cooperativa Central de Economia e Crédito Mutuo - SICOOB UNIMAIS',
  },
  {
    codigo: '087-6',
    nome: 'Cooperativa Central de Economia e Crédito Mútuo das Unicreds de Santa Catarina e Paraná',
  },
  {
    codigo: '089-2',
    nome: 'Cooperativa de Crédito Rural da Região da Mogiana',
  },
  {
    codigo: '098-1',
    nome: 'CREDIALIANÇA COOPERATIVA DE CRÉDITO RURAL',
  },
  {
    codigo: '487',
    nome: 'Deutsche Bank S.A. - Banco Alemão',
  },
  {
    codigo: '064',
    nome: 'Goldman Sachs do Brasil Banco Múltiplo S.A.',
  },
  {
    codigo: '078',
    nome: 'Haitong Banco de Investimento do Brasil S.A.',
  },
  {
    codigo: '062',
    nome: 'Hipercard Banco Múltiplo S.A.',
  },
  {
    codigo: '269',
    nome: 'HSBC Brasil S.A. - Banco de Investimento',
  },
  {
    codigo: '132',
    nome: 'ICBC do Brasil Banco Múltiplo S.A.',
  },
  {
    codigo: '492',
    nome: 'ING Bank N.V.',
  },
  {
    codigo: '139',
    nome: 'Intesa Sanpaolo Brasil S.A. - Banco Múltiplo',
  },
  {
    codigo: '652',
    nome: 'Itaú Unibanco Holding S.A.',
  },
  {
    codigo: '341',
    nome: 'Itaú Unibanco S.A.',
  },
  {
    codigo: '488',
    nome: 'JPMorgan Chase Bank, National Association',
  },
  {
    codigo: '399',
    nome: 'Kirton Bank S.A. - Banco Múltiplo',
  },
  {
    codigo: '128',
    nome: 'MS Bank S.A. Banco de Câmbio',
  },
  {
    codigo: '753',
    nome: 'Novo Banco Continental S.A. - Banco Múltiplo',
  },
  {
    codigo: '613',
    nome: 'Omni Banco S.A.',
  },
  {
    codigo: '254',
    nome: 'Paraná Banco S.A.',
  },
  {
    codigo: '125',
    nome: 'Plural S.A. - Banco Múltiplo',
  },
  {
    codigo: '751',
    nome: 'Scotiabank Brasil S.A. Banco Múltiplo',
  },
  {
    codigo: '118',
    nome: 'Standard Chartered Bank (Brasil) S/A–Bco Invest.',
  },
  {
    codigo: '014',
    nome: 'State Street Brasil S.A. - Banco Comercial',
  },
  {
    codigo: '095',
    nome: 'Travelex Banco de Câmbio S.A.',
  },
  {
    codigo: '129',
    nome: 'UBS Brasil Banco de Investimento S.A.',
  },
  {
    codigo: '091-4',
    nome: 'Unicred Central do Rio Grande do Sul',
  },
  {
    codigo: '084',
    nome: 'Uniprime Norte do Paraná - Coop de Economia e Crédito Mútuo dos Médicos, Profissionais das Ciências',
  },
];

export default { bancos };
