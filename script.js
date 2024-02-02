window.onload = function () {
    let messageIndex = 0;
    let noMessageIndex = 0;
    let noButtonClickCounter = 0;
    let heartClickTimeout;
    const noButton = document.getElementById("moveNoButton");


    noButton.disabled = false; // Disable the "No" button
    const messages = [
        "Puso ko yan babe 😛",
        "Aray ko babe masakit 🙃",
        "Umisa pa nga talga 😂",
        "Gigil ka ba babe 🤪",
        "I love you 😘",
    ];

    const noMessages = [
        "Kala mo ah bawal no babe 🤪",
        "ah No pa din😒",
        "Ayaw talaga nito oh 🤨",
        "Babeeeee gigil na ko sayo 😤",
        "sige babe tuloy mo lang yan 🙄",
        "Sumbong kita kay tita ayaw mo HAHAHA"
    ];

    function showResponse(response) {
        if (response === 'Yes') {
            // const heart = document.getElementById('heart');
            // heart.classList.add('heartbeat');
            // setTimeout(() => {
            //     heart.classList.remove('heartbeat');
            // }, 800);
            // Display GIF modal after 2 seconds
            openModal("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXAxZGx6aG15emV3NmtzbmM0NXN2NWJmaTJvMTh6cDlreWVrYWNpbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PC00yOa6VywWyjkVn6/giphy.gif");
            // setTimeout(() => {
            //     heart.classList.remove('heartbeat');
            // }, 800);
            showSpecialMessage();

        } else {
            alert('Maybe next time...');
        }
    }

    function moveNoButton() {
        
        const randomAnimation = Math.floor(Math.random() * 10) + 1;

        switch (randomAnimation) {
            case 1:
                disappearAndAppear(noButton);
                break;
            case 2:
                dropAndSpawn(noButton);
                break;
            case 3:
                breakIntoPieces(noButton);
                break;
            case 4:
                rotateAndScale(noButton);
                break;
            case 5:
                shake(noButton);
                break;
            case 6:
                moveRandomly(noButton);
                break;
            case 7:
                flip(noButton);
                break;
            case 8:
                spin(noButton);
                break;
            case 9:
                zoomInAndOut(noButton);
                break;
            case 10:
                pulsate(noButton);
                break;
        }

        noButtonClickCounter++;
        if (noButtonClickCounter % 14 === 0 ) {
            openModal("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHFibGc3NHJtb25leGduaWQyZDVydmswNHh6eXo0bGF4eWczdTAyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xMbKLAkRLHYNgI/giphy.gif");
        } else {
            if (noButtonClickCounter % 2 === 0) {
                showNextMessage(true)
            }
        }
        
    }

    function disappearAndAppear(element) {
        element.style.opacity = 0;
        setTimeout(() => {
            repositionButton(element);
            element.style.opacity = 1;
        }, 500);
    }

    function dropAndSpawn(element) {
        element.style.transition = 'top 1s ease-out';

        element.style.top = window.innerHeight + 'px';

        setTimeout(() => {
            repositionButton(element);
            element.style.transition = 'none';
        }, 500);
    }

    function breakIntoPieces(element) {
        element.style.transition = 'transform 1s ease-out';

        element.style.transform = 'scale(0)';

        setTimeout(() => {
            repositionButton(element);
            element.style.transform = 'scale(1)';
            element.style.transition = 'none';
        }, 500);
    }

    function rotateAndScale(element) {
        element.style.transition = 'transform 1s ease-out';

        element.style.transform = 'rotate(360deg) scale(0)';

        setTimeout(() => {
            repositionButton(element);
            element.style.transform = 'rotate(0deg) scale(1)';
            element.style.transition = 'none';
        }, 500);
    }

    function shake(element) {
        element.style.transition = 'transform 0.1s ease-in-out';

        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                element.style.transform = 'translateX(10px)';
            }, i * 100);

            setTimeout(() => {
                element.style.transform = 'translateX(-10px)';
            }, i * 100 + 50);
        }

        setTimeout(() => {
            repositionButton(element);
            element.style.transform = 'translateX(0)';
            element.style.transition = 'none';
        }, 500);
    }

    function moveRandomly(element) {
        const randomX = Math.random() * (window.innerWidth - element.clientWidth);
        const randomY = Math.random() * (window.innerHeight - element.clientHeight);

        element.style.transition = 'left 1s ease-out, top 1s ease-out';
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;

        setTimeout(() => {
            repositionButton(element);
            element.style.transition = 'none';
        }, 500);
    }

    function flip(element) {
        element.style.transition = 'transform 1s ease-out';
        element.style.transform = 'scaleX(-1)';

        setTimeout(() => {
            repositionButton(element);
            element.style.transform = 'scaleX(1)';
            element.style.transition = 'none';
        }, 500);
    }

    function spin(element) {
        element.style.transition = 'transform 1s ease-out';
        element.style.transform = 'rotate(360deg)';

        setTimeout(() => {
            repositionButton(element);
            element.style.transform = 'rotate(0deg)';
            element.style.transition = 'none';
        }, 500);
    }

    function zoomInAndOut(element) {
        element.style.transition = 'transform 1s ease-out';
        element.style.transform = 'scale(1.5)';

        setTimeout(() => {
            repositionButton(element);
            element.style.transform = 'scale(1)';
            element.style.transition = 'none';
        }, 500);
    }

    function pulsate(element) {
        element.style.transition = 'transform 0.5s ease-in-out';
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                element.style.transform = 'scale(1.1)';
            }, i * 100);

            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, i * 100 + 50);
        }

        setTimeout(() => {
            repositionButton(element);
            element.style.transform = 'scale(1)';
            element.style.transition = 'none';
        }, 500);
    }

    function repositionButton(element) {
        const randomX = Math.random() * (window.innerWidth - element.clientWidth);
        const randomY = Math.random() * (window.innerHeight - element.clientHeight);

        element.style.position = 'absolute';
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }
    
    function showSpecialMessage() {
        const messageBox = document.getElementById('messageBox');
        const messageContent = document.getElementById('messageContent');
        messageContent.innerText = `
            Hi Babe, sorry sa mga pagkukulang ko, 
            I love you so much 😘
        `;

        // Clear existing timeout to reset the interval counter
        clearTimeout(heartClickTimeout);
        messageBox.classList.add('show');
        // noButton.disabled = true;
        heartClickTimeout = setTimeout(() => {
            messageBox.classList.remove('show');
            // noButton.disabled = false;
        }, 10000);
    }

    function showNextMessage(isNo=false) {
        const messageBox = document.getElementById('messageBox');
        const messageContent = document.getElementById('messageContent');
        let url = "";
        if (isNo) {
            if (noMessageIndex < noMessages.length) {
                messageContent.innerText = noMessages[noMessageIndex];
                noMessageIndex++;
            } else {
                noMessageIndex = 0;
                messageContent.innerText = noMessages[noMessageIndex];
            }
        } else {
            if (messageIndex < messages.length) {
                messageContent.innerText = messages[messageIndex];
                messageIndex++;
            } else {
                messageIndex = 0;
                messageContent.innerText = messages[messageIndex];
            }
        }
        
        
        // Clear existing timeout to reset the interval counter
        clearTimeout(heartClickTimeout);
        messageBox.classList.add('show');
        // noButton.disabled = true;
        heartClickTimeout = setTimeout(() => {
            messageBox.classList.remove('show');
            // noButton.disabled = false;
        }, 2000);
    }

    function openModal(url) {
        const modal = document.getElementById('gifModal');
        const gifImage = document.getElementById('gifImage');
        gifImage.src = url; 
        modal.style.display = 'block';
    }
    
    function closeModal(isYes=false) {
        const modal = document.getElementById('gifModal');
        modal.style.display = 'none';

        if (isYes){

        }
    }

    document.getElementById('yesButton').addEventListener('click', function () {
        showResponse('Yes');
    });

    document.getElementById('moveNoButton').addEventListener('click', function () {
        moveNoButton();
    });

    document.getElementById('heart').addEventListener('click', function () {
        showNextMessage();
    });

    document.getElementById('close').addEventListener('click', function () {
        closeModal();
    })
};
