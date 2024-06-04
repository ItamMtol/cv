function saveDataAndRedirect() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const photo = document.getElementById('photo').files[0];

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('education', education);
    localStorage.setItem('experience', experience);
    localStorage.setItem('skills', skills);

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('photo', e.target.result);
            window.location.href = 'cv.html';
        };
        reader.readAsDataURL(photo);
    } else {
        localStorage.setItem('photo', '');
        window.location.href = 'cv.html';
    }
}
