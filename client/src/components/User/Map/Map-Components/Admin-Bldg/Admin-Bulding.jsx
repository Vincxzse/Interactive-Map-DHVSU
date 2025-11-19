// Helper function to notify React of location changes
function notifyLocationChange(location, targets) {
    window.dispatchEvent(new CustomEvent('locationChanged', {
        detail: { location, targets }
    }));
}

export function createAdmin(scene, worldWidth, worldHeight, playerPositionX, playerPositionY) {

    scene.bg1 = scene.add.tileSprite(0, 0, worldWidth, worldHeight, 'mrm-floor').setOrigin(0, 0).setDepth(-1);

    scene.admin1 = scene.physics.add.staticImage(375, 560, 'admin1').setDisplaySize(800, 500).setDepth(2);
    scene.admin1.body.setOffset(0, 0);
    scene.admin1.refreshBody();

    scene.admin2 = scene.physics.add.staticImage(worldWidth - 375, 500, 'admin2').setDisplaySize(800, 600).setDepth(2);
    scene.admin2.body.setOffset(0, 0);
    scene.admin2.refreshBody();

    scene.admin3 = scene.physics.add.staticImage(375, -170, 'admin3').setDisplaySize(800, 500).setDepth(2);
    scene.admin3.body.setOffset(0, 0);
    scene.admin3.refreshBody();

    scene.adminCR = scene.physics.add.staticImage(worldWidth - 375, -170, 'adminCR').setDisplaySize(800, 500).setDepth(2);
    scene.adminCR.body.setOffset(0, 0);
    scene.adminCR.refreshBody();

    scene.admin4 = scene.physics.add.staticImage(worldWidth / 2, -120, 'admin4').setDisplaySize(300, 400).setDepth(2);
    scene.admin4.body.setOffset(0, 0);
    scene.admin4.refreshBody();

    // Hitboxes group
    scene.hitboxes = scene.physics.add.staticGroup();

    // Exits
    scene.AdminExit1 = scene.hitboxes.create(worldWidth / 2, worldHeight, null).setSize(500, 10).setVisible(false);

    scene.physics.add.overlap(scene.player, scene.AdminExit1, () => {
        Object.values(scene.children.list).forEach(obj => obj.destroy());
        scene.physics.world.colliders.destroy();

        createOutside(scene, worldWidth, worldHeight);
        scene.currentMap = "outside";
    });

    // Registrar NPC
    scene.registrar = scene.physics.add.staticImage(500, 100, 'registrar').setDisplaySize(60, 60).setDepth(1);
    scene.registrar.body.setOffset(0, 0);
    scene.registrar.refreshBody();

    scene.registrarName = scene.add.text(scene.registrar.x, scene.registrar.y - 40, "Registrar", {
        fontSize: "14px",
        fill: "#fff",
        fontStyle: "bold",
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: { x: 6, y: 3 }
    }).setOrigin(0.5).setDepth(5);

    // Dialogue System
    function createDialogueSystem(npcX, npcY, maxHeight = 400) {
        const boxX = npcX - 280;
        const boxY = npcY - 40;
        const boxWidth = 560;
        
        const box = scene.add.graphics()
            .setDepth(10)
            .setVisible(false);

        const text = scene.add.text(boxX + 20, boxY + 20, "", {
            fontSize: "15px",
            fill: "#1a1a1a",
            wordWrap: { width: 520 },
            lineSpacing: 6
        }).setDepth(11).setVisible(false);

        const choiceTexts = [];
        let typewriterEvent = null;
        let isTyping = false;
        let currentScrollOffset = 0;

        return { box, text, choiceTexts, typewriterEvent, isTyping, boxX, boxY, boxWidth, maxHeight, currentScrollOffset };
    }

    const registrarDialogue = createDialogueSystem(scene.registrar.x, scene.registrar.y, 450);

    function showDialogue(d, text, choices = []) {
        // Clear any existing typewriter event
        if (d.typewriterEvent) {
            d.typewriterEvent.remove();
            d.typewriterEvent = null;
        }

        // Clear old choices
        d.choiceTexts.forEach(c => c.destroy());
        d.choiceTexts.length = 0;
        d.currentScrollOffset = 0;

        // Initial box
        const estimatedHeight = Math.min(200, d.maxHeight);
        d.box.clear();
        
        // Modern white background with subtle shadow
        d.box.fillStyle(0xffffff, 1);
        d.box.fillRoundedRect(d.boxX, d.boxY, d.boxWidth, estimatedHeight, 16);
        
        // Border with blue accent
        d.box.lineStyle(3, 0x2563eb, 1);
        d.box.strokeRoundedRect(d.boxX, d.boxY, d.boxWidth, estimatedHeight, 16);
        
        // Subtle inner border for depth
        d.box.lineStyle(1, 0xe5e7eb, 0.8);
        d.box.strokeRoundedRect(d.boxX + 2, d.boxY + 2, d.boxWidth - 4, estimatedHeight - 4, 14);
        
        d.box.setVisible(true);

        d.text.setVisible(true).setText("").setStyle({
            fontSize: "15px",
            fill: "#1a1a1a",
            wordWrap: { width: 520 },
            lineSpacing: 6,
            fontFamily: "Arial, sans-serif"
        });
        d.isTyping = true;

        // Typewriter effect
        let charIndex = 0;
        d.typewriterEvent = scene.time.addEvent({
            delay: 20,
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
                    const choiceStartY = textBounds.bottom + 15;
                    const choiceHeight = 32;
                    const choiceSpacing = 8;
                    const totalChoicesHeight = choices.length > 0 ? (choices.length * choiceHeight) + ((choices.length - 1) * choiceSpacing) : 0;
                    let boxHeight = (textBounds.bottom - d.boxY) + totalChoicesHeight + 40;
                    
                    // Limit box height and enable scrolling if needed
                    const needsScroll = boxHeight > d.maxHeight;
                    if (needsScroll) {
                        boxHeight = d.maxHeight;
                    }
                    
                    // Redraw box with proper height and modern styling
                    d.box.clear();
                    
                    // Clean white background
                    d.box.fillStyle(0xffffff, 1);
                    d.box.fillRoundedRect(d.boxX, d.boxY, d.boxWidth, boxHeight, 16);
                    
                    // Blue border
                    d.box.lineStyle(3, 0x2563eb, 1);
                    d.box.strokeRoundedRect(d.boxX, d.boxY, d.boxWidth, boxHeight, 16);
                    
                    // Inner border for depth
                    d.box.lineStyle(1, 0xe5e7eb, 0.8);
                    d.box.strokeRoundedRect(d.boxX + 2, d.boxY + 2, d.boxWidth - 4, boxHeight - 4, 14);
                    
                    d.box.setVisible(true);
                    
                    // Add scroll indicator if needed
                    if (needsScroll) {
                        const scrollText = scene.add.text(d.boxX + d.boxWidth - 30, d.boxY + boxHeight - 25, "⬇", {
                            fontSize: "18px",
                            fill: "#2563eb",
                            fontStyle: "bold"
                        }).setDepth(11).setVisible(true);
                        d.choiceTexts.push(scrollText);
                    }
                    
                    // Show choices after typing is complete
                    choices.forEach((choice, i) => {
                        const yPos = choiceStartY + i * (choiceHeight + choiceSpacing);
                        
                        // Choice background
                        const choiceBg = scene.add.graphics().setDepth(10);
                        choiceBg.fillStyle(0xeff6ff, 1);
                        choiceBg.fillRoundedRect(d.boxX + 15, yPos - 5, d.boxWidth - 30, choiceHeight, 8);
                        choiceBg.lineStyle(2, 0x93c5fd, 1);
                        choiceBg.strokeRoundedRect(d.boxX + 15, yPos - 5, d.boxWidth - 30, choiceHeight, 8);
                        choiceBg.setVisible(true);
                        d.choiceTexts.push(choiceBg);
                        
                        const choiceText = scene.add.text(d.boxX + 25, yPos + 3, choice.label, {
                            fontSize: "14px",
                            fill: "#1e40af",
                            fontStyle: "bold",
                            fontFamily: "Arial, sans-serif"
                        }).setInteractive().setDepth(11).setVisible(true);
                        
                        choiceText.on("pointerover", () => {
                            choiceText.setStyle({ fill: "#2563eb" });
                            choiceBg.clear();
                            choiceBg.fillStyle(0xdbeafe, 1);
                            choiceBg.fillRoundedRect(d.boxX + 15, yPos - 5, d.boxWidth - 30, choiceHeight, 8);
                            choiceBg.lineStyle(2, 0x3b82f6, 1);
                            choiceBg.strokeRoundedRect(d.boxX + 15, yPos - 5, d.boxWidth - 30, choiceHeight, 8);
                        });
                        
                        choiceText.on("pointerout", () => {
                            choiceText.setStyle({ fill: "#1e40af" });
                            choiceBg.clear();
                            choiceBg.fillStyle(0xeff6ff, 1);
                            choiceBg.fillRoundedRect(d.boxX + 15, yPos - 5, d.boxWidth - 30, choiceHeight, 8);
                            choiceBg.lineStyle(2, 0x93c5fd, 1);
                            choiceBg.strokeRoundedRect(d.boxX + 15, yPos - 5, d.boxWidth - 30, choiceHeight, 8);
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
        d.currentScrollOffset = 0;
    }
    
    // Registrar Dialogue Flow
    function startRegistrar() {
        showDialogue(registrarDialogue, "Hello! Welcome to the Office of the Registrar. How may I assist you today?", [
            { label: "📝 I need to add, drop, or change a subject", action: () => registrarAddDrop() },
            { label: "📋 I want to enroll", action: () => registrarEnrollment() },
            { label: "🔄 I'm transferring to DHVSU", action: () => registrarTransfer() },
            { label: "❌ Close", action: () => hideDialogue(registrarDialogue) }
        ]);
    }

    function registrarAddDrop() {
        showDialogue(registrarDialogue, "For adding, dropping, or changing subjects, this is available for all irregular students. You'll need your Certificate of Registration (COR), Academic Evaluation, and the Adding/Dropping/Changing Form.", [
            { label: "📄 What documents do I need?", action: () => registrarAddDropDocs() },
            { label: "🔢 What are the steps?", action: () => registrarAddDropSteps() },
            { label: "⏱️ How long does it take?", action: () => registrarAddDropTime() },
            { label: "◀️ Back to main menu", action: startRegistrar }
        ]);
    }

    function registrarAddDropDocs() {
        showDialogue(registrarDialogue, "You'll need three documents:\n\n1. Certificate of Registration (COR)\n2. Academic Evaluation Record\n3. Adding, Dropping, Changing Form", [
            { label: "🔢 Tell me the process steps", action: () => registrarAddDropSteps() },
            { label: "◀️ Back", action: () => registrarAddDrop() }
        ]);
    }

    function registrarAddDropSteps() {
        showDialogue(registrarDialogue, "Here's the step-by-step process:\n\nStep 1: Get copies of your COR and Academic Evaluation from the Registrar (1 min)\n\nStep 2: Secure the Adding/Dropping/Changing Form from Campus Secretary (1 min)\n\nStep 3: Submit to Campus Director for approval - includes evaluation and encoding (8 min)\n\nStep 4: Submit approved form to Campus Secretary who forwards to Registrar (30 min)", [
            { label: "⏱️ What's the total time?", action: () => registrarAddDropTime() },
            { label: "◀️ Back", action: () => registrarAddDrop() }
        ]);
    }

    function registrarAddDropTime() {
        showDialogue(registrarDialogue, "The total processing time is approximately 40 minutes. This includes document retrieval, form completion, approval, and final processing.", [
            { label: "📄 What documents again?", action: () => registrarAddDropDocs() },
            { label: "◀️ Back", action: () => registrarAddDrop() }
        ]);
    }

    function registrarEnrollment() {
        showDialogue(registrarDialogue, "Welcome! The enrollment process at DHVSU Lubao Campus is straightforward. Let me guide you through it.", [
            { label: "📄 What documents do I need?", action: () => registrarEnrollDocs() },
            { label: "🔢 What are the steps?", action: () => registrarEnrollSteps() },
            { label: "⏱️ How long does it take?", action: () => registrarEnrollTime() },
            { label: "◀️ Back to main menu", action: startRegistrar }
        ]);
    }

    function registrarEnrollDocs() {
        showDialogue(registrarDialogue, "For enrollment, you'll need:\n\n1. Clearance (1 original) from Accounting Office in DHVSU Bacolor\n2. Academic Evaluation (1 original) from University Registrar\n3. Pre-registration Form (1 original) from your College/Campus\n4. Customer Survey Form (1 original) from your College/Campus", [
            { label: "🔢 Tell me the process steps", action: () => registrarEnrollSteps() },
            { label: "◀️ Back", action: () => registrarEnrollment() }
        ]);
    }

    function registrarEnrollSteps() {
        showDialogue(registrarDialogue, "Enrollment process:\n\nStep 1: Visit Director's Office - get forms and sign log book. Admin aide verifies records (1 min)\n\nStep 2: Submit forms to Chairperson for subject advising (9 min)\n\nStep 3: Get Campus Director approval (2 min)\n\nStep 4: Submit to Registrar for encoding. You'll receive your Certificate of Registration (1 day)", [
            { label: "⏱️ Total processing time?", action: () => registrarEnrollTime() },
            { label: "◀️ Back", action: () => registrarEnrollment() }
        ]);
    }

    function registrarEnrollTime() {
        showDialogue(registrarDialogue, "The total enrollment process takes approximately 1 day and 12 minutes. Most of the time is for the final encoding and issuance of your Certificate of Registration.", [
            { label: "📄 Documents needed again?", action: () => registrarEnrollDocs() },
            { label: "◀️ Back", action: () => registrarEnrollment() }
        ]);
    }

    function registrarTransfer() {
        showDialogue(registrarDialogue, "Welcome to DHVSU! Transferring is a Government to Government (G2G) transaction for all bona fide students. Let me help you with the process.", [
            { label: "📄 What documents do I need?", action: () => registrarTransferDocs() },
            { label: "🔢 What are the steps?", action: () => registrarTransferSteps() },
            { label: "⏱️ How long does it take?", action: () => registrarTransferTime() },
            { label: "◀️ Back to main menu", action: startRegistrar }
        ]);
    }

    function registrarTransferDocs() {
        showDialogue(registrarDialogue, "Transfer requirements (1 original + 1 photocopy each):\n\n1. Official Transfer of Credentials\n2. Copy of Grades and credits earned\n3. Certificate of Good Moral\n4. Birth Certificate (from PSA)\n5. Valid ID", [
            { label: "🔢 Tell me the process", action: () => registrarTransferSteps() },
            { label: "◀️ Back", action: () => registrarTransfer() }
        ]);
    }

    function registrarTransferSteps() {
        showDialogue(registrarDialogue, "Transfer process:\n\nStep 1: Submit endorsement letter and documents to your College/Campus. Chairperson evaluates and endorses (10 min)\n\nStep 2: Submit to Admission Office for entrance exam scheduling (2 min)\n\nStep 3: Take entrance exam. Results processed (40 min)\n\nStep 4: Submit required enrollment documents to admin aide. Receive Satisfaction Measurement Form (3 min)", [
            { label: "⏱️ Total time needed?", action: () => registrarTransferTime() },
            { label: "◀️ Back", action: () => registrarTransfer() }
        ]);
    }

    function registrarTransferTime() {
        showDialogue(registrarDialogue, "The complete transfer process takes approximately 55 minutes. This includes evaluation, entrance exam, and document processing. We look forward to having you at DHVSU Lubao Campus!", [
            { label: "📄 Documents again?", action: () => registrarTransferDocs() },
            { label: "◀️ Back", action: () => registrarTransfer() }
        ]);
    }

    // Player and colliders
    scene.player = scene.physics.add.sprite(playerPositionX, playerPositionY, 'avatar-sheet', 0).setOrigin(0, 0).setDisplaySize(60, 60).setDepth(1);
    scene.player.body.setSize(14, 14);
    scene.player.body.setOffset(23, 46);
    scene.player.body.allowGravity = false;
    scene.physics.add.collider(scene.player, scene.admin1);
    scene.physics.add.collider(scene.player, scene.admin2);
    scene.physics.add.collider(scene.player, scene.admin3);
    scene.physics.add.collider(scene.player, scene.admin4);
    scene.physics.add.collider(scene.player, scene.adminCR);

    scene.cameras.main.startFollow(scene.player, true, 1, 1);
    
    scene.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    scene.physics.world.setBounds(0, 0, worldWidth, worldHeight);

    // Update loop for NPC interactions
    scene.events.on('update', () => {
        const distRegistrar = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, scene.registrar.x, scene.registrar.y);
        if (distRegistrar < 120) {
            if (!registrarDialogue.box.visible) startRegistrar();
        } else if (registrarDialogue.box.visible && distRegistrar >= 150) {
            hideDialogue(registrarDialogue);
        }
    });
    
    // Keyboard movements
    scene.cursor = scene.input.keyboard.createCursorKeys();
    scene.keys = scene.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
    });
    scene.player.setCollideWorldBounds(true);

    // Zoom functionality
    scene.input.on('wheel', (pointer, GameObjects, deltaX, deltaY) => {
        let cam = scene.cameras.main;
        let zoomChange = deltaY > 0 ? - 0.05 : 0.05;
        let newZoom = Phaser.Math.Clamp(cam.zoom + zoomChange, 1, 2);
        cam.zomTo(newZoom, 10);
    });

    notifyLocationChange('Admin Building', []);
}