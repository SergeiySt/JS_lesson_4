class User {
    constructor(username, password, role) {
        this.username = username;
        this.password = this.encryptPassword(password);
        this.role = role;
    }

    encryptPassword(password) {
        const encryptedPassword = btoa(password);
        return encryptedPassword;
    }

    checkPassword(inputPassword) {
        return this.password === this.encryptPassword(inputPassword);
    }

    changeRole(newRole) {
        this.role = newRole;
    }

    changePassword(newPassword) {
        this.password = this.encryptPassword(newPassword);
    }
}

const user1 = new User("adminUser", "adminPassword", "admin");
const user2 = new User("editorUser", "editorPassword", "editor");

function changePassword(userId) {
    const newPassword = prompt("Enter the new password:");

    if (newPassword) {
        if (userId === 'user1') {
            user1.changePassword(newPassword);
            document.getElementById('user1-password').textContent = 'Updated (encrypted)';
        } else if (userId === 'user2') {
            user2.changePassword(newPassword);
            document.getElementById('user2-password').textContent = 'Updated (encrypted)';
        }
    }

    // Clear password input field
    // event.target.value = '';
}

function checkPassword(userId) {
    const inputPassword = prompt("Enter the password to check:");

    if (inputPassword) {
        if (userId === 'user1') {
            const isValid = user1.checkPassword(inputPassword);
            document.getElementById('user1-validation').textContent = isValid ? 'Valid' : 'Invalid';
        } else if (userId === 'user2') {
            const isValid = user2.checkPassword(inputPassword);
            document.getElementById('user2-validation').textContent = isValid ? 'Valid' : 'Invalid';
        }
    }
}