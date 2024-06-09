
document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});


function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
}
let timerInterval;
let totalTimeSpent = 0;

function startStopTimer() {
    const button = document.querySelector('#timeSpent button');

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        button.textContent = 'Start Timer';
    } else {
        const startTime = Date.now();
        timerInterval = setInterval(() => {
            const currentTime = Date.now();
            totalTimeSpent += Math.floor((currentTime - startTime) / 60000);
            document.getElementById('totalTime').textContent = totalTimeSpent;
        }, 60000); // Update every minute
        button.textContent = 'Stop Timer';
    }
}
document.getElementById('scheduleSessionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const sessionDate = document.getElementById('sessionDate').value;
    const sessionTime = document.getElementById('sessionTime').value;
    const sessionSubject = document.getElementById('sessionSubject').value;
    const sessionDescription = document.getElementById('sessionDescription').value;

   
    console.log('Scheduled session details:');
    console.log('Date:', sessionDate);
    console.log('Time:', sessionTime);
    console.log('Subject:', sessionSubject);
    console.log('Description:', sessionDescription);

    
    this.reset();
});


function toggleAIAssistant() {
    const aiAssistant = document.getElementById('aiAssistant');
    aiAssistant.classList.toggle('hidden');
}

// Sending a message to the AI Assistant
async function sendAIMessage() {
    const aiInput = document.getElementById('aiInput');
    const aiBody = document.querySelector('.ai-body');
    const message = aiInput.value.trim();

    if (message) {
        // Display user's question
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('ai-message', 'user');
        userMessageElement.textContent = message;
        aiBody.appendChild(userMessageElement);

        // Clear input field
        aiInput.value = '';

        // Send question to AI (this is a placeholder for the actual API call)
        const aiResponse = await getAIResponse(message);

        // Display AI's response
        const aiMessageElement = document.createElement('div');
        aiMessageElement.classList.add('ai-message', 'ai');
        aiMessageElement.textContent = aiResponse;
        aiBody.appendChild(aiMessageElement);

        // Scroll to the bottom of the chat
        aiBody.scrollTop = aiBody.scrollHeight;
    }
}

// Schedule Study Session Form Submission
const scheduleForm = document.getElementById('scheduleForm');
if (scheduleForm) {
    scheduleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const subject = document.getElementById('subject').value;
        const description = document.getElementById('description').value;
        
        // Example: Notify study buddies via email or push notification
        notifyStudyBuddies(date, time, subject, description);

        // Example: Display success message or redirect to dashboard
        alert('Study session scheduled successfully!');
        showPage('dashboard');
    });
}

// Example: Notify Study Buddies Function
function notifyStudyBuddies(date, time, subject, description) {
    // Placeholder for notifying study buddies (e.g., via email or push notification)
    // This could involve calling an API or backend service
    // For demonstration purposes, we're logging the details to the console
    console.log(`Study Session Scheduled:\nDate: ${date}\nTime: ${time}\nSubject: ${subject}\nDescription: ${description}`);
}

// Placeholder function for getting AI response
async function getAIResponse(message) {
    // Simulate an API call to an AI service
    // In a real implementation, you would replace this with a call to an AI service like OpenAI's GPT
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`AI Response to: "${message}"`);
        }, 1000);
    });
}

// About Modal
function showAbout() {
    document.getElementById('aboutModal').style.display = 'block';
}

function closeAbout() {
    document.getElementById('aboutModal').style.display = 'none';
}

// Chat Widget
function toggleChat() {
    const chatWidget = document.getElementById('chatWidget');
    const chatToggle = document.getElementById('chatToggle');
    chatWidget.classList.toggle('hidden');
    chatToggle.classList.toggle('hidden');
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.querySelector('.chat-body');
    const message = chatInput.value.trim();

    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle login logic here
            alert('Login successful');
            showPage('dashboard');
        });
    }

    // Placeholder for sign-up form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle sign-up logic here
            alert('Sign-up successful');
            showPage('dashboard');
        });
    }

    // Placeholder for loading study buddies
    const buddiesList = document.getElementById('buddiesList');
    if (buddiesList) {
        const buddies = [
            { name: 'Aarav', subject: 'Computer Science' },
            { name: 'Bhavya', subject: 'Electrical Engineering' },
            { name: 'Chirag', subject: 'Mechanical Engineering' },
            { name: 'Deepika', subject: 'Information Technology' },
            { name: 'Eshaan', subject: 'Civil Engineering' },
            { name: 'Fatima', subject: 'Electronics and Communication Engineering' },
            { name: 'Gautam', subject: 'Chemical Engineering' },
            { name: 'Hina', subject: 'Aerospace Engineering' },
            { name: 'Ishanvi', subject: 'Biotechnology' },
            { name: 'Jai', subject: 'Software Engineering' }
        ];
        
        buddies.forEach(buddy => {
            const li = document.createElement('li');
            li.textContent = `${buddy.name} - ${buddy.subject}`;
            buddiesList.appendChild(li);
        });
    }
});

function joinStudyRoom(subject) {
    alert(`Joining ${subject} study room...`);
    showPage('studyroom');
}
