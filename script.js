/* ==========================================================================
   WORD OF SURVIVOR - ARCADE RETRO SURVIVAL EDITION
   Pure English Contextual IT Database & Animation Engine (No Audio)
   ========================================================================== */

// --- 1. SVG CHARACTER ASSETS (Custom 2D Arcade Illustrations) ---
const HERO_SVG = `
<svg viewBox="0 0 120 140" width="120" height="140" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="134" rx="35" ry="6" fill="#000" opacity="0.4"/>
  <rect x="42" y="98" width="12" height="24" rx="4" fill="#1b2a4a" stroke="#000" stroke-width="3"/>
  <rect x="62" y="98" width="12" height="24" rx="4" fill="#1b2a4a" stroke="#000" stroke-width="3"/>
  <ellipse cx="48" cy="126" rx="10" ry="6" fill="#ffffff" stroke="#000" stroke-width="3"/>
  <ellipse cx="68" cy="126" rx="10" ry="6" fill="#ffffff" stroke="#000" stroke-width="3"/>
  <path d="M40 126 Q48 122 56 126" stroke="#d32f2f" stroke-width="2.5" fill="none"/>
  <path d="M60 126 Q68 122 76 126" stroke="#d32f2f" stroke-width="2.5" fill="none"/>
  
  <rect x="36" y="60" width="44" height="42" rx="10" fill="#d32f2f" stroke="#000" stroke-width="3.5"/>
  <rect x="37" y="74" width="42" height="12" fill="#ffffff" stroke="#000" stroke-width="2.5"/>
  <line x1="36" y1="102" x2="80" y2="102" stroke="#000" stroke-width="3.5"/>
  
  <rect x="52" y="52" width="14" height="12" fill="#8d5524" stroke="#000" stroke-width="2"/>
  <ellipse cx="58" cy="38" rx="26" ry="24" fill="#9e6638" stroke="#000" stroke-width="3.5"/>
  <ellipse cx="32" cy="40" rx="6" ry="7" fill="#9e6638" stroke="#000" stroke-width="3"/>
  
  <path d="M32 34 C30 14 55 10 78 20 C85 24 86 36 84 42 C78 36 72 32 60 32 C48 32 38 34 32 34 Z" fill="#111111" stroke="#000" stroke-width="3.5"/>
  
  <path d="M44 32 L56 36" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M64 36 L76 33" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <ellipse cx="50" cy="42" rx="6" ry="7" fill="#ffffff" stroke="#000" stroke-width="2.5"/>
  <ellipse cx="70" cy="42" rx="6" ry="7" fill="#ffffff" stroke="#000" stroke-width="2.5"/>
  <circle cx="52" cy="42" r="3.5" fill="#111111"/>
  <circle cx="72" cy="42" r="3.5" fill="#111111"/>
  <circle cx="53.5" cy="40.5" r="1.5" fill="#ffffff"/>
  <circle cx="73.5" cy="40.5" r="1.5" fill="#ffffff"/>
  <line x1="56" y1="52" x2="68" y2="52" stroke="#000" stroke-width="3" stroke-linecap="round"/>
  
  <path d="M40 70 Q30 76 42 86" stroke="#9e6638" stroke-width="8" stroke-linecap="round"/>
  
  <g id="hero-gun">
    <rect x="52" y="70" width="12" height="14" rx="2" fill="#333333" stroke="#000" stroke-width="2"/>
    <rect x="58" y="66" width="38" height="18" rx="4" fill="#687f35" stroke="#000" stroke-width="3"/>
    <rect x="66" y="82" width="10" height="12" rx="2" fill="#2b3614" stroke="#000" stroke-width="2"/>
    <rect x="94" y="70" width="14" height="10" rx="2" fill="#444444" stroke="#000" stroke-width="2.5"/>
    <circle cx="107" cy="75" r="4" fill="#ffb300" stroke="#000" stroke-width="2"/>
    <rect x="70" y="62" width="16" height="5" rx="1" fill="#333333" stroke="#000" stroke-width="2"/>
  </g>
  
  <path d="M60 76 Q68 84 80 80" stroke="#9e6638" stroke-width="9" stroke-linecap="round"/>
  <ellipse cx="80" cy="79" rx="5" ry="5" fill="#8d5524" stroke="#000" stroke-width="2"/>
</svg>
`;

const ZOMBIE_SVG = `
<svg viewBox="0 0 120 140" width="120" height="140" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="134" rx="35" ry="6" fill="#000" opacity="0.4"/>
  <rect x="46" y="98" width="13" height="24" rx="3" fill="#283593" stroke="#000" stroke-width="3"/>
  <rect x="65" y="98" width="13" height="24" rx="3" fill="#283593" stroke="#000" stroke-width="3"/>
  <ellipse cx="50" cy="126" rx="9" ry="6" fill="#4e342e" stroke="#000" stroke-width="3"/>
  <ellipse cx="69" cy="126" rx="9" ry="6" fill="#4e342e" stroke="#000" stroke-width="3"/>
  
  <rect x="42" y="62" width="46" height="40" rx="8" fill="#1a237e" stroke="#000" stroke-width="3.5"/>
  <path d="M62 62 L68 62 L70 78 L65 86 L60 78 Z" fill="#c62828" stroke="#000" stroke-width="2"/>
  
  <rect x="58" y="52" width="14" height="12" fill="#7cb342" stroke="#000" stroke-width="2"/>
  <ellipse cx="65" cy="38" rx="27" ry="25" fill="#8bc34a" stroke="#000" stroke-width="3.5"/>
  <path d="M52 20 Q58 24 64 20" stroke="#33691e" stroke-width="3" fill="none"/>
  <line x1="56" y1="18" x2="56" y2="23" stroke="#000" stroke-width="2"/>
  <line x1="60" y1="18" x2="60" y2="23" stroke="#000" stroke-width="2"/>
  
  <ellipse cx="52" cy="38" rx="8" ry="9" fill="#fff59d" stroke="#000" stroke-width="3"/>
  <ellipse cx="74" cy="38" rx="8" ry="9" fill="#fff59d" stroke="#000" stroke-width="3"/>
  <circle cx="50" cy="38" r="3" fill="#fbc02d" stroke="#000" stroke-width="1.5"/>
  <circle cx="72" cy="38" r="3" fill="#fbc02d" stroke="#000" stroke-width="1.5"/>
  
  <path d="M50 50 Q64 62 76 50 Q64 54 50 50 Z" fill="#212121" stroke="#000" stroke-width="2.5"/>
  <rect x="55" y="50" width="4" height="4" fill="#ffffff"/>
  <rect x="67" y="50" width="4" height="4" fill="#ffffff"/>
  
  <path d="M48 68 Q30 68 18 64" stroke="#1a237e" stroke-width="10" stroke-linecap="round"/>
  <path d="M22 64 L10 64" stroke="#8bc34a" stroke-width="8" stroke-linecap="round"/>
  <line x1="10" y1="62" x2="4" y2="60" stroke="#8bc34a" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="65" x2="3" y2="65" stroke="#8bc34a" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="68" x2="5" y2="70" stroke="#8bc34a" stroke-width="3" stroke-linecap="round"/>
  
  <path d="M60 76 Q38 78 26 74" stroke="#1a237e" stroke-width="11" stroke-linecap="round"/>
  <path d="M28 74 L16 74" stroke="#8bc34a" stroke-width="9" stroke-linecap="round"/>
  <line x1="16" y1="71" x2="9" y2="69" stroke="#8bc34a" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="16" y1="75" x2="8" y2="75" stroke="#8bc34a" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="16" y1="79" x2="10" y2="81" stroke="#8bc34a" stroke-width="3.5" stroke-linecap="round"/>
</svg>
`;

const MECHA_BOT_SVG = `
<svg viewBox="0 0 120 140" width="120" height="140" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="134" rx="35" ry="6" fill="#000" opacity="0.4"/>
  <rect x="42" y="100" width="16" height="24" rx="4" fill="#37474f" stroke="#000" stroke-width="3"/>
  <rect x="66" y="100" width="16" height="24" rx="4" fill="#37474f" stroke="#000" stroke-width="3"/>
  <rect x="36" y="122" width="26" height="10" rx="3" fill="#ff7043" stroke="#000" stroke-width="3"/>
  <rect x="62" y="122" width="26" height="10" rx="3" fill="#ff7043" stroke="#000" stroke-width="3"/>
  
  <rect x="38" y="58" width="48" height="45" rx="8" fill="#546e7a" stroke="#000" stroke-width="3.5"/>
  <rect x="44" y="66" width="36" height="14" fill="#ffb300" stroke="#000" stroke-width="2"/>
  <line x1="48" y1="66" x2="56" y2="80" stroke="#000" stroke-width="3"/>
  <line x1="60" y1="66" x2="68" y2="80" stroke="#000" stroke-width="3"/>
  <line x1="72" y1="66" x2="80" y2="80" stroke="#000" stroke-width="3"/>
  
  <rect x="40" y="24" width="44" height="34" rx="6" fill="#37474f" stroke="#000" stroke-width="3.5"/>
  <rect x="46" y="30" width="32" height="18" rx="4" fill="#00e5ff" stroke="#000" stroke-width="2.5"/>
  <circle cx="62" cy="39" r="6" fill="#ff1744" stroke="#000" stroke-width="2"/>
  <circle cx="63.5" cy="37.5" r="2" fill="#ffffff"/>
  
  <line x1="62" y1="24" x2="62" y2="10" stroke="#000" stroke-width="3"/>
  <circle cx="62" cy="8" r="5" fill="#ffea00" stroke="#000" stroke-width="2"/>
  
  <path d="M42 70 Q24 72 16 66" stroke="#37474f" stroke-width="10" stroke-linecap="round"/>
  <path d="M16 60 Q8 62 10 72" stroke="#ff7043" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <path d="M16 76 Q8 74 10 64" stroke="#ff7043" stroke-width="4.5" fill="none" stroke-linecap="round"/>
</svg>
`;

const TROJAN_PHANTOM_SVG = `
<svg viewBox="0 0 120 140" width="120" height="140" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="60" cy="134" rx="35" ry="6" fill="#000" opacity="0.4"/>
  <path d="M40 50 C25 80 35 125 45 130 C55 125 65 130 75 125 C85 130 95 120 80 50 Z" fill="#4a148c" stroke="#000" stroke-width="3.5"/>
  <path d="M48 65 Q60 120 72 65" fill="#6a1b9a" stroke="#000" stroke-width="2.5"/>
  
  <path d="M36 45 C32 18 88 18 84 45 C86 65 34 65 36 45 Z" fill="#311b92" stroke="#000" stroke-width="3.5"/>
  <polygon points="36,26 24,10 42,20" fill="#e040fb" stroke="#000" stroke-width="2.5"/>
  <polygon points="84,26 96,10 78,20" fill="#e040fb" stroke="#000" stroke-width="2.5"/>
  
  <ellipse cx="60" cy="46" rx="18" ry="14" fill="#000000" stroke="#e040fb" stroke-width="2.5"/>
  <ellipse cx="53" cy="45" rx="5" ry="4" fill="#ff1744"/>
  <ellipse cx="67" cy="45" rx="5" ry="4" fill="#ff1744"/>
  <circle cx="54" cy="44" r="1.5" fill="#ffffff"/>
  <circle cx="68" cy="44" r="1.5" fill="#ffffff"/>
  
  <path d="M42 66 Q24 64 12 60" stroke="#4a148c" stroke-width="9" stroke-linecap="round"/>
  <circle cx="10" cy="60" r="4" fill="#e040fb" stroke="#000" stroke-width="2"/>
  <line x1="10" y1="56" x2="2" y2="52" stroke="#e040fb" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="60" x2="1" y2="60" stroke="#e040fb" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="64" x2="3" y2="67" stroke="#e040fb" stroke-width="3" stroke-linecap="round"/>
</svg>
`;

// --- 2. CURATED 10-QUESTION PURE ENGLISH IT DATABASE (30 Total) ---
const vocabularyData = {
    hardwareBase: {
        // Steps 1-3 (Easy)
        easy: [
            {
                word: "Mouse",
                phonetic: "/maʊs/ (n.)",
                sentence: "Move the ______ to point and click items on the screen.",
                collocation: "wireless mouse, click the mouse, mouse pointer",
                correctMain: "Mouse",
                wrongMain: "Keyboard",
                tip: "A primary hand-held pointing device used to manipulate screen GUI objects."
            },
            {
                word: "Screen",
                phonetic: "/skriːn/ (n.)",
                sentence: "Look at the ______ to view your open windows and documents.",
                collocation: "touch screen, computer screen, split screen",
                correctMain: "Screen",
                wrongMain: "Speaker",
                tip: "The visual display surface of a monitor that presents graphics and data."
            },
            {
                word: "Cable",
                phonetic: "/ˈkeɪ.bəl/ (n.)",
                sentence: "Connect the power ______ from the wall socket to the PC.",
                collocation: "power cable, HDMI cable, network cable",
                correctMain: "Cable",
                wrongMain: "Port",
                tip: "An insulated wire or bundle of optical fibers transmitting electricity or data."
            }
        ],
        // Steps 4-7 (Medium)
        medium: [
            {
                word: "Server",
                phonetic: "/ˈsɜː.vər/ (n.)",
                sentence: "The web ______ handles requests from thousands of users at once.",
                collocation: "cloud server, web server, server down",
                correctMain: "Server",
                wrongMain: "Router",
                tip: "A centralized computer system providing data, resources, and services to clients."
            },
            {
                word: "Router",
                phonetic: "/ˈruː.tər/ (n.)",
                sentence: "Restart the Wi-Fi ______ if your office internet is not working.",
                collocation: "wireless router, configure router, restart router",
                correctMain: "Router",
                wrongMain: "Printer",
                tip: "A networking device that forwards data packets between computer networks."
            },
            {
                word: "Storage",
                phonetic: "/ˈstɔː.rɪdʒ/ (n.)",
                sentence: "You need more disk ______ before downloading large video files.",
                collocation: "storage capacity, cloud storage, external storage",
                correctMain: "Storage",
                wrongMain: "Memory",
                tip: "Non-volatile computer media (SSD/HDD) retaining digital files permanently."
            },
            {
                word: "Memory",
                phonetic: "/ˈmem.ər.i/ (n.)",
                sentence: "Upgrading your computer's RAM ______ will speed up multitasking performance.",
                collocation: "RAM memory, memory capacity, low memory warning",
                correctMain: "Memory",
                wrongMain: "Hard Drive",
                tip: "High-speed volatile RAM storing temporary data actively processed by CPU."
            }
        ],
        // Steps 8-10 (Hard)
        hard: [
            {
                word: "Motherboard",
                phonetic: "/ˈmʌð.ə.bɔːd/ (n.)",
                sentence: "The CPU and RAM chips are mounted directly onto the main ______.",
                collocation: "ATX motherboard, motherboard chipset, circuit board",
                correctMain: "Motherboard",
                wrongMain: "Graphics Card",
                tip: "The main printed circuit board (PCB) connecting all core hardware components."
            },
            {
                word: "Bandwidth",
                phonetic: "/ˈbænd.wɪtθ/ (n.)",
                sentence: "Streaming 4K video requires high internet ______ to avoid stuttering.",
                collocation: "high bandwidth, bandwidth limit, consume bandwidth",
                correctMain: "Bandwidth",
                wrongMain: "Resolution",
                tip: "The maximum capacity and data transfer rate across a network connection per second."
            },
            {
                word: "Latency",
                phonetic: "/ˈleɪ.tən.si/ (n.)",
                sentence: "Online competitive gamers demand low network ______ for instant response.",
                collocation: "low latency, high latency, latency delay",
                correctMain: "Latency",
                wrongMain: "Frequency",
                tip: "The time delay (ping) between sending a network request and receiving a response."
            }
        ]
    },
    codingMatrix: {
        // Steps 1-3 (Easy)
        easy: [
            {
                word: "Bug",
                phonetic: "/bʌɡ/ (n.)",
                sentence: "The mobile app keeps crashing because there is a ______ in the code.",
                collocation: "fix a bug, report a bug, software bug",
                correctMain: "Bug",
                wrongMain: "Virus",
                tip: "An error, flaw, or fault in a software program that causes it to behave unexpectedly."
            },
            {
                word: "Loop",
                phonetic: "/luːp/ (n.)",
                sentence: "Write a for ______ to repeat this calculation 100 times automatically.",
                collocation: "infinite loop, for loop, loop through",
                correctMain: "Loop",
                wrongMain: "Break",
                tip: "A control structure that repeats a block of instructions while a condition is met."
            },
            {
                word: "Run",
                phonetic: "/rʌn/ (v.)",
                sentence: "Click the green play button to ______ your newly written program.",
                collocation: "run the script, run tests, run in background",
                correctMain: "Run",
                wrongMain: "Delete",
                tip: "To execute program instructions in the environment or runtime."
            }
        ],
        // Steps 4-7 (Medium)
        medium: [
            {
                word: "Variable",
                phonetic: "/ˈveə.ri.ə.bəl/ (n.)",
                sentence: "Declare a new ______ named 'score' to track the player's points.",
                collocation: "declare variable, local variable, assign variable",
                correctMain: "Variable",
                wrongMain: "Constant",
                tip: "A named storage location containing a value that can be modified during execution."
            },
            {
                word: "Function",
                phonetic: "/ˈfʌŋk.ʃən/ (n.)",
                sentence: "Create a reusable ______ that takes two numbers and returns their sum.",
                collocation: "call a function, define function, helper function",
                correctMain: "Function",
                wrongMain: "Comment",
                tip: "A modular, reusable block of code designed to perform a specific computational task."
            },
            {
                word: "Syntax",
                phonetic: "/ˈsɪn.tæks/ (n.)",
                sentence: "Forgetting to close the quotation mark caused a fatal ______ error.",
                collocation: "syntax error, valid syntax, syntax highlighting",
                correctMain: "Syntax",
                wrongMain: "Logic",
                tip: "The set of structural rules defining valid combinations of symbols in a language."
            },
            {
                word: "Compile",
                phonetic: "/kəmˈpaɪl/ (v.)",
                sentence: "You must ______ your C++ code into machine language before execution.",
                collocation: "compile code, compiler, compile time",
                correctMain: "Compile",
                wrongMain: "Debug",
                tip: "To transform human-readable source code into machine-executable binary."
            }
        ],
        // Steps 8-10 (Hard)
        hard: [
            {
                word: "Algorithm",
                phonetic: "/ˈæl.ɡə.rɪð.əm/ (n.)",
                sentence: "Google's ranking ______ determines which websites appear first in search results.",
                collocation: "search algorithm, efficient algorithm, machine learning algorithm",
                correctMain: "Algorithm",
                wrongMain: "Database",
                tip: "A finite step-by-step sequence of instructions to solve a computational problem."
            },
            {
                word: "Deployment",
                phonetic: "/dɪˈplɔɪ.mənt/ (n.)",
                sentence: "Automated continuous ______ allows engineers to release updates daily.",
                collocation: "production deployment, deploy code, deployment pipeline",
                correctMain: "Deployment",
                wrongMain: "Prototyping",
                tip: "The process of packaging, testing, and distributing software to production servers."
            },
            {
                word: "Inheritance",
                phonetic: "/ɪnˈher.ɪ.təns/ (n.)",
                sentence: "In object-oriented programming, ______ allows a child class to reuse parent methods.",
                collocation: "class inheritance, multiple inheritance, inherit properties",
                correctMain: "Inheritance",
                wrongMain: "Encapsulation",
                tip: "OOP mechanism allowing a subclass to acquire properties and methods of a parent class."
            }
        ]
    },
    cyberCloud: {
        // Steps 1-3 (Easy)
        easy: [
            {
                word: "Password",
                phonetic: "/ˈpɑːs.wɜːd/ (n.)",
                sentence: "Create a strong ______ containing symbols, numbers, and capital letters.",
                collocation: "strong password, reset password, change password",
                correctMain: "Password",
                wrongMain: "Username",
                tip: "A secret string of characters used for user authentication and access control."
            },
            {
                word: "Lock",
                phonetic: "/lɒk/ (v.)",
                sentence: "Always ______ your computer screen whenever you step away from your desk.",
                collocation: "lock the screen, lock account, screen lock",
                correctMain: "Lock",
                wrongMain: "Share",
                tip: "Securing an active workstation session from unauthorized physical access (e.g. Win + L)."
            },
            {
                word: "Cloud",
                phonetic: "/klaʊd/ (n.)",
                sentence: "Upload your backup files to the ______ so you can access them anywhere.",
                collocation: "cloud storage, cloud computing, in the cloud",
                correctMain: "Cloud",
                wrongMain: "Hard Disk",
                tip: "A network of remote internet servers hosting, managing, and processing data."
            }
        ],
        // Steps 4-7 (Medium)
        medium: [
            {
                word: "Firewall",
                phonetic: "/ˈfaɪə.wɔːl/ (n.)",
                sentence: "The corporate ______ blocks unauthorized traffic and cyber attacks.",
                collocation: "enable firewall, firewall rules, hardware firewall",
                correctMain: "Firewall",
                wrongMain: "Antivirus",
                tip: "A network security system monitoring and filtering incoming and outgoing network traffic."
            },
            {
                word: "Backup",
                phonetic: "/ˈbæk.ʌp/ (n.)",
                sentence: "We schedule an automated weekly ______ of the database to prevent data loss.",
                collocation: "data backup, backup server, restore from backup",
                correctMain: "Backup",
                wrongMain: "Format",
                tip: "A duplicate copy of digital data stored separately for disaster recovery."
            },
            {
                word: "Update",
                phonetic: "/ʌpˈdeɪt/ (v./n.)",
                sentence: "Make sure to install the latest security ______ to patch dangerous bugs.",
                collocation: "security update, software update, update system",
                correctMain: "Update",
                wrongMain: "Downgrade",
                tip: "A software patch that fixes security vulnerabilities and improves software stability."
            },
            {
                word: "Phishing",
                phonetic: "/ˈfɪʃ.ɪŋ/ (n.)",
                sentence: "Never click links in suspicious emails that mimic PayPal in a fake ______ attempt.",
                collocation: "phishing scam, phishing email, spear phishing",
                correctMain: "Phishing",
                wrongMain: "Troubleshooting",
                tip: "Social engineering fraud where attackers deceive victims into revealing credentials."
            }
        ],
        // Steps 8-10 (Hard)
        hard: [
            {
                word: "Encryption",
                phonetic: "/ɪnˈkrɪp.ʃən/ (n.)",
                sentence: "End-to-end ______ ensures that only the sender and recipient can read the chat.",
                collocation: "data encryption, SSL encryption, strong encryption",
                correctMain: "Encryption",
                wrongMain: "Decryption",
                tip: "Converting plaintext into secure ciphertext unreadable without a decryption key."
            },
            {
                word: "Vulnerability",
                phonetic: "/ˌvʌl.nər.əˈbɪl.ə.ti/ (n.)",
                sentence: "White-hat hackers discovered a critical zero-day ______ in the web browser.",
                collocation: "security vulnerability, patch vulnerability, exploit vulnerability",
                correctMain: "Vulnerability",
                wrongMain: "Feature",
                tip: "A system flaw or software weakness that can be exploited by threat actors."
            },
            {
                word: "Authentication",
                phonetic: "/ɔːˌθen.tɪˈkeɪ.ʃən/ (n.)",
                sentence: "Multi-factor ______ requires both a password and an SMS code to verify identity.",
                collocation: "two-factor authentication, user authentication, biometric authentication",
                correctMain: "Authentication",
                wrongMain: "Authorization",
                tip: "The process of verifying that an entity or user is who they claim to be."
            }
        ]
    }
};

// --- 3. GAME STATE VARIABLES ---
let currentMap = '';
let currentStep = 0; // Steps 0 to 9 (10 steps)
let currentHearts = 3;
let score = 0;
let currentQuestion = null;
let isAnimating = false;

// High scores
let highScores = {
    hardwareBase: 0,
    codingMatrix: 0,
    cyberCloud: 0
};

// Decks for non-repeating play per run
let sessionPool = {
    easy: [],
    medium: [],
    hard: []
};

// Persistent Learned Vocab
let learnedVocab = JSON.parse(localStorage.getItem('wos_learned_vocab') || '[]');

// Utility: Fisher-Yates Shuffle
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// UI Elements Map
const screens = {};
const ui = {};

function init() {
    // Cache Screens
    screens.mainMenu = document.getElementById('main-menu');
    screens.game = document.getElementById('game-screen');
    screens.result = document.getElementById('result-screen');
    screens.notebook = document.getElementById('notebook-screen');
    screens.knowledgeModal = document.getElementById('knowledge-modal');
    screens.pauseModal = document.getElementById('pause-modal');

    // Cache UI Controls
    ui.menuBtn = document.getElementById('menu-btn');
    ui.closePauseBtn = document.getElementById('close-pause-btn');
    ui.resumeGameBtn = document.getElementById('resume-game-btn');
    ui.restartGameBtn = document.getElementById('restart-game-btn');
    ui.quitGameBtn = document.getElementById('quit-game-btn');
    ui.score = document.getElementById('score-display');
    ui.hearts = document.getElementById('hearts-display');
    ui.mapName = document.getElementById('map-name-badge');
    ui.character = document.getElementById('character');
    ui.enemy = document.getElementById('enemy');
    ui.battleArea = document.getElementById('battle-area');
    ui.progressBar = document.getElementById('progress-bar');
    ui.phase = document.getElementById('phase-display');
    ui.sentence = document.getElementById('sentence-display');
    
    ui.optBtn1 = document.getElementById('option-1');
    ui.optBtn2 = document.getElementById('option-2');
    ui.optMain1 = document.getElementById('opt-main-1');
    ui.optMain2 = document.getElementById('opt-main-2');

    // Modal UI
    ui.capsuleBadge = document.getElementById('capsule-badge');
    ui.capsuleWord = document.getElementById('capsule-word');
    ui.capsulePhonetic = document.getElementById('capsule-phonetic');
    ui.capsuleSentenceText = document.getElementById('capsule-sentence-text');
    ui.capsuleCollocationText = document.getElementById('capsule-collocation-text');
    ui.capsuleTip = document.getElementById('capsule-tip');
    ui.capsuleContinueBtn = document.getElementById('capsule-continue-btn');

    // Result UI
    ui.resultTitle = document.getElementById('result-title');
    ui.resultMessage = document.getElementById('result-message');
    ui.finalScore = document.getElementById('final-score');
    ui.backToMenuBtn = document.getElementById('back-to-menu-btn');
    ui.resultNotebookBtn = document.getElementById('result-notebook-btn');

    // Notebook UI
    ui.vocabList = document.getElementById('vocab-list');
    ui.openNotebookBtn = document.getElementById('open-notebook-btn');
    ui.closeNotebookBtn = document.getElementById('close-notebook-btn');

    // Load High Scores
    const savedScores = localStorage.getItem('wos_high_scores');
    if (savedScores) {
        try {
            highScores = JSON.parse(savedScores);
            document.getElementById('score-hardwareBase').innerText = `High Score: ${highScores.hardwareBase || 0}`;
            document.getElementById('score-codingMatrix').innerText = `High Score: ${highScores.codingMatrix || 0}`;
            document.getElementById('score-cyberCloud').innerText = `High Score: ${highScores.cyberCloud || 0}`;
        } catch (e) {}
    }

    // Spawn Hero Graphic
    ui.character.innerHTML = HERO_SVG;

    // Attach Event Listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Map Selection
    document.querySelectorAll('.map-btn[data-map]').forEach(btn => {
        btn.addEventListener('click', () => {
            startGame(btn.dataset.map);
        });
    });

    // Options Click
    ui.optBtn1.addEventListener('click', () => handleChoice(ui.optBtn1));
    ui.optBtn2.addEventListener('click', () => handleChoice(ui.optBtn2));

    // In-Game Hamburger Menu / Pause Modal Listeners
    if (ui.menuBtn) {
        ui.menuBtn.addEventListener('click', () => {
            screens.pauseModal.classList.remove('hidden');
        });
    }

    if (ui.closePauseBtn) {
        ui.closePauseBtn.addEventListener('click', () => {
            screens.pauseModal.classList.add('hidden');
        });
    }

    if (ui.resumeGameBtn) {
        ui.resumeGameBtn.addEventListener('click', () => {
            screens.pauseModal.classList.add('hidden');
        });
    }

    if (ui.restartGameBtn) {
        ui.restartGameBtn.addEventListener('click', () => {
            screens.pauseModal.classList.add('hidden');
            screens.knowledgeModal.classList.add('hidden');
            startGame(currentMap);
        });
    }

    if (ui.quitGameBtn) {
        ui.quitGameBtn.addEventListener('click', () => {
            screens.pauseModal.classList.add('hidden');
            screens.knowledgeModal.classList.add('hidden');
            showScreen('mainMenu');
        });
    }

    // Modal Continue
    ui.capsuleContinueBtn.addEventListener('click', () => {
        screens.knowledgeModal.classList.add('hidden');
        checkGameState();
    });

    // Result Buttons
    ui.backToMenuBtn.addEventListener('click', () => {
        showScreen('mainMenu');
    });

    ui.resultNotebookBtn.addEventListener('click', () => {
        showNotebook(currentMap || 'all');
    });

    // Notebook Screen
    ui.openNotebookBtn.addEventListener('click', () => {
        showNotebook('all');
    });

    ui.closeNotebookBtn.addEventListener('click', () => {
        showScreen('mainMenu');
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderNotebookList(btn.dataset.filter);
        });
    });
}

function showScreen(screenKey) {
    Object.values(screens).forEach(scr => {
        if (scr && scr !== screens.knowledgeModal && scr !== screens.pauseModal) {
            scr.classList.add('hidden');
        }
    });
    if (screens[screenKey]) {
        screens[screenKey].classList.remove('hidden');
    }
}

// --- 4. GAME ENGINE LOGIC ---
function startGame(mapId) {
    currentMap = mapId;
    currentStep = 0;
    currentHearts = 3;
    score = 0;
    currentQuestion = null;
    isAnimating = false;

    screens.game.dataset.theme = mapId;

    const mapNames = {
        hardwareBase: "🖥️ Hardware Base",
        codingMatrix: "💻 Coding Matrix",
        cyberCloud: "☁️ Cyber Cloud"
    };
    ui.mapName.innerText = mapNames[mapId] || "Mission";

    // Set Up Non-repeating Decks (3 easy + 4 medium + 3 hard = 10 questions)
    sessionPool = {
        easy: shuffle(vocabularyData[mapId].easy),
        medium: shuffle(vocabularyData[mapId].medium),
        hard: shuffle(vocabularyData[mapId].hard)
    };

    spawnEnemy();
    updateUI();
    showScreen('game');

    setTimeout(() => {
        nextQuestion();
    }, 200);
}

function spawnEnemy() {
    const enemyWrapper = ui.enemy.parentElement;
    enemyWrapper.style.transform = `translateX(0)`;
    screens.game.classList.remove('enemy-hit', 'enemy-attack', 'hero-shoot', 'screen-shake', 'danger-flash');

    if (currentMap === 'hardwareBase') {
        ui.enemy.innerHTML = MECHA_BOT_SVG;
    } else if (currentMap === 'codingMatrix') {
        ui.enemy.innerHTML = ZOMBIE_SVG;
    } else {
        ui.enemy.innerHTML = TROJAN_PHANTOM_SVG;
    }
}

function updateUI() {
    ui.score.innerText = score.toLocaleString();
    ui.hearts.innerText = currentHearts;

    const progressPct = Math.min(100, Math.max(10, ((currentStep + 1) / 10) * 100));
    ui.progressBar.style.width = `${progressPct}%`;
}

function nextQuestion() {
    resetOptionButtonStyles();

    // Determine Phase based on Step
    let phase = 'easy';
    let phaseText = `Step ${currentStep + 1}/10 (Easy +500)`;

    if (currentStep >= 3 && currentStep <= 6) {
        phase = 'medium';
        phaseText = `Step ${currentStep + 1}/10 (Medium +1,000)`;
    } else if (currentStep >= 7) {
        phase = 'hard';
        phaseText = `Step ${currentStep + 1}/10 (Hard +2,000)`;
    }

    ui.phase.innerText = phaseText;

    // Refill gracefully if player had mistakes and exhausted the pool
    if (!sessionPool[phase] || sessionPool[phase].length === 0) {
        const remaining = vocabularyData[currentMap][phase].filter(q => !currentQuestion || q.word !== currentQuestion.word);
        sessionPool[phase] = shuffle(remaining);
    }

    currentQuestion = sessionPool[phase].pop();

    // Render sentence with highlighted blank box
    const formattedSentence = currentQuestion.sentence.replace('______', '<span class="blank-box">______</span>');
    ui.sentence.innerHTML = formattedSentence;

    // Randomize option placements (Left or Right)
    const correctFirst = Math.random() < 0.5;
    if (correctFirst) {
        ui.optMain1.innerText = currentQuestion.correctMain;
        ui.optBtn1.dataset.correct = "true";

        ui.optMain2.innerText = currentQuestion.wrongMain;
        ui.optBtn2.dataset.correct = "false";
    } else {
        ui.optMain1.innerText = currentQuestion.wrongMain;
        ui.optBtn1.dataset.correct = "false";

        ui.optMain2.innerText = currentQuestion.correctMain;
        ui.optBtn2.dataset.correct = "true";
    }

    recordLearnedWord(currentQuestion, currentMap);
}

function resetOptionButtonStyles() {
    ui.optBtn1.classList.remove('pressed');
    ui.optBtn2.classList.remove('pressed');
    ui.optBtn1.disabled = false;
    ui.optBtn2.disabled = false;
}

function handleChoice(selectedBtn) {
    if (isAnimating) return;
    isAnimating = true;

    selectedBtn.classList.add('pressed');
    ui.optBtn1.disabled = true;
    ui.optBtn2.disabled = true;

    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        // Hero Shoot Animation & Laser Beam
        screens.game.classList.add('hero-shoot');
        spawnLaserBolt();

        setTimeout(() => {
            screens.game.classList.add('enemy-hit');
            spawnHitSpark();

            // Calculate & Award Score
            let awarded = 500;
            if (currentStep >= 3 && currentStep <= 6) awarded = 1000;
            else if (currentStep >= 7) awarded = 2000;
            
            score += awarded;
            spawnScorePopup(`+${awarded.toLocaleString()} PTS!`);
            currentStep++;
            updateUI();

            setTimeout(() => {
                showKnowledgeModal(true);
            }, 550);
        }, 180);

    } else {
        // Wrong Answer Sequence
        screens.game.classList.add('screen-shake', 'danger-flash', 'enemy-attack');

        currentHearts--;
        
        // Penalty step setback
        if (currentStep >= 7) currentStep = Math.max(0, currentStep - 2);
        else currentStep = Math.max(0, currentStep - 1);

        updateUI();

        // Advance Monster closer towards Hero
        const enemyWrapper = ui.enemy.parentElement;
        const pushDistance = (3 - currentHearts) * 22;
        enemyWrapper.style.transform = `translateX(-${pushDistance}px)`;

        setTimeout(() => {
            showKnowledgeModal(false);
        }, 550);
    }
}

// --- Dynamic Visual FX Generators ---
function spawnLaserBolt() {
    const bolt = document.createElement('div');
    bolt.className = 'laser-bolt';
    ui.battleArea.appendChild(bolt);
    setTimeout(() => bolt.remove(), 350);
}

function spawnHitSpark() {
    const spark = document.createElement('div');
    spark.className = 'hit-spark';
    ui.battleArea.appendChild(spark);
    setTimeout(() => spark.remove(), 400);
}

function spawnScorePopup(text) {
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.innerText = text;
    ui.battleArea.appendChild(popup);
    setTimeout(() => popup.remove(), 850);
}

function showKnowledgeModal(wasCorrect) {
    if (wasCorrect) {
        ui.capsuleBadge.innerText = "CORRECT!";
        ui.capsuleBadge.className = "capsule-badge badge-correct";
    } else {
        ui.capsuleBadge.innerText = "INCORRECT!";
        ui.capsuleBadge.className = "capsule-badge badge-wrong";
    }

    ui.capsuleWord.innerText = currentQuestion.word;
    ui.capsulePhonetic.innerText = currentQuestion.phonetic;
    ui.capsuleSentenceText.innerText = `"${currentQuestion.sentence.replace('______', currentQuestion.word)}"`;
    ui.capsuleCollocationText.innerText = currentQuestion.collocation;
    ui.capsuleTip.innerText = `💡 Pro Tip: ${currentQuestion.tip}`;

    screens.knowledgeModal.classList.remove('hidden');
}

function checkGameState() {
    if (currentHearts <= 0) {
        // Game Over
        ui.resultTitle.innerText = "MISSION FAILED";
        ui.resultTitle.style.color = "#ff5252";
        ui.resultMessage.innerText = "System corrupted by malware! Review vocabulary and try again.";
        ui.finalScore.innerText = `SCORE: ${score.toLocaleString()}`;
        saveHighScore();
        showScreen('result');
        isAnimating = false;
    } else if (currentStep >= 10) {
        // Victory Clear
        ui.resultTitle.innerText = "STAGE CLEARED!";
        ui.resultTitle.style.color = "#76ff03";
        ui.resultMessage.innerText = "Outstanding! You survived all 10 stages successfully.";
        ui.finalScore.innerText = `SCORE: ${score.toLocaleString()}`;
        saveHighScore();
        showScreen('result');
        isAnimating = false;
    } else {
        // Continue Next Question
        screens.game.classList.remove('enemy-hit', 'enemy-attack', 'hero-shoot', 'screen-shake', 'danger-flash');
        nextQuestion();
        isAnimating = false;
    }
}

function saveHighScore() {
    if (score > (highScores[currentMap] || 0)) {
        highScores[currentMap] = score;
        localStorage.setItem('wos_high_scores', JSON.stringify(highScores));
        const el = document.getElementById(`score-${currentMap}`);
        if (el) el.innerText = `High Score: ${score.toLocaleString()}`;
    }
}

function recordLearnedWord(q, map) {
    const exists = learnedVocab.some(item => item.word === q.word);
    if (!exists) {
        learnedVocab.push({
            word: q.word,
            phonetic: q.phonetic,
            sentence: q.sentence.replace('______', q.word),
            collocation: q.collocation,
            tip: q.tip,
            map: map,
            timestamp: Date.now()
        });
        localStorage.setItem('wos_learned_vocab', JSON.stringify(learnedVocab));
    }
}

// --- 5. VOCAB NOTEBOOK SYSTEM ---
function showNotebook(filterMap) {
    showScreen('notebook');
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === filterMap) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderNotebookList(filterMap);
}

function renderNotebookList(filter) {
    ui.vocabList.innerHTML = '';

    let filtered = learnedVocab;
    if (filter && filter !== 'all') {
        filtered = learnedVocab.filter(item => item.map === filter);
    }

    if (filtered.length === 0) {
        ui.vocabList.innerHTML = `
            <div style="text-align:center; padding: 40px 20px; color:#78909c;">
                <p style="font-size:2.5rem; margin-bottom:10px;">📖</p>
                <p style="font-size:1rem; font-weight:700;">No vocabulary saved in this category yet.<br>Play a server to unlock vocabulary cards!</p>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        card.innerHTML = `
            <div class="vocab-card-header">
                <span class="vocab-word-title">${item.word}</span>
                <span style="font-size:0.85rem; color:#90a4ae; font-weight:700;">${item.phonetic}</span>
            </div>
            <div style="font-size:0.9rem; background:rgba(0, 229, 255, 0.08); border-left:3px solid #00e5ff; padding:6px 10px; border-radius:0 10px 10px 0; color:#e0f7fa;">
                📝 "${item.sentence}"
            </div>
            <div style="font-size:0.85rem; color:#fff59d; background:rgba(255, 214, 0, 0.08); border-left:3px solid #ffd600; padding:4px 8px; border-radius:0 8px 8px 0;">
                ⚡ Collocation: ${item.collocation}
            </div>
            <div style="font-size:0.82rem; color:#b0bec5; padding:0 4px;">
                💡 ${item.tip || ''}
            </div>
        `;

        ui.vocabList.appendChild(card);
    });
}

// Start Game on DOM Ready
document.addEventListener('DOMContentLoaded', init);