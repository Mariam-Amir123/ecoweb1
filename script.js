[5:21 ص، 2024/9/15] قلبي انا: // Function to handle the submission of forms
function handleFormSubmission(event) {
    event.preventDefault(); // Prevents the default form submission

    let form = event.target;
    let formData = new FormData(form);
    let data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Form Data Submitted:', data);

    // Here you would typically send the data to a server
    // For example: fetch('/submit', { method: 'POST', body: JSON.stringify(data) })
}

// Add event listeners to forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', handleFormSubmission);
});

// Function to dynamically add a post to a discussion thread
function addPostToDiscussion(postContent) {
    let postsContainer = document.querySelector('.posts');
    let newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `
        <h4>Anonymous User</h4>
        <p>${postContent}</p>
    `;
    postsContainer.appendChild(newPost);
}

// Example usage
// addPostToDiscussion('This is a new post added dynamically.');
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // هنا يمكنك إضافة الكود لإرسال البيانات إلى الخادم
    console.log('تسجيل حساب جديد:', { username, email, password });

    alert('تم تسجيل الحساب بنجاح!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // هنا يمكنك إضافة الكود لإرسال البيانات إلى الخادم
    console.log('تسجيل الدخول:', { email, password });

    alert('تم تسجيل الدخول بنجاح!');
});