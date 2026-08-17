// Tabs
function showActiveTabContent() {
  const tabButtons = document.querySelectorAll('.tabs Button');
  const tabContents = document.querySelectorAll('.tab-content');

  //  در لحظه اول فقط تب اکتیو رو نشون بده
  const activeTab = document.querySelector('.tabs Button.active').dataset.tab;
  tabContents.forEach(tabContent => {
    tabContent.style.display = tabContent.dataset.tab === activeTab ? "block" : "none";
  });

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tab = btn.dataset.tab;
      tabContents.forEach(tabContent => {
        if (tabContent.dataset.tab == tab) {
          tabContent.style.display = "block";
        } else {
          tabContent.style.display = "none";
        }
      });
    });
  });
}

showActiveTabContent();


// Reserve Date & Time


// const prevBtn = document.querySelector(".prev-week");
// const nextBtn = document.querySelector(".next-week");

// function updateWeekButtons() {
//   const potential = new Date(currentDate);
//   potential.setDate(potential.getDate() - 7);
//   potential.setHours(0, 0, 0, 0);
//   prevBtn.disabled = potential < today;
// }

// nextBtn.addEventListener("click", () => {
//   currentDate.setDate(currentDate.getDate() + 7);
//   renderWeek();
//   updateWeekButtons();
// });

// prevBtn.addEventListener("click", () => {
//   const potential = new Date(currentDate);
//   potential.setDate(potential.getDate() - 7);
//   potential.setHours(0, 0, 0, 0);
//   if (potential < today) return;
//   currentDate = potential;
//   renderWeek();
//   updateWeekButtons();
// });

// // اولین بار هم بررسی کن
// updateWeekButtons();


// const weekDaysContainer = document.getElementById("week-days");
// const monthTitle = document.querySelector("#month");
// let currentDate = new Date();

// // today برای مقایسه (ساعت‌/دقیقه صفر شده)
// const today = new Date();
// today.setHours(0, 0, 0, 0);

// // تاریخ انتخاب‌شده (روز) — صفر ساعت
// let selectedDate = new Date();
// selectedDate.setHours(0, 0, 0, 0);

// const monthNames = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

// // تبدیل یک تاریخ پایه به آرایه 7 روزه (شنبه تا جمعه)


// // رندر هفته (ایجاد رادیوهای روز)
// function renderWeek() {
//   const weekDays = getWeekDates(currentDate);
//   weekDaysContainer.innerHTML = "";

//   // به‌روزرسانی عنوان ماه بر اساس اولین روز هفته
//   const firstDay = weekDays[0];
//   monthTitle.textContent = `${monthNames[firstDay.monthNumber - 1]} ${firstDay.year}`;

//   weekDays.forEach((day, index) => {
//     const input = document.createElement("input");
//     input.type = "radio";
//     input.className = "btn-check";
//     input.name = "week-day";
//     input.id = `week-day-${index}`;
//     input.autocomplete = "off";
//     input.dataset.iso = day.jsDate.toISOString();

//     const label = document.createElement("label");
//     label.className = "btn btn-sm btn-light rounded-pill d-flex justify-content-center align-items-center gap-2";
//     label.style.border = "1px solid var(--color-border)";
//     label.style.padding = "10px";
//     label.setAttribute("for", input.id);
//     label.innerHTML = `<div>${day.label}</div><small class="text-decoration-underline">${day.dayNumber}</small>`;

//     // غیرفعال کردن روزهای گذشته نسبت به today
//     if (day.jsDate < today) {
//       input.disabled = true;
//       label.classList.add(["d-none"]);
//     }

//     // وقتی روز انتخاب شد، selectedDate مشخص و ساعت‌ها بازخوانی میشن
//     input.addEventListener("change", () => {
//       selectedDate = new Date(input.dataset.iso);
//       selectedDate.setHours(0, 0, 0, 0);
//       renderTimeSlots(); // فقط با inputهای ساعت موجود در HTML کار می‌کنه

//       // به‌روزرسانی تاریخ نمایش داده‌شده در span
//       const dateDisplay = document.getElementById("selected-date");
//       if (dateDisplay) {
//         const { jy, jm, jd } = jalaali.toJalaali(selectedDate);
//         dateDisplay.innerHTML = `
//           ${jy}/${jm.toString().padStart(2, "0")}/${jd.toString().padStart(2, "0")}
//             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" style="margin-right: 5px;">>
//             <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 1C8.75 0.585786 8.41421 0.25 8 0.25C7.58579 0.25 7.25 0.585786 7.25 1V1.36694C6.35977 1.46238 5.61404 1.64 4.93556 1.98571C3.66547 2.63285 2.63285 3.66547 1.98571 4.93556C1.59588 5.70065 1.41977 6.55124 1.33424 7.59814C1.24999 8.62922 1.25 9.91462 1.25 11.566V11.5661V11.6V12.4V12.4339V12.434C1.25 14.0854 1.24999 15.3708 1.33424 16.4019C1.41977 17.4488 1.59588 18.2994 1.98571 19.0644C2.63285 20.3345 3.66547 21.3671 4.93556 22.0143C5.70065 22.4041 6.55124 22.5802 7.59814 22.6658C8.62912 22.75 9.91437 22.75 11.5656 22.75H11.5657H11.5657H11.5657H11.5658H11.5658H11.5659H11.5659H11.566H11.566H11.6H12.4H12.434H12.434H12.4341H12.4341H12.4342H12.4342H12.4343H12.4343H12.4343H12.4344C14.0856 22.75 15.3709 22.75 16.4019 22.6658C17.4488 22.5802 18.2994 22.4041 19.0644 22.0143C20.3345 21.3671 21.3671 20.3345 22.0143 19.0644C22.4041 18.2994 22.5802 17.4488 22.6658 16.4019C22.75 15.3709 22.75 14.0856 22.75 12.4344V12.4343V12.4343V12.4343V12.4342V12.4342V12.4341V12.4341V12.434V12.434V12.4V11.6V11.566V11.566V11.5659V11.5659V11.5658V11.5658V11.5657V11.5657V11.5657V11.5656C22.75 9.91437 22.75 8.62912 22.6658 7.59814C22.5802 6.55124 22.4041 5.70065 22.0143 4.93556C21.3671 3.66547 20.3345 2.63285 19.0644 1.98571C18.386 1.64 17.6402 1.46238 16.75 1.36694V1C16.75 0.585786 16.4142 0.25 16 0.25C15.5858 0.25 15.25 0.585786 15.25 1V1.27399C14.4486 1.25 13.5205 1.25 12.434 1.25H12.4339H12.4H11.6H11.5661H11.566C10.4795 1.25 9.55145 1.25 8.75 1.27399V1ZM15.25 4V2.7746C14.4708 2.75027 13.542 2.75 12.4 2.75H11.6C10.458 2.75 9.52919 2.75027 8.75 2.7746V4C8.75 4.41421 8.41421 4.75 8 4.75C7.58579 4.75 7.25 4.41421 7.25 4V2.87684C6.54969 2.9632 6.04464 3.10409 5.61655 3.32222C4.6287 3.82555 3.82555 4.6287 3.32222 5.61655C3.05809 6.13493 2.90721 6.76615 2.82925 7.72029C2.75058 8.68317 2.75 9.90747 2.75 11.6V12.4C2.75 14.0925 2.75058 15.3168 2.82925 16.2797C2.90721 17.2338 3.05809 17.8651 3.32222 18.3834C3.82555 19.3713 4.6287 20.1744 5.61655 20.6778C6.13493 20.9419 6.76615 21.0928 7.72029 21.1707C8.68317 21.2494 9.90747 21.25 11.6 21.25H12.4C14.0925 21.25 15.3168 21.2494 16.2797 21.1707C17.2338 21.0928 17.8651 20.9419 18.3834 20.6778C19.3713 20.1744 20.1744 19.3713 20.6778 18.3834C20.9419 17.8651 21.0928 17.2338 21.1707 16.2797C21.2494 15.3168 21.25 14.0925 21.25 12.4V11.6C21.25 9.90747 21.2494 8.68317 21.1707 7.72029C21.0928 6.76615 20.9419 6.13493 20.6778 5.61655C20.1744 4.6287 19.3713 3.82555 18.3834 3.32222C17.9554 3.10409 17.4503 2.9632 16.75 2.87684V4C16.75 4.41421 16.4142 4.75 16 4.75C15.5858 4.75 15.25 4.41421 15.25 4ZM7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75H17C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25H7ZM9 13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13ZM8 18C8.55228 18 9 17.5523 9 17C9 16.4477 8.55228 16 8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17ZM16 18C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13ZM16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14Z"
//             fill="#0D0C22"/>
//             </svg>
//           `;
//       }
//     });

//     weekDaysContainer.appendChild(input);
//     weekDaysContainer.appendChild(label);
//   });

//   // خودکار: در صورت وجود امروز در هفته و فعال بودن، آن را انتخاب کن
//   const isoPrefix = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
//   const todayInput = weekDaysContainer.querySelector(`input[name="week-day"][data-iso^="${isoPrefix}"]`);
//   if (todayInput && !todayInput.disabled) {
//     todayInput.checked = true;
//     todayInput.dispatchEvent(new Event('change'));
//     return;
//   }

//   // در غیر این صورت اولین ورودی فعال را انتخاب کن
//   const firstActive = weekDaysContainer.querySelector('input[name="week-day"]:not(:disabled)');
//   if (firstActive) {
//     firstActive.checked = true;
//     firstActive.dispatchEvent(new Event('change'));
//   }
// }

// // ناوبری هفته (حفظ محدودیت عدم رفتن به قبل از امروز)
// document.querySelector(".next-week").addEventListener("click", () => {
//   currentDate.setDate(currentDate.getDate() + 7);
//   renderWeek();
// });
// document.querySelector(".prev-week").addEventListener("click", () => {
//   const potential = new Date(currentDate);
//   potential.setDate(potential.getDate() - 7);
//   potential.setHours(0, 0, 0, 0);
//   if (potential < today) return; // اجازه نده به قبل‌تر از امروز بره
//   currentDate = potential;
//   renderWeek();
// });

// // این تابع تایم‌های گذشته را پنهان می‌کند و هنگام انتخاب، تایم انتخاب‌شده را در span نمایش می‌دهد
// function renderTimeSlots() {
//   const timeContainer = document.querySelector(".time");
//   if (!timeContainer) return;

//   const now = new Date();

//   // لیست input/label های موجود در HTML
//   const inputs = Array.from(timeContainer.querySelectorAll("input[name='reserve-time']"));

//   inputs.forEach(input => {
//     const label = timeContainer.querySelector(`label[for="${input.id}"]`);
//     if (!label) return;

//     // مقدار شروع را از value یا متن label استخراج کن
//     const raw = (input.value && input.value.trim()) ? input.value.trim() : (label.textContent || '').trim();
//     const start = raw.split("-")[0].trim(); // "9" یا "9:30" یا "00"
//     let [hour, min] = start.split(":");
//     if (min === undefined) min = "00";

//     const slotDate = new Date(selectedDate);
//     slotDate.setHours(parseInt(hour, 10), parseInt(min, 10), 0, 0);

//     // اگر روز انتخاب‌شده امروز است و تایم گذشته است → پنهانش کن
//     if (selectedDate.toDateString() === now.toDateString() && slotDate < now) {
//       input.style.display = "none";
//       label.style.display = "none";
//       input.checked = false; // اگه تیک خورده بود، بردار
//     } else {
//       input.style.display = "";
//       label.style.display = "";
//     }

//     // 🔹 زمانی که تایم انتخاب می‌شود، مقدار در span به‌روزرسانی شود
//     input.addEventListener("change", () => {
//       const timeDisplay = document.getElementById("selected-time");
//       if (timeDisplay) {
//         // اگر value موجود است، از آن استفاده کن، وگرنه متن label
//         const timeText = (input.value && input.value.trim()) ? input.value.trim() : (label.textContent || '').trim();
//         timeDisplay.textContent = timeText;
//       }
//     });
//   });
// }


// // اجرا در شروع
// renderWeek();




// المان‌ها
const prevBtn = document.querySelector(".prev-week");
const nextBtn = document.querySelector(".next-week");
const weekDaysContainer = document.getElementById("week-days");
const monthTitle = document.querySelector("#month");

// تاریخ‌ها
let currentDate = new Date();
let selectedDate = new Date();
selectedDate.setHours(0, 0, 0, 0);

const today = new Date();
today.setHours(0, 0, 0, 0);

// حداکثر روز قابل انتخاب: امروز + 40 روز
const maxDate = new Date(today);
maxDate.setDate(maxDate.getDate() + 40);

const monthNames = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
const weekdayNames = ["شنبه","یک‌شنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"];

// ==== توابع ====
function getWeekDates(baseDate) {
  const names = ["شنبه", "یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
  const start = new Date(baseDate);
  start.setHours(0, 0, 0, 0);

  // محاسبه شنبه‌ی همان هفته
  const day = start.getDay(); // 0=یکشنبه ... 6=شنبه
  const diff = (day === 6 ? 0 : -((day + 1) % 7)); // اگر شنبه باشد diff=0
  start.setDate(start.getDate() + diff);

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const { jy, jm, jd } = jalaali.toJalaali(d);

    return {
      label: names[i],  // از 0 تا 6 => شنبه تا جمعه
      dayNumber: jd,
      monthNumber: jm,
      year: jy,
      fullDate: `${jy}/${jm}/${jd}`,
      jsDate: d
    };
  });
}


function updateWeekButtons() {
  const prevPotential = new Date(currentDate);
  prevPotential.setDate(prevPotential.getDate() - 7);
  prevPotential.setHours(0,0,0,0);

  const nextPotential = new Date(currentDate);
  nextPotential.setDate(nextPotential.getDate() + 7);
  nextPotential.setHours(0,0,0,0);

  prevBtn.disabled = prevPotential < today;
  nextBtn.disabled = nextPotential > maxDate;
}

function renderWeek() {
  const weekDays = getWeekDates(currentDate);
  weekDaysContainer.innerHTML = "";

  const firstDay = weekDays[0];
  monthTitle.textContent = `${monthNames[firstDay.monthNumber - 1]} ${firstDay.year}`;

  weekDays.forEach((day, i) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.className = "btn-check";
    input.name = "week-day";
    input.id = `week-day-${i}`;
    input.autocomplete = "off";
    input.dataset.iso = day.jsDate.toISOString();

    const label = document.createElement("label");
    label.className = "btn btn-sm btn-light rounded-pill d-flex justify-content-center align-items-center gap-2";
    label.style.border = "1px solid var(--color-border)";
    label.style.padding = "10px";
    label.setAttribute("for", input.id);
    label.innerHTML = `<div>${day.label}</div><small class="text-decoration-underline">${day.dayNumber}</small>`;

    // غیرفعال کردن روزهای غیرمجاز
    if(day.jsDate < today || day.jsDate > maxDate){
      input.disabled = true;
      label.classList.add("d-none");
    }

    input.addEventListener("change", () => {
      selectedDate = new Date(input.dataset.iso);
      selectedDate.setHours(0,0,0,0);
      renderTimeSlots();

      const dateDisplay = document.getElementById("selected-date");
      if(dateDisplay){
        const { jy, jm, jd } = jalaali.toJalaali(selectedDate);
        dateDisplay.innerHTML = `${jy}/${jm.toString().padStart(2,"0")}/${jd.toString().padStart(2,"0")}`;
      }
    });

    weekDaysContainer.appendChild(input);
    weekDaysContainer.appendChild(label);
  });

  // انتخاب خودکار امروز اگر داخل هفته باشد، وگرنه اولین روز فعال
  const todayInput = weekDaysContainer.querySelector(`input[name="week-day"][data-iso^="${today.toISOString().slice(0,10)}"]`);
  if(todayInput && !todayInput.disabled){
    todayInput.checked = true;
    todayInput.dispatchEvent(new Event('change'));
  } else {
    const firstActive = weekDaysContainer.querySelector('input[name="week-day"]:not(:disabled)');
    if(firstActive){
      firstActive.checked = true;
      firstActive.dispatchEvent(new Event('change'));
    }
  }

  updateWeekButtons();
}

function renderTimeSlots() {
  const container = document.querySelector(".time");
  if(!container) return;

  const now = new Date();

  Array.from(container.querySelectorAll("input[name='reserve-time']")).forEach(input => {
    const label = container.querySelector(`label[for="${input.id}"]`);
    if(!label) return;

    let [hour,min] = (input.value||label.textContent).split("-")[0].trim().split(":");
    min = min ?? "00";

    const slotDate = new Date(selectedDate);
    slotDate.setHours(parseInt(hour,10), parseInt(min,10),0,0);

    if(selectedDate.toDateString() === now.toDateString() && slotDate < now){
      input.style.display="none";
      label.style.display="none";
      input.checked = false;
    } else {
      input.style.display="";
      label.style.display="";
    }

    input.addEventListener("change",()=>{
      const timeDisplay = document.getElementById("selected-time");
      if(timeDisplay) timeDisplay.textContent = (input.value||label.textContent).trim();
    });
  });
}

// ==== ناوبری هفته ====
nextBtn.addEventListener("click", () => {
  const potential = new Date(currentDate);
  potential.setDate(potential.getDate()+7);
  if(potential <= maxDate){
    currentDate = potential;
    renderWeek();
  }
});

prevBtn.addEventListener("click", () => {
  const potential = new Date(currentDate);
  potential.setDate(potential.getDate()-7);
  potential.setHours(0,0,0,0);
  if(potential >= today){
    currentDate = potential;
    renderWeek();
  }
});

// ==== اجرا ====
renderWeek();
