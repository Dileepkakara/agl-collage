export const navigation = [
  ['Home', '/'],
  ['About', '/about'],
  ['Academics', '/academics'],
  ['Campus', '/campus'],
  ['Departments', '/departments'],
  ['Faculty', '/faculty'],
  ['Student life', '/events'],
  ['Admissions', '/admissions'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
]

export const programs = [
  {
    name: 'Computer Science',
    category: 'Technology',
    degree: 'B.Sc. · 3 years',
    image: 'photo-1519389950473-47ba0277781c',
    description: 'Build practical skills in software, data, and the ideas shaping tomorrow.',
  },
  {
    name: 'Business & Management',
    category: 'Business',
    degree: 'B.Com. · 3 years',
    image: 'photo-1521737711867-e3b97375f902',
    description: 'Learn to lead with clarity, entrepreneurial thinking, and real-world perspective.',
  },
  {
    name: 'Arts & Humanities',
    category: 'Humanities',
    degree: 'B.A. · 3 years',
    image: 'photo-1523240795612-9a054b0db644',
    description: 'Explore culture, communication, and the many ways people shape the world.',
  },
]

export const departments = [
  { name: 'Computer Science', short: 'CS', detail: 'A practical, future-facing education in computing, software, and emerging technologies.', programs: 'Explore computing', image: 'photo-1518770660439-4636190af475' },
  { name: 'Commerce', short: 'CO', detail: 'Develop a strong foundation in business, finance, and the decisions that move organizations forward.', programs: 'Explore business', image: 'photo-1460925895917-afdab827c52f' },
  { name: 'Humanities', short: 'HU', detail: 'Ask better questions, understand diverse perspectives, and communicate with confidence.', programs: 'Explore humanities', image: 'photo-1523240795612-9a054b0db644' },
]

export const events = [
  { date: '18', month: 'NOV', title: 'The ideas forum', type: 'Talks', location: 'The Assembly Hall', description: 'An evening for fresh perspectives, thoughtful questions, and ideas worth sharing.', image: 'photo-1511632765486-a01980e01a18' },
  { date: '22', month: 'NOV', title: 'Open campus day', type: 'Campus', location: 'AGL College campus', description: 'Meet our community, explore campus, and get a feel for learning at AGL.', image: 'photo-1523580494863-6f3031224c94' },
  { date: '03', month: 'DEC', title: 'Create / Connect', type: 'Culture', location: 'Student Commons', description: 'A day of making, meeting, and celebrating the many interests that bring us together.', image: 'photo-1528605248644-14dd04022da1' },
  { date: '12', month: 'DEC', title: 'Ideas in practice', type: 'Talks', location: 'Learning Commons', description: 'A student-led showcase of projects, perspectives, and work in progress.', image: 'photo-1522202176988-66273c2fd55f' },
]

export const stats = [
  { value: '03', suffix: '', label: 'areas to explore' },
  { value: '03', suffix: '', label: 'learning communities' },
  { value: '01', suffix: '', label: 'place to begin' },
]

export const notices = [
  { category: 'Academic', date: 'Nov 12, 2026', title: 'Semester registration is now open', priority: 'Important' },
  { category: 'Campus', date: 'Nov 09, 2026', title: 'Library hours during examination week', priority: 'Update' },
  { category: 'Events', date: 'Nov 06, 2026', title: 'Join us for the annual ideas forum', priority: 'Upcoming' },
]

export const facultyProfiles = [
  { name: 'Dr. Nisha Rao', role: 'Faculty mentor', department: 'Computer Science', focus: 'Computing & problem-solving', image: 'photo-1551836022-d5d88e9218df' },
  { name: 'Prof. Rohan Das', role: 'Faculty mentor', department: 'Commerce', focus: 'Business & enterprise', image: 'photo-1560250097-0b93528c311a' },
  { name: 'Dr. Mira Sen', role: 'Faculty mentor', department: 'Humanities', focus: 'Culture & communication', image: 'photo-1580489944761-15a19d654956' },
]

export const campusSpaces = [
  { title: 'Spaces to focus', detail: 'Find the tools and time to get into your work.', image: 'photo-1498243691581-b145c3f54a5a' },
  { title: 'Room to experiment', detail: 'Turn questions into projects, practice, and new skills.', image: 'photo-1518770660439-4636190af475' },
  { title: 'People to meet', detail: 'Make room for shared interests and new perspectives.', image: 'photo-1523580494863-6f3031224c94' },
]

export const studentExperiences = [
  { title: 'Make something together', category: 'Clubs & communities', image: 'photo-1528605248644-14dd04022da1' },
  { title: 'Find your people', category: 'Campus life', image: 'photo-1529156069898-49953e39b3ac' },
  { title: 'Try a new perspective', category: 'Workshops & ideas', image: 'photo-1523240795612-9a054b0db644' },
]

export const achievements = [
  { number: '01', title: 'Ideas in action', detail: 'A culture of projects, practice, and learning by doing.' },
  { number: '02', title: 'Room to grow', detail: 'A supportive community for new interests and ambitions.' },
  { number: '03', title: 'Ready for what’s next', detail: 'Build confidence and skills that travel beyond campus.' },
]

export const galleryImages = [
  { src: programs[0].image, caption: 'Ideas taking shape in the classroom' },
  { src: 'photo-1523050854058-8df90110c9f1', caption: 'A new day on campus' },
  { src: 'photo-1498243691581-b145c3f54a5a', caption: 'A quiet moment in the library' },
  { src: events[0].image, caption: 'Finding community at AGL' },
  { src: 'photo-1523240795612-9a054b0db644', caption: 'The people make the place' },
  { src: events[1].image, caption: 'Open campus, open possibilities' },
]

export const frequentlyAskedQuestions = [
  { question: 'How do I enquire about admissions?', answer: 'Send us a message using the enquiry form and our admissions team can guide you through the next steps for your chosen program.' },
  { question: 'Which programs can I explore?', answer: 'Explore our current program areas in Computer Science, Business & Management, and Arts & Humanities. Contact the college to confirm current availability and eligibility.' },
  { question: 'Can I visit the campus?', answer: 'Get in touch to ask about arranging a campus visit and learning more about the facilities and student experience.' },
  { question: 'How can I contact AGL College?', answer: 'Use the contact details and enquiry form below. We’ll help direct your question to the right team.' },
]
