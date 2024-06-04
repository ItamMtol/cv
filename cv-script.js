document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const address = localStorage.getItem('address');
    const education = localStorage.getItem('education');
    const experience = localStorage.getItem('experience');
    const skills = localStorage.getItem('skills');
    const photo = localStorage.getItem('photo');

    const cvText = `
Imię i Nazwisko: ${name}
Email: ${email}
Telefon: ${phone}
Adres: ${address}

Edukacja:
${education}

Doświadczenie zawodowe:
${experience}

Umiejętności:
${skills}
    `;

    document.getElementById('cvText').textContent = cvText;

    if (photo) {
        const cvPhoto = document.getElementById('cvPhoto');
        cvPhoto.src = photo;
        cvPhoto.style.display = 'block';
    } else {
        document.getElementById('cvPhoto').style.display = 'none';
    }

    // Generate PDF and download it
    const element = document.getElementById('cvContent');
    const opt = {
        margin:       0.5,
        filename:     'cv.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
});
