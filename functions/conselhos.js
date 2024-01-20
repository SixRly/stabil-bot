const fs = require('fs')
var palavras = [
"Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos. – James Cameron, Cineastra",
"O sucesso normalmente vem para quem está ocupado demais para procurar por ele – Henry David Thoreau, filósofo",
"A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete",
"Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência – Lisa M. Amos, executiva",
"Se você não está disposto a arriscar, esteja disposto a uma vida comum – Jim Rohn, empreendedor",
"Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso – Swami Vivekananda, pensador hindu",
"Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor",
"Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los – Walt Disney, desenhista e empreendedor",
"Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo – Winston Churchill, político",
"Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali – Vaibhav Shah, pensador",
"Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior – Denzel Washington, ator",
"Oportunidades não surgem. É você que as cria – Chris Grosser, fotógrafo",
"Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor – Albert Einstein, físico",
"Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança – Charles Darwin, biólogo",
"A melhor vingança é um sucesso estrondoso – Frank Sinatra, cantor",
"Eu não falhei. Só descobri 10 mil caminhos que não eram o certo – Thomas Edison, inventor",
"Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele – David Brinkley, jornalista",
"Ninguém pode fazer você se sentir inferior sem o seu consentimento – Eleanor Roosevelt, primeira-dama dos EUA",
"O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo – Henry Ford, empreendedor",
"Se você está atravessando um inferno, continue atravessando – Churchill",
"O que nos parece uma provação amarga pode ser uma bênção disfarçada – Oscar Wilde, escritor",
"A distância entre a insanidade e a genialidade é medida pelo sucesso – Bruce Feirstein, roteirista",
"Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor",
"Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor",
"A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro – Nathaniel Hawthorne, escritor",
"Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer – Einstein",
"Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem – Ray Goforth, executivo",
"Comece de onde você está. Use o que você tiver. Faça o que você puder – Arthur Ashe, tenista",
"As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo – Kevin Kline, ator",
"Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter – Thomas Jefferson, político",
"O ponto de partida de qualquer conquista é o desejo – Napoleon Hill, assessor político",
"É muito fácil cair no erro de pensar que tudo depende de você. Mas, se você ama a Deus, sua vida está nas mãos dele. Deixe Deus guiar sua vida e ele vai lhe ajudar.", 
"Cuidado com o sentimento de superioridade. A História confirma o que a Bíblia diz: quando uma pessoa se torna arrogante, acaba sempre por cair na ruína. A arrogância nos torna estúpidos.",
"Qual é o melhor investimento a longo prazo para garantir seu futuro? A generosidade. Generosidade gera mais generosidade.",
"Quando em dúvida, não fale. Falar sem pensar só traz problemas. É melhor manter a boca fechada que dizer disparates.",
"Basicamente, estude! Aprenda tudo que você pode, especialmente da Bíblia. Não despreze o privilégio de aprender.",
"Sim, as pessoas mentem. Por isso, analise os fatos antes de se comprometer com algum negócio. Um pouco de cuidado pode lhe salvar da humilhação, da pobreza e até da prisão!",
"Essa é difícil mas faz toda a diferença. Conseguir se controlar e ser paciente é um super-poder! Um pouco de domínio próprio faz maravilhas.",
"Comece seu dia entregando tudo a Deus. Sl 37:5 Entrega o teu caminho ao Senhor, confia nele, e o mais ele fará",
"Leia uma porção da Bíblia todos os dias. Sl 119:105 Lâmpada para os meus pés é a tua palavra e luz, para os meus caminhos",
"Aproveite o seu dia. Ec 9:10 Tudo quanto te vier à mão para fazer, faze-o conforme as tuas forças, porque no além, para onde tu vais, não há obra, nem projeto, nem conhecimento, nem sabedoria",
"Tire do seu vocabulário: não posso, não vou conseguir, é impossível. Lc 1:37 Pois para Deus nada é impossível",
"Viva o presente: Quem vive do passado é museu. 2 Cor 5:17 Portanto, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; tudo se fez novo",
"Não tome decisão na hora da ira. Prov 14:17 O que facilmente se ira faz doidices, e o homem de maus desígnios é odiado",
"Não faça amizades com certos tipos de pessoas. Prov 22:24 Não faça amizade com o iracundo, nem Andes com o homem colérico",
"Mantenha amigos por toda a vida. Prov. 18:24 O homem que tem muitos amigos pode vir à ruína, mas há um amigo mais chegado do que um irmão",
"Ouça mais, fale menos. Prov 17:28 Até o tolo, quando se cala, é tido por sábio, e o que cerra os lábios, por entendido",
"Não se isole: ninguém é uma ilha. Ec 4:9,10,11. Melhor é serem dois do que um. Se um cair, o outro levanta o seu companheiro. Mas ai do que estiver só, pois, caindo, não haverá quem o levante",
"Não seja materialista. Ec 5:15 Como saiu do ventre da sua mãe, assim nu voltará, indo-se como veio. Nada tomará do seu trabalho que possa levar na sua mão",
"Dê com generosidade, sem esperar nada em troca. MT 5:42 Dá a quem te pedir, e não te desvies daquele que quiser que lhe emprestes",
"Não ande ansioso pelo amanhã. Mt 6:34 Portanto, não andeis ansiosos pelo dia amanhã, pois o amanhã se preocupará consigo mesmo. Basta a cada dia o seu próprio mal",
"Valorize e ame a sua família. 1Tm 5.8 Mas, se alguém não cuida dos seus, e principalmente dos da sua família, negou a fé, e é pior que o incrédulo",
"Seja ousado no Senhor. 2Tim 1:7 Porque Deus não deu o espírito de timidez, mas de poder, de amor e de moderação",
"Evite contenda. 2 Tim 2:24. E ao servo do Senhor não convém contender, mas sim ser brando para com todos, apto para ensinar, paciente",
"Dê graças em todas as circunstâncias. 1Tess 5:18 Em tudo dai graças, pois está é a vontade de Deus em Cristo Jesus para convosco",
"Não se deixem enganar: As más companhias corrompem os bons costumes. 1 Coríntios 15:33",
"Ouça conselhos e aceite instruções, e acabará sendo sábio. Muitos são os planos no coração do homem, mas o que prevalece é o propósito do Senhor. Provérbios 19:20-21",
"Quem confia em si mesmo é insensato, mas quem anda segundo a sabedoria não corre perigo. Provérbios 28:26",
"Estejam vigilantes, mantenham-se firmes na fé, sejam homens de coragem, sejam fortes.",
"Não te deixes vencer pelo mal, mas vence o mal com o bem. (Romanos 12:21)",
"Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem. - Hebreus 11:1",
"Nada façam por ambição egoísta ou por vaidade, mas humildemente considerem os outros superiores a vocês mesmos. Cada um cuide, não somente dos seus interesses, mas também dos interesses dos outros. - Filipenses 2:3-4",
"Pois, se perdoarem as ofensas uns dos outros, o Pai celestial também perdoará vocês. Mas, se não perdoarem uns aos outros, o Pai celestial não perdoará as ofensas de vocês",
"Lembre-se do seu Criador nos dias da sua juventude, antes que venham os dias difíceise se aproximem os anos em que você dirá: Não tenho satisfação neles",
"Siga por onde seu coração mandar, até onde a sua vista alcançar; mas saiba que por todas essas coisas Deus o trará a julgamento",
"Ninguém o despreze pelo fato de você ser jovem, mas seja um exemplo para os fiéis na palavra, no procedimento, no amor, na fé e na pureza.",
"Melhor é um jovem pobre e sábio, do que um rei idoso e tolo, que não mais aceita repreensão. Eclesiastes 4:13",
"Não repreenda asperamente ao homem idoso, mas exorte-o como se ele fosse seu pai. 1 Timóteo 5:1", 
"Lembre-se do seu Criador nos dias da sua juventude, antes que venham os dias difíceis e se aproximem os anos em que você dirá: “Não tenho satisfação neles”. Eclesiastes 12:1"
]

module.exports = {
palavras
}