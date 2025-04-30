import type { Project } from './types';

export const projects: Project[] = [
    {
        name: 'MindShare',
        description: {
            en: 'A social network application that allows users to make friends, follow, post content, like and comment on posts, and chat in real-time. This project helped me learn about integrating React.js with Node.js and MySQL. It was a valuable experience that strengthened my development skills.',
            in: "एक सोशल नेटवर्क एप्लिकेशन जो उपयोगकर्ताओं को मित्र बनाने, फॉलो करने, कंटेंट पोस्ट करने, पोस्ट पर लाइक व कमेंट करने और रीयल-टाइम में चैट करने की सुविधा देता है। इस प्रोजेक्ट के माध्यम से मैंने React.js को Node.js और MySQL के साथ इंटीग्रेट करना सीखा। यह एक मूल्यवान अनुभव रहा, जिसने मेरी डेवेलपमेंट स्किल्स को और मज़बूत किया।"
        },
        type: ['web', 'favorite'],
        date: '2025',
        technos: [
            'React',
            'SCSS',
            'Node.js',
            'MySQL',
        ],
        link: 'https://github.com/Pratap7744/MindShare-Social',
        repo_link: 'https://github.com/Pratap7744/MindShare-Social'
    },
    {
        name: 'Aesthetix',
        description: {
            in: "Aesthetix एक टूल है जो इमेजेस को मुख्य विषय के पीछे कस्टम टेक्स्ट जोड़कर सुंदर एस्थेटिक प्रभाव देता है। सुपाबेस द्वारा समर्थित लॉगिन सिस्टम के साथ, यह फॉन्ट स्टाइल्स, ग्रेडिएंट्स, शैडोज़ और अन्य सुविधाएँ प्रदान करता है जो इमेज डिजाइन को पर्सनलाइज करने में मदद करती हैं। Aesthetix सुंदर कंटेंट बनाना बेहद आसान बनाता है!",
            en: 'Aesthetix is a tool that enhances images by adding custom text behind the main subject, creating stunning aesthetics. With a login system powered by Supabase, it offers features like font styles, gradients, shadows, and more to personalize image designs. Aesthetix makes creating beautiful content effortless!'
        },
        type: ['web', 'favorite'],
        date: '2025',
        technos: [
            'React',
            'Tailwind CSS',
            'Supabase',
            'Vercel',
            
        ],
        link: 'https://text-behind-image-aesthetix1.vercel.app/',
        repo_link: 'https://github.com/Pratap7744/TextBehindImage-Aesthet'
    },
    {
        name: 'AIChatBot',
        description: {
            en: 'AI Chatbot is an assistant built using the Gemini AI API to fetch information based on user queries. It uses Clerk for secure authentication and stores search history in MongoDB, allowing easy access to past queries. With its seamless design, AI Chatbot offers a secure and personalized experience.',
            in: "AI Chatbot एक सहायक है जिसे Gemini AI API का उपयोग करके उपयोगकर्ता के सवालों के आधार पर जानकारी प्राप्त करने के लिए बनाया गया है। यह Clerk का उपयोग करके सुरक्षित प्रमाणीकरण करता है और MongoDB में खोज इतिहास को स्टोर करता है, जिससे पिछले सवालों तक आसान पहुँच मिलती है। इसके सहज डिज़ाइन के साथ, AI Chatbot एक सुरक्षित और व्यक्तिगत अनुभव प्रदान करता है।"
        },
        type: ['web', 'favorite'],
        date: '2024',
        technos: [
            'React',
            'CSS',
            'MongoDB',
            'Clerk',
            'Gemini'
        ],
        link: 'https://github.com/Pratap7744/AI-chatbot',
        repo_link: 'https://github.com/Pratap7744/AI-chatbot'
    },
    {
        name: 'Recipe-Blog',
        description: {
            en: 'I built a recipe blog app using Node.js, React, Tailwind CSS, and MongoDB, allowing users to share their unique recipes. The app features an intuitive interface for posting and browsing recipes, focusing on simplicity and responsiveness. Users can share their creations, explore new recipes, and connect with food enthusiasts.',
            in: "मैंने Node.js, React, Tailwind CSS, और MongoDB का उपयोग करके एक रेसिपी ब्लॉग ऐप बनाया है, जो उपयोगकर्ताओं को अपनी अनूठी रेसिपी साझा करने की अनुमति देता है। इस ऐप में रेसिपी पोस्ट करने और ब्राउज़ करने के लिए एक सहज इंटरफ़ेस है, जो सरलता और उत्तरदायित्व पर केंद्रित है। उपयोगकर्ता अपनी रचनाओं को साझा कर सकते हैं, नई रेसिपी तलाश सकते हैं, और खाद्य प्रेमियों से जुड़ सकते हैं।"
        },
        type: ['web','favorite'],
        date: '2023',
        technos: [
            'React',
            'Tailwind CSS',
            'Node.js',
            'MongoDB',
        ],
        link: 'https://github.com/Pratap7744/RecipeBlog',
        repo_link: 'https://github.com/Pratap7744/RecipeBlog'
    },
    {
        name: 'Tic-Tac-Toe',
        description: {
            en: 'Built a two-player Tic Tac Toe game using React with hooks for state management. Features include move history, game status updates, and a responsive UI. Showcases core React skills and interactive UI handling.',
            in: "React का उपयोग करके एक दो-खिलाड़ी Tic Tac Toe गेम बनाया, जिसमें state प्रबंधन के लिए hooks का उपयोग किया गया। इसमें चालों का इतिहास, गेम की स्थिति अपडेट और उत्तरदायी UI जैसी विशेषताएँ शामिल हैं। यह React की मूल क्षमताओं और इंटरएक्टिव UI को संभालने की दक्षता को दर्शाता है।"
        },
        type: [ 'game'],
        date: '2023',
        technos: ['React'],
        link: 'https://tic-tac-toe-by-pratap.netlify.app/',
        repo_link: 'https://github.com/Pratap7744/Tic-Tac-Toe'
    },
    {
        name: 'Portfolio',
        description: {
            en: 'A sleek and responsive portfolio built with Nuxt.js, showcasing my projects, skills, and achievements. It offers a modern UI with smooth navigation and dynamic elements for an engaging experience. Optimized for both desktop and mobile devices, ensuring fast loading and excellent performance.',
            in: 'Nuxt.js के साथ बनाया गया एक Sleek और Responsive पोर्टफोलियो, जिसमें मेरे प्रोजेक्ट्स, कौशल और उपलब्धियां दिखाई गई हैं। यह एक आधुनिक UI प्रदान करता है, जिसमें स्मूथ नेविगेशन और डाइनामिक तत्व होते हैं, जो उपयोगकर्ता के अनुभव को आकर्षक बनाते हैं। डेस्कटॉप और मोबाइल डिवाइस दोनों के लिए ऑप्टिमाइज्ड, जो तेज़ लोडिंग और बेहतरीन प्रदर्शन सुनिश्चित करता है।'
        },
        type: ['web'],
        date: '2025',
        technos: ['Nuxt.js'],
        link: 'https://pratap-pawar-portfolio.vercel.app/',
        repo_link: 'https://pratap-pawar-portfolio.vercel.app/'
    },
    
];
