// ============================================================
//  READLY — data.js
//  Single source of truth for all articles and topics.
//  Every other JS file reads from this one.
// ============================================================

const articles = [
  {
    id: 1,
    title: "Why the best interfaces feel invisible",
    topic: "Design",
    author: "Nneka Obi",
    readTime: 6,
    excerpt:
      "Great design isn't about what you add — it's about what you leave out. A look at the principles behind the world's most effortless products.",
    body: [
      "Great design is invisible. The best products feel so natural to use that you don't think about them — you just think through them. The interface recedes into the background and what remains is the task, the thought, the experience itself.",
      "This is harder to achieve than it sounds. Every button, every label, every transition is a small decision with consequences. The designer's job is not to impress the user with cleverness but to dissolve friction until there is none left to dissolve.",
      "Consider the scroll. Before it became default behavior, navigating long content meant clicking paginated links. Scroll changed everything not because it was technically impressive, but because it mapped perfectly to the way we browse — continuously, without interruption. The mechanism disappeared. The content remained.",
      "The best designers are students of human behavior first. They ask: what does the person already expect? What mental model do they bring? And then they build to meet that model rather than asking the user to build a new one.",
      "Invisible design is not the absence of craft — it is the highest form of it. It means doing so much work that the work disappears entirely.",
    ],
  },
  {
    id: 2,
    title: "The quiet return of the open web",
    topic: "Technology",
    author: "James Forde",
    readTime: 4,
    excerpt:
      "Amid the noise of social platforms and algorithmic feeds, a growing number of writers and readers are finding their way back to the personal web.",
    body: [
      "Something quiet is happening on the internet. Away from the algorithmic feeds and engagement-optimised platforms, people are going back to basics — personal websites, RSS feeds, hand-coded HTML pages and simple blogs with no comment sections and no like buttons.",
      "It started as a trickle. A few writers who were tired of platforms owning their audience. A few developers who missed the creative freedom of building something entirely their own. But it has grown into something that looks less like nostalgia and more like a genuine cultural shift.",
      "The centralised web promised convenience. And it delivered — for a while. But it also delivered surveillance, anxiety, infinite scroll, and the slow erosion of the idea that you could just put something on the internet and it would simply stay there, yours, on your terms.",
      "The open web asks more of you. You have to find things. You have to follow links. You have to build your own reading list rather than having one served to you. But in asking more, it gives something back: the sense that the internet is a place you inhabit, not a place that inhabits you.",
      "The web was always meant to be a decentralised network of documents, ideas, and people. It still can be. It just requires choosing it.",
    ],
  },
  {
    id: 3,
    title: "On slowness as a radical act",
    topic: "Culture",
    author: "Lena Brandt",
    readTime: 8,
    excerpt:
      "In a world optimised for speed, choosing to go slow has become one of the most countercultural things a person can do.",
    body: [
      "We have built a civilisation that treats speed as a virtue without ever seriously questioning why. Faster delivery. Faster communication. Faster content. The assumption embedded in all of it is that faster is better — that speed is always on the side of progress.",
      "But there is a growing body of evidence, and a growing number of people, pushing back against this assumption. Slowness, they argue, is not inefficiency. It is deliberateness. It is the refusal to let urgency dictate the terms of your life.",
      "The slow food movement began in Italy in the 1980s as a protest against a McDonald's opening near the Spanish Steps in Rome. It was not just about food. It was about the kind of life that fast food represented — hurried, disconnected, transactional. The movement that grew from that protest now spans 160 countries.",
      "What the slow movements have in common is not a rejection of modernity but a rejection of the idea that every moment must be optimised. That every commute must be a podcast. That every meal must be eaten at a desk. That every spare minute must be productive.",
      "Slowness is radical because it is a refusal. A refusal to be always available. A refusal to measure your worth in output. A refusal to let the pace of technology set the pace of your interior life.",
      "Choosing to read a book instead of scrolling. Choosing to cook instead of ordering. Choosing to walk instead of ride. These are small acts, but they are also assertions — that your attention is yours to give, not theirs to take.",
    ],
  },
  {
    id: 4,
    title: "The human cost of moving fast and breaking things",
    topic: "Technology",
    author: "Amara Diallo",
    readTime: 7,
    excerpt:
      "Silicon Valley's favourite motto was never really about software. It was about who gets to decide what gets broken — and who pays the price.",
    body: [
      "Move fast and break things. The phrase was coined inside Facebook as an internal engineering motto. Ship quickly. Iterate. Don't let perfectionism slow you down. It became, almost overnight, the unofficial philosophy of an entire industry.",
      "But software does not break in a vacuum. When a social platform's recommendation algorithm is optimised for engagement above all else and pushes users toward increasingly extreme content, real people are radicalised. When a gig economy app is designed to extract maximum labour at minimum cost, real workers bear that cost in their bodies and their finances.",
      "The things that get broken are rarely the things owned by the people doing the breaking. The founders and engineers and investors are largely insulated from the downstream consequences of the products they ship. It is the users — and often the most vulnerable users — who absorb the risk.",
      "This is not an argument against iteration or against accepting imperfection as part of building. It is an argument for honesty about what the motto actually means in practice: that speed is prioritised over safety, and that the people who will be hurt by that trade-off are rarely the ones making it.",
      "A more honest version of the motto might be: move fast and break other people's things. That version, at least, would force the question of whether that is acceptable.",
    ],
  },
  {
    id: 5,
    title: "What does it mean to truly pay attention?",
    topic: "Philosophy",
    author: "Priya Menon",
    readTime: 5,
    excerpt:
      "Simone Weil wrote that attention is the rarest and purest form of generosity. In an age of distraction, what would it mean to take that seriously?",
    body: [
      "Simone Weil, the French philosopher and mystic, wrote that attention is the rarest and purest form of generosity. She meant this literally. To truly attend to another person — to listen without agenda, to look without judgment, to be fully present — is to give them something that most people almost never receive.",
      "We talk about attention as if it is a resource being depleted — stolen by our phones, sold by platforms, fractured by notifications. And there is truth in that framing. But it misses something important. Attention is not only something that is taken from us. It is also something we fail to give.",
      "Weil distinguished between two kinds of attention. The first is voluntary attention — the kind we deploy when we are trying to solve a problem or complete a task. The second is a more receptive, open attention — a waiting, a willingness to be surprised by what is actually there rather than what we expect to find.",
      "It is this second kind that she considered rare. And it is this second kind that most of our habits and systems work against. We are trained to scan, to skim, to extract the useful and discard the rest. We are rarely trained to simply be with something long enough to let it reveal itself.",
      "To pay attention, in Weil's sense, is to suspend your own needs long enough to perceive another. It is, she argued, the foundation of all genuine ethical life. Without it, we relate not to the person in front of us but to our projection of them.",
    ],
  },
  {
    id: 6,
    title: "Why you probably misunderstand how memory works",
    topic: "Science",
    author: "Dr. Kofi Asante",
    readTime: 6,
    excerpt:
      "Memory is not a recording. It is a reconstruction — and that distinction has profound implications for how we understand ourselves and each other.",
    body: [
      "Most people think of memory as something like a video recording. The brain captures an experience, stores it, and plays it back when needed. This model is intuitive, which is probably why it persists. It is also almost entirely wrong.",
      "Memory is not a playback system. It is a reconstruction system. Every time you remember something, your brain actively rebuilds the memory from fragments — filling in gaps with inference, expectation, and things you have learned since the original event. The memory you retrieve is not the original memory. It is a new construction, shaped by who you are now.",
      "This is why eyewitness testimony is so unreliable. Not because people are lying, but because memory is genuinely malleable. Details get updated without our awareness. Emotions colour what we think we perceived. Post-event information seeps backwards into the original memory.",
      "It is also why two people can live through the same event and remember it completely differently — and both be telling the truth as they know it. Neither version is the recording. Both are reconstructions, shaped by different brains, different emotional states, different things learned afterward.",
      "The implications for how we treat memory in law, in relationships, in therapy, and in our own self-understanding are significant. We are not the archivists of our own lives. We are the unreliable narrators.",
    ],
  },
  {
    id: 7,
    title: "The strange, slow death of monoculture",
    topic: "Culture",
    author: "Tobias Wren",
    readTime: 5,
    excerpt:
      "There was a time when almost everyone watched the same shows, heard the same songs, and read the same books. That world is gone. What replaced it is stranger than we expected.",
    body: [
      "In 1983, the series finale of M*A*S*H was watched by 106 million Americans — about 60 percent of the adult population. It is a figure that is essentially impossible to imagine today. Not because people have stopped watching television, but because the shared experience of watching the same thing at the same time has dissolved.",
      "Monoculture — the idea that a society shares a common set of cultural reference points — has been dying for decades. The remote control began the fragmentation. Cable television accelerated it. The internet finished the job. What we have now is not one culture but millions of micro-cultures, each with its own stars, its own references, its own in-jokes that land blank with anyone outside the community.",
      "This has genuine benefits. Niches that once had no economic viability can now sustain themselves. Voices that would never have found an audience in a monocultural world now have communities of thousands or millions.",
      "But something is also lost. Monoculture, for all its homogenising tendencies, created a kind of social adhesive. Shared references are not trivial — they are the raw material of conversation, of empathy, of the sense that you inhabit the same world as the stranger next to you.",
      "What fills the gap is still unclear. Perhaps nothing does. Perhaps we are learning to build connection without shared reference — or perhaps we are finding that it is harder than we thought.",
    ],
  },
  {
    id: 8,
    title: "The design of everyday frustration",
    topic: "Design",
    author: "Nneka Obi",
    readTime: 4,
    excerpt:
      "Dark patterns — design choices that trick users into doing things they didn't intend — are everywhere. Here's how to spot them.",
    body: [
      "You go to cancel a subscription and find that the cancel button is greyed out, or buried under three sub-menus, or replaced by a chat window that opens only during business hours in a timezone that is not yours. You book a flight and discover at checkout that travel insurance has been pre-ticked and you have to uncheck it. You sign up for a free trial and give your credit card details and six months later realise you have been paying for something you forgot about.",
      "These are dark patterns — a term coined by UX designer Harry Brignull in 2010 to describe interface design choices that work against the user's interest. They are not bugs. They are features. Deliberately designed, tested, and optimised to extract value from confusion.",
      "The range of dark patterns is broad. Roach motels make it easy to get in and hard to get out. Confirmshaming label the opt-out option with something like 'No thanks, I don't want to save money.' Misdirection draws your attention to one thing while something else happens elsewhere on the page.",
      "Regulators are beginning to catch up. The EU's Digital Services Act, the FTC in the US, and regulators in several other jurisdictions have all taken steps to address the most egregious examples. But the arms race between designers and regulators is ongoing.",
      "The most useful defence, for now, is literacy. Knowing that these patterns exist — and knowing their names — makes you significantly harder to manipulate.",
    ],
  },
  {
    id: 9,
    title: "Is consciousness a feature or a bug of evolution?",
    topic: "Philosophy",
    author: "Dr. Yemi Adeyinka",
    readTime: 9,
    excerpt:
      "Every theory of consciousness eventually runs into the hard problem: why does physical process give rise to subjective experience at all? Nobody knows.",
    body: [
      "The hard problem of consciousness is not about explaining how the brain processes information. We have made considerable progress on that. It is about explaining why any of that processing is accompanied by experience — why there is something it is like to be you, reading these words, rather than nothing at all.",
      "The philosopher David Chalmers, who coined the term 'hard problem' in 1995, put it this way: even if we fully explained the neural correlates of consciousness — mapped every neuron, traced every signal — we would still face the question of why those physical processes give rise to subjective experience. Why isn't it all just information processing in the dark?",
      "There are broadly two camps. Physicalists argue that consciousness is entirely a product of physical processes — that once we fully understand the brain, consciousness will be explained. The experience of redness or pain or love is 'just' neurons firing in particular patterns, even if we do not yet understand exactly how.",
      "Dualists argue that this can never be enough — that subjective experience is fundamentally different in kind from physical processes, and that no amount of neuroscience will bridge the explanatory gap between the two.",
      "A third position, gaining traction in recent years, is panpsychism — the view that some form of experience is a fundamental feature of the universe, present in some minimal form even in simple physical systems, and that human consciousness is a complex expression of something more basic.",
      "None of these positions is fully satisfying. That is what makes the hard problem hard. It may be the deepest question there is — and we are nowhere near answering it.",
    ],
  },
  {
    id: 10,
    title: "How colour became a language",
    topic: "Design",
    author: "Saoirse Malone",
    readTime: 5,
    excerpt:
      "Colour carries meaning across every culture — but not the same meaning. Understanding colour as a system rather than a palette changes how you design.",
    body: [
      "In Western contexts, white is the colour of weddings and purity. In many East Asian cultures, it is the colour of mourning. Red signals danger on road signs in Europe and good fortune at Chinese New Year celebrations. The meanings of colour are not universal — they are cultural, historical, and deeply contextual.",
      "And yet colour is not arbitrary. Some associations appear to be grounded in something more fundamental than culture. Red is associated with urgency and danger in contexts as different as traffic signals and sports teams, and researchers have found that athletes wearing red in competitive sports win more often than those wearing blue or white. The reasons are debated, but the pattern is consistent.",
      "For designers, this creates a productive tension. Colour carries meaning — but the meaning is not fixed. You can work with cultural associations (blue for trust, green for growth) while remaining aware that these associations are not universal and may not apply to your audience.",
      "The more interesting question is how colour systems work together. A single colour in isolation tells you relatively little. A colour in relation to other colours — in contrast, in harmony, in sequence — becomes a language. It communicates hierarchy, emotion, relationship, and intention.",
      "Learning to read that language, and to write in it deliberately, is one of the foundational skills of visual design. It is not about choosing colours you like. It is about understanding what your colours are saying.",
    ],
  },
  {
    id: 11,
    title: "The loneliness of being always connected",
    topic: "Culture",
    author: "Fatima Al-Hassan",
    readTime: 6,
    excerpt:
      "We are more connected than any generation in history, and more lonely. These two facts are not a paradox — they are cause and effect.",
    body: [
      "The surgeon general of the United States declared loneliness a public health epidemic in 2023. Similar warnings have come from health authorities in the UK, Japan, and Australia. The data behind these warnings is consistent: self-reported loneliness has risen sharply over the past two decades, with the steepest increases among young adults — the demographic that grew up most connected.",
      "This seems paradoxical until you look at what connection via social media actually involves. Broadcast, not conversation. Performance, not presence. The curated self, not the vulnerable one. Social media gives us audience but not intimacy. It gives us followers but not friends in any sense that maps to what friendship has historically meant.",
      "The psychologist Sherry Turkle has spent decades studying what she calls being 'alone together' — the experience of being in the same room as others while each person is absorbed in their device, present physically but absent relationally. The problem, she argues, is not technology itself but the expectations we have built around it.",
      "Genuine connection requires risk. It requires showing up without editing yourself in advance, being affected by another person, being changed by them. The architectures of social media are designed to minimise exactly this kind of exposure — to let you engage without ever being truly vulnerable.",
      "The loneliness epidemic is not a failure of technology. It is a sign that technology cannot substitute for the thing it simulates. Connection without risk is not connection. It is its convincing imitation.",
    ],
  },
  {
    id: 12,
    title: "What octopuses can teach us about the mind",
    topic: "Science",
    author: "Dr. Kofi Asante",
    readTime: 7,
    excerpt:
      "Octopuses are intelligent, curious, and profoundly alien. Studying how their minds work is forcing scientists to rethink what intelligence actually is.",
    body: [
      "The octopus is one of the most intelligent animals on earth, and also one of the most alien. Its nervous system is distributed — about two thirds of its neurons are in its arms rather than its central brain. Each arm can act semi-independently, problem-solving on its own without consulting the central brain at all. It is, in some sense, an animal that is partly thinking with its body.",
      "Octopuses can open jars, navigate mazes, recognise individual humans, and play — they have been observed repeatedly releasing objects into a current and catching them, with no apparent purpose other than what looks very much like enjoyment. In captivity, they are notoriously difficult to contain: they escape tanks, travel down corridors, steal fish from neighbouring tanks, and return to their own without detection.",
      "What makes the octopus philosophically interesting is how different its intelligence is from ours. Human intelligence is the product of about 500 million years of vertebrate evolution. Octopus intelligence evolved entirely separately, in a lineage that diverged from ours at a very early stage. If intelligence evolved twice, in such different forms, it suggests that intelligence is not a fluke — it is something that evolution finds, or something that finds its way into evolution.",
      "The octopus also has the ability to change colour and texture across its entire body in milliseconds — creating patterns, camouflage, signals. This is controlled by an extraordinarily complex system of chromatophores, iridophores, and papillae. Some researchers have speculated that this system functions as a form of communication — perhaps even a kind of language — though this remains unproven.",
      "Studying the octopus is forcing scientists to expand their definitions of intelligence, of mind, and of what it means to think. The answers may change what we think about ourselves.",
    ],
  },
  {
    id: 13,
    title: "The case for reading fiction as a survival skill",
    topic: "Culture",
    author: "James Forde",
    readTime: 5,
    excerpt:
      "Research consistently shows that reading literary fiction makes people more empathetic. In a polarised world, that might be the most important skill there is.",
    body: [
      "In 2013, researchers at The New School in New York published a study in Science magazine showing that reading literary fiction — as opposed to popular genre fiction or non-fiction — improved readers' performance on tests of empathy and theory of mind. Theory of mind is the ability to attribute mental states to others, to understand that other people have beliefs, desires, and perspectives different from your own.",
      "The effect was specific to literary fiction, and the researchers had a theory about why. Literary fiction tends to leave more unsaid. Characters are not explained to you — you have to infer their inner lives from partial evidence, the same way you have to infer the inner lives of real people. This active inferencing, practiced repeatedly, appears to strengthen the cognitive muscles involved in real-world empathy.",
      "This matters beyond the personal. Empathy is the foundation of moral consideration. You cannot genuinely care about the suffering of someone you cannot imagine. In a world increasingly sorted into groups that consume different media, inhabit different information environments, and hold different foundational beliefs about reality, the capacity to imagine your way into another perspective is increasingly rare — and increasingly necessary.",
      "Fiction does not guarantee empathy, any more than having a gym membership guarantees fitness. But it provides a practice ground — a space to inhabit other minds, other bodies, other circumstances, at low cost and without real-world consequence.",
      "In that sense, reading is less a leisure activity than a form of training. Training for the hardest and most important thing a social animal can do: understand another.",
    ],
  },
  {
    id: 14,
    title: "Type is not decoration",
    topic: "Design",
    author: "Saoirse Malone",
    readTime: 4,
    excerpt:
      "Typography is the invisible infrastructure of everything you read. When it works, you don't notice it. When it doesn't, you feel it — even if you can't say why.",
    body: [
      "Most people interact with typography every day without thinking about it once. This is, in a sense, the goal. Good typography is infrastructure — it supports the experience without calling attention to itself. When you read a well-typeset book, what you feel is ease. What you notice is the content. The typography has done its job by disappearing.",
      "But type is making decisions on your behalf constantly. The typeface tells you something about the voice before you read a word — formal or casual, authoritative or approachable, contemporary or classical. The weight and size signal hierarchy: what matters more, what matters less. The line length and leading control how comfortable the reading experience feels at the physiological level — how many words your eye takes in at a glance, how easily it tracks from one line to the next.",
      "The minimum viable line length for comfortable reading is generally considered to be about 45 characters. The maximum is around 75. Below 45, your eye moves back too often and reading feels choppy. Above 75, tracking back to the start of the next line becomes effortful and you start losing your place.",
      "These are not aesthetic judgments. They are constraints derived from the physiology of vision and decades of research into reading behaviour. Type design is, at its root, applied cognitive science.",
      "When type is bad — when fonts are chosen carelessly, when spacing is ignored, when contrast is insufficient — readers feel it as friction, as difficulty, as a vague sense that something is off. They rarely identify the source. They just close the tab.",
    ],
  },
  {
    id: 15,
    title: "The physics of why the sky is blue",
    topic: "Science",
    author: "Dr. Yemi Adeyinka",
    readTime: 3,
    excerpt:
      "Rayleigh scattering is the reason the sky is blue, sunsets are orange, and the moon looks different colours at different heights. The physics is elegant.",
    body: [
      "Sunlight looks white, but it is actually a mixture of all the colours of the visible spectrum — red, orange, yellow, green, blue, indigo, violet. When sunlight enters the earth's atmosphere, it collides with the tiny gas molecules that make up the air. These collisions cause the light to scatter in all directions.",
      "But not all colours scatter equally. The amount of scattering depends on the wavelength of the light. Shorter wavelengths scatter more. Longer wavelengths scatter less. Blue light has a shorter wavelength than red light, so it scatters far more strongly as it passes through the atmosphere — roughly ten times more strongly than red light.",
      "This is Rayleigh scattering, named after the nineteenth century physicist Lord Rayleigh. Because blue light scatters so much more than the other colours, it bounces all over the sky in every direction. No matter where you look in the sky, some of that scattered blue light is heading toward your eyes. The sky looks blue.",
      "At sunset, the sun is near the horizon and its light must travel through much more atmosphere to reach you. By the time it does, most of the blue light has scattered away. What remains is the longer-wavelength light — the reds and oranges. This is why sunsets are red.",
      "The same scattering explains why the moon looks orange when it is low on the horizon and white when it is high overhead. At the horizon, moonlight is passing through more atmosphere, scattering away the blue. High overhead, it passes through less, and appears closer to its true colour.",
    ],
  },
];

// ============================================================
//  TOPICS
//  Each topic has a name, description, and an icon.
//  articleCount is derived dynamically from the articles array.
// ============================================================

const topics = [
  {
    id: "design",
    name: "Design",
    icon: "✦",
    description:
      "UI, UX, visual design, typography, colour theory, and the craft of making things people love to use.",
  },
  {
    id: "technology",
    name: "Technology",
    icon: "⌘",
    description:
      "The web, software, tools, platforms, and the systems shaping how we live and work.",
  },
  {
    id: "culture",
    name: "Culture",
    icon: "◎",
    description:
      "Ideas, society, media, art, and the forces that shape how we live together.",
  },
  {
    id: "science",
    name: "Science",
    icon: "◈",
    description:
      "Biology, physics, neuroscience, space, and the natural world explained clearly.",
  },
  {
    id: "philosophy",
    name: "Philosophy",
    icon: "◇",
    description:
      "Ethics, consciousness, meaning, knowledge, and the questions that don't have easy answers.",
  },
];

// ============================================================
//  HELPERS
//  Reusable utility functions built from your current JS knowledge.
// ============================================================

// Get a single article by its id
const getArticleById = (id) => {
  return articles.find((article) => article.id === id);
};

// Get all articles that belong to a specific topic
const getArticlesByTopic = (topicName) => {
  return articles.filter((article) => article.topic === topicName);
};

// Get the article count for a specific topic
const getArticleCount = (topicName) => {
  return getArticlesByTopic(topicName).length;
};

// Get a topic object by its name
const getTopicByName = (name) => {
  return topics.find((topic) => topic.name === name);
};
