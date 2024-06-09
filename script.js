document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  changeSlides();
  generateTimeOptions();

  function changeSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }    
    slides[slideIndex].style.display = "block";  
    setTimeout(changeSlides, 2000); 
  }

  function generateTimeOptions() {
    let select = document.getElementById("heureDropdown");
    let hour = 9;
    
    while (hour < 13) {
      let option = document.createElement("option");
      let formattedHour = (hour < 10 ? "0" : "") + hour + ":00";
      option.text = formattedHour + " AM";
      option.value = formattedHour;
      select.add(option);
      hour++;
    }

    hour = 1;
    while (hour < 7) {
      let option = document.createElement("option");
      let formattedHour = (hour < 10 ? "0" : "") + hour + ":00";
      option.text = formattedHour + " PM";
      option.value = formattedHour;
      select.add(option);
      hour++;
    }
  }

  const addServiceButton = document.getElementById('addServiceButton');
  const additionalServicesContainer = document.getElementById('additionalServicesContainer');
  const reserveButton = document.getElementById('reserveButton');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const inputs = document.querySelectorAll('#serviceDropdown, #photographeDropdown, #datePicker, #heureDropdown, #nameInput, #emailInput');
  
  const serviceFormHtml = `
    <div class="form service-form">
      <select class="form-control service-dropdown">
        <option disabled selected value="">Service</option>
        <option value="seancePhotoMariage">Séance photo de mariage</option>
        <option value="portraitFamille">Portrait de famille</option>
        <option value="seancePhotoIndividuelle">Séance photo individuelle</option>
        <option value="evenements">Événements</option>
      </select>
    </div>
  `;

  addServiceButton.addEventListener('click', () => {
    additionalServicesContainer.insertAdjacentHTML('beforeend', serviceFormHtml);
    updateServiceInputs();
  });

  function updateServiceInputs() {
    const serviceInputs = document.querySelectorAll('.service-dropdown');
    serviceInputs.forEach(serviceInput => {
      serviceInput.addEventListener('input', checkFormCompletion);
    });
  }

  function checkFormCompletion() {
    let allFilled = true;

 
    inputs.forEach(inp => {
      if (!inp.value) {
        allFilled = false;
      }
    });


    const serviceInputs = document.querySelectorAll('.service-dropdown');
    serviceInputs.forEach(serviceInput => {
      if (!serviceInput.value) {
        allFilled = false;
      }
    });

    reserveButton.disabled = !allFilled;
    if (allFilled) {
      reserveButton.classList.remove('button-disabled');
    } else {
      reserveButton.classList.add('button-disabled');
    }
  }


  inputs.forEach(input => {
    input.addEventListener('input', checkFormCompletion);
  });
  reserveButton.disabled = true;
  reserveButton.classList.add('button-disabled');

  reserveButton.addEventListener('click', () => {
    const userName = document.getElementById('nameInput').value;

    const portfolioLink = `www.studioflash/${userName.replace(/\s+/g, '').toLowerCase()}.com`;
    confirmationMessage.innerHTML = `Votre rendez-vous a été réservé. Voici votre lien vers un portfolio qui contiendra vos photos: <a href="http://${portfolioLink}" target="_blank">${portfolioLink}</a>`;
    confirmationMessage.style.display = 'block';
  });

  checkFormCompletion();
});
