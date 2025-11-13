export function createFaculty(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {
    // Background and walls
    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'room-tile').setOrigin(0, 0).setDepth(-1);
    scene.wall1 = scene.physics.add.staticImage(worldWidth / 2, 50, 'room-wall').setDisplaySize(worldWidth * 1.7, 100).setDepth(1);
    scene.wall1.refreshBody();
    scene.wall1.setCrop(500, 0, 2000, scene.wall1.height);

    scene.wall2 = scene.physics.add.staticImage(20, 237, 'wall').setDisplaySize(50, worldHeight + 500).setDepth(1);
    scene.wall3 = scene.physics.add.staticImage(worldWidth - 20, 237, 'wall').setDisplaySize(50, worldHeight + 500).setDepth(1);
    scene.wall2.refreshBody();
    scene.wall3.refreshBody();
    
    scene.MRMFacultyDoormat1 = scene.physics.add.staticImage(70, 200, 'doormat1').setDisplaySize(50, 60).setDepth(1).setFlipX(true).setFlipY(false);
    scene.MRMFacultyDoormat1.body.setOffset(0, 0);
    scene.MRMFacultyDoormat1.refreshBody();
    
    scene.MRMFacultyDoormat2 = scene.physics.add.staticImage(70, worldHeight - 100, 'doormat1').setDisplaySize(50, 60).setDepth(1).setFlipX(true).setFlipY(false);
    scene.MRMFacultyDoormat2.body.setOffset(0, 0);
    scene.MRMFacultyDoormat2.refreshBody();

    // Tables and props
    const rightTables = [
        [worldWidth / 1.5, worldHeight / 1.2],
        [worldWidth / 1.5, worldHeight / 1.4],
        [worldWidth / 1.5, worldHeight / 1.72],
        [worldWidth / 1.5, worldHeight / 2.225],
    ];
    rightTables.forEach(([x, y], i) => {
        const t = scene.physics.add.staticImage(x, y, 'clinic-table').setDisplaySize(130, 110).setDepth(1);
        t.refreshBody();
        scene[`facultyTable${i + 1}`] = t;
    });

    const leftTables = [
        [220, worldHeight / 1.2],
        [220, worldHeight / 1.4],
        [220, worldHeight / 1.72],
        [220, worldHeight / 2.225],
    ];
    leftTables.forEach(([x, y], i) => {
        const t = scene.physics.add.staticImage(x, y, 'clinic-table').setDisplaySize(130, 110).setDepth(1).setFlipX(true);
        t.refreshBody();
        scene[`facultyTable${i + 5}`] = t;
    });

    // Decorations
    scene.facultyClock = scene.physics.add.staticImage(worldWidth - 200, 30, 'clock').setDisplaySize(30, 30).setDepth(1);
    scene.facultyWaterDispenser = scene.physics.add.staticImage(worldWidth - 70, 60, 'water-dispenser').setDisplaySize(50, 120).setDepth(1);
    scene.facultyClock.refreshBody();
    scene.facultyWaterDispenser.refreshBody();

    // ==============================
    // 👨‍🏫 NPCs Setup
    // ==============================
    scene.entrepHead = scene.physics.add.staticImage(worldWidth - 70, 150, 'entrep').setDisplaySize(70, 70).setDepth(1);
    scene.entrepHead.refreshBody();

    scene.engHead = scene.physics.add.staticImage(worldWidth - 70, 300, 'eng').setDisplaySize(70, 70).setDepth(1);
    scene.engHead.refreshBody();

    scene.psychHead = scene.physics.add.staticImage(worldWidth - 70, 400, 'psych').setDisplaySize(70, 70).setDepth(1);
    scene.psychHead.refreshBody();

    scene.educHead = scene.physics.add.staticImage(worldWidth - 70, 550, 'educ').setDisplaySize(70, 70).setDepth(1);
    scene.educHead.refreshBody();

    // NPC Name Labels
    scene.entrepName = scene.add.text(scene.entrepHead.x, scene.entrepHead.y - 60, "Mr. Jhojhie G. Capati", {
        fontSize: "14px",
        fill: "#fff",
        fontStyle: "bold",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(5);

    scene.engName = scene.add.text(scene.engHead.x, scene.engHead.y - 60, "Engr. Francis Cayanan", {
        fontSize: "14px",
        fill: "#fff",
        fontStyle: "bold",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(5);

    scene.psychName = scene.add.text(scene.psychHead.x, scene.psychHead.y - 60, "Ms. Mary Ann M. Razon", {
        fontSize: "14px",
        fill: "#fff",
        fontStyle: "bold",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(5);

    scene.educName = scene.add.text(scene.educHead.x, scene.educHead.y - 60, "Mr. Chris L. Kabiling", {
        fontSize: "14px",
        fill: "#fff",
        fontStyle: "bold",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(5);

    // ==============================
    // 💬 Dialogue System with Typewriter Effect
    // ==============================
    function createDialogueSystem(npcX, npcY) {
        const boxX = npcX - 280;
        const boxY = npcY - 40;
        const boxWidth = 500;
        
        const box = scene.add.graphics()
            .setDepth(10)
            .setVisible(false);

        const text = scene.add.text(boxX + 20, boxY + 20, "", {
            fontSize: "14px",
            fill: "#222222",
            wordWrap: { width: 460 },
            lineSpacing: 4
        }).setDepth(11).setVisible(false);

        const choiceTexts = [];
        let typewriterEvent = null;
        let isTyping = false;

        return { box, text, choiceTexts, typewriterEvent, isTyping, boxX, boxY, boxWidth };
    }

    const entrepDialogue = createDialogueSystem(scene.entrepHead.x, scene.entrepHead.y);
    const engDialogue = createDialogueSystem(scene.engHead.x, scene.engHead.y);
    const psychDialogue = createDialogueSystem(scene.psychHead.x, scene.psychHead.y);
    const educDialogue = createDialogueSystem(scene.educHead.x, scene.educHead.y);

    function showDialogue(d, text, choices = []) {
        // Clear any existing typewriter event
        if (d.typewriterEvent) {
            d.typewriterEvent.remove();
            d.typewriterEvent = null;
        }

        // Clear old choices
        d.choiceTexts.forEach(c => c.destroy());
        d.choiceTexts.length = 0;

        // Estimate initial box height (will be redrawn later with exact size)
        const estimatedHeight = 150;
        d.box.clear();
        d.box.fillStyle(0xffffff, 0.95);
        d.box.fillRoundedRect(d.boxX, d.boxY, d.boxWidth, estimatedHeight, 12);
        d.box.lineStyle(3, 0x333333, 1);
        d.box.strokeRoundedRect(d.boxX, d.boxY, d.boxWidth, estimatedHeight, 12);
        d.box.setVisible(true);

        d.text.setVisible(true).setText("");
        d.isTyping = true;

        // Typewriter effect
        let charIndex = 0;
        d.typewriterEvent = scene.time.addEvent({
            delay: 30,
            callback: () => {
                if (charIndex < text.length) {
                    d.text.setText(text.substring(0, charIndex + 1));
                    charIndex++;
                } else {
                    d.isTyping = false;
                    d.typewriterEvent.remove();
                    d.typewriterEvent = null;
                    
                    // Calculate total height needed
                    const textBounds = d.text.getBounds();
                    const choiceStartY = textBounds.bottom + 10;
                    const totalChoicesHeight = choices.length * 20;
                    const boxHeight = (textBounds.bottom - d.boxY) + totalChoicesHeight + 30;
                    
                    // Redraw box with proper height
                    d.box.clear();
                    d.box.fillStyle(0xffffff, 0.95);
                    d.box.fillRoundedRect(d.boxX, d.boxY, d.boxWidth, boxHeight, 12);
                    d.box.lineStyle(3, 0x333333, 1);
                    d.box.strokeRoundedRect(d.boxX, d.boxY, d.boxWidth, boxHeight, 12);
                    d.box.setVisible(true);
                    
                    // Show choices after typing is complete
                    choices.forEach((choice, i) => {
                        const choiceText = scene.add.text(d.boxX + 20, choiceStartY + i * 20, choice.label, {
                            fontSize: "13px",
                            fill: "#0066cc",
                            fontStyle: "bold"
                        }).setInteractive().setDepth(11).setVisible(true);
                        
                        choiceText.on("pointerover", () => {
                            choiceText.setStyle({ fill: "#0099ff" });
                        });
                        choiceText.on("pointerout", () => {
                            choiceText.setStyle({ fill: "#0066cc" });
                        });
                        choiceText.on("pointerdown", () => choice.action());
                        d.choiceTexts.push(choiceText);
                    });
                }
            },
            loop: true
        });
    }

    function hideDialogue(d) {
        if (d.typewriterEvent) {
            d.typewriterEvent.remove();
            d.typewriterEvent = null;
        }
        d.box.setVisible(false);
        d.text.setVisible(false);
        d.choiceTexts.forEach(c => c.destroy());
        d.choiceTexts.length = 0;
        d.isTyping = false;
    }

    // ==============================
    // 💬 ENTREP Dialogue Tree
    // ==============================
    function startEntrep() {
        showDialogue(entrepDialogue, "Greetings! How can I help you?", [
            { label: "Who are the Instructors at this Department?", action: entrepInstructors },
            { label: "How can I Consult on my Failing Subject?", action: entrepConsult },
            { label: "Does this Department have Laboratory Rooms?", action: entrepLab },
            { label: "How can I Enroll as an Irregular Student?", action: entrepIrreg }
        ]);
    }

    function entrepInstructors() {
        showDialogue(entrepDialogue,
            "This is the list of Instructors employed for BS ENTREP Department:\n\nMR JHOJHIE G. CAPATI\nMR BOB T. DAYAGUIT",
            [
                { label: "THANK YOU.", action: () => hideDialogue(entrepDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEntrep }
            ]
        );
    }

    function entrepConsult() {
        showDialogue(entrepDialogue,
            "Please bring your quizzes, exams, performance tasks, and attendance as proof of your concern.",
            [
                { label: "I have the required proof.", action: entrepHasProof },
                { label: "I don't have any papers.", action: entrepNoProof }
            ]
        );
    }

    function entrepHasProof() {
        showDialogue(entrepDialogue,
            "If your records meet at least a grade of 3, it will be corrected to a passing mark. Otherwise, it remains failing.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(entrepDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEntrep }
            ]
        );
    }

    function entrepNoProof() {
        showDialogue(entrepDialogue,
            "You must bring your own performance records; instructors cannot provide them directly.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(entrepDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEntrep }
            ]
        );
    }

    function entrepLab() {
        showDialogue(entrepDialogue,
            "Unfortunately, there are no Laboratory Rooms yet for BS ENTREP.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(entrepDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEntrep }
            ]
        );
    }

    function entrepIrreg() {
        showDialogue(entrepDialogue,
            "To enroll as an Irregular Student, prepare:\n• Letter of Intent\n• School ID (Photocopy)\n• Parent/Guardian ID (Photocopy)",
            [
                { label: "THANK YOU.", action: () => hideDialogue(entrepDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEntrep }
            ]
        );
    }

    // ==============================
    // 💬 ENGINEERING Dialogue Tree
    // ==============================
    function startEng() {
        showDialogue(engDialogue, "Greetings! How can I help you?", [
            { label: "Who are the Instructors at this Department?", action: engInstructors },
            { label: "How can I Consult on my Failing Subject?", action: engConsult },
            { label: "Does this Department have Laboratory Rooms?", action: engLab },
            { label: "How can I Enroll as an Irregular Student?", action: engIrreg },
            { label: "Where can I find my Subject Schedules?", action: engSchedule },
            { label: "How to qualify for President's/Dean's List?", action: engList }
        ]);
    }

    function engInstructors() {
        showDialogue(engDialogue,
            "This is the list of Instructors employed for BSCE Department:\n\nENGR. ROWEL D. WAJE\nENGR. MIRIAM B. VILLANUEVA\nENGR. FRANCIS CAYANAN\nARCH. VICTORIA LUISA C. APOLONIO\nENGR. JILMER M. CARLOS\nENGR. MA. ANGELU CASTRO\nENGR. KATHLEEN CAMILLA E. DAVID\nENGR. JEAN P. DE JESUS\nENGR. JOHN HAROLD I. LAYUG\nENGR. ROSEMARIE M. LUCIANO\nENGR. MIKE DIETHER GALVEZ",
            [
                { label: "THANK YOU.", action: () => hideDialogue(engDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEng }
            ]
        );
    }

    function engConsult() {
        showDialogue(engDialogue,
            "Bring your quizzes, exams, performance tasks, and attendance as proof to consult about your failing subject.",
            [
                { label: "I have proof.", action: engHasProof },
                { label: "I don't have proof.", action: engNoProof }
            ]
        );
    }

    function engHasProof() {
        showDialogue(engDialogue,
            "If your records show a grade of at least 3, it can be corrected to a passing mark. Otherwise, it remains failing.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(engDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEng }
            ]
        );
    }

    function engNoProof() {
        showDialogue(engDialogue,
            "You must provide your own records; instructors cannot give them to you.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(engDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEng }
            ]
        );
    }

    function engLab() {
        showDialogue(engDialogue,
            "Yes, the Campus has Laboratory Rooms for BSCE students, located at ARM 1st floor.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(engDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEng }
            ]
        );
    }

    function engIrreg() {
        showDialogue(engDialogue,
            "To enroll as an Irregular Student, prepare:\n• Letter of Intent\n• School ID (Photocopy)\n• Parent/Guardian ID (Photocopy)\nThen fill out the provided enrollment form with your subjects and schedule.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(engDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEng }
            ]
        );
    }

    function engSchedule() {
        showDialogue(engDialogue,
            "The Campus provides schedules for BSCE via the official Campus page.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(engDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEng }
            ]
        );
    }

    function engList() {
        showDialogue(engDialogue,
            "To qualify:\nPresident's Lister - GWA 1.25\nDean's Lister - GWA 1.26–1.75",
            [
                { label: "Next", action: engListNext }
            ]
        );
    }

    function engListNext() {
        showDialogue(engDialogue,
            "If qualified, you'll receive a form to fill out. Submit screenshots of your COR and COG to the section mayor's provided drive.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(engDialogue) },
                { label: "DO YOU HAVE ANOTHER QUESTION?", action: startEng }
            ]
        );
    }

    // ==============================
    // 💬 BS PSYCHOLOGY Dialogue Tree
    // ==============================
    function startPsych() {
        showDialogue(psychDialogue, "Greetings! How can I help you?", [
            { label: "Who are the Instructors at this Department?", action: psychInstructors },
            { label: "How can I Consult on my Failing Subject?", action: psychConsult },
            { label: "Does this Department have Laboratory Rooms?", action: psychLab },
            { label: "How can I Enroll as an Irregular Student?", action: psychIrreg }
        ]);
    }

    function psychInstructors() {
        showDialogue(psychDialogue,
            "This is the list of Instructors employed for BS PSYCH Department:\n\nMS DENNY VELL M. DEVARAS\nMS MARY ANN M. RAZON",
            [
                { label: "THANK YOU.", action: () => hideDialogue(psychDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startPsych }
            ]
        );
    }

    function psychConsult() {
        showDialogue(psychDialogue,
            "For this matter, we can assess your concern by bringing your scores from your quizzes, exams, performance task and Attendance held by the Instructor who are assigned to your specific subject as a proof for your concern.",
            [
                { label: "I have the required proof of papers.", action: psychHasProof },
                { label: "I don't have any papers as proof.", action: psychNoProof }
            ]
        );
    }

    function psychHasProof() {
        showDialogue(psychDialogue,
            "As we assess your scores and records that you have provided. If you meet the required grade of at least 3 on your grade, your subject Instructor will correct your grades to a pass, and if you did not meet the required grade, you will have a 5 grade or fail in your subject.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(psychDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startPsych }
            ]
        );
    }

    function psychNoProof() {
        showDialogue(psychDialogue,
            "For this matter, we can assess your concern by bringing your scores from your quizzes, exams, performance task and Attendance held by the Instructor who are assigned to your specific subject as a proof for your concern.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(psychDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startPsych }
            ]
        );
    }

    function psychLab() {
        showDialogue(psychDialogue,
            "Yes, our Campus has Laboratory Rooms equipped with essential tools and equipments for BS PSYCH students. It is Located at 1st floor of ARM building.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(psychDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startPsych }
            ]
        );
    }

    function psychIrreg() {
        showDialogue(psychDialogue,
            "The Campus will provide a schedule for Irregular Students. The process of enrolling as an Irregular Student, you must have documents like:\n• Letter of Intent\n• School ID (Photocopy)\n• Parent/Guardian ID (Photocopy)",
            [
                { label: "THANK YOU.", action: () => hideDialogue(psychDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startPsych }
            ]
        );
    }

    // ==============================
    // 💬 BEED (EDUCATION) Dialogue Tree
    // ==============================
    function startEduc() {
        showDialogue(educDialogue, "Greetings! How can I help you?", [
            { label: "Who are the Instructors at this Department?", action: educInstructors },
            { label: "How can I Consult on my Failing Subject?", action: educConsult },
            { label: "Does this Department have Laboratory Rooms?", action: educLab },
            { label: "How can I Enroll as an Irregular Student?", action: educIrreg }
        ]);
    }

    function educInstructors() {
        showDialogue(educDialogue,
            "This is the list of Instructors employed for BEED Department:\n\nMS JAILA JOY M. ARCILLA\nMS ALYSSA S. ATENCIO\nMR JOSEPH ALEXANDER BANSIL\nMR JOHN RYAN S. DE LEON\nMR EMERSON Q. FERNANDO\nMR CHARLIE LOBO\nMR CHRIS L. KABILING\nMS ANJANETTE D. LUMANOG\nMS SHERYL M. MAGLAQUI\nMS MARIA CHRISTINA L. MEDINA\nMS MA. THERESA O. MERCENE\nMS EDITHA B. QUIBOLOY\nMR MARK KEVIN P. ZITA",
            [
                { label: "THANK YOU.", action: () => hideDialogue(educDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEduc }
            ]
        );
    }

    function educConsult() {
        showDialogue(educDialogue,
            "For this matter, we can assess your concern by bringing your scores from your quizzes, exams, performance task and Attendance held by the Instructor who are assigned to your specific subject as a proof for your concern.",
            [
                { label: "I have the required proof of papers.", action: educHasProof },
                { label: "I don't have any papers as proof.", action: educNoProof }
            ]
        );
    }

    function educHasProof() {
        showDialogue(educDialogue,
            "As we assess your scores and records that you have provided. If you meet the required grade of at least 3 on your grade, your subject Instructor will correct your grades to a pass, and if you did not meet the required grade, you will have a 5 grade or fail in your subject.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(educDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEduc }
            ]
        );
    }

    function educNoProof() {
        showDialogue(educDialogue,
            "For this matter, we can assess your concern by bringing your scores from your quizzes, exams, performance task and Attendance held by the Instructor who are assigned to your specific subject as a proof for your concern.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(educDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEduc }
            ]
        );
    }

    function educLab() {
        showDialogue(educDialogue,
            "Unfortunately we don't have yet any Laboratory Rooms in our Department.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(educDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEduc }
            ]
        );
    }

    function educIrreg() {
        showDialogue(educDialogue,
            "The Campus will provide a schedule for Irregular Students. The process of enrolling as an Irregular Student, you must have documents like:\n• Letter of Intent\n• School ID (Photocopy)\n• Parent/Guardian ID (Photocopy)",
            [
                { label: "THANK YOU.", action: () => hideDialogue(educDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startEduc }
            ]
        );
    }

    // ==============================
    // 🧍 Player setup
    // ==============================
    scene.player = scene.physics.add.sprite(playerPositionX, playerPositionY, 'avatar-sheet', 0).setOrigin(0, 0).setDisplaySize(60, 60).setDepth(1);
    scene.player.body.setSize(14, 14);
    scene.player.body.setOffset(23, 46);
    scene.player.body.allowGravity = false;
    scene.player.setCollideWorldBounds(true);

    [
        scene.wall1, scene.wall2, scene.wall3,
        scene.facultyWaterDispenser,
        ...Object.values(scene).filter(v => v?.texture?.key?.includes('clinic-table'))
    ].forEach(obj => scene.physics.add.collider(scene.player, obj));

    // Camera
    scene.cameras.main.startFollow(scene.player);
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight);

    // ==============================
    // 🕹️ Proximity detection
    // ==============================
    scene.events.on('update', () => {
        const distEntrep = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, scene.entrepHead.x, scene.entrepHead.y);
        const distEng = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, scene.engHead.x, scene.engHead.y);
        const distPsych = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, scene.psychHead.x, scene.psychHead.y);
        const distEduc = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, scene.educHead.x, scene.educHead.y);

        // ENTREP NPC
        if (distEntrep < 120) {
            if (!entrepDialogue.box.visible) startEntrep();
        } else if (entrepDialogue.box.visible && distEntrep >= 150) {
            hideDialogue(entrepDialogue);
        }

        // ENGINEERING NPC
        if (distEng < 120) {
            if (!engDialogue.box.visible) startEng();
        } else if (engDialogue.box.visible && distEng >= 150) {
            hideDialogue(engDialogue);
        }

        // PSYCHOLOGY NPC
        if (distPsych < 120) {
            if (!psychDialogue.box.visible) startPsych();
        } else if (psychDialogue.box.visible && distPsych >= 150) {
            hideDialogue(psychDialogue);
        }

        // EDUCATION NPC
        if (distEduc < 120) {
            if (!educDialogue.box.visible) startEduc();
        } else if (educDialogue.box.visible && distEduc >= 150) {
            hideDialogue(educDialogue);
        }
    });
}