const main = document.getElementById('main');
    const school = document.getElementById('school');
    const management = document.getElementById('management');

    document.getElementById('btnSchool').onclick = function() {
      main.style.display = 'none';
      school.classList.add('active');
      management.classList.remove('active');
    };

    document.getElementById('btnManagement').onclick = function() {
      main.style.display = 'none';
      management.classList.add('active');
      school.classList.remove('active');
    };

    document.getElementById('backFromSchool').onclick = function() {
      school.classList.remove('active');
      main.style.display = 'flex';
    };

    document.getElementById('backFromManagement').onclick = function() {
      management.classList.remove('active');
      main.style.display = 'flex';
    };