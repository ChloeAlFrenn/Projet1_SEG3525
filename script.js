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
    
    while(hour < 13)
      {
        let option = document.createElement("option");
        let formattedHour = (hour < 10 ? "0" : "") + hour + ":00";
        option.text = formattedHour + " AM";
        option.value = formattedHour;
        select.add(option);
        hour++;
    }

    hour = 1;
    while(hour<7){
      let option = document.createElement("option");
      let formattedHour = (hour < 10 ? "0" : "") + hour + ":00";
      option.text = formattedHour + " PM";
      option.value = formattedHour;
      select.add(option);
      hour++;
    }

   
  }

  document.addEventListener('DOMContentLoaded', () => {
    const addServiceButton = document.getElementById('addServiceButton');
    const additionalServicesContainer = document.getElementById('additionalServicesContainer');
    const serviceFormHtml = `
      <div class="form">
        <select class="form-control">
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
    });
  });

  
  