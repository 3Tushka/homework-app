import { getOrGenerateUUID } from './utils/functions';

export const quizData = [
  {
    id: getOrGenerateUUID('quiz-1'),
    title: 'Past simple - Regular and Irregular verbs',
    grammar: 'Past Simple',
    description:
      'This worksheet is about the past simple tense. It includes regular and irregular verbs.',
    level: 'Beginner',
    grade: 'A1',
    date: '2020-01-01',
    questions: [
      {
        question: 'Which sentence uses the Present Simple tense correctly?',
        options: [
          'He is reads a book every night.',
          'She reading a book every night.',
          'They reads a book every night.',
          'She reads a book every night.',
        ],
        answer: 'She reads a book every night.',
      },
      {
        question: 'What does the Present Simple tense usually indicate?',
        options: [
          'An action happening right now.',
          'A regularly occurring action.',
          'An action that will happen in the future.',
          'A continuous action.',
        ],
        answer: 'A regularly occurring action.',
      },
      {
        question:
          'Which verb form is correct in Present Simple for "I" (to do)?',
        options: ['Does', 'Do', 'Am doing', 'Did'],
        answer: 'Do',
      },
      {
        question: 'Choose the sentence that is in the Present Simple tense:',
        options: [
          'I will be going to the store.',
          'I went to the store yesterday.',
          'I am going to the store tomorrow.',
          'I go to the store every week.',
        ],
        answer: 'I go to the store every week.',
      },
      {
        question:
          'What do we generally use with third-person singular forms in the Present Simple tense?',
        options: [
          'An "s" at the end of the verb',
          'A "will" before the verb',
          'A "to" before the verb',
          'No additional words',
        ],
        answer: 'An "s" at the end of the verb',
      },
    ],
  },
  {
    id: getOrGenerateUUID('quiz-2'),
    title: 'Past Perfect - Form and Use',
    grammar: 'Past Perfect',
    description:
      'This worksheet is focused on the Past Perfect tense. It includes questions about the correct formation and usage of this tense, aimed at testing comprehension of actions completed before another past action.',
    level: 'Intermediate',
    grade: 'B1',
    date: '2020-01-01',
    questions: [
      {
        question: 'Which sentence uses the Past Perfect tense correctly?',
        options: [
          'She had cooked dinner when I arrived.',
          'She has cooked dinner when I arrived.',
          'She was cooking dinner when I arrived.',
          'She cooked dinner when I have arrived.',
        ],
        answer: 'She had cooked dinner when I arrived.',
      },
      {
        question: 'What does the Past Perfect tense usually indicate?',
        options: [
          'An action that was completed before another action in the past.',
          'An action occurring right now.',
          'A future planned action.',
          'A habitual action in the past.',
        ],
        answer:
          'An action that was completed before another action in the past.',
      },
      {
        question:
          'Choose the correct form of the verb "to leave" in Past Perfect:',
        options: ['Had leave', 'Had left', 'Has left', 'Had leaved'],
        answer: 'Had left',
      },
      {
        question:
          'Identify the sentence that correctly uses the Past Perfect tense:',
        options: [
          'He had written the book becomes famous.',
          'He wrote the book had become famous.',
          'He had written the book before he became famous.',
          'He was written the book before became famous.',
        ],
        answer: 'He had written the book before he became famous.',
      },
      {
        question:
          'Which of the following sentences uses Past Perfect negatively?',
        options: [
          'She had not seen him before the party.',
          'She has not seen him before the party.',
          'She did not seen him before the party.',
          'She not had seen him before the party.',
        ],
        answer: 'She had not seen him before the party.',
      },
    ],
  },
];

export const placementTest = [
  {
    title: 'Placement Test',
    description:
      'This is placement test to help you determine your English level. It includes questions on various grammar topics.',
    questions: [
      {
        question: 'She _____ (eat) dinner at 7 PM.',
        options: ['eat', 'eats', 'ate', 'eating'],
        answer: 'ate',
      },
      {
        question: 'He doesn’t _____ the answer.',
        options: ['know', 'knows', 'knew', 'knowing'],
        answer: 'know',
      },
      {
        question: 'I need _____ umbrella because it’s raining.',
        options: ['a', 'an', 'the', 'no article'],
        answer: 'an',
      },
      {
        question: 'She is interested _____ learning new languages.',
        options: ['in', 'on', 'at', 'with'],
        answer: 'in',
      },
      {
        question: 'By next year, they _____ (complete) the project.',
        options: [
          'will complete',
          'will have completed',
          'have completed',
          'completed',
        ],
        answer: 'will have completed',
      },
      {
        question: 'She always _____ (arrive) early to avoid traffic.',
        options: ['arrives', 'arrived', 'arriving', 'arrive'],
        answer: 'arrives',
      },
      {
        question: 'This book is _____ (good) than that one.',
        options: ['more good', 'better', 'gooder', 'best'],
        answer: 'better',
      },
      {
        question: 'He is allergic _____ peanuts.',
        options: ['to', 'with', 'from', 'in'],
        answer: 'to',
      },
      {
        question: 'I will go to the park _____ it stops raining.',
        options: ['and', 'but', 'if', 'or'],
        answer: 'if',
      },
      {
        question: 'The children are excited _____ the trip.',
        options: ['about', 'on', 'with', 'for'],
        answer: 'about',
      },
      {
        question: 'She don’t have any money.',
        options: [
          'He don’t know the answer.',
          'He doesn’t knows the answer.',
          'He doesn’t know the answer.',
          'He didn’t know the answer.',
        ],
        answer: 'He doesn’t know the answer.',
      },
      {
        question: 'They _____ (play) football every Saturday.',
        options: ['plays', 'played', 'play', 'playing'],
        answer: 'play',
      },
      {
        question: 'He is _____ honest person.',
        options: ['a', 'an', 'the', 'no article'],
        answer: 'an',
      },
      {
        question: 'The cat jumped _____ the table.',
        options: ['on', 'in', 'at', 'over'],
        answer: 'over',
      },
      {
        question: 'She _____ (study) for three hours before the exam.',
        options: ['studied', 'studies', 'was studying', 'has studied'],
        answer: 'studied',
      },
      {
        question: 'The manager is responsible _____ the project.',
        options: ['for', 'to', 'with', 'on'],
        answer: 'for',
      },
      {
        question: 'This movie is the _____ (exciting) I have ever seen.',
        options: [
          'more exciting',
          'most exciting',
          'excitingest',
          'excitinger',
        ],
        answer: 'most exciting',
      },
      {
        question: 'She is married _____ a famous actor.',
        options: ['to', 'with', 'at', 'on'],
        answer: 'to',
      },
      {
        question:
          'I need to finish my homework _____ I can go out with friends.',
        options: ['before', 'and', 'but', 'or'],
        answer: 'before',
      },
      {
        question: 'The restaurant is famous _____ its delicious food.',
        options: ['for', 'with', 'about', 'on'],
        answer: 'for',
      },
      {
        question: 'She can sings very well.',
        options: [
          'He don’t know the answer.',
          'He doesn’t knows the answer.',
          'He doesn’t know the answer.',
          'He didn’t know the answer.',
        ],
        answer: 'He doesn’t know the answer.',
      },
      {
        question: 'They _____ (have) a great time at the party.',
        options: ['had', 'has', 'having', 'have'],
        answer: 'had',
      },
      {
        question: 'They visited _____ museum in the city.',
        options: ['a', 'an', 'the', 'no article'],
        answer: 'the',
      },
      {
        question: 'We walked _____ the park on our way home.',
        options: ['through', 'over', 'under', 'by'],
        answer: 'through',
      },
      {
        question: 'She _____ (read) the book before you asked me about it.',
        options: ['read', 'was reading', 'have read', 'had read'],
        answer: 'had read',
      },
      {
        question: 'She is interested _____ learning how to play the guitar.',
        options: ['in', 'on', 'at', 'with'],
        answer: 'in',
      },
      {
        question: 'This is the _____ (bad) movie I have ever seen.',
        options: ['worst', 'worse', 'badest', 'more bad'],
        answer: 'worst',
      },
      {
        question: 'We should meet _____ the cafe at noon.',
        options: ['at', 'in', 'on', 'by'],
        answer: 'at',
      },
      {
        question: 'I am tired _____ I will take a nap.',
        options: ['so', 'but', 'or', 'because'],
        answer: 'so',
      },
      {
        question: 'She was the _____ person to arrive at the party.',
        options: ['first', 'firstly', 'firstest', 'more first'],
        answer: 'first',
      },
      {
        question: 'He was late, so he have missed the meeting.',
        options: [
          'He don’t know the answer.',
          'He doesn’t knows the answer.',
          'He doesn’t know the answer.',
          'He didn’t know the answer.',
        ],
        answer: 'He didn’t know the answer.',
      },
      {
        question: 'She _____ (be) very happy with her results.',
        options: ['was', 'is', 'were', 'being'],
        answer: 'was',
      },
      {
        question: 'They bought _____ new car yesterday.',
        options: ['a', 'an', 'the', 'no article'],
        answer: 'a',
      },
      {
        question: 'The book is _____ the table.',
        options: ['under', 'between', 'on', 'in'],
        answer: 'on',
      },
      {
        question: 'She _____ (finish) her homework by the time you called.',
        options: ['finished', 'has finished', 'had finished', 'finishes'],
        answer: 'had finished',
      },
      {
        question: 'He is known _____ his dedication to the job.',
        options: ['for', 'with', 'about', 'in'],
        answer: 'for',
      },
    ],
  },
];

export const readingData = [
  {
    id: getOrGenerateUUID('read-1'),
    title: 'Reading Comprehension - The Enigma of Eldoria',
    level: 'Advanced',
    grade: 'B2',
    date: '2024-09-16',
    passage:
      "In the heart of an ancient forest, where the trees whispered secrets of old, lay the enigmatic city of Eldoria. Unlike any other city, Eldoria was said to be a place where time itself was distorted. Legend had it that Eldoria was built upon a nexus of magical ley lines, giving it the power to transcend the conventional bounds of time and space. The city was hidden from the eyes of ordinary men, cloaked by a mystical barrier that shifted its location every century. Only those who truly understood the ancient runes could decipher the city's location, a knowledge passed down through generations of a secretive order of scholars. Among them was Dr. Elena Voss, an astute historian whose research had led her to uncover the existence of Eldoria. Driven by an insatiable curiosity and a desire to prove the legends true, she embarked on a perilous journey, armed with only her knowledge of the runes and a fragment of an ancient map. The journey was fraught with challenges; from deciphering cryptic messages inscribed on ancient stones to surviving the treacherous terrain that seemed to change unpredictably. Yet, her perseverance and sharp intellect guided her through. After many trials, she finally located the city. There, she discovered not only the treasures of a lost civilization but also profound insights into the nature of time and magic. Dr. Voss's discovery reshaped the understanding of ancient history and solidified her place among the greatest scholars of her time.",
    questions: [
      {
        question:
          'What was the primary characteristic of Eldoria that set it apart from other cities?',
        options: [
          'Its location was hidden behind a mystical barrier.',
          'It was built on a floating island.',
          'Its population lived for centuries.',
          'It was renowned for its advanced technology.',
        ],
        answer: 'Its location was hidden behind a mystical barrier.',
      },
      {
        question: 'What role did the ancient runes play in finding Eldoria?',
        options: [
          'They were used to navigate through the forest.',
          "They contained the knowledge to decipher the city's location.",
          'They were a source of magical power.',
          "They were used to communicate with the city's inhabitants.",
        ],
        answer: "They contained the knowledge to decipher the city's location.",
      },
      {
        question:
          "Which of the following best describes Dr. Elena Voss's motivation for her journey?",
        options: [
          "To find a lost civilization's treasures.",
          'To prove the legends of Eldoria true and uncover its secrets.',
          'To escape a dangerous situation in her homeland.',
          'To gain fame and recognition among her peers.',
        ],
        answer: 'To prove the legends of Eldoria true and uncover its secrets.',
      },
      {
        question:
          'What challenges did Dr. Voss face during her journey to Eldoria?',
        options: [
          'Navigating through shifting terrain and deciphering cryptic messages.',
          'Combat with mystical creatures and overcoming magical traps.',
          'Negotiating with rival explorers and surviving harsh weather.',
          'Dealing with betrayal from her companions and finding lost artifacts.',
        ],
        answer:
          'Navigating through shifting terrain and deciphering cryptic messages.',
      },
      {
        question: "How did Dr. Voss's discovery impact the field of history?",
        options: [
          'It introduced new theories about ancient civilizations.',
          "It confirmed existing theories about Eldoria's location.",
          'It disproved previous assumptions about magical ley lines.',
          'It provided a new understanding of the nature of time and magic.',
        ],
        answer:
          'It provided a new understanding of the nature of time and magic.',
      },
      {
        question:
          'According to the passage, what is a characteristic feature of the terrain around Eldoria?',
        options: [
          'It changes unpredictably.',
          'It is permanently frozen.',
          'It is always covered in fog.',
          'It is lush with exotic flora.',
        ],
        answer: 'It changes unpredictably.',
      },
      {
        question: 'What kind of barrier was Eldoria hidden behind?',
        options: [
          'A mystical barrier that shifted its location.',
          'A physical barrier made of impenetrable materials.',
          'A magical fog that obscured its appearance.',
          'An enchantment that made it invisible to the naked eye.',
        ],
        answer: 'A mystical barrier that shifted its location.',
      },
      {
        question:
          'Which group was responsible for passing down the knowledge about Eldoria?',
        options: [
          'A secretive order of scholars.',
          'A guild of ancient mapmakers.',
          'A group of magical practitioners.',
          'A council of historical researchers.',
        ],
        answer: 'A secretive order of scholars.',
      },
      {
        question: "What was Dr. Voss's main tool for her journey?",
        options: [
          'A fragment of an ancient map and her knowledge of the runes.',
          'A magical compass and a guidebook.',
          'A set of ancient scrolls and a protective amulet.',
          'A detailed map and a team of experts.',
        ],
        answer: 'A fragment of an ancient map and her knowledge of the runes.',
      },
      {
        question: 'What did Dr. Voss discover upon locating Eldoria?',
        options: [
          'Treasures of a lost civilization and insights into time and magic.',
          'A network of ancient portals to other worlds.',
          'A library with records of all ancient civilizations.',
          'A group of ancient beings who guarded the city.',
        ],
        answer:
          'Treasures of a lost civilization and insights into time and magic.',
      },
    ],
  },

  {
    id: getOrGenerateUUID('read-2'),
    title: 'Reading Comprehension - The Adventure of the Lost Key',
    level: 'Intermediate',
    grade: 'B1',
    date: '2024-09-16',
    passage:
      "Tom was an adventurous young boy who loved exploring his grandfather's old house. One rainy afternoon, while rummaging through the attic, he stumbled upon a dusty old chest. The chest had an ornate keyhole but no key in sight. Intrigued, Tom remembered the stories his grandfather had told him about a magical key that could unlock any treasure in the house. Tom's curiosity was piqued. He decided to search the house for the missing key. His journey took him through the library, where he found a hidden compartment in one of the bookshelves. Inside, there was an old diary that belonged to his grandfather. The diary mentioned a special key kept in the garden shed. Excitedly, Tom raced to the shed. There, hidden under some old gardening tools, he found the magical key. With the key in hand, Tom returned to the attic. He carefully inserted the key into the chest's lock and turned it. The chest creaked open to reveal a collection of antique coins, old maps, and a letter from his grandfather. The letter explained that these were keepsakes from his grandfather's adventures and that Tom was now the guardian of these precious memories. Tom felt a deep sense of connection with his grandfather and a new appreciation for the history and stories behind the artifacts.",
    questions: [
      {
        question: "What was Tom's initial discovery in the attic?",
        options: [
          'A magical key.',
          'An old diary.',
          'A dusty old chest.',
          'A collection of antique coins.',
        ],
        answer: 'A dusty old chest.',
      },
      {
        question: 'Where did Tom find the diary?',
        options: [
          'In the attic.',
          'In the garden shed.',
          'In the library.',
          'Under old gardening tools.',
        ],
        answer: 'In the library.',
      },
      {
        question: 'What did the diary reveal about the magical key?',
        options: [
          'It was kept in the attic.',
          'It was hidden in the garden shed.',
          'It was lost in the library.',
          'It was kept in a secret compartment in the chest.',
        ],
        answer: 'It was hidden in the garden shed.',
      },
      {
        question: 'What did Tom find in the chest?',
        options: [
          'A letter from his grandfather.',
          'Old maps and antique coins.',
          'A magical key.',
          'A collection of gardening tools.',
        ],
        answer: 'Old maps and antique coins.',
      },
      {
        question: 'What was the content of the letter found in the chest?',
        options: [
          'Instructions on how to find the magical key.',
          'A message about the importance of the artifacts.',
          "A story about Tom's grandfather's adventures.",
          'A thank you note to Tom for finding the key.',
        ],
        answer: 'A message about the importance of the artifacts.',
      },
      {
        question:
          'How did Tom feel after discovering the contents of the chest?',
        options: [
          'He felt disappointed and confused.',
          'He felt a deep connection with his grandfather.',
          'He was worried about the value of the artifacts.',
          'He was frustrated by the difficulty of the search.',
        ],
        answer: 'He felt a deep connection with his grandfather.',
      },
      {
        question: 'What was Tom’s motivation for searching the house?',
        options: [
          'To find the magical key.',
          'To discover hidden treasures.',
          'To understand his grandfather’s stories.',
          'To explore the attic and the old house.',
        ],
        answer: 'To find the magical key.',
      },
      {
        question: 'Where was the magical key found?',
        options: [
          'In the attic.',
          'In the library.',
          'Under gardening tools in the shed.',
          'In a secret compartment in the chest.',
        ],
        answer: 'Under gardening tools in the shed.',
      },
      {
        question: "What was Tom's reaction when he opened the chest?",
        options: [
          'He was amazed by the contents.',
          'He was disappointed to find nothing.',
          'He was frightened by what he saw.',
          'He was confused about the significance of the items.',
        ],
        answer: 'He was amazed by the contents.',
      },
      {
        question: 'What did the letter explain about the artifacts?',
        options: [
          'They were part of a treasure hunt.',
          "They were keepsakes from the grandfather's adventures.",
          'They were valuable items for sale.',
          'They were gifts for Tom’s future adventures.',
        ],
        answer: "They were keepsakes from the grandfather's adventures.",
      },
    ],
  },
];
