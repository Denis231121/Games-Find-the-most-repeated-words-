function findMostRepeatedWords() {
    const inputText = document.getElementById('inputText').value;
    const wordsArray = inputText.toLowerCase().split(/\s+/);
    const wordsCount = {};

    wordsArray.forEach((word) => {
        wordsCount[word] = wordsCount[word] ? wordsCount[word] + 1 : 1;
    });

    const maxCount = Math.max(...Object.values(wordsCount));
    const mostRepeatedWords = Object.keys(wordsCount).filter(word => wordsCount[word] === maxCount);

    const resultElement = document.getElementById('result');
    resultElement.textContent = mostRepeatedWords.length === 0 
        ? 'Найбільш повторюваних слів не знайдено.' 
        : `Найбільш повторювані слова: ${mostRepeatedWords.join(', ')}`;
}

// Функція для обробки форми реєстрації
function handleRegistration() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Реєстрація з ім'ям користувача: ${username}, email: ${email}, пароль: [приховано]`);
    setTimeout(() => {
        alert('Реєстрація успішна! Ви будете перенаправлені на сторінку входу.');
        window.location.href = 'Login.html'; // Redirect to login page
    }, 2000);

    return false;
}

// Функція для обробки форми авторизації
function handleLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Here you would typically validate the user credentials via an API call
    console.log(`Спроба входу з ім'ям користувача: ${username}, пароль: [приховано]`);
    
    // Simulate an API call for user login validation
    setTimeout(() => {
        // Assuming login is successful
        console.log('Авторизація успішна! Перенаправлення на сторінку з грою.');
        window.location.href = 'GamePage.html'; // Redirect to game page after successful login
    }, 1000); // Delay to simulate server response time

    return false;
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    handleRegistration();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    handleLogin();
});



