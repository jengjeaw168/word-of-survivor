/* ==========================================================================
   WORD OF SURVIVOR - ARCADE RETRO SURVIVAL EDITION
   Complete Game Engine & Contextual IT Database (10 per map = 30 total)
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

// --- 2. ARCADE SYNTHESIZER AUDIO ENGINE (Zero External Downloads) ---
const AudioEngine = {
    ctx: null,
    muted: false,
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.ctx = new AudioContext();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },
    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    },
    playLaser() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.16);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.16);
    },
    playHit() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const bufferSize = Math.floor(this.ctx.sampleRate * 0.14);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.exponentialRampToValueAtTime(90, now + 0.14);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start(now);
    },
    playError() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.setValueAtTime(110, now + 0.1);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
    },
    playCoin() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc1 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(987.77, now);
        osc1.frequency.setValueAtTime(1318.51, now + 0.08);
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc1.connect(gain);
        gain.connect(this.ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.35);
    },
    playFanfare() {
        if (this.muted) return;
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const now = this.ctx.currentTime + idx * 0.1;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.3);
        });
    }
};

// --- 3. CURATED 10-QUESTION CONTEXTUAL IT DATABASE (30 Total) ---
const vocabularyData = {
    hardwareBase: {
        // Steps 1-3 (3 Questions)
        easy: [
            {
                word: "Mouse",
                phonetic: "/maʊs/ (n.)",
                sentence: "Move the ______ to point and click items on the screen.",
                sentenceAudio: "Move the mouse to point and click items on the screen.",
                hint: "ขยับ...เพื่อชี้และคลิกสิ่งต่างๆ บนหน้าจอคอมพิวเตอร์",
                collocation: "wireless mouse, click the mouse, mouse pointer",
                correctMain: "Mouse",
                correctSub: "เมาส์ (อุปกรณ์ชี้ตำแหน่ง)",
                wrongMain: "Keyboard",
                wrongSub: "คีย์บอร์ด (แป้นพิมพ์)",
                tip: "Mouse เป็นอุปกรณ์ Input พื้นฐาน ใช้เลื่อนเคอร์เซอร์และคลิกเลือกเมนู"
            },
            {
                word: "Screen",
                phonetic: "/skriːn/ (n.)",
                sentence: "Look at the ______ to view your open windows and documents.",
                sentenceAudio: "Look at the screen to view your open windows and documents.",
                hint: "มองดูที่...เพื่อรับชมหน้าต่างและเอกสารที่เปิดอยู่",
                collocation: "touch screen, computer screen, split screen",
                correctMain: "Screen",
                correctSub: "หน้าจอแสดงผล",
                wrongMain: "Speaker",
                wrongSub: "ลำโพงส่งสัญญาณเสียง",
                tip: "Screen คือจอแสดงผลหลักที่ส่งสัญญาณภาพให้ผู้ใช้งานมองเห็น"
            },
            {
                word: "Cable",
                phonetic: "/ˈkeɪ.bəl/ (n.)",
                sentence: "Connect the power ______ from the wall socket to the PC.",
                sentenceAudio: "Connect the power cable from the wall socket to the PC.",
                hint: "ต่อ...จ่ายพลังงานไฟฟ้าจากเต้ารับเข้าสู่ตัวเครื่องคอมพิวเตอร์",
                collocation: "power cable, HDMI cable, network cable",
                correctMain: "Cable",
                correctSub: "สายสัญญาณ / สายไฟ",
                wrongMain: "Port",
                wrongSub: "พอร์ตช่องเสียบ",
                tip: "Cable คือสายนำสัญญาณหรือสายไฟ มักใช้คู่กับกริยา connect หรือ plug in"
            }
        ],
        // Steps 4-7 (4 Questions)
        medium: [
            {
                word: "Server",
                phonetic: "/ˈsɜː.vər/ (n.)",
                sentence: "The web ______ handles requests from thousands of users at once.",
                sentenceAudio: "The web server handles requests from thousands of users at once.",
                hint: "เครื่อง...คอยรองรับคำขอใช้งานจากผู้ใช้นับพันคนพร้อมกัน",
                collocation: "cloud server, web server, server down",
                correctMain: "Server",
                correctSub: "เครื่องแม่ข่ายเซิร์ฟเวอร์",
                wrongMain: "Router",
                wrongSub: "เราเตอร์กระจายสัญญาณ",
                tip: "Server ทำหน้าที่ให้บริการข้อมูลและทรัพยากรแก่เครื่องลูกข่าย (Clients)"
            },
            {
                word: "Router",
                phonetic: "/ˈruː.tər/ (n.)",
                sentence: "Restart the Wi-Fi ______ if your office internet is not working.",
                sentenceAudio: "Restart the Wi-Fi router if your office internet is not working.",
                hint: "ลองรีสตาร์ทเครื่อง...หากสัญญาณอินเทอร์เน็ตที่ออฟฟิศใช้งานไม่ได้",
                collocation: "wireless router, configure router, restart router",
                correctMain: "Router",
                correctSub: "เราเตอร์กระจายสัญญาณเครือข่าย",
                wrongMain: "Printer",
                wrongSub: "เครื่องพิมพ์เอกสาร",
                tip: "Router คืออุปกรณ์เชื่อมต่อและจัดเส้นทางรับส่งข้อมูลในระบบอินเทอร์เน็ต"
            },
            {
                word: "Storage",
                phonetic: "/ˈstɔː.rɪdʒ/ (n.)",
                sentence: "You need more disk ______ before downloading large video files.",
                sentenceAudio: "You need more disk storage before downloading large video files.",
                hint: "คุณต้องเพิ่มพื้นที่...ในดิสก์ก่อนจะดาวน์โหลดไฟล์วิดีโอขนาดใหญ่",
                collocation: "storage capacity, cloud storage, external storage",
                correctMain: "Storage",
                correctSub: "พื้นที่จัดเก็บข้อมูลถาวร",
                wrongMain: "Memory",
                wrongSub: "หน่วยความจำชั่วคราว (RAM)",
                tip: "Storage คือพื้นที่เก็บไฟล์แบบถาวร (เช่น SSD/HDD) ต่างจาก RAM ที่เก็บชั่วคราว"
            },
            {
                word: "Memory",
                phonetic: "/ˈmem.ər.i/ (n.)",
                sentence: "Upgrading your computer's RAM ______ will speed up multitasking performance.",
                sentenceAudio: "Upgrading your computer's RAM memory will speed up multitasking performance.",
                hint: "การอัปเกรด...แรมช่วยให้เปิดหลายโปรแกรมพร้อมกันได้ไหลลื่นยิ่งขึ้น",
                collocation: "RAM memory, memory capacity, low memory warning",
                correctMain: "Memory",
                correctSub: "หน่วยความจำหลัก (RAM)",
                wrongMain: "Hard Drive",
                wrongSub: "ฮาร์ดไดรฟ์บันทึกข้อมูล",
                tip: "RAM คือหน่วยความจำความเร็วสูงที่ส่งต่อข้อมูลให้ CPU ใช้งานแบบเรียลไทม์"
            }
        ],
        // Steps 8-10 (3 Questions)
        hard: [
            {
                word: "Motherboard",
                phonetic: "/ˈmʌð.ə.bɔːd/ (n.)",
                sentence: "The CPU and RAM chips are mounted directly onto the main ______.",
                sentenceAudio: "The CPU and RAM chips are mounted directly onto the main motherboard.",
                hint: "ชิปประมวลผลซีพียูและแรมถูกติดตั้งอยู่บน...หลักของคอมพิวเตอร์",
                collocation: "ATX motherboard, motherboard chipset, circuit board",
                correctMain: "Motherboard",
                correctSub: "เมนบอร์ด (แผงวงจรหลัก)",
                wrongMain: "Graphics Card",
                wrongSub: "การ์ดจอแสดงผล",
                tip: "Motherboard เปรียบเหมือนกระดูกสันหลังที่เชื่อมต่อทุกชิ้นส่วนเข้าหากัน"
            },
            {
                word: "Bandwidth",
                phonetic: "/ˈbænd.wɪtθ/ (n.)",
                sentence: "Streaming 4K video requires high internet ______ to avoid stuttering.",
                sentenceAudio: "Streaming 4K video requires high internet bandwidth to avoid stuttering.",
                hint: "การสตรีมวิดีโอความละเอียด 4K ต้องใช้...อินเทอร์เน็ตที่กว้างพอเพื่อไม่ให้กระตุก",
                collocation: "high bandwidth, bandwidth limit, consume bandwidth",
                correctMain: "Bandwidth",
                correctSub: "ความกว้างช่องสัญญาณอินเทอร์เน็ต",
                wrongMain: "Resolution",
                wrongSub: "ความละเอียดของจอภาพ",
                tip: "Bandwidth คือปริมาณความจุข้อมูลสูงสุดที่สามารถถ่ายโอนผ่านเครือข่ายต่อวินาที"
            },
            {
                word: "Latency",
                phonetic: "/ˈleɪ.tən.si/ (n.)",
                sentence: "Online competitive gamers demand low network ______ for instant response.",
                sentenceAudio: "Online competitive gamers demand low network latency for instant response.",
                hint: "นักกีฬาอีสปอร์ตต้องการค่าความ...ของเครือข่ายที่ต่ำมากเพื่อให้ตอบสนองได้ทันที",
                collocation: "low latency, high latency, latency delay",
                correctMain: "Latency",
                correctSub: "ความหน่วง / ดีเลย์ของสัญญาณ (Ping)",
                wrongMain: "Frequency",
                wrongSub: "ความถี่ของสัญญาณวิทยุ",
                tip: "Latency (หรือ Ping) คือระยะเวลาที่ข้อมูลใช้เดินทางจากต้นทางไปยังปลายทาง"
            }
        ]
    },
    codingMatrix: {
        // Steps 1-3 (3 Questions)
        easy: [
            {
                word: "Bug",
                phonetic: "/bʌɡ/ (n.)",
                sentence: "The mobile app keeps crashing because there is a ______ in the code.",
                sentenceAudio: "The mobile app keeps crashing because there is a bug in the code.",
                hint: "แอปพลิเคชันมือถือเด้งปิดตัวเองเพราะมี...ข้อผิดพลาดในโค้ด",
                collocation: "fix a bug, report a bug, software bug",
                correctMain: "Bug",
                correctSub: "บั๊ก (ข้อผิดพลาดในโค้ด)",
                wrongMain: "Virus",
                wrongSub: "ไวรัสคอมพิวเตอร์",
                tip: "Bug คือจุดบกพร่องในชุดคำสั่ง มักใช้คู่กับกริยา fix หรือ debug"
            },
            {
                word: "Loop",
                phonetic: "/luːp/ (n.)",
                sentence: "Write a for ______ to repeat this calculation 100 times automatically.",
                sentenceAudio: "Write a for loop to repeat this calculation 100 times automatically.",
                hint: "เขียน for... เพื่อให้คำนวณซ้ำ 100 รอบโดยอัตโนมัติ",
                collocation: "infinite loop, for loop, loop through",
                correctMain: "Loop",
                correctSub: "ลูป (คำสั่งวนซ้ำ)",
                wrongMain: "Break",
                wrongSub: "คำสั่งหยุดการทำงาน",
                tip: "Loop ช่วยลดการเขียนโค้ดซ้ำซ้อนโดยให้คอมพิวเตอร์ทำคำสั่งซ้ำตามเงื่อนไข"
            },
            {
                word: "Run",
                phonetic: "/rʌn/ (v.)",
                sentence: "Click the green play button to ______ your newly written program.",
                sentenceAudio: "Click the green play button to run your newly written program.",
                hint: "กดปุ่มเพลย์สีเขียวเพื่อสั่ง...โปรแกรมที่เพิ่งเขียนเสร็จ",
                collocation: "run the script, run tests, run in background",
                correctMain: "Run",
                correctSub: "รัน (สั่งให้โปรแกรมทำงาน)",
                wrongMain: "Delete",
                wrongSub: "ลบไฟล์โปรแกรม",
                tip: "Run เป็นกริยายอดฮิตในหมู่นักพัฒนา หมายถึงการสั่งให้โค้ดเริ่มประมวลผล"
            }
        ],
        // Steps 4-7 (4 Questions)
        medium: [
            {
                word: "Variable",
                phonetic: "/ˈveə.ri.ə.bəl/ (n.)",
                sentence: "Declare a new ______ named 'score' to track the player's points.",
                sentenceAudio: "Declare a new variable named 'score' to track the player's points.",
                hint: "ประกาศ...ตัวใหม่ชื่อว่า 'score' เพื่อคอยบันทึกคะแนนของผู้เล่น",
                collocation: "declare variable, local variable, assign variable",
                correctMain: "Variable",
                correctSub: "ตัวแปร (สำหรับเก็บค่าข้อมูล)",
                wrongMain: "Constant",
                wrongSub: "ค่าคงที่ถาวรที่แก้ไม่ได้",
                tip: "Variable คือกล่องเก็บข้อมูลที่สามารถเปลี่ยนแปลงค่าได้ตามการทำงานของโปรแกรม"
            },
            {
                word: "Function",
                phonetic: "/ˈfʌŋk.ʃən/ (n.)",
                sentence: "Create a reusable ______ that takes two numbers and returns their sum.",
                sentenceAudio: "Create a reusable function that takes two numbers and returns their sum.",
                hint: "สร้าง...ที่นำกลับมาใช้ซ้ำได้ โดยรับตัวเลขสองตัวแล้วคืนค่าผลรวม",
                collocation: "call a function, define function, helper function",
                correctMain: "Function",
                correctSub: "ฟังก์ชัน (บล็อกคำสั่งทำงาน)",
                wrongMain: "Comment",
                wrongSub: "คอมเมนต์ข้อความอธิบาย",
                tip: "Function ช่วยรวมชุดคำสั่งเป็นกลุ่มก้อนเพื่อเรียกใช้งานซ้ำได้ทุกเวลา"
            },
            {
                word: "Syntax",
                phonetic: "/ˈsɪn.tæks/ (n.)",
                sentence: "Forgetting to close the quotation mark caused a fatal ______ error.",
                sentenceAudio: "Forgetting to close the quotation mark caused a fatal syntax error.",
                hint: "การลืมปิดเครื่องหมายคำพูดทำให้เกิดข้อผิดพลาดทาง...ของภาษา",
                collocation: "syntax error, valid syntax, syntax highlighting",
                correctMain: "Syntax",
                correctSub: "ไวยากรณ์และกฎของภาษาโค้ด",
                wrongMain: "Logic",
                wrongSub: "ตรรกะและกระบวนการคิด",
                tip: "Syntax คือกฎเกณฑ์การเขียนคำสั่งของแต่ละภาษา หากเขียนผิดโปรแกรมจะรันไม่ผ่าน"
            },
            {
                word: "Compile",
                phonetic: "/kəmˈpaɪl/ (v.)",
                sentence: "You must ______ your C++ code into machine language before execution.",
                sentenceAudio: "You must compile your C++ code into machine language before execution.",
                hint: "คุณต้องทำการ...โค้ดภาษา C++ ให้กลายเป็นภาษาเครื่องก่อนสั่งทำงาน",
                collocation: "compile code, compiler, compile time",
                correctMain: "Compile",
                correctSub: "คอมไพล์ (แปลงโค้ดเป็นภาษาเครื่อง)",
                wrongMain: "Debug",
                wrongSub: "ดีบัก (ค้นหาและแก้ไขข้อผิดพลาด)",
                tip: "Compile คือกระบวนการแปลงโค้ดที่มนุษย์อ่านได้ให้เป็นเลขฐานสองที่คอมพิวเตอร์เข้าใจ"
            }
        ],
        // Steps 8-10 (3 Questions)
        hard: [
            {
                word: "Algorithm",
                phonetic: "/ˈæl.ɡə.rɪ.ðəm/ (n.)",
                sentence: "Google's ranking ______ determines which websites appear first in search results.",
                sentenceAudio: "Google's ranking algorithm determines which websites appear first in search results.",
                hint: "...การจัดอันดับของกูเกิลเป็นตัวกำหนดว่าเว็บไหนจะแสดงขึ้นมาเป็นอันดับแรก",
                collocation: "search algorithm, efficient algorithm, machine learning algorithm",
                correctMain: "Algorithm",
                correctSub: "อัลกอริทึม (ขั้นตอนวิธีคิดคำนวณ)",
                wrongMain: "Database",
                wrongSub: "ฐานข้อมูลจัดเก็บ",
                tip: "Algorithm คือชุดขั้นตอนการแก้ปัญหาทางคณิตศาสตร์หรือตรรกะอย่างเป็นระบบ"
            },
            {
                word: "Deployment",
                phonetic: "/dɪˈplɔɪ.mənt/ (n.)",
                sentence: "Automated continuous ______ allows engineers to release updates daily.",
                sentenceAudio: "Automated continuous deployment allows engineers to release updates daily.",
                hint: "ระบบการ...อัตโนมัติช่วยให้วิศวกรสามารถปล่อยตัวอัปเดตขึ้นสู่ระบบจริงได้ทุกวัน",
                collocation: "production deployment, deploy code, deployment pipeline",
                correctMain: "Deployment",
                correctSub: "การนำโค้ดขึ้นใช้งานจริงบนระบบ",
                wrongMain: "Prototyping",
                wrongSub: "การทำต้นแบบทดลอง",
                tip: "Deployment คือขั้นตอนสุดท้ายในการนำซอฟต์แวร์ที่พัฒนาเสร็จไปเปิดให้ผู้ใช้งานจริงใช้"
            },
            {
                word: "Inheritance",
                phonetic: "/ɪnˈher.ɪ.təns/ (n.)",
                sentence: "In object-oriented programming, ______ allows a child class to reuse parent methods.",
                sentenceAudio: "In object-oriented programming, inheritance allows a child class to reuse parent methods.",
                hint: "ในการเขียนโปรแกรมเชิงวัตถุ ...ช่วยให้คลาสลูกดึงฟังก์ชันของคลาสแม่มาใช้ซ้ำได้",
                collocation: "class inheritance, multiple inheritance, inherit properties",
                correctMain: "Inheritance",
                correctSub: "การสืบทอดคุณสมบัติ (OOP)",
                wrongMain: "Encapsulation",
                wrongSub: "การห่อหุ้มซ่อนข้อมูล",
                tip: "Inheritance ช่วยลดความซ้ำซ้อนโดยให้คลาสใหม่ต่อยอดฟังก์ชันจากคลาสเดิมที่มีอยู่"
            }
        ]
    },
    cyberCloud: {
        // Steps 1-3 (3 Questions)
        easy: [
            {
                word: "Password",
                phonetic: "/ˈpɑːs.wɜːd/ (n.)",
                sentence: "Create a strong ______ containing symbols, numbers, and capital letters.",
                sentenceAudio: "Create a strong password containing symbols, numbers, and capital letters.",
                hint: "สร้าง...ที่ปลอดภัยด้วยการผสมสัญลักษณ์ ตัวเลข และตัวพิมพ์ใหญ่",
                collocation: "strong password, reset password, change password",
                correctMain: "Password",
                correctSub: "รหัสผ่านลับ",
                wrongMain: "Username",
                wrongSub: "ชื่อบัญชีผู้ใช้งาน",
                tip: "Password ที่ดีควรมีความยาวอย่างน้อย 8-12 ตัวอักษรและไม่ใช้คำทั่วไป"
            },
            {
                word: "Lock",
                phonetic: "/lɒk/ (v.)",
                sentence: "Always ______ your computer screen whenever you step away from your desk.",
                sentenceAudio: "Always lock your computer screen whenever you step away from your desk.",
                hint: "อย่าลืมกด...หน้าจอคอมพิวเตอร์เสมอเมื่อต้องลุกเดินออกจากโต๊ะทำงาน",
                collocation: "lock the screen, lock account, screen lock",
                correctMain: "Lock",
                correctSub: "ล็อคหน้าจอเพื่อความปลอดภัย",
                wrongMain: "Share",
                wrongSub: "แชร์หน้าจอให้ผู้อื่น",
                tip: "กดปุ่มคีย์ลัด Windows + L เพื่อ Lock หน้าจอได้อย่างรวดเร็วในชีวิตจริง"
            },
            {
                word: "Cloud",
                phonetic: "/klaʊd/ (n.)",
                sentence: "Upload your backup files to the ______ so you can access them anywhere.",
                sentenceAudio: "Upload your backup files to the cloud so you can access them anywhere.",
                hint: "อัปโหลดไฟล์สำรองขึ้นสู่ระบบ...เพื่อให้เข้าถึงไฟล์ได้จากทุกที่ทั่วโลก",
                collocation: "cloud storage, cloud computing, in the cloud",
                correctMain: "Cloud",
                correctSub: "ระบบคลาวด์ออนไลน์",
                wrongMain: "Hard Disk",
                wrongSub: "ฮาร์ดดิสก์ประจำเครื่อง",
                tip: "Cloud คือบริการจัดเก็บข้อมูลและรันระบบผ่านเครือข่ายอินเทอร์เน็ตของเซิร์ฟเวอร์ทั่วโลก"
            }
        ],
        // Steps 4-7 (4 Questions)
        medium: [
            {
                word: "Firewall",
                phonetic: "/ˈfaɪə.wɔːl/ (n.)",
                sentence: "The corporate ______ blocks unauthorized traffic and cyber attacks.",
                sentenceAudio: "The corporate firewall blocks unauthorized traffic and cyber attacks.",
                hint: "...ของบริษัททำหน้าที่ป้องกันและบล็อกการรับส่งข้อมูลที่น่าสงสัยจากการโจมตี",
                collocation: "enable firewall, firewall rules, hardware firewall",
                correctMain: "Firewall",
                correctSub: "ไฟร์วอลล์ป้องกันเครือข่าย",
                wrongMain: "Antivirus",
                wrongSub: "โปรแกรมสแกนไวรัสในเครื่อง",
                tip: "Firewall ทำหน้าที่เหมือนด่านตรวจคนเข้าเมืองของเครือข่าย คอยกรองข้อมูลเข้า-ออก"
            },
            {
                word: "Backup",
                phonetic: "/ˈbæk.ʌp/ (n.)",
                sentence: "We schedule an automated weekly ______ of the database to prevent data loss.",
                sentenceAudio: "We schedule an automated weekly backup of the database to prevent data loss.",
                hint: "เราตั้งเวลาสำเนา...ฐานข้อมูลอัตโนมัติทุกสัปดาห์เพื่อป้องกันข้อมูลสูญหาย",
                collocation: "data backup, backup server, restore from backup",
                correctMain: "Backup",
                correctSub: "การสำรองข้อมูลเพื่อความปลอดภัย",
                wrongMain: "Format",
                wrongSub: "การล้างข้อมูลในดิสก์",
                tip: "Backup คือการทำสำเนาข้อมูลเก็บแยกไว้อีกชุด เพื่อกู้คืนเวลาเกิดเหตุฉุกเฉิน"
            },
            {
                word: "Update",
                phonetic: "/ʌpˈdeɪt/ (v./n.)",
                sentence: "Make sure to install the latest security ______ to patch dangerous bugs.",
                sentenceAudio: "Make sure to install the latest security update to patch dangerous bugs.",
                hint: "อย่าลืมติดตั้งตัว...ความปลอดภัยล่าสุดเพื่ออุดช่องโหว่และข้อผิดพลาดร้ายแรง",
                collocation: "security update, software update, update system",
                correctMain: "Update",
                correctSub: "อัปเดตระบบให้ทันสมัย",
                wrongMain: "Downgrade",
                wrongSub: "ดาวน์เกรดย้อนเวอร์ชันเก่า",
                tip: "การ Update ระบบปฏิบัติการและแอปพลิเคชันเป็นประจำช่วยป้องกันภัยคุกคามใหม่ๆ ได้ดีที่สุด"
            },
            {
                word: "Phishing",
                phonetic: "/ˈfɪʃ.ɪŋ/ (n.)",
                sentence: "Never click links in suspicious emails that mimic PayPal in a fake ______ attempt.",
                sentenceAudio: "Never click links in suspicious emails that mimic PayPal in a fake phishing attempt.",
                hint: "อย่าคลิกลิงก์ในอีเมลหลอกลวงที่ปลอมตัวเป็นธนาคารในการพยายามตกเบ็ดแบบ...",
                collocation: "phishing scam, phishing email, spear phishing",
                correctMain: "Phishing",
                correctSub: "ฟิชชิ่ง (การหลอกลวงตกเบ็ดขโมยรหัส)",
                wrongMain: "Troubleshooting",
                wrongSub: "การแก้ปัญหาทางเทคนิค",
                tip: "Phishing คือกลโกงทางไซเบอร์ที่ปลอมหน้าเว็บหรืออีเมลให้เหยื่อกรอกรหัสผ่าน"
            }
        ],
        // Steps 8-10 (3 Questions)
        hard: [
            {
                word: "Encryption",
                phonetic: "/ɪnˈkrɪp.ʃən/ (n.)",
                sentence: "End-to-end ______ ensures that only the sender and recipient can read the chat.",
                sentenceAudio: "End-to-end encryption ensures that only the sender and recipient can read the chat.",
                hint: "การ...แบบต้นทางถึงปลายทางรับประกันว่าจะมีเพียงผู้ส่งและผู้รับที่อ่านแชทได้",
                collocation: "data encryption, SSL encryption, strong encryption",
                correctMain: "Encryption",
                correctSub: "การเข้ารหัสข้อมูลลับ",
                wrongMain: "Decryption",
                wrongSub: "การถอดรหัสอ่านข้อมูล",
                tip: "Encryption แปลงข้อความธรรมดาให้กลายเป็นรหัสลับที่ไม่มีใครแอบอ่านได้หากไม่มีคีย์ลับ"
            },
            {
                word: "Vulnerability",
                phonetic: "/ˌvʌl.nər.əˈbɪl.ə.ti/ (n.)",
                sentence: "White-hat hackers discovered a critical zero-day ______ in the web browser.",
                sentenceAudio: "White-hat hackers discovered a critical zero-day vulnerability in the web browser.",
                hint: "แฮกเกอร์สายขาวค้นพบ...ร้ายแรงแบบ Zero-day ในเว็บเบราว์เซอร์",
                collocation: "security vulnerability, patch vulnerability, exploit vulnerability",
                correctMain: "Vulnerability",
                correctSub: "ช่องโหว่ความปลอดภัยของระบบ",
                wrongMain: "Feature",
                wrongSub: "ฟังก์ชันความสามารถใหม่",
                tip: "Vulnerability คือจุดอ่อนในระบบที่อาจถูกผู้ไม่หวังดีใช้เจาะเข้ามาขโมยข้อมูลได้"
            },
            {
                word: "Authentication",
                phonetic: "/ɔːˌθen.tɪˈkeɪ.ʃən/ (n.)",
                sentence: "Multi-factor ______ requires both a password and an SMS code to verify identity.",
                sentenceAudio: "Multi-factor authentication requires both a password and an SMS code to verify identity.",
                hint: "การ...แบบหลายปัจจัยกำหนดให้ใช้ทั้งรหัสผ่านและรหัส SMS เพื่อยืนยันตัวตน",
                collocation: "two-factor authentication, user authentication, biometric authentication",
                correctMain: "Authentication",
                correctSub: "การยืนยันตัวตนของผู้ใช้งาน",
                wrongMain: "Authorization",
                wrongSub: "การให้สิทธิ์เข้าถึงส่วนต่างๆ",
                tip: "Authentication ยืนยันว่า 'คุณคือใคร' (Who you are) ส่วน Authorization คือ 'คุณทำอะไรได้บ้าง'"
            }
        ]
    }
};

// --- 4. GAME STATE VARIABLES ---
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

// Native TTS Speech
function speakEnglish(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.92;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
    }
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

    // Cache UI Controls
    ui.score = document.getElementById('score-display');
    ui.hearts = document.getElementById('hearts-display');
    ui.mapName = document.getElementById('map-name-badge');
    ui.character = document.getElementById('character');
    ui.enemy = document.getElementById('enemy');
    ui.battleArea = document.getElementById('battle-area');
    ui.progressBar = document.getElementById('progress-bar');
    ui.phase = document.getElementById('phase-display');
    ui.sentence = document.getElementById('sentence-display');
    ui.hint = document.getElementById('sentence-hint');
    ui.hintBtn = document.getElementById('hint-toggle-btn');
    ui.listenSentenceBtn = document.getElementById('listen-sentence-btn');
    ui.soundToggleBtn = document.getElementById('sound-toggle-btn');
    
    ui.optBtn1 = document.getElementById('option-1');
    ui.optBtn2 = document.getElementById('option-2');
    ui.optMain1 = document.getElementById('opt-main-1');
    ui.optSub1 = document.getElementById('opt-sub-1');
    ui.optMain2 = document.getElementById('opt-main-2');
    ui.optSub2 = document.getElementById('opt-sub-2');

    // Modal UI
    ui.capsuleBadge = document.getElementById('capsule-badge');
    ui.capsuleWord = document.getElementById('capsule-word');
    ui.capsulePhonetic = document.getElementById('capsule-phonetic');
    ui.capsuleSpeakBtn = document.getElementById('capsule-speak-btn');
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
            AudioEngine.playCoin();
            startGame(btn.dataset.map);
        });
    });

    // Options Click
    ui.optBtn1.addEventListener('click', () => handleChoice(ui.optBtn1));
    ui.optBtn2.addEventListener('click', () => handleChoice(ui.optBtn2));

    // Hint Toggle
    ui.hintBtn.addEventListener('click', () => {
        ui.hint.classList.toggle('show');
    });

    // TTS Sentence Button
    ui.listenSentenceBtn.addEventListener('click', () => {
        if (currentQuestion) {
            speakEnglish(currentQuestion.sentenceAudio);
        }
    });

    // Sound FX Mute Toggle
    if (ui.soundToggleBtn) {
        ui.soundToggleBtn.addEventListener('click', () => {
            const isMuted = AudioEngine.toggleMute();
            ui.soundToggleBtn.innerText = isMuted ? '🔇' : '🔊';
            if (!isMuted) AudioEngine.playCoin();
        });
    }

    // Modal Continue
    ui.capsuleContinueBtn.addEventListener('click', () => {
        screens.knowledgeModal.classList.add('hidden');
        checkGameState();
    });

    // Modal Audio Pronounce
    ui.capsuleSpeakBtn.addEventListener('click', () => {
        if (currentQuestion) {
            speakEnglish(currentQuestion.word + ". " + currentQuestion.sentenceAudio);
        }
    });

    // Result Buttons
    ui.backToMenuBtn.addEventListener('click', () => {
        AudioEngine.playCoin();
        showScreen('mainMenu');
    });

    ui.resultNotebookBtn.addEventListener('click', () => {
        showNotebook(currentMap || 'all');
    });

    // Notebook Screen
    ui.openNotebookBtn.addEventListener('click', () => {
        AudioEngine.playCoin();
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
        if (scr && scr !== screens.knowledgeModal) {
            scr.classList.add('hidden');
        }
    });
    if (screens[screenKey]) {
        screens[screenKey].classList.remove('hidden');
    }
}

// --- 5. GAME ENGINE LOGIC ---
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
    }, 250);
}

function spawnEnemy() {
    // Reset Enemy Transform and inject SVG according to map
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
    ui.hint.classList.remove('show');
    resetOptionButtonStyles();

    // Determine Phase based on Step
    let phase = 'easy';
    let phaseText = `ขั้นที่ ${currentStep + 1}/10 (ง่าย +500)`;

    if (currentStep >= 3 && currentStep <= 6) {
        phase = 'medium';
        phaseText = `ขั้นที่ ${currentStep + 1}/10 (ปานกลาง +1,000)`;
    } else if (currentStep >= 7) {
        phase = 'hard';
        phaseText = `ขั้นที่ ${currentStep + 1}/10 (ยาก/บอส +2,000)`;
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
    ui.hint.innerText = currentQuestion.hint;

    // Randomize option placements (Left or Right)
    const correctFirst = Math.random() < 0.5;
    if (correctFirst) {
        ui.optMain1.innerText = currentQuestion.correctMain;
        ui.optSub1.innerText = currentQuestion.correctSub;
        ui.optBtn1.dataset.correct = "true";

        ui.optMain2.innerText = currentQuestion.wrongMain;
        ui.optSub2.innerText = currentQuestion.wrongSub;
        ui.optBtn2.dataset.correct = "false";
    } else {
        ui.optMain1.innerText = currentQuestion.wrongMain;
        ui.optSub1.innerText = currentQuestion.wrongSub;
        ui.optBtn1.dataset.correct = "false";

        ui.optMain2.innerText = currentQuestion.correctMain;
        ui.optSub2.innerText = currentQuestion.correctSub;
        ui.optBtn2.dataset.correct = "true";
    }

    recordLearnedWord(currentQuestion, currentMap);

    // Auto pronounce gently
    setTimeout(() => {
        speakEnglish(currentQuestion.sentenceAudio);
    }, 250);
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
        // --- 1. Sound FX ---
        AudioEngine.playLaser();

        // --- 2. Hero Shoot Animation & Laser Beam ---
        screens.game.classList.add('hero-shoot');
        spawnLaserBolt();

        setTimeout(() => {
            AudioEngine.playHit();
            AudioEngine.playCoin();

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
            }, 600);
        }, 180);

    } else {
        // --- Wrong Answer Sequence ---
        AudioEngine.playError();
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
        }, 600);
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
        ui.capsuleBadge.innerText = "✅ ถูกต้องยอดเยี่ยม! (Correct)";
        ui.capsuleBadge.className = "capsule-badge badge-correct";
    } else {
        ui.capsuleBadge.innerText = "❌ พลาดไปนิด! (Incorrect)";
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
        AudioEngine.playError();
        ui.resultTitle.innerText = "MISSION FAILED";
        ui.resultTitle.style.color = "#ff5252";
        ui.resultMessage.innerText = "ระบบถูกมัลแวร์บุกทำลาย! ทบทวนคำศัพท์แล้วกลับมาท้าทายใหม่";
        ui.finalScore.innerText = `SCORE: ${score.toLocaleString()}`;
        saveHighScore();
        showScreen('result');
        isAnimating = false;
    } else if (currentStep >= 10) {
        // Victory Clear
        AudioEngine.playFanfare();
        ui.resultTitle.innerText = "STAGE CLEARED!";
        ui.resultTitle.style.color = "#76ff03";
        ui.resultMessage.innerText = "ยอดเยี่ยมมาก! คุณเอาชีวิตรอดครบทั้ง 10 ด่านสำเร็จ";
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
            correctSub: q.correctSub,
            map: map,
            timestamp: Date.now()
        });
        localStorage.setItem('wos_learned_vocab', JSON.stringify(learnedVocab));
    }
}

// --- 6. VOCAB NOTEBOOK SYSTEM ---
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
                <p style="font-size:1rem; font-weight:700;">ยังไม่มีคำศัพท์ในหมวดนี้<br>เริ่มเล่นด่านเพื่อปลดล็อคคำศัพท์กันเลย!</p>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        card.innerHTML = `
            <div class="vocab-card-header">
                <div>
                    <span class="vocab-word-title">${item.word}</span>
                    <span style="font-size:0.85rem; color:#90a4ae; font-weight:700;"> ${item.phonetic}</span>
                </div>
                <button class="tts-btn play-vocab-btn">🔊 ฟัง</button>
            </div>
            <div style="font-size:0.92rem; font-weight:700; color:#cfd8dc;">
                ความหมาย: ${item.correctSub}
            </div>
            <div style="font-size:0.88rem; background:rgba(0, 229, 255, 0.08); border-left:3px solid #00e5ff; padding:6px 10px; border-radius:0 10px 10px 0; color:#e0f7fa; margin-top:2px;">
                📝 "${item.sentence}"
            </div>
            <div style="font-size:0.82rem; color:#fff59d; background:rgba(255, 214, 0, 0.08); border-left:3px solid #ffd600; padding:4px 8px; border-radius:0 8px 8px 0; margin-top:2px;">
                ⚡ วลีที่พบบ่อย: ${item.collocation}
            </div>
        `;

        card.querySelector('.play-vocab-btn').addEventListener('click', () => {
            speakEnglish(item.word + ". " + item.sentence);
        });

        ui.vocabList.appendChild(card);
    });
}

// Start Game on DOM Ready
document.addEventListener('DOMContentLoaded', init);