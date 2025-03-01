function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (password === '1234') {
        navigate('dashboard-screen');
    } else {
        alert('Contraseña incorrecta. Usá "1234" para entrar.');
    }
}

function adminLogin() {
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    if (password === 'admin123') {
        navigate('admin-screen');
    } else {
        alert('Contraseña incorrecta. Usá "admin123" para entrar como admin.');
    }
}

function navigate(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    const targetScreen = document.getElementById(screenId);
    targetScreen.classList.add('active');
    window.scrollTo(0, 0);
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function toggleCustomStatus(customId) {
    const select = document.getElementById(`status-select-${customId.split('-')[2]}`);
    const customDiv = document.getElementById(customId);
    customDiv.style.display = select.value === 'Otro' ? 'block' : 'none';
}