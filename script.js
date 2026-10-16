// Exact 10 Questions Per Category (Total 30 questions perfectly mapped to 10 steps)
        const vocabularyData = {
            hardwareBase: {
                // ขั้น 1-3 (3 ข้อ)
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
                // ขั้น 4-7 (4 ข้อ)
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
                // ขั้น 8-10 (3 ข้อ)
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
                // ขั้น 1-3 (3 ข้อ)
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
                // ขั้น 4-7 (4 ข้อ)
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
                // ขั้น 8-10 (3 ข้อ)
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
                // ขั้น 1-3 (3 ข้อ)
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
                // ขั้น 4-7 (4 ข้อ)
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
                // ขั้น 8-10 (3 ข้อ)
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

        // Game State Variables
        let currentMap = '';
        let currentStep = 0; // Steps 0 to 10
        let currentHearts = 3;
        let score = 0;
        let currentQuestion = null;
        let isAnimating = false;
        let autoProceedTimer = null;

        // Non-repeating Question Decks for current session
        let sessionPool = {
            easy: [],
            medium: [],
            hard: []
        };

        // Learned words persistence
        let learnedVocab = JSON.parse(localStorage.getItem('wos_learned_vocab') || '[]');

        // Shuffle Utility (Fisher-Yates)
        function shuffle(array) {
            const arr = [...array];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        // Audio Speech Synthesis
        function speakEnglish(text) {
            if (!('speechSynthesis' in window)) return;
            try {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-US';
                utterance.rate = 0.92;
                window.speechSynthesis.speak(utterance);
            } catch (e) {
                console.log("TTS Error:", e);
            }
        }

        // DOM Elements
        const screens = {
            mainMenu: document.getElementById('main-menu'),
            game: document.getElementById('game-screen'),
            result: document.getElementById('result-screen'),
            notebook: document.getElementById('notebook-screen')
        };

        const ui = {
            hearts: document.getElementById('hearts-display'),
            score: document.getElementById('score-display'),
            mapNameBadge: document.getElementById('map-name-badge'),
            character: document.getElementById('character'),
            enemy: document.getElementById('enemy'),
            progressBar: document.getElementById('progress-bar'),
            phase: document.getElementById('phase-display'),
            sentence: document.getElementById('sentence-display'),
            hint: document.getElementById('sentence-hint'),
            hintBtn: document.getElementById('hint-toggle-btn'),
            listenSentenceBtn: document.getElementById('listen-sentence-btn'),
            optBtn1: document.getElementById('option-1'),
            optBtn2: document.getElementById('option-2'),
            optMain1: document.getElementById('opt-main-1'),
            optSub1: document.getElementById('opt-sub-1'),
            optMain2: document.getElementById('opt-main-2'),
            optSub2: document.getElementById('opt-sub-2'),
            resultTitle: document.getElementById('result-title'),
            resultMessage: document.getElementById('result-message'),
            finalScore: document.getElementById('final-score'),
            
            // Knowledge Modal
            knowledgeModal: document.getElementById('knowledge-modal'),
            capsuleBadge: document.getElementById('capsule-badge'),
            capsuleWord: document.getElementById('capsule-word'),
            capsulePhonetic: document.getElementById('capsule-phonetic'),
            capsuleSpeakBtn: document.getElementById('capsule-speak-btn'),
            capsuleSentence: document.getElementById('capsule-sentence-text'),
            capsuleCollocation: document.getElementById('capsule-collocation-text'),
            capsuleTip: document.getElementById('capsule-tip'),
            capsuleContinueBtn: document.getElementById('capsule-continue-btn'),

            // Notebook
            vocabList: document.getElementById('vocab-list')
        };

        // Initialization
        function init() {
            loadHighScores();
            
            // Map Buttons
            document.querySelectorAll('.map-btn[data-map]').forEach(btn => {
                btn.addEventListener('click', () => startGame(btn.dataset.map));
            });

            // Answer Buttons
            ui.optBtn1.addEventListener('click', () => handleAnswer(0));
            ui.optBtn2.addEventListener('click', () => handleAnswer(1));

            // Hint Toggle
            ui.hintBtn.addEventListener('click', toggleHint);

            // Listen sentence button
            ui.listenSentenceBtn.addEventListener('click', () => {
                if (currentQuestion) speakEnglish(currentQuestion.sentenceAudio);
            });

            // Capsule speak & continue
            ui.capsuleSpeakBtn.addEventListener('click', () => {
                if (currentQuestion) speakEnglish(currentQuestion.word + ". " + currentQuestion.sentenceAudio);
            });
            ui.capsuleContinueBtn.addEventListener('click', proceedAfterFeedback);

            // Notebook Buttons
            document.getElementById('open-notebook-btn').addEventListener('click', () => showNotebook('all'));
            document.getElementById('result-notebook-btn').addEventListener('click', () => showNotebook(currentMap || 'all'));
            document.getElementById('close-notebook-btn').addEventListener('click', () => {
                showScreen('mainMenu');
            });

            // Notebook filters
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    renderNotebookList(btn.dataset.filter);
                });
            });

            // Back to menu
            document.getElementById('back-to-menu-btn').addEventListener('click', showMainMenu);
            
            showScreen('mainMenu');
        }

        function loadHighScores() {
            ['hardwareBase', 'codingMatrix', 'cyberCloud'].forEach(map => {
                const highScore = localStorage.getItem(`wos_score_${map}`) || 0;
                const el = document.getElementById(`score-${map}`);
                if (el) el.innerText = `High Score: ${highScore}`;
            });
        }

        function showScreen(screenName) {
            Object.values(screens).forEach(screen => screen.classList.add('hidden'));
            if (screens[screenName]) {
                screens[screenName].classList.remove('hidden');
            }
        }

        function toggleHint() {
            if (ui.hint.style.display === 'block') {
                ui.hint.style.display = 'none';
                ui.hintBtn.innerText = '💡 ดูคำแปลไทย / คำใบ้';
            } else {
                ui.hint.style.display = 'block';
                ui.hintBtn.innerText = '🙈 ซ่อนคำแปล';
            }
        }

        function spawnEnemy() {
            ui.enemy.style.animation = 'none';
            ui.enemy.style.opacity = '1';
            ui.enemy.style.transform = 'translateY(0) rotate(0)';
            ui.enemy.style.filter = 'drop-shadow(0 12px 10px rgba(0,0,0,0.25))';
        }

        function startGame(mapId) {
            currentMap = mapId;
            currentStep = 0;
            currentHearts = 3;
            score = 0;
            currentQuestion = null;
            
            // Set unique visual theme & enemy per map!
            screens.game.dataset.theme = mapId;

            // Update Map Badge Header
            const mapNames = {
                hardwareBase: "🖥️ Hardware Base",
                codingMatrix: "💻 Coding Matrix",
                cyberCloud: "☁️ Cyber Cloud"
            };
            ui.mapNameBadge.innerText = mapNames[mapId] || mapId;

            // Generate fresh, non-repeating decks for this playthrough (3 easy + 4 medium + 3 hard = 10 questions)
            sessionPool = {
                easy: shuffle(vocabularyData[mapId].easy),
                medium: shuffle(vocabularyData[mapId].medium),
                hard: shuffle(vocabularyData[mapId].hard)
            };

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
            
            // Reset buttons
            [ui.optBtn1, ui.optBtn2].forEach(btn => {
                btn.classList.remove('wrong-btn', 'correct-btn');
                btn.disabled = false;
            });

            // Reset hint
            ui.hint.style.display = 'none';
            ui.hintBtn.innerText = '💡 ดูคำแปลไทย / คำใบ้';

            let phase = '';
            let phaseText = '';

            if (currentStep <= 2) {
                phase = 'easy';
                phaseText = `ขั้นที่ ${currentStep + 1}/10 (ง่าย +500)`;
            } else if (currentStep <= 6) {
                phase = 'medium';
                phaseText = `ขั้นที่ ${currentStep + 1}/10 (ปานกลาง +1,000)`;
            } else {
                phase = 'hard';
                phaseText = `ขั้นที่ ${currentStep + 1}/10 (ยาก +2,000)`;
            }

            ui.phase.innerText = phaseText;
            
            // Ensure no duplicate question in this tier (if exhausted due to errors, refill gracefully)
            if (!sessionPool[phase] || sessionPool[phase].length === 0) {
                const remaining = vocabularyData[currentMap][phase].filter(q => !currentQuestion || q.word !== currentQuestion.word);
                sessionPool[phase] = shuffle(remaining);
            }

            // Pop unasked question from session deck
            currentQuestion = sessionPool[phase].pop();

            // Render sentence with highlighted blank
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

            // Save to learned vocab collection
            recordLearnedWord(currentQuestion, currentMap);

            // Auto pronounce the sentence gently on load
            setTimeout(() => {
                speakEnglish(currentQuestion.sentenceAudio);
            }, 300);
        }

        function recordLearnedWord(q, map) {
            const exists = learnedVocab.some(item => item.word === q.word);
            if (!exists) {
                learnedVocab.push({
                    word: q.word,
                    phonetic: q.phonetic,
                    map: map,
                    correctSub: q.correctSub,
                    sentence: q.sentenceAudio,
                    collocation: q.collocation,
                    tip: q.tip
                });
                localStorage.setItem('wos_learned_vocab', JSON.stringify(learnedVocab));
            }
        }

        function handleAnswer(selectedIndex) {
            if (isAnimating) return;
            isAnimating = true;

            const selectedBtn = selectedIndex === 0 ? ui.optBtn1 : ui.optBtn2;
            const isCorrect = selectedBtn.dataset.correct === "true";

            ui.optBtn1.disabled = true;
            ui.optBtn2.disabled = true;

            if (isCorrect) {
                selectedBtn.classList.add('correct-btn');
                ui.character.style.animation = 'attackRight 0.3s ease';
                
                setTimeout(() => {
                    ui.enemy.style.animation = 'enemyHit 0.2s ease, enemyDie 0.45s ease 0.2s forwards';
                    
                    if (currentStep <= 2) score += 500;
                    else if (currentStep <= 6) score += 1000;
                    else score += 2000;
                    
                    currentStep++;
                    updateUI();
                    
                    setTimeout(() => {
                        ui.character.style.animation = 'none';
                        showKnowledgeModal(true);
                    }, 500);
                }, 150);

            } else {
                selectedBtn.classList.add('wrong-btn');
                if (ui.optBtn1.dataset.correct === "true") ui.optBtn1.classList.add('correct-btn');
                if (ui.optBtn2.dataset.correct === "true") ui.optBtn2.classList.add('correct-btn');

                screens.game.style.animation = 'shake 0.4s ease';
                currentHearts--;
                
                let dropSteps = (currentStep >= 7) ? 2 : 1;
                currentStep = Math.max(0, currentStep - dropSteps);
                updateUI();

                setTimeout(() => {
                    screens.game.style.animation = 'none';
                    showKnowledgeModal(false);
                }, 600);
            }
        }

        function showKnowledgeModal(isCorrect) {
            if (isCorrect) {
                ui.capsuleBadge.className = 'capsule-badge badge-correct';
                ui.capsuleBadge.innerText = '✅ ตอบถูกยอดเยี่ยม! (Correct)';
            } else {
                ui.capsuleBadge.className = 'capsule-badge badge-wrong';
                ui.capsuleBadge.innerText = '💔 พลาดไปนิด! มาดูคำตอบที่ถูกต้อง';
            }

            ui.capsuleWord.innerText = currentQuestion.correctMain;
            ui.capsulePhonetic.innerText = currentQuestion.phonetic + " • " + currentQuestion.correctSub;
            ui.capsuleSentence.innerText = '"' + currentQuestion.sentenceAudio + '"';
            ui.capsuleCollocation.innerText = currentQuestion.collocation;
            ui.capsuleTip.innerText = "💡 ความรู้เพิ่มเติม: " + currentQuestion.tip;

            ui.knowledgeModal.classList.remove('hidden');

            setTimeout(() => {
                speakEnglish(currentQuestion.word);
            }, 200);

            if (autoProceedTimer) clearTimeout(autoProceedTimer);
            autoProceedTimer = setTimeout(() => {
                proceedAfterFeedback();
            }, 4500);
        }

        function proceedAfterFeedback() {
            if (autoProceedTimer) clearTimeout(autoProceedTimer);
            ui.knowledgeModal.classList.add('hidden');
            
            if (currentStep < 10 && currentHearts > 0) {
                spawnEnemy();
            }
            
            checkGameState();
            isAnimating = false;
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
                ui.resultTitle.style.color = "#ffffff";
                ui.resultMessage.innerText = "ยอดเยี่ยมมาก! คุณผ่านด่าน 10 ขั้น\nและได้ฝึกฝนคำศัพท์ในสถานการณ์จริงครบทั้ง 10 ข้อแล้ว!";
                screens.result.style.background = "linear-gradient(135deg, var(--btn-mint-light), var(--btn-mint-dark))";
            } else {
                ui.resultTitle.innerText = "☠️ System Failure ☠️";
                ui.resultTitle.style.color = "#ffffff";
                ui.resultMessage.innerText = "พลังชีวิตหมด... แต่คุณได้เรียนรู้คำศัพท์ใหม่ๆ แล้ว\nลองกดทบทวนคำศัพท์แล้วมาสู้ใหม่อีกครั้ง!";
                screens.result.style.background = "linear-gradient(135deg, var(--btn-pink-light), var(--btn-pink-dark))";
            }
            
            ui.finalScore.innerText = `Score: ${score}`;
            
            setTimeout(() => {
                showScreen('result');
            }, 300);
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

        // --- Notebook System ---
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
                    <div style="text-align:center; padding: 30px; color:#78909c;">
                        <p style="font-size:2rem; margin-bottom:10px;">📖</p>
                        <p>ยังไม่มีคำศัพท์ในหมวดนี้<br>ไปเริ่มเล่นด่านเพื่อปลดล็อคคำศัพท์กันเลย!</p>
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
                            <span style="font-size:0.85rem; color:#78909c; font-weight:700;"> ${item.phonetic}</span>
                        </div>
                        <button class="tts-btn play-vocab-btn">🔊 ฟัง</button>
                    </div>
                    <div style="font-size:0.9rem; font-weight:700; color:#455a64;">
                        ความหมาย: ${item.correctSub}
                    </div>
                    <div style="font-size:0.88rem; background:#f1f8e9; padding:6px 10px; border-radius:10px; color:#33691e; margin-top:2px;">
                        📝 "${item.sentence}"
                    </div>
                    <div style="font-size:0.82rem; color:#e65100; background:#fff8e1; padding:4px 8px; border-radius:8px; margin-top:2px;">
                        ⚡ วลีที่พบบ่อย: ${item.collocation}
                    </div>
                `;

                card.querySelector('.play-vocab-btn').addEventListener('click', () => {
                    speakEnglish(item.word + ". " + item.sentence);
                });

                ui.vocabList.appendChild(card);
            });
        }

        // Start
        document.addEventListener('DOMContentLoaded', init);