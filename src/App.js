import React, { Component } from 'react';
import './App.css';
import Quote from './Quote/Quote';


class App extends Component {

  // authors = ['Giuseppe', 'Paola', 'Alan', 'Mirian', 'Cristina', 'Marcos', 'Laura', 'Guilherme', 'Gabriel']
  quotes = ["'Convince yourself that you have the power to be all what you wish to be. It is YOU who could generate in you a huge power of motivation to push you forward and ignite you to think and to do.' ' —Unknown",

    "'You can’t go back and change the beginning, but you can start where you are and change the ending. ' —C. S. Lewis",
    "'Happiness is not the absence of problems, it’s the ability to deal with them.'  —Steve Maraboli",
    "'The most precious gift we can offer others is our presence. When our mindfulness embraces those we love, they will bloom like flowers.'  —Thich Nhat Hanh",
    "'Miracles start to happen when you give as much energy to your dreams as you do to your fears.'  —Richard Wilkins",
    "'If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.'  —Zig Ziglar",
    "'Don’t be upset with people and situations in your life, because both are powerless without your reaction.'  —Unknown",
    "'Be patient. Empires are not built in a day.'  —Unknown",
    "'Never perceive anything as being inevitable or predestined. The only absolute is uncertainty.'  —Lionel Suggs",
    "'Love is a fruit in season at all times and within reach of every hand.'  —Mother Teresa",
    "'The truest indication of gratitude is to return what you are grateful for.'  —Richard Paul Evans",
    "'There’s no need to rush. What’s meant for you always arrives right on time.'  —Unknown",
    "'Happiness lies in the joy of achievement and the thrill of creative effort.'  —Franklin D. Roosevelt",
    "'The very purpose of our life is to seek happiness.'  —Dalai Lama",
    "'Find the sweetness in your own heart so that you may find the sweetness in every Heart!'  —Rumi",
    "'Open your eyes to the beauty around you, Open your mind to the wonders of life, Open your heart to those who love you, And always be true to yourself.'  —Maya Angelou",

    "'For everything you have lost, you have gained something else.'  —Unknown",
    "'A failure establishes only this, that our determination to succeed was not strong enough.'  —John Christian Bovee",
    "'Doing what you like is freedom. Liking what you do is happiness.'  —Frank Tyger",
    "'The universe will often give you what you truly desire, even when you didn’t realize it was what you were truly wanting.'  —Unknown",
    "'We have a ‘strategic’ plan. It’s called doing things.'  -Herb Kelleher",
    "'Your future is created by what you do today, not tomorrow.'  -Unknown",
    "'The happiest people don’t have the best of everything, they make the best of everything.'  -Unknown",
    "'In life, you’ll meet two kinds of people. The ones who build you up and the ones who tear you down. In the end, you’ll thank them both.'  -Unknown",
    "'I thank all those who laughed at my dreams; you taught me to grow respecting other people’s struggles'  -Paulo Coelho",
    "'For, as almost every extraordinary life shows, there is a vision, an ideal that calls. '  -James Hillman",
    "'Always stay true to yourself and never sacrifice who you are for anyone.'  -Unknown",
    "'You can’t change what’s going on around you until you start changing what’s going on within you.'  -Unknown",
    "'The price of inaction is far greater than the cost of making a mistake.'  -Meister Eckhart",

    "'Never give anyone the power to take away your joy.'  -Jeanette Jenkins",
    "'Love is like the wind. You can’t see it, but you can feel it.'  -Nicholas Sparks.",
    "'If you paint in your mind a picture of bright and happy expectations, you put yourself into a condition conducive to your goals.'  -Norman Vincent Peale",
    "'Don’t be scared to walk alone. Don’t be scared to like it.'  -John Mayer",
    "'To be a champ, you have to believe in yourself when nobody else will.'  -Sugar Ray Robinson",
    "'Nobody is superior, nobody is inferior, but nobody is equal either. People are simply unique, incomparable.'  -Osho",
    "'Life becomes lighter when we focus on reality and presentments rather than abstract ideas and interpretations'  -Unknown",
    "'Some people feel the rain. Others just get wet.'  -Bob Marley",
    "'Good things come to those who go get them.'  -Unknown",
    "'You are searching the world for treasure, but the real treasure is Yourself.'  -Rumi",
    "'The greatest mistake we make is living in constant fear that we will make one.'  -Unknown",
    "'If you think you can win, you can win. Faith is necessary to victory.'  -William Hazlitt",

    "'You are the universe, expressing itself as a human for a little while.'  -Eckhart Tolle",
    "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'  -Ralph Waldo Emerson",
    "'Love is the big booming beat which covers up the noise of hate.'  -Margaret Cho",
    "'When you find peace within yourself, you become the kind of person who can live at peace with others.'  -Peace Pilgrim",
    "'The Universe is not punishing you or blessing you. The Universe is responding to the vibrational attitude that you are emitting.'  -LOA",
    "'Once you carry your own water, you will learn the value of every drop.'  -Unknown",
    "'Don’t compare yourself to others. Keep playing the competitive game between you and you.'  -Unknown",
    "'He who lives in harmony with himself lives in harmony with the universe.'  -Marcus Aurelius",
    "'We should all start to live before we get too old. Fear is stupid. So are regrets.'  -Marilyn Monroe",
    "'I cannot do all the good that the world needs. But the world needs all the good that I can do.'  -J. Stanfield",
    "'Don’t chase people. Be you, do your own thing and work hard. The right people who belong in your life will come to you, and stay.'  -Unknown",
    "'The great man is he who does not lose his child’s-heart.'  -Mencius",
    "'He who lives in harmony with himself lives in harmony with the universe.'  -Marcus Aurelius",
    "'Life is what happens while you are busy making other plans.'  -John Lennon",
    "'What you become is the result of what you do today. In other words, you are preparing for something.'  -John C. Maxwell",
    "'Be who you are and say what you feel because those who mind don’t matter and those who matter don’t mind.'  -Dr Seuss",
    "'How people treat you is their karma; how you react is yours.'  -Wayne W. Dyer",
    "'Good things come to those who believe, better things come to those who are patient, and the best things come to those who don’t give up.'  -Unknown",
    "'Gratitude can transform common days into thanksgivings, turn routine jobs into joy, & change ordinary opportunities into blessings.'  -Unknown",
    "'I have found that if you love life, life will love you back.'  -The Secret",
    "'Men are not prisoners of fate, but prisoners of their own minds.'  -Franklin D. Roosevelt",
    "'People rarely succeed unless they have fun in what they are doing.'  -Dale Carnegie",
    "'The Universe has a plan for you, and it’s Good.'  -Russell Kyle",

    "'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.'  -Christian D. Larson",
    "'You don’t have to be great to get started, but you have to get started to be great.'  -Les Brown",
    "'When we strive to become better than we are, everything around us becomes better, too.'  -Paulo Coelho",
    "'The person who says it cannot be done should not interrupt the person doing it.'  -Chines Proverb",
    "'Be the writer of your life and reader of your mind. The more you know yourself the less you need approval of others.'  -Unknown",
    "'Don’t ever give up on what makes you truly happy.'  -Jonathan Landsman",
    "'Healing always involves facing truths we’d rather not face, and accepting responsibility we’d rather not accept.'  -Dr. David Hawkins",
    "'Most people find change difficult to accept, sometimes for good reasons, sometimes because of plain old inertia. '  -Andrew Hunt",

    "'“Happiness is not the absence of problems, it’s the ability to deal with them.”'  — Steve Maraboli ",
    "'An investment in knowledge always pays the best interest.'  -Benjamin Franklin",
    "'There is one technique that you must use if you want people to listen to you: listen to them.'  -Andrew Hunt",
    "'Attitude is a choice. Think positive thoughts daily. Believe in yourself.'  -Pat Summitt",
    "'Leadership is not for everyone. Leadership is a lifestyle, not a position. Leadership is about those you lead, not who is leading.'  -Greg White",
    "'The minute you get away from fundamentals – proper technique, work ethic or mental prep – the bottom can fall out of your game.'  -Michael Jordan",
    "'Never give up! Failure and rejection are only the first step to succeeding.'  -Jim Valvano",
    "'If you want help, help others. If you want love, give it. If you want respect, show it. Whatever you want more of, start giving more of.'  -Unknown",
    "'A dream is your creative vision for your life in the future.'  -Denis Waitley",
    "'Can you remember who you were, before the world told you who you should be?'  -Charles Bukowski",
    "'Tell everyone what you want to do and someone will want to help you do it.'  -W. Clement Stone",
    "'Learn to say ‘no’ to the good so you can say ‘yes’ to the best. '  -John C. Maxwell",

    "'The world is full of magic things, patiently waiting for our senses to grow sharper.'  -W.B. Yeats",
    "'Magic is believing in yourself, if you can do that, you can make anything happen.'  -Johann Wolfgang von Goethe",
    "'We have to do the best we are capable of. This is our sacred human responsibility.'  -Albert Einstein",
    "'When you have confidence, you can have a lot of fun. And when you have fun, you can do amazing things.'  -Joe Namath",
    "'Great things never came from comfort zones.'  -Neil Strauss",
    "'You can turn your life into paradise, but the only way you can do it is to make the inside of you a paradise.'  -LOA",
    "'The first to apologize is the bravest. The first to forgive is the strongest. The first to forget is the happiest.'  -Unknown",
    "'Don’t worry about failures, worry about the chances you miss when you don’t even try.'  -Jack Canfield",
    "'Always bear in mind that your own resolution to succeed is more important than any other one thing.'  -Abraham Lincoln",

    "'“Your time is limited, so don’t waste it living someone else’s life.”'  — Steve Jobs ",
    "'The past has no power over the present moment.'  -Eckhart Tolle",
    "'If you want something you never had, you have to do something you’ve never done.'  -Thomas Jefferson",
    "'Luck is a dividend of sweat. The more you sweat, the luckier you get.'  -Ray Kroc",
    "'If you can change your mind, you can change your life.'  -William James",
    "'It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.'  -Charles Darwin",
    "'It takes as much energy to wish as it does to plan.'  -Eleanor Roosevelt",
    "'The greatest crime in the world is not developing your potential. When you do what you do best, you are helping not only yourself but the world.'  -Roger Williams",

    "'Once you replace negative thoughts with positive ones, you’ll start having positive results.'  -Willie Nelson",
    "'Education is the key to unlock the golden door of freedom.'  -George Washington Carve",
    "'It’s not your job to like me, it’s mine.'  -Byron Katie",
    "'Create in you the power of self-confidence and self-determination to think and to create the life you love and the success you want.'  -Unknown",
    "'We must never be afraid to go too far, for success lies just beyond.'  -Marcel Proust",
    "'Embrace what you don’t know, especially in the beginning, because what you don’t know can become your greatest asset. It ensures that you will absolutely be doing things different from everybody else.'  -Sara Blakely",
    "'We are what we repeatedly do. Excellence, then, is not an act but a habit.'  -Aristotle",
    "'Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.'  -Martin Luther King Jr.",
    "'Education is the key to unlock the golden door of freedom.'  -George Washington Carve",
    "'En la vida algunas veces se gana, otras veces se aprende.'  -John Maxwell",

    "'“Don’t give up on yourself. There’s a reason why you started.”'  — Unknown ",
    "'Happiness comes from WHAT we do. Fulfillment comes from WHY we do it.'  -Simon Sinek",
    "'Build your own dreams, or someone else will hire you to build theirs.'  -Farrah Gray",
    "'The limits of the possible can only be defined by going beyond them into the impossible.'  -Arthur C. Clarke",
    "'All we have is what we do right now. That’s all we’ll ever have. Life is a series of moments. And if you show up authentically in more and more moments, you start to patch together a beautiful life.'  -Unknown",

    "'A good traveler has no fixed plans, and is not intent on arriving.'  -Lao Tzu",
    "'I don’t know what your destiny will be, but one thing I know: The only ones among you who will be truly happy are those who have sought and found how to serve.'  -Albert Schweitzer",
    "'Build something 100 people love, not something one million people kind of like.'  -Brian Chesky",
    "'Tough times never last, but tough people do.'  -Dr. Robert Schuller",
    "'Take chances, make mistakes. That’s how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.'  -Mary Tyler Moore",
    "'Do not indulge in dreams of having what you have not, but reckon up the chief of the blessings you do possess, and then thankfully remember how you would crave for them if they were not yours.'  -Marcus Aurelius",
    "'Everything you’ve ever wanted is on the other side of fear.'  -George Addair",
    "'Success is walking from failure to failure with no loss of enthusiasm.'  -Winston Churchil",
    "'Always make a total effort, even when the odds are against you.'  -Arnold Palmer",
    "'Every moment and every event of every man’s life on earth plants something in his soul.'  -Thomas Merton",
    "'Always forgive your enemies. Nothing annoys them more.'  -Oscar Wilde",
    "'Start making your own happiness a priority.'  -LOA",
    "'I have not failed. I’ve just found 10,000 ways that won’t work.'  -Thomas Edison",
    "'Try to be a rainbow in someone’s cloud.'  -Maya Angelou",
    "'Conditions are never perfect. ‘Someday’ is a disease that will take your dreams to the grave with you…. If it’s important to you and you want to do it ‘eventually,’ just do it and correct course along the way.'  -Tim Ferriss",
    "'Life is what you make of it.'  -Unknown",
    "'Be happy now. Feel good now. That’s the only thing you have to do.'  -Unknown",

  ]

  citation = ["« Vous pouvez obtenir tout ce que vous désirez dans la vie si vous aidez suffisamment de personnes à obtenir ce qu’elles veulent. » — Une citation motivante de Zig Ziglar",
    "« L’inspiration existe, mais il faut qu’elle vous trouve au travail. » — Une citation de sagesse de Pablo Picasso",
    "« Ne vous contentez pas du statu quo. Donnez votre meilleur sur le moment. Ensuite, que cela réussisse ou échoue, vous aurez au moins tout donné. » — Une citation encourageante d’Angela Bassett",
    "« Montrez-vous, montrez-vous, montrez-vous, et au bout d’un moment, la muse se montrera également. » — Une citation motivante d’Isabel Allende",
    "« Celui qui se perd dans sa passion a moins perdu que celui qui perd sa passion. » — Une citation de sagesse d’Alexandre Jardin",
    "« Si vous voulez que la vie vous sourie, apportez-lui d’abord votre bonne humeur. » — Une belle citation de Baruch Spinoza",
    "« Si vous pensez que quelque chose doit exister, si c’est quelque chose que vous allez utiliser vous-même, ne laissez personne vous dissuader de tenter le coup. » — Une citation encourageante de Tobias Lutke",

    "« Oubliez l’inspiration à un stade initial. Les habitudes sont plus fiables. Les habitudes vous permettront de terminer et de peaufiner vos histoires. Les habitudes représentent la persistance mise en pratique. » — Une citation d’Octavia Butler qui présente une perspective intéressante",
    "« Le meilleur chemin est toujours celui qui est le plus direct. » — Une citation de motivation de Robert Frost",
    "« Les batailles qui comptent ne sont pas celles qui sont visibles. Ce sont les luttes à l’intérieur de vous-même — les batailles invisibles et inévitables pour chacun d’entre nous — qui importent. » — Une citation de sagesse de Jesse Owens",
    "« S’il n’y a pas de difficultés, il n’y a pas de progrès. » — Une citation de courage de Frederick Douglass",
    "« Quelqu’un va déclarer : “Je suis le leader !” et s’attendre à ce que tout le monde le suive aveuglément. Selon mon expérience, ce n’est pas ainsi que ça se passe. Les autres vous suivront en fonction de la qualité de vos actions plutôt que la magnitude de vos déclarations. » — Une citation de bon sens de Bill Walsh",
    "« Le courage est comme un muscle. On le renforce en le travaillant. » — Une citation de courage de Ruth Gordo",
    "« Construisez votre succès à partir de vos échecs. Le découragement et l’échec sont les étapes les plus sûres pour parvenir au succès. » — Une citation pleine de sagesse de Dale Carnegie",
    "« Éliminez les distractions sans relâche. N’attendez pas pour faire les choses qui importent, et savourez le temps que vous avez. C’est ce qu’il faut faire quand la vie est courte. » — Une citation de vie de Paul Graham",
    "« L’indécision fait perdre plus de temps qu’une mauvaise décision. » — Une citation de sagesse de Marcus Tullius Cicero",
    "« Si l’objectif prioritaire d’un capitaine était de préserver son navire, il ne le ferait jamais sortir du port. » — Une citation de courage de Thomas Aquinas",
    "« Même si vous êtes la pêche la plus mure et la plus juteuse au monde, il y aura toujours quelqu’un qui détestera les pêches. » — Une citation de Dita Von Teese pour surmonter le rejet",
    "« Gardez toujours un petit feu allumé, aussi petit ou caché soit-il. » ― Une citation de Cormac McCarthy",
    "« Rien dans le monde ne pourra remplacer la Persistance. Le talent n’y parviendra pas ; rien n'est plus commun que des hommes talentueux qui ont du mal à réussir. Le génie n’y parviendra pas ; le génie non récompensé est presque un proverbe. L'éducation n’y parviendra pas ; le monde est rempli de fous instruits. Le slogan « Persévère » a résolu et résoudra toujours les problèmes de la race humaine. » — Une citation de Calvin Coolidge sur la persévérance",
    "« Le seul moyen de découvrir les limites du possible est de s'aventurer un peu plus loin dans l'impossible. » — Une citation inspirante d’Arthur C. Clarke",
    "« Le souci est une mauvaise utilisation de l’imagination. » — Source inconnue",
    "« Le courage est la plus importante de toutes les vertus, car sans courage, on ne peut pratiquer aucune autre vertu de façon cohérente. » Une citation de courage de Maya Angelou",
    "« Je ne regarde jamais en arrière. Cela détourne l’attention de l’instant présent. » — Une citation d’Edna Mode",
    "« Dans un an, vous allez vous reprocher de ne pas avoir commencé aujourd'hui. » — Source inconnue",
    "« Si nous ressentons de l’insécurité, c’est parce que nous comparons les derrières des coulisses de notre vie avec les meilleures séquences de la vie des autres. » — Une citation révélatrice de Steve Furtick",
    "« Quelque part, quelque chose d'incroyable attend d'être découvert. » — Une citation inspirante de Carl Sagan",
    "« Ne vous laissez pas intimider par l'échec. Il suffit d'avoir raison une seule fois. » — Une citation encourageante de Drew Houston",
    "« Vous portez le passeport qui vous permettra d’atteindre votre propre bonheur. » — Une citation inspirante de Diane von Furstenberg",
    "« Fixez-vous des objectifs ambitieux et ne vous arrêtez pas avant de les atteindre. » — Une citation inspirante de Bo Jackson",
    "« Prendre la décision d'agir est la chose la plus difficile, le reste n'est qu’une question de ténacité. » — Une citation motivante d’Amelia Earhart",
    "« Je préfèrerais regretter les choses que j'ai faites plutôt que celles que je n'ai pas faites. » — Une citation motivante de Lucille Ball",
    "« L'échec est le fondement de la réussite. » — Une citation pleine de sagesse de Lao-Tseu",
    "« Je n'essaie pas de danser mieux que tout le monde. J'essaie seulement de m’impressionner moi-même en dansant. » — Une belle citation d’Arianna Huffington",
    "« Si vous ne risquez rien, vous prenez encore plus de risque. » — Une citation encourageante d’Erica Jong",
    "« C’est inspirant de voir quelqu’un être qui il est vraiment sans éprouver la moindre gêne. » — Une citation de Don Cheadle",
    "« Vous n’allez jamais laisser des empreintes de pas qui durent si vous marchez toujours sur la pointe des pieds. » — Une citation inspirante de Leymah Gbowee",
    "« Si vous n’aimez pas la route sur laquelle vous marchez, commencez à paver une nouvelle route. » — Une citation très inspirante de Dolly Parton",
    "« Si vous vous sentez nerveux, vous êtes sur le bon chemin. » — Une citation de sagesse de Childish Gambino",
    "« Ce que vous faites laisse un impact, et vous devez décider du type d’impact que vous souhaiteriez laisser. » — Une citation de Jane Goodall",
    "« Je choisis de faire du reste de ma vie la meilleure partie de ma vie. » — Une citation positive de Louise Hay",
    "« Pour être irremplaçable, il faut toujours être différent. » — Une citation de Coco Chanel",
    "« Tout dans la vie peut me pousser à m’arrêter pendant un moment et à réfléchir, et parfois à apprendre. » —  Une citation de vie de Kurt Vonnegut",
    "« La passion et le désir des gens pour l’authenticité sont très forts. » — Une citation de Constance Wu",
    "« Une dose d'efforts supplémentaires peut permettre de surmonter un manque de confiance. » — Une citation encourageante de Sonia Sotomayor",
    "« Le doute est le commencement de la sagesse. » — Une citation de sagesse d’Aristote",
    "« Il y a trois façons d'atteindre le succès ultime : la première est d’être gentil. La deuxième est d'être gentil. La troisième est d'être gentil. » — Une citation intéressante de Mister Rogers",
    "« Personne ne peut changer le monde sans avoir d’obsession. » — Une citation de Billie Jean King",
    "« J'ai appris il y a longtemps qu'il y a quelque chose de pire que de rater l’objectif, qui est de ne pas passer à l’action. » — Une citation motivante de Mia Hamm",
    "« Prenez vos victoires, quelles qu'elles soient, chérissez-les, utilisez-les, mais ne vous reposez pas dessus. » — Une belle citation de Mia Hamm",
    "« Il est remarquable de constater l'avantage que certains ont obtenu à long terme en essayant systématiquement de faire preuve de bon sens, au lieu d'essayer d'être très intelligents. » — Une citation de Charlie Munger sur la réussite",
    "« Vous ne pouvez pas être ce gamin qui reste figé en haut du toboggan en réfléchissant. Vous devez glisser. » — Une citation encourageante de Tina Fey  ",
    "« Quand je crois en quelque chose, je suis comme un chien avec un os à la bouche. » — Une citation de Melissa McCarthy sur l’envie de réussir",
    "« Et vint le jour où le risque de rester serré dans un bourgeon devint plus douloureux que le risque de choisir de fleurir. » — Une citation de sagesse d’Anaïs Nin",
    "« Le standard que vous dépassez est le standard que vous acceptez. » — Une citation de David Hurley",
    "« La meilleure façon d’apprécier quoi que ce soit est de réaliser que tout peut être perdu. » — Une citation de Gilbert K. Chesterton sur la gratitude",
    "« La vie peut devenir beaucoup plus intéressante une fois que vous réalisez un fait très simple : tout ce que vous appelez la vie autour de vous a été créé par des gens qui n'étaient pas plus intelligents que vous. Et vous pouvez le changer, vous pouvez l'influencer… Une fois que vous aurez compris cela, vous ne serez jamais plus le même. » — Une citation inspirante de Steve Jobs",
    "« Le succès s’obtient en traversant les échecs sans perdre son enthousiasme. » — Une citation de Winston Churchill sur le succès",
    "« Gardez vos yeux sur les étoiles et vos pieds sur terre. » — Une citation de sagesse de Theodore Roosevelt",
    "« Ne cessez jamais de considérer la vie comme une aventure. Vous n’aurez aucune sécurité à moins de choisir de vivre courageusement, passionnément, avec imagination ; à moins que vous ne puissiez choisir un défi à la place d’une compétence. » — Une citation motivante d’Eleanor Roosevelt",

    "« La perfection n'est pas atteignable. Mais en recherchant la perfection, il est possible d’atteindre l'excellence. » — Une citation de Vince Lombardi sur la réussite",
    "« Trouvez une bonne idée et ne la lâchez plus. Poursuivez-là et mettez-la en œuvre jusqu’à réussir. » — Walt Disney",
    "« L'optimisme est la foi qui mène à la réussite. On ne peut rien faire sans espoir et confiance. » — Une citation de Helen Keller sur le succès",
    "« Ne laissez pas le bruit des opinions d’autrui masquer votre voix intérieure. » — Une citation inspirante de Steve Jobs",
    "« La vie, c’est comme faire du vélo. Pour garder l’équilibre, il faut continuer à avancer. » — Une citation de vie d’Albert Einstein",
    "« Vos actions parlent si fort que je ne peux pas entendre ce que vous dites. » — Une citation de sagesse de Ralph Waldo Emerson",
    "« Je n'ai jamais laissé mes études interférer avec mon éducation. » — Une citation de Mark Twain sur le développement personnel",
    "« Si vous ne pouvez pas encore faire de grandes choses, faites de petites choses de façon remarquable. » ― Une citation encourageante de Napoleon Hill",
    "« Si vous souhaitez vraiment faire quelque chose, vous trouverez un moyen. Si vous ne le faites pas, vous trouverez une excuse. » ― Une citation inspirante de Ro Jim Rohn",
    "« Adoptez l'attitude d'un étudiant quel que soit votre niveau de succès, soyez toujours prêt à poser des questions, soyez toujours prêt à apprendre quelque chose de nouveau. » — Une citation d’Augustine Og Mandino pour atteindre le succès",
    "« Le succès est une tranquillité d'esprit, qui résulte directement de l’autosatisfaction et du fait de savoir que vous avez fait l'effort de devenir la meilleure version de vous-même. » — Une citation de John Wooden sur le succès",
    "« Assurez-vous de mettre vos pieds au bon endroit, puis tenez-vous solidement. » — Une citation d’Abraham Lincoln",
    "« Laissez votre imagination guider votre vie, plutôt que votre passé. » — Une citation positive de Stephen Covey",
    "« N'attendez pas de trouver le moment et l'endroit parfaits pour faire votre entrée, vous êtes déjà sur scène. » — Source inconnue",
    "« Plus la difficulté est grande, plus l’on ressent de gloire en la surmontant. » Une citation de courage d’Épicure",
    "« Le courage ne rugit pas toujours. Parfois, le courage se démontre en disant avec une voix calme à la fin de la journée : «Je vais essayer encore demain. » — Une citation de Mary Anne Radmacher sur le courage",
    "« Si les décisions que vous prenez pour investir vos efforts acharnés ne sont pas cohérentes avec la personne que vous souhaitez devenir, vous ne deviendrez jamais cette personne. » ― Une citation de sagesse de Clayton M. Christensen",
    "« Vérifiez que votre pire ennemi ne vit pas entre vos deux oreilles. » ― Une citation de sagesse de Laird Hamilton",
    "« C'est un chemin semé d’embuches qui mène au sommet de la grandeur. » ― Une citation motivante de Lucius Annaeus Seneca",
    "« L’excellence ne résulte pas d’une impulsion isolée, mais d’une succession de petits éléments qui sont réunis. » ― Une citation de Vincent van Gogh sur la réussite",
    "« Si nous prenons soin des moments, les années prendront soin d’elles-mêmes. » — Une citation de vie de Marie Edgeworth",
    "« La résilience consiste à aborder l'incertitude avec flexibilité. » — Source Inconnue",
    "« Parfois, la magie se produit quand quelqu'un décide de se focaliser sur quelque chose que personne d’autre n’aurait considéré sérieusement. » — Une citation inspirante de Raymond Joseph Teller",
    "« Ce n'est pas la volonté de réussir qui compte, tout le monde a ça. C'est la volonté de se préparer à réussir qui compte. » — Une citation motivante de Paul Bryant",
    "« Comme un seul pas ne formera pas de chemin sur la terre, une seule pensée ne formera pas de chemin dans l'esprit. Pour former un chemin physique profond, nous marchons sans arrêt. Pour créer un chemin mental profond, nous devons pratiquer sans cesse le type de pensées que nous souhaitons voir prédominer dans nos vies. » — Une belle citation de Henry David Thoreau",
    "« N'abandonnez jamais un rêve sur la base du temps qu'il faudra pour le réaliser. Le temps passera de toute façon. » — Une citation inspirante de Earl Nightingale",
    "« Vous constaterez que l'information est très accessible dans ce monde, et c'est l’une des seules choses qu'une personne peut assimiler à volonté. » — Une citation encourageante de John Graham",
    "« L'expérience enseigne de façon contrintuitive, car elle donne le test avant la leçon. » ―  Une citation de sagesse de Vernon Sanders Law",
    "« Je n'ai jamais rêvé de succès. J'ai travaillé pour réussir. » — Une citation d’Estée Lauder sur le succès",
    "« Quand on réalise qu’il est possible de continuer d’apprendre sans limites, on commence à apprendre à vivre. » — Une citation de sagesse de Dorothy West",
    "« Ne regardez pas vos pieds pour vous assurer que vous effectuez les bons pas. Dansez tout simplement. » ― Une citation d’Anne Lamott sur la confiance en soi",
    "« Si quelqu'un est assis à l'ombre aujourd'hui, c’est parce que quelqu'un a planté un arbre il y a longtemps. » — Une citation de sagesse de Warren Buffet",
    "« Il est impossible d’être complètement libre sans libérer l’esprit par la discipline. » Une citation de sagesse de Mortimer J. Adler",
    "« Les rivières le savent : rien ne presse. Nous y arriverons tous un jour. » ― Une citation de vie de A.A. Milne",
    "« Il y a une vigueur, une force vitale, une énergie, une impulsion en vous que vous transformez en action, et comme il n'y a qu'une seule version de vous-même, cette expression est unique. Si vous la bloquez, elle n'existera jamais sur aucun autre support et sera perdue. » ― Une belle citation de Martha Graham",
    "« Le succès, c'est obtenir ce que l'on veut. Le bonheur, c'est vouloir ce que l'on obtient. » ― Une citation de WP Kinsella sur le bonheur",
    "« Petit n'est pas nécessairement synonyme de tremplin. C’est une grande étape en soi. » ― Une citation inspirante de Jason Fried",
    "« Celui qui sait se montrer patient peut obtenir ce qu'il veut. » — Une citation de Benjamin Franklin sur la patience",
    "« La seule personne qui puisse vous dire «vous ne pouvez pas réussir» est vous-même ; et vous n'avez pas à écouter. » — Une citation de sagesse de Jessica Ennis",
    "« Vous ne pouvez pas labourer un champ en le retournant dans votre esprit. Pour commencer, commencez. » — Une citation motivante de Gordon B. Hinckley",
  ]

  state = {
    generatedQuote: {
      id: 0,
      // author: '',
      date: '',
      quote: ''
    },

    savedQuotes: [],
    showSavedQuotes: true,
    isAlreadySaved: true,
    langue: 'en',
  }

  randomizeQuoteHandler = () => {

    // const randomAuthorIndex = Math.floor(Math.random() * this.authors.length);
    const randomQuoteIndex = this.state.langue === 'en' ? Math.floor(Math.random() * this.quotes.length) : Math.floor(Math.random() * this.citation.length);

    // const randomAuthor = this.authors[randomAuthorIndex];
    const randomDate = Math.floor(Math.random() * 100) + 1;
    const randomQuote = this.state.langue === 'en' ? this.quotes[randomQuoteIndex] : this.citation[randomQuoteIndex];
    // const randomQuote = this.citation[randomQuoteIndex];

    this.setState({
      generatedQuote: {
        // author: randomAuthor,
        date: randomDate,
        quote: randomQuote
      },
      isAlreadySaved: false
    });
  }

  generateUniqueQuoteId = () => {
    return this.state.savedQuotes.length + 1;
  }

  saveQuoteHandler = () => {
    const quote = { ...this.state.generatedQuote };
    quote.id = this.generateUniqueQuoteId();

    const quotes = [...this.state.savedQuotes];
    quotes.push(quote);

    this.setState({
      savedQuotes: quotes,
      isAlreadySaved: true
    });
  }




  removeSavedQuoteHandler = (index) => {

    const quotes = [...this.state.savedQuotes];
    quotes.splice(index, 1);
    this.setState({ savedQuotes: quotes });
  }

  toggleQuotesHandler = () => {

    const actualShowState = this.state.showSavedQuotes;
    this.setState({ showSavedQuotes: !actualShowState });
  }

  render() {

    const style = {
      marginTop: '25px',
      height: '50vh',
      textAlign: 'center',
    };

    const style2 = {
      marginTop: '25px',
      height: '50vh',
      textAlign: 'center',
    };

    // OutSource Condition
    let savedQuotes = null;

    if (this.state.showSavedQuotes && this.state.savedQuotes.length > 0) {

      savedQuotes = (
        <div className='QuoteSave' style={style}>
          {this.state.savedQuotes.map((el, i) => {
            return <Quote
              key={el.id}
              // author={el.author}
              date={el.date}
              remove={this.removeSavedQuoteHandler.bind(this, i)}>{el.quote}</Quote>
          })}
        </div>
      );

    } else if (this.state.savedQuotes.length === 0) {
      savedQuotes = (
        <p className='NoSave'>{this.state.langue === 'en' ? 'No Quotes Saved' : 'Aucun Citation Enregistré'}</p>
      );
    }
    const Bookmarks = () => {
      switch (this.state.showSavedQuotes) {
        case true:
          if (this.state.langue === 'en') {
            return <button className='bookmark' onClick={this.toggleQuotesHandler}>
              Hide Bookmark
            </button>
          }
          return <button className='bookmark' onClick={this.toggleQuotesHandler}>
            Masquer Les Citations
          </button>
        case false:
          if (this.state.langue === 'en') {
            return <button className='bookmark' onClick={this.toggleQuotesHandler}>
              Show Bookmark
            </button>
          }
          return <button className='bookmark' onClick={this.toggleQuotesHandler}>
            Montrer Les Citations
          </button>

        default:
          break;
      }
    }

    return (
      <div className="App">

        <h1 className="Top">Motivational Quotes</h1>

        <div style={style}>
          <Quote author={this.state.generatedQuote.author}
            date={this.state.generatedQuote.date}>
            {this.state.generatedQuote.quote}
          </Quote>
        </div>

        {/* Buttons */}
        <div>

          <button className='save' onClick={this.saveQuoteHandler} disabled={this.state.isAlreadySaved}>
            {this.state.langue === 'en' ? 'Saved Quotes' : 'Enregistrer Une Citations'}
          </button>
          <button className='rando' onClick={this.randomizeQuoteHandler}>
            {this.state.langue === 'en' ? 'Get A Quote' : 'Obtenir Une Citation'}
          </button>
          <Bookmarks />
        </div>
        <div>
          <button className='En' onClick={() => this.setState({ langue: 'en' })} >English</button>
          <button className='Fra' onClick={() => this.setState({ langue: 'fr' })}>Francais</button>
        </div>
        {/* OutSouce Conditions Result */}
        {/* List Multiple Quotes */}
        <div style={style2}>
          {savedQuotes}

        </div>

      </div>
    );
  }
}

export default App;