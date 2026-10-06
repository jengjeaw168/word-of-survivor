// Vocabulary Data
const vocabularyData = {
    hardwareBase: {
        easy: [
            { word: "Mouse", correct: "เมาส์", wrong: "คีย์บอร์ด" },
            { word: "Screen", correct: "หน้าจอ", wrong: "ลำโพง" },
            { word: "Wire", correct: "สายไฟ", wrong: "แบตเตอรี่" },
            { word: "Port", correct: "ช่องเสียบ", wrong: "ปุ่มกด" },
            { word: "Disk", correct: "แผ่นดิสก์", wrong: "แฟลชไดร์ฟ" },
            { word: "Board", correct: "แผงวงจร", wrong: "เคสคอมพิวเตอร์" },
            { word: "Cable", correct: "สายเคเบิล", wrong: "ปลั๊กไฟ" },
            { word: "Key", correct: "ปุ่มพิมพ์", wrong: "รหัสผ่าน" }
        ],
        medium: [
            { word: "Server", correct: "เครื่องเซิร์ฟเวอร์", wrong: "เร้าเตอร์" },
            { word: "Network", correct: "เครือข่าย", wrong: "โปรแกรม" },
            { word: "Storage", correct: "พื้นที่จัดเก็บ", wrong: "หน่วยประมวลผล" },
            { word: "Router", correct: "อุปกรณ์กระจายสัญญาณ", wrong: "เครื่องพิมพ์" },
            { word: "Memory", correct: "หน่วยความจำ", wrong: "ตัวประมวลผล" },
            { word: "Switch", correct: "สวิตช์เครือข่าย", wrong: "เซ็นเซอร์" },
            { word: "Hardware", correct: "ฮาร์ดแวร์", wrong: "ซอฟต์แวร์" }
        ],
        hard: [
            { word: "Motherboard", correct: "แผงวงจรหลัก", wrong: "การ์ดจอ" },
            { word: "Processor", correct: "หน่วยประมวลผลกลาง", wrong: "หน่วยความจำชั่วคราว" },
            { word: "Bandwidth", correct: "ความกว้างช่องสัญญาณ", wrong: "ความเร็วรอบดิสก์" },
            { word: "Peripheral", correct: "อุปกรณ์ต่อพ่วง", wrong: "อุปกรณ์เสริม" },
            { word: "Architecture", correct: "สถาปัตยกรรมคอมพิวเตอร์", wrong: "โครงสร้างข้อมูล" },
            { word: "Latency", correct: "ความหน่วง", wrong: "ความถี่" }
        ]
    },
    codingMatrix: {
        easy: [
            { word: "Code", correct: "โค้ด", wrong: "ข้อความ" },
            { word: "Bug", correct: "ข้อผิดพลาด", wrong: "ไวรัส" },
            { word: "Loop", correct: "วนซ้ำ", wrong: "ข้ามผ่าน" },
            { word: "Tag", correct: "แท็ก", wrong: "ป้ายกำกับ" },
            { word: "Run", correct: "รันโปรแกรม", wrong: "ปิดโปรแกรม" },
            { word: "File", correct: "ไฟล์", wrong: "โฟลเดอร์" }
        ],
        medium: [
            { word: "Variable", correct: "ตัวแปร", wrong: "ค่าคงที่" },
            { word: "Function", correct: "ฟังก์ชัน", wrong: "คำสั่ง" },
            { word: "Syntax", correct: "ไวยากรณ์", wrong: "รูปแบบ" },
            { word: "Compile", correct: "คอมไพล์", wrong: "ดีบัก" },
            { word: "String", correct: "ข้อความสตริง", wrong: "ตัวเลข" },
            { word: "Array", correct: "อาร์เรย์", wrong: "ออบเจกต์" },
            { word: "Output", correct: "ผลลัพธ์", wrong: "ข้อมูลนำเข้า" }
        ],
        hard: [
            { word: "Algorithm", correct: "อัลกอริทึม", wrong: "โครงสร้างข้อมูล" },
            { word: "Framework", correct: "เฟรมเวิร์ก", wrong: "ไลบรารี" },
            { word: "Inheritance", correct: "การสืบทอด", wrong: "การห่อหุ้ม" },
            { word: "Polymorphism", correct: "พหุสัณฐาน", wrong: "นามธรรม" },
            { word: "Deployment", correct: "การนำไปใช้งานจริง", wrong: "การทดสอบระบบ" }
        ]
    },
    cyberCloud: {
        easy: [
            { word: "Cloud", correct: "คลาวด์", wrong: "เซิร์ฟเวอร์" },
            { word: "Lock", correct: "ล็อค", wrong: "ปลดล็อค" },
            { word: "User", correct: "ผู้ใช้งาน", wrong: "ผู้ดูแลระบบ" },
            { word: "Safe", correct: "ปลอดภัย", wrong: "อันตราย" },
            { word: "Web", correct: "เว็บไซต์", wrong: "เครือข่าย" },
            { word: "Data", correct: "ข้อมูล", wrong: "สารสนเทศ" }
        ],
        medium: [
            { word: "Password", correct: "รหัสผ่าน", wrong: "ชื่อผู้ใช้" },
            { word: "Hacker", correct: "แฮกเกอร์", wrong: "โปรแกรมเมอร์" },
            { word: "Backup", correct: "สำรองข้อมูล", wrong: "กู้คืนข้อมูล" },
            { word: "Update", correct: "อัปเดต", wrong: "ติดตั้ง" },
            { word: "Firewall", correct: "ไฟร์วอลล์", wrong: "แอนตี้ไวรัส" },
            { word: "Privacy", correct: "ความเป็นส่วนตัว", wrong: "ความปลอดภัย" }
        ],
        hard: [
            { word: "Encryption", correct: "การเข้ารหัส", wrong: "การถอดรหัส" },
            { word: "Vulnerability", correct: "ช่องโหว่", wrong: "ภัยคุกคาม" },
            { word: "Authentication", correct: "การยืนยันตัวตน", wrong: "การกำหนดสิทธิ์" },
            { word: "Malware", correct: "มัลแวร์", wrong: "สแปม" },
            { word: "Virtualization", correct: "การจำลองเสมือน", wrong: "การแบ่งพาร์ติชัน" }
        ]
    }
};

// Game State Variables
let currentMap = '';
let currentStep = 0; // Steps 0 to 10
let currentHearts = 3;
let score = 0;
let currentQuestion = null;
let isAnimating = false;

const enemies = ['👾', '🐛', '🤖', '👽', '💀'];

// DOM Elements
const screens = {
    mainMenu: document.getElementById('main-menu'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen')
};

const ui = {
    hearts: document.getElementById('hearts-display'),
    score: document.getElementById('score-display'),
    character: document.getElementById('character'),
    enemy: document.getElementById('enemy'),
    progressBar: document.getElementById('progress-bar'),
    phase: document.getElementById('phase-display'),
    word: document.getElementById('word-display'),
    options: [document.getElementById('option-1'), document.getElementById('option-2')],
    resultTitle: document.getElementById('result-title'),
    resultMessage: document.getElementById('result-message'),
    finalScore: document.getElementById('final-score')
};

// Initialization
function init() {
    loadHighScores();
    
    // Bind Events
    document.querySelectorAll('.map-btn').forEach(btn => {
        btn.addEventListener('click', () => startGame(btn.dataset.map));
    });

    ui.options.forEach((btn, index) => {
        btn.addEventListener('click', () => handleAnswer(index));
    });

    document.getElementById('back-to-menu-btn').addEventListener('click', showMainMenu);
    
    showScreen('mainMenu');
}

function loadHighScores() {
    ['hardwareBase', 'codingMatrix', 'cyberCloud'].forEach(map => {
        const highScore = localStorage.getItem(`wos_score_${map}`) || 0;
        document.getElementById(`score-${map}`).innerText = `High Score: ${highScore}`;
    });
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
}

function spawnEnemy() {
    ui.enemy.style.animation = 'none';
    ui.enemy.style.opacity = '1';
    ui.enemy.style.transform = 'translateY(0) rotate(0)';
    ui.enemy.innerText = enemies[Math.floor(Math.random() * enemies.length)];
}

function startGame(mapId) {
    currentMap = mapId;
    currentStep = 0;
    currentHearts = 3;
    score = 0;
    
    updateUI();
    spawnEnemy();
    
    showScreen('game');
    
    setTimeout(() => {
        nextQuestion();
    }, 300);
}

function updateUI() {
    ui.hearts.innerText = currentHearts;
    ui.score.innerText = score;
    ui.progressBar.style.width = `${(currentStep / 10) * 100}%`;
}

function nextQuestion() {
    if (currentStep >= 10 || currentHearts <= 0) return;
    
    ui.options.forEach(btn => {
        btn.classList.remove('wrong-btn', 'correct-btn');
        btn.disabled = false;
    });

    let phase = '';
    let phaseText = '';
    let wordList = [];

    if (currentStep <= 2) {
        phase = 'easy';
        phaseText = 'ระดับ: ง่าย (1-3)';
    } else if (currentStep <= 6) {
        phase = 'medium';
        phaseText = 'ระดับ: ปานกลาง (4-7)';
    } else {
        phase = 'hard';
        phaseText = 'ระดับ: ยาก (8-10)';
    }

    ui.phase.innerText = phaseText;
    
    wordList = vocabularyData[currentMap][phase];
    const randomIndex = Math.floor(Math.random() * wordList.length);
    currentQuestion = wordList[randomIndex];

    ui.word.innerText = currentQuestion.word;

    const correctFirst = Math.random() < 0.5;
    
    if (correctFirst) {
        ui.options[0].innerText = currentQuestion.correct;
        ui.options[0].dataset.correct = "true";
        ui.options[1].innerText = currentQuestion.wrong;
        ui.options[1].dataset.correct = "false";
    } else {
        ui.options[0].innerText = currentQuestion.wrong;
        ui.options[0].dataset.correct = "false";
        ui.options[1].innerText = currentQuestion.correct;
        ui.options[1].dataset.correct = "true";
    }
}

function handleAnswer(selectedIndex) {
    if (isAnimating) return;
    isAnimating = true;

    const selectedBtn = ui.options[selectedIndex];
    const isCorrect = selectedBtn.dataset.correct === "true";

    ui.options.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        selectedBtn.classList.add('correct-btn');
        
        // Character attack animation
        ui.character.style.animation = 'attackRight 0.3s ease';
        
        setTimeout(() => {
            // Enemy hit & die animation
            ui.enemy.style.animation = 'enemyHit 0.2s ease, enemyDie 0.5s ease 0.2s forwards';
            
            if (currentStep <= 2) score += 500;
            else if (currentStep <= 6) score += 1000;
            else score += 2000;
            
            currentStep++;
            updateUI();
            
            setTimeout(() => {
                ui.character.style.animation = 'none';
                if (currentStep < 10) spawnEnemy();
                checkGameState();
                isAnimating = false;
            }, 800);
        }, 150);

    } else {
        selectedBtn.classList.add('wrong-btn');
        ui.options.forEach(btn => {
            if (btn.dataset.correct === "true") btn.classList.add('correct-btn');
        });

        // Screen shake for taking damage
        screens.game.style.animation = 'shake 0.4s ease';

        currentHearts--;
        
        // Loss progress penalty
        let dropSteps = 1;
        if (currentStep >= 7) dropSteps = 2;
        currentStep = Math.max(0, currentStep - dropSteps);
        
        updateUI();

        setTimeout(() => {
            screens.game.style.animation = 'none';
            checkGameState();
            isAnimating = false;
        }, 1000);
    }
}

function checkGameState() {
    if (currentHearts <= 0) {
        endGame(false);
    } else if (currentStep >= 10) {
        endGame(true);
    } else {
        nextQuestion();
    }
}

function endGame(isWin) {
    saveHighScore();
    
    if (isWin) {
        ui.resultTitle.innerText = "🏆 System Cleared! 🏆";
        ui.resultTitle.style.color = "#FFD700";
        ui.resultMessage.innerText = "ยินดีด้วย! คุณกำจัดบั๊กทั้งหมดสำเร็จ";
    } else {
        ui.resultTitle.innerText = "☠️ System Failure ☠️";
        ui.resultTitle.style.color = "#FF0000";
        ui.resultMessage.innerText = "พลังชีวิตหมด... ระบบล่ม!";
    }
    
    ui.finalScore.innerText = `Final Score: ${score}`;
    
    setTimeout(() => {
        showScreen('result');
    }, 500);
}

function saveHighScore() {
    const key = `wos_score_${currentMap}`;
    const currentHigh = parseInt(localStorage.getItem(key)) || 0;
    if (score > currentHigh) {
        localStorage.setItem(key, score);
    }
}

function showMainMenu() {
    loadHighScores();
    showScreen('mainMenu');
}

// Start
document.addEventListener('DOMContentLoaded', init);
