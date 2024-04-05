document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    displayCV(); 
});
function createFile(content){
  
    var file = new File(["\ufeff"+content], 'myFile.html', {type: "text/plain:charset=UTF-8"});
    url = window.URL.createObjectURL(file);
    var a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
}

function displayCV() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var summary = document.getElementById('summary').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;

    var cvContent = document.getElementById('cvContent');
    cvContent.innerHTML = ''; 

    var fullNameElement = document.createElement('p');
    fullNameElement.textContent = 'Full Name: ' + fullName;

    var emailElement = document.createElement('p');
    emailElement.textContent = 'Email: ' + email;

    var phoneElement = document.createElement('p');
    phoneElement.textContent = 'Phone: ' + phone;

    var addressElement = document.createElement('p');
    addressElement.textContent = 'Address: ' + address;

    var summaryElement = document.createElement('p');
    summaryElement.textContent = 'Summary: ' + summary;

    var experienceElement = document.createElement('p');
    experienceElement.textContent = 'Experience: ' + experience;

    var educationElement = document.createElement('p');
    educationElement.textContent = 'Education: ' + education;
    cvContent.appendChild(fullNameElement);
    cvContent.appendChild(emailElement);
    cvContent.appendChild(phoneElement);
    cvContent.appendChild(addressElement);
    cvContent.appendChild(summaryElement);
    cvContent.appendChild(experienceElement);
    cvContent.appendChild(educationElement);

    document.getElementById('cvDisplay').style.display = 'block';


    document.getElementById('cvForm').style.display = 'none';
    createFile(content);
}

function editCV() {
    document.getElementById('cvDisplay').style.display = 'none';

    document.getElementById('cvForm').style.display = 'block';
}
