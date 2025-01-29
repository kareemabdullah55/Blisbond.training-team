const pdfData = [
  { name: 'B20', url: 'https://drive.google.com/file/d/160foVMAyJFBOFlb-0PsJ8fv-fLNcba96/view?usp=sharing' },
  { name: 'QC06', url: 'https://prezi.com/view/dy87nO0sKZKALCWgauak/' },
  { name: 'AP2', url: 'https://prezi.com/view/beI2hvsNqPaxb7CMovmb/' },
   { name: 'projector Ts7', url: 'https://prezi.com/view/psmAKH0Ys6x5MoBXCI7y/' },
    { name: 'Washing Machine X13', url: 'https://prezi.com/view/paCWSeZvdYEvneSQnXzw/' },
  { name: 'bs', url: 'https://drive.google.com/file/d/1Fa6QejvivnWxBlRBpUPHBU8Om_vRyAYS/view?usp=sharing' },
  { name: 'GTR1', url: 'https://drive.google.com/file/d/1rcJqRSAI1j8lgtz9yMMuLDAuj3bH-5Pu/view?usp=sharing' },
  { name: 'MP1', url: 'https://drive.google.com/file/d/1IjihiT4sUoXrand7xIo-gBlG-9CKohhV/view?usp=sharing' },
  { name: 'NEW1', url: 'https://drive.google.com/file/d/1ChvaFACcK2lBtYkmB917VfWVjzGb1pGl/view?usp=sharing' },
  { name: 'Robin', url: 'https://drive.google.com/file/d/19blkk7odsk0utlUOew7KfKdCENiZRNs4/view?usp=sharing' },
  { name: 'S1', url: 'https://drive.google.com/file/d/1V6uEPYo_CwB5nkeMZ8ot5vw2P9jHCsEq/view?usp=sharing' },
  { name: 'SP1', url: 'https://drive.google.com/file/d/120dWLwUgysCG50VXASnHeTk59ZG6jCoT/view?usp=sharing' },
  { name: 'PS-one', url: 'https://drive.google.com/file/d/1n1I1jorhPliBV4_cvCtOoQJoZTHkM6sz/view?usp=sharing' },
  { name: 'PB-one', url: 'https://drive.google.com/file/d/1_X5Ubwya-o5P-BAXaOM6rMursFpSyON2/view?usp=sharing' },
  { name: 'V20', url: 'https://drive.google.com/file/d/1A_B0HTw0X9eDCkAaZfW61ZEP9HUVC7q7/view?usp=sharing' },
  { name: 'V30', url: 'https://drive.google.com/file/d/1fdw3SYlMiscilksaa4fpMEXdFLEQvZ9f/view?usp=sharing' },
  { name: 'V40', url: 'https://drive.google.com/file/d/18bN9ySA9hFnOriUlpP-DxxOG8vgD7Nbc/view?usp=sharing' },
  { name: 'PJ-two', url: 'https://drive.google.com/file/d/1vJ7nV7IxqLqQsZJWM5tCpcVWvHQc1Uwn/view?usp=sharing' },
  { name: 'V60', url: 'https://drive.google.com/file/d/1lTuipCzlqhILiP8M_ZIJGWYnDRObV9n9/view?usp=sharing' }
];
function generateTableRows() {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = ''; // Clear any existing rows
  pdfData.forEach(pdf => {
    const row = document.createElement('tr');
    row.classList.add('data-row');
    row.innerHTML = `
      <td>${pdf.name}</td>
      <td><a href="${pdf.url}" target="_blank">GO</a></td>
    `;
    tableBody.appendChild(row);
  });
}

function searchTable() {
  const searchBar = document.getElementById('search-bar');
  const searchTerm = searchBar.value.toLowerCase();
  const table = document.getElementById('data-table');
  const rows = document.querySelectorAll('.data-row');
  const noResult = document.getElementById('no-result');
  let recordFound = false;

  rows.forEach(row => {
    const cell = row.getElementsByTagName('td')[0];
    if (cell.textContent.toLowerCase() === searchTerm) {
      row.classList.remove('hidden');
      recordFound = true;
    } else {
      row.classList.add('hidden');
    }
  });
// here we check on value user enter if it empty condition will show if not result will show
  if(searchTerm === ''){
    table.style.display = 'none';
    noResult.style.display = 'block';
    noResult.textContent = '  Please contact technical support  '}
// recordFound mean user already enter value so table will show and <p> tag still hidden 
// note: recordFound => recordFound==true ----- same are true write this or this same result
  else if (recordFound) {
    table.style.display = 'table';
    noResult.style.display = 'none';
  } 
// here we said to compiler if any above code not exist show message and keep table hidden   
  else {
    table.style.display = 'none';
    noResult.style.display = 'block';
    noResult.textContent = "Please verify the password"
  }
  
}
// الحصول على الزر
const darkModeToggle = document.getElementById('dark-mode-toggle');

// التحقق إذا كان وضع الظلام مفعل مسبقًا من LocalStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = "Switch to Light Mode"; // تغيير نص الزر عند تفعيل الوضع المظلم
}

// إضافة حدث عند النقر على الزر
darkModeToggle.addEventListener('click', () => {
  // التبديل بين الوضعين
  document.body.classList.toggle('dark-mode');

  // إذا كان الوضع المظلم مفعلًا الآن
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    darkModeToggle.textContent = "Switch to Light Mode"; // تغيير نص الزر
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    darkModeToggle.textContent = "Switch to Dark Mode"; // تغيير نص الزر
  }
});

// try now reload page first
//Go
// Generate table rows on page load
window.onload = generateTableRows;
