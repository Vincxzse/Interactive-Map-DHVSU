export function createComlab1(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'room-tile').setOrigin(0, 0).setDepth(-1)

    scene.wall1 = scene.physics.add.staticImage(worldWidth / 2, 50, 'room-wall').setDisplaySize(worldWidth * 1.7, 100).setDepth(1)
    scene.wall1.body.setOffset(0, 0)
    scene.wall1.refreshBody()
    scene.wall1.setCrop(500, 0, 2000, scene.wall1.height)

    scene.wall2 = scene.physics.add.staticImage(20, 400, 'wall').setDisplaySize(50, worldHeight + 200).setDepth(1)
    scene.wall2.body.setOffset(0, 0)
    scene.wall2.refreshBody()

    scene.wall3 = scene.physics.add.staticImage(worldWidth - 20, 400, 'wall').setDisplaySize(50, worldHeight + 200).setDepth(1)
    scene.wall3.body.setOffset(0, 0)
    scene.wall3.refreshBody()
    
    scene.comLab1Doormat1 = scene.physics.add.staticImage(worldWidth - 70, 130, 'doormat1').setDisplaySize(50, 60).setDepth(1)
    scene.comLab1Doormat1.body.setOffset(0, 0)
    scene.comLab1Doormat1.refreshBody()
    
    scene.comLab1Doormat2 = scene.physics.add.staticImage(worldWidth - 70, worldHeight - 100, 'doormat1').setDisplaySize(50, 60).setDepth(1)
    scene.comLab1Doormat2.body.setOffset(0, 0)
    scene.comLab1Doormat2.refreshBody()
    
    scene.whiteboard = scene.physics.add.staticImage(worldWidth / 2, 50, 'whiteboard-2').setDisplaySize(300, 70).setDepth(1)
    scene.whiteboard.body.setOffset(0, 0)
    scene.whiteboard.refreshBody()

    scene.comp1x1f = scene.physics.add.staticImage(95, 200, 'computer-1').setDisplaySize(100, 70).setDepth(1)
    scene.comp1x1f.body.setOffset(0, 0)
    scene.comp1x1f.refreshBody()
    scene.comp3x3f = scene.physics.add.staticImage(95, 340, 'computer-3').setDisplaySize(100, 210).setDepth(1)
    scene.comp3x3f.body.setOffset(0, 0)
    scene.comp3x3f.refreshBody()
    scene.comp3x3s = scene.physics.add.staticImage(95, 580, 'computer-3').setDisplaySize(100, 210).setDepth(1)
    scene.comp3x3s.body.setOffset(0, 0)
    scene.comp3x3s.refreshBody()
    
    scene.computerWall = scene.physics.add.staticImage((worldWidth / 4) + 20, 700, 'computer-wall').setDisplaySize(500, 40).setDepth(1)
    scene.computerWall.body.setOffset(0, 0)
    scene.computerWall.refreshBody()

    scene.comp1x1s = scene.physics.add.staticImage((worldWidth / 2) - 50, 200, 'computer-1').setDisplaySize(100, 70).setDepth(1).setFlipX(true)
    scene.comp1x1s.body.setOffset(0, 0)
    scene.comp1x1s.refreshBody()
    scene.comp3x3t = scene.physics.add.staticImage((worldWidth / 2) - 50, 340, 'computer-3').setDisplaySize(100, 210).setDepth(1).setFlipX(true)
    scene.comp3x3t.body.setOffset(0, 0)
    scene.comp3x3t.refreshBody()
    scene.comp3x3fr = scene.physics.add.staticImage((worldWidth / 2) - 50, 580, 'computer-3').setDisplaySize(100, 210).setDepth(1).setFlipX(true)
    scene.comp3x3fr.body.setOffset(0, 0)
    scene.comp3x3fr.refreshBody()

    scene.comp1x1t = scene.physics.add.staticImage((worldWidth / 2) + 50, 200, 'computer-1').setDisplaySize(100, 70).setDepth(1)
    scene.comp1x1t.body.setOffset(0, 0)
    scene.comp1x1t.refreshBody()
    scene.comp3x3ft = scene.physics.add.staticImage((worldWidth / 2) + 50, 340, 'computer-3').setDisplaySize(100, 210).setDepth(1)
    scene.comp3x3fr.body.setOffset(0, 0)
    scene.comp3x3ft.refreshBody()
    scene.comp3x3sx = scene.physics.add.staticImage((worldWidth / 2) + 50, 580, 'computer-3').setDisplaySize(100, 210).setDepth(1)
    scene.comp3x3sx.body.setOffset(0, 0)
    scene.comp3x3sx.refreshBody()
    scene.comp2x2f = scene.physics.add.staticImage((worldWidth / 2) + 50, 750, 'computer-2').setDisplaySize(100, 140).setDepth(1).setFlipX(true)
    scene.comp2x2f.body.setOffset(0, 0)
    scene.comp2x2f.refreshBody()

    scene.comp1x1fr = scene.physics.add.staticImage(worldWidth - 95, 200, 'computer-1').setDisplaySize(100, 70).setDepth(1).setFlipX(true)
    scene.comp1x1fr.body.setOffset(0, 0)
    scene.comp1x1fr.refreshBody()
    scene.comp3x3sv = scene.physics.add.staticImage(worldWidth - 95, 340, 'computer-3').setDisplaySize(100, 210).setDepth(1).setFlipX(true)
    scene.comp3x3sv.body.setOffset(0, 0)
    scene.comp3x3sv.refreshBody()
    scene.comp3x3et = scene.physics.add.staticImage(worldWidth - 95, 550, 'computer-3').setDisplaySize(100, 210).setDepth(1).setFlipX(true)
    scene.comp3x3et.body.setOffset(0, 0)
    scene.comp3x3et.refreshBody()
    scene.comp2x2s = scene.physics.add.staticImage(worldWidth - 95, 720, 'computer-2').setDisplaySize(100, 140).setDepth(1)
    scene.comp2x2s.body.setOffset(0, 0)
    scene.comp2x2s.refreshBody()

    scene.adminTable = scene.physics.add.staticImage(250, 820, 'clinic-table').setDisplaySize(130, 70).setDepth(1).setFlipX(true)
    scene.adminTable.body.setOffset(0, 0)
    scene.adminTable.refreshBody()

    scene.itHead = scene.physics.add.staticImage(400, worldHeight - 200, 'bsit').setDisplaySize(70, 70).setDepth(1)
    scene.itHead.refreshBody()

    // NPC Name Label
    scene.itHeadName = scene.add.text(scene.itHead.x, scene.itHead.y - 60, "Mr. John Bernard C. Tungol", {
        fontSize: "14px",
        fill: "#fff",
        fontStyle: "bold",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: { x: 4, y: 2 }
    }).setOrigin(0.5).setDepth(5);

    // ==============================
    // 💬 Dialogue System with Scrollable Box
    // ==============================
    function createDialogueSystem(npcX, npcY) {
        const boxX = npcX - 280;
        const boxY = npcY - 40;
        const boxWidth = 500;
        const maxBoxHeight = 200;
        
        const box = scene.add.graphics()
            .setDepth(10)
            .setVisible(false);

        // Create a container for scrollable content
        const scrollContainer = scene.add.container(0, 0).setDepth(11).setVisible(false);
        
        const text = scene.add.text(boxX + 20, boxY + 20, "", {
            fontSize: "14px",
            fill: "#222222",
            wordWrap: { width: 460 },
            lineSpacing: 4
        }).setDepth(11).setVisible(false);

        const choiceTexts = [];
        let typewriterEvent = null;
        let isTyping = false;
        let scrollOffset = 0;

        return { box, text, choiceTexts, typewriterEvent, isTyping, boxX, boxY, boxWidth, maxBoxHeight, scrollContainer, scrollOffset };
    }

    const itDialogue = createDialogueSystem(scene.itHead.x, scene.itHead.y);

    function showDialogue(d, text, choices = []) {
        // Clear any existing typewriter event
        if (d.typewriterEvent) {
            d.typewriterEvent.remove();
            d.typewriterEvent = null;
        }

        // Clear old choices
        d.choiceTexts.forEach(c => c.destroy());
        d.choiceTexts.length = 0;
        d.scrollOffset = 0;

        // Draw initial box
        const boxHeight = Math.min(d.maxBoxHeight, 150);
        d.box.clear();
        d.box.fillStyle(0xffffff, 0.95);
        d.box.fillRoundedRect(d.boxX, d.boxY, d.boxWidth, boxHeight, 12);
        d.box.lineStyle(3, 0x333333, 1);
        d.box.strokeRoundedRect(d.boxX, d.boxY, d.boxWidth, boxHeight, 12);
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
                    const totalContentHeight = (textBounds.bottom - d.boxY) + totalChoicesHeight + 30;
                    const boxHeight = Math.min(totalContentHeight, d.maxBoxHeight);
                    
                    // Redraw box with proper height
                    d.box.clear();
                    d.box.fillStyle(0xffffff, 0.95);
                    d.box.fillRoundedRect(d.boxX, d.boxY, d.boxWidth, boxHeight, 12);
                    d.box.lineStyle(3, 0x333333, 1);
                    d.box.strokeRoundedRect(d.boxX, d.boxY, d.boxWidth, boxHeight, 12);
                    
                    // Add scrollbar if content overflows
                    if (totalContentHeight > d.maxBoxHeight) {
                        d.box.fillStyle(0xcccccc, 0.8);
                        d.box.fillRoundedRect(d.boxX + d.boxWidth - 15, d.boxY + 5, 10, boxHeight - 10, 5);
                    }
                    
                    d.box.setVisible(true);
                    
                    // Create a mask for the content area
                    const maskShape = scene.make.graphics();
                    maskShape.fillStyle(0xffffff);
                    maskShape.fillRoundedRect(d.boxX + 10, d.boxY + 10, d.boxWidth - 30, boxHeight - 20, 8);
                    const mask = maskShape.createGeometryMask();
                    
                    // Apply mask to text
                    d.text.setMask(mask);
                    
                    // Show choices after typing is complete
                    choices.forEach((choice, i) => {
                        const choiceText = scene.add.text(d.boxX + 20, choiceStartY + i * 20, choice.label, {
                            fontSize: "13px",
                            fill: "#0066cc",
                            fontStyle: "bold"
                        }).setInteractive().setDepth(11).setVisible(true);
                        
                        // Apply same mask to choices
                        choiceText.setMask(mask);
                        
                        choiceText.on("pointerover", () => {
                            choiceText.setStyle({ fill: "#0099ff" });
                        });
                        choiceText.on("pointerout", () => {
                            choiceText.setStyle({ fill: "#0066cc" });
                        });
                        choiceText.on("pointerdown", () => choice.action());
                        d.choiceTexts.push(choiceText);
                    });

                    // Store mask for later cleanup
                    d.mask = mask;
                    d.maskShape = maskShape;

                    // Enable scrolling if needed
                    if (totalContentHeight > d.maxBoxHeight) {
                        scene.input.on('wheel', (pointer, gameObjects, deltaX, deltaY) => {
                            if (d.box.visible) {
                                d.scrollOffset += deltaY * 0.5;
                                const maxScroll = totalContentHeight - d.maxBoxHeight;
                                d.scrollOffset = Math.max(0, Math.min(d.scrollOffset, maxScroll));
                                
                                // Update text and choice positions
                                d.text.setY(d.boxY + 20 - d.scrollOffset);
                                d.choiceTexts.forEach((ct, i) => {
                                    ct.setY(choiceStartY + i * 20 - d.scrollOffset);
                                });
                            }
                        });
                    }
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
        d.scrollOffset = 0;
        
        // Clean up mask
        if (d.mask) {
            d.text.clearMask();
            d.choiceTexts.forEach(ct => ct.clearMask());
        }
        if (d.maskShape) {
            d.maskShape.destroy();
            d.maskShape = null;
        }
        d.mask = null;
    }

    // ==============================
    // 💬 BSIT Head Dialogue Tree
    // ==============================
    function startIT() {
        showDialogue(itDialogue, "Greetings! How can I help you?", [
            { label: "Who are the Instructors at this Department?", action: itInstructors },
            { label: "How can I Consult on my Failing Subject?", action: itConsult },
            { label: "Does this Department have Laboratory Rooms?", action: itLab },
            { label: "How can I Enroll as an Irregular Student?", action: itIrreg },
            { label: "Where can I find my Subject Schedules?", action: itSchedule },
            { label: "How to qualify for President's/Dean's List?", action: itList }
        ]);
    }

    function itInstructors() {
        showDialogue(itDialogue,
            "This is the list of Instructors employed for BSIT Department:\n\nMR ALDRIN S. DUANA\nMR KEVIN JOHN T. GARCIA\nMR MARVIE M. MACASPAC\nMR LOUGIN A. MIRANDA\nMR DAVEMM M. SALALILA\nMR JOHN BERNARD C. TUNGOL\nMR JHERWIN T ALIPIO",
            [
                { label: "THANK YOU.", action: () => hideDialogue(itDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startIT }
            ]
        );
    }

    function itConsult() {
        showDialogue(itDialogue,
            "For this matter, we can assess your concern by bringing your scores from your quizzes, exams, performance task and Attendance held by the Instructor who are assigned to your specific subject as a proof for your concern.",
            [
                { label: "I have the required proof of papers.", action: itHasProof },
                { label: "I don't have any papers as proof.", action: itNoProof }
            ]
        );
    }

    function itHasProof() {
        showDialogue(itDialogue,
            "As we assess your scores and records that you have provided. If you meet the required grade of at least 3 on your grade, your subject Instructor will correct your grades to a pass, and if you did not meet the required grade, you will have a 5 grade or fail in your subject.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(itDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startIT }
            ]
        );
    }

    function itNoProof() {
        showDialogue(itDialogue,
            "For this matter, we can assess your concern by bringing your scores from your quizzes, exams, performance task and Attendance held by the Instructor who are assigned to your specific subject as a proof for your concern.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(itDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startIT }
            ]
        );
    }

    function itLab() {
        showDialogue(itDialogue,
            "Yes, our Campus has Laboratory Rooms equipped with computers and equipments for BSIT students. Computer Laboratory 1 is located at MRM 2nd floor, while Computer Laboratory 2 is located at ARM 2nd floor.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(itDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startIT }
            ]
        );
    }

    function itIrreg() {
        showDialogue(itDialogue,
            "The Campus will provide a schedule for Irregular Students. The process of enrolling as an Irregular Student, you must have documents like:\n• Letter of Intent\n• School ID (Photocopy)\n• Parent/Guardian ID (Photocopy)\n\nIf you have these requirements, we will give you a form where you will put your subjects to enroll and schedule. (Note: You must only enroll subjects that will not affect other schedules or you may experience some conflicts on your subjects enrolled).",
            [
                { label: "THANK YOU.", action: () => hideDialogue(itDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startIT }
            ]
        );
    }

    function itSchedule() {
        showDialogue(itDialogue,
            "The Campus will provide your schedules specific for BSIT program. You can see it through the Campus Official Page.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(itDialogue) },
                { label: "I HAVE ANOTHER QUESTION.", action: startIT }
            ]
        );
    }

    function itList() {
        showDialogue(itDialogue,
            "If you are applying for President's Lister, you must have a General Weighted Average Grade of 1.25. While for Dean's Lister you must have at least 1.26-1.75 General Weighted of your Grade.",
            [
                { label: "Next", action: itListNext }
            ]
        );
    }

    function itListNext() {
        showDialogue(itDialogue,
            "If you are qualified for either of the two, we will give you a Form that you will answer. Also you must have a Screenshot of your Certificate of Registration (COR) and Certificate of Grade (COG) that you will submit on a Google Drive that your section Mayor will provide.",
            [
                { label: "THANK YOU.", action: () => hideDialogue(itDialogue) },
                { label: "DO YOU HAVE ANOTHER QUESTION?", action: startIT }
            ]
        );
    }

    // Player and colliders
    scene.player = scene.physics.add.sprite(playerPositionX, playerPositionY, 'avatar-sheet', 0).setOrigin(0, 0).setDisplaySize(60, 60).setDepth(1);
    scene.player.body.setSize(14, 14);
    scene.player.body.setOffset(23, 46);
    scene.player.body.allowGravity = false
    scene.physics.add.collider(scene.player, scene.wall1)
    scene.physics.add.collider(scene.player, scene.wall2)
    scene.physics.add.collider(scene.player, scene.wall3)
    scene.physics.add.collider(scene.player, scene.comp1x1f)
    scene.physics.add.collider(scene.player, scene.comp1x1fr)
    scene.physics.add.collider(scene.player, scene.comp1x1s)
    scene.physics.add.collider(scene.player, scene.comp1x1t)
    scene.physics.add.collider(scene.player, scene.comp3x3f)
    scene.physics.add.collider(scene.player, scene.comp3x3s)
    scene.physics.add.collider(scene.player, scene.comp3x3t)
    scene.physics.add.collider(scene.player, scene.comp3x3fr)
    scene.physics.add.collider(scene.player, scene.comp3x3ft)
    scene.physics.add.collider(scene.player, scene.comp3x3sx)
    scene.physics.add.collider(scene.player, scene.comp3x3sv)
    scene.physics.add.collider(scene.player, scene.comp3x3et)
    scene.physics.add.collider(scene.player, scene.comp2x2f)
    scene.physics.add.collider(scene.player, scene.comp2x2s)
    scene.physics.add.collider(scene.player, scene.computerWall)
    scene.physics.add.collider(scene.player, scene.adminTable)

    scene.cameras.main.startFollow(scene.player, true, 1, 1)
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight)
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight)
    scene.player.setCollideWorldBounds(true)

    // ==============================
    // 🕹️ Proximity detection
    // ==============================
    scene.events.on('update', () => {
        const distIT = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, scene.itHead.x, scene.itHead.y);

        if (distIT < 120) {
            if (!itDialogue.box.visible) startIT();
        } else if (itDialogue.box.visible && distIT >= 150) {
            hideDialogue(itDialogue);
        }
    });
}