
class User {
    constructor(username, password, role) {
        this.username = username;
        this.encrPswd(password);
        this.role = role;
    }

    setPswd(password_3) {
        const salt = this.generateSalt();
        this.password = this.encrPswd(password_3, salt);
    }

    generateSalt() {
        return Math.random().toString(36).substring(2, 15);
    }

    encrPswd(password_1, salt) {
        return password_1 + salt;
    }

    checkingPaswd(password_2) {
        const hashedInput = this.encrPswd(password_2, this.password.substr(password_2.length));
        return this.password === hashedInput;
    }

    changePassword(newPassword) {
        const salt = this.generateSalt();
        this.password = this.encrPswd(newPassword, salt);
    }
}

class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(username, password, role) {
        const newUser = new User(username, password, role);
        this.users.push(newUser);
        return newUser;
    }

    removeUser(username) {
        const i = this.users.findIndex(user => user.username === username);
        if (i !== -1) {
            this.users.splice(i, 1);
            return true;
        }
        return false;
    }

    findUser(username) {
        return this.users.find(user => user.username === username);
    }
}

const user1 = new User("Vasya", "colorado", "admin");
const user2 = new User("Svitlana", "sova2340", "editor");

const user1_name = document.getElementById('user1-username');
const user1_role = document.getElementById('user1-role');

const user2_name = document.getElementById('user2-username');
const user2_role = document.getElementById('user2-role');

user1_name.textContent = user1.username;
user1_role.textContent = user1.role;

user2_name.textContent = user2.username;
user2_role.textContent = user2.role;

const user1_change_password = document.getElementById('user1-change-password');
const user1_check_password = document.getElementById('user1-check-password');

const user2_change_password = document.getElementById('user2-change-password');
const user2_check_password = document.getElementById('user2-check-password');

user1.changePassword('newPassword1');
user1_change_password.innerHTML = `<p>Пароль змінений.</p>`;

const paswdCorrect = user1.checkingPaswd('colorado');
user1_check_password.innerHTML = `<p>Пароль вірний: ${paswdCorrect ? 'Так' : 'Ні'}</p>`;

user2.changePassword('sova2340');
user2_change_password.innerHTML = `<p>Пароль не змінений.</p>`;

const paswdCorrect2 = user2.checkingPaswd('sova2340');
user2_check_password.innerHTML = `<p>Пароль вірний: ${paswdCorrect2 ? 'Так' : 'Ні'}</p>`;

const userManager = new UserManager();

const user5 = userManager.addUser("Viktor", "123456789", "editor");
const user6 = userManager.addUser("Igor", "qwert12345", "admin");
const user7 = userManager.addUser("Vasya", "colorado", "admin");
const user8 = userManager.addUser("Svitlana", "sova2340", "editor");

const userList = document.getElementById('user_list');
userManager.users.forEach((user, index) => {
    const a = document.createElement('li');
    a.textContent = `Користувачі ${index + 1}: ${user.username}, Роль: ${user.role}`;
    userList.appendChild(a);
});

const foundUser = userManager.findUser("Svitlana");

const a = document.getElementById('find_user');
const d = document.createElement('p');

if (foundUser) {
    d.textContent = `Користувача ${foundUser.username} знайдено`;
} else {
    d.textContent = `Користувача ${foundUser.username} не знайдено`;
}

a.appendChild(d);

const username4 = "Inna"
const foundUser2 = userManager.findUser(username4);
const a1 = document.getElementById('find_user2');
const d1 = document.createElement('p');

if (foundUser2) {
    d1.textContent = `Користувача ${username4} знайдено`;
} else {
    d1.textContent = `Користувача ${username4} не знайдено`;
}

a1.appendChild(d1);


const userNameDelete = "Igor"
const deleteUser = userManager.removeUser(userNameDelete);
const c = document.getElementById('delete_user');
const p = document.createElement('p');
if (deleteUser) {
    p.textContent = `Користувача ${userNameDelete} видалено`;
} else {
    p.textContent = `Користувача ${userNameDelete} не знайдено`;
}

delete_user.appendChild(p);


const userNameDelete2 = "Inna"
const deleteUser2 = userManager.removeUser(userNameDelete);
const c1 = document.getElementById('delete_user2');
const p1 = document.createElement('p');
if (deleteUser2) {
    p1.textContent = `Користувача ${userNameDelete2} видалено`;
} else {
    p1.textContent = `Користувача ${userNameDelete2} не знайдено`;
}

delete_user2.appendChild(p1);


const userList2 = document.getElementById('user_list2');
userManager.users.forEach((user, index) => {
    const a = document.createElement('li');
    a.textContent = `Користувачі ${index + 1}: ${user.username}, Роль: ${user.role}`;
    userList2.appendChild(a);
});