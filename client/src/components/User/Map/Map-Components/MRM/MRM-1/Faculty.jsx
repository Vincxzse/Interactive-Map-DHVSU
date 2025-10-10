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
    // 👨‍🏫 NPC 1: ENTREP (Mr. Jhojhie G. Capati)
    // ==============================
    scene.entrepHead = scene.physics.add.staticImage(worldWidth - 70, 150, 'entrep').setDisplaySize(70, 70).setDepth(1);
    scene.entrepHead.refreshBody();

    scene.entrepName = scene.add.text(scene.entrepHead.x, scene.entrepHead.y - 60, "Mr. Jhojhie G. Capati", {
        fontSize: "14px",
        fill: "#fff",
        fontStyle: "bold",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(5);

    // ==============================
    // 👷‍♂️ NPC 2: BSCE (Engr. Francis Cayanan)
    // ==============================
    scene.engHead = scene.physics.add.staticImage(worldWidth - 70, 300, 'eng').setDisplaySize(70, 70).setDepth(1);
    scene.engHead.refreshBody();

    scene.engName = scene.add.text(scene.engHead.x, scene.engHead.y - 60, "Engr. Francis Cayanan", {
        fontSize: "14px",
        fill: "#fff",
        fontStyle: "bold",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(5);

    // Common dialogue system
    function createDialogueSystem(npcX, npcY) {
        const box = scene.add.rectangle(npcX - 380, npcY - 40, 350, 220, 0x000000, 0.85)
            .setStrokeStyle(2, 0xffffff)
            .setOrigin(0, 0)
            .setDepth(10)
            .setVisible(false);

        const text = scene.add.text(box.x + 15, box.y + 15, "", {
            fontSize: "14px",
            fill: "#ffffff",
            wordWrap: { width: 320 },
        }).setDepth(11).setVisible(false);

        const choiceTexts = [];

        return { box, text, choiceTexts };
    }

    const entrepDialogue = createDialogueSystem(scene.entrepHead.x, scene.entrepHead.y);
    const engDialogue = createDialogueSystem(scene.engHead.x, scene.engHead.y);

    function showDialogue(d, text, choices = []) {
        d.box.setVisible(true);
        d.text.setVisible(true).setText(text);

        d.choiceTexts.forEach(c => c.destroy());
        d.choiceTexts.length = 0;

        choices.forEach((choice, i) => {
            const choiceText = scene.add.text(d.box.x + 15, d.box.y + 130 + i * 20, choice.label, {
                fontSize: "13px",
                fill: "#00ffff",
            }).setInteractive().setDepth(11).setVisible(true);
            choiceText.on("pointerdown", () => choice.action());
            d.choiceTexts.push(choiceText);
        });
    }

    function hideDialogue(d) {
        d.box.setVisible(false);
        d.text.setVisible(false);
        d.choiceTexts.forEach(c => c.destroy());
        d.choiceTexts.length = 0;
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
                { label: "I don’t have any papers.", action: entrepNoProof }
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
            { label: "How to qualify for President’s/Dean’s List?", action: engList }
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
                { label: "I don’t have proof.", action: engNoProof }
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
            "To qualify:\nPresident’s Lister - GWA 1.25\nDean’s Lister - GWA 1.26–1.75",
            [
                { label: "Next", action: engListNext }
            ]
        );
    }

    function engListNext() {
        showDialogue(engDialogue,
            "If qualified, you’ll receive a form to fill out. Submit screenshots of your COR and COG to the section mayor’s provided drive.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(engDialogue) },
                { label: "DO YOU HAVE ANOTHER QUESTION?", action: startEng }
            ]
        );
    }

    // ==============================
    // 🧍 Player setup
    // ==============================
    scene.player = scene.physics.add.image(playerPositionX, playerPositionY, 'avatar')
        .setOrigin(0.5)
        .setDisplaySize(60, 60)
        .setDepth(3);
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

        // Move dialogue positions with NPCs
        [entrepDialogue, engDialogue].forEach(d => {
            if (d.box.visible) {
                d.box.setPosition(d.box.x, d.box.y);
                d.text.setPosition(d.box.x + 15, d.box.y + 15);
                d.choiceTexts.forEach((c, i) => c.setPosition(d.box.x + 15, d.box.y + 130 + i * 20));
            }
        });

        if (distEntrep < 120) {
            if (!entrepDialogue.box.visible) startEntrep();
        } else if (entrepDialogue.box.visible && distEntrep >= 150) {
            hideDialogue(entrepDialogue);
        }

        if (distEng < 120) {
            if (!engDialogue.box.visible) startEng();
        } else if (engDialogue.box.visible && distEng >= 150) {
            hideDialogue(engDialogue);
        }
    });
}
