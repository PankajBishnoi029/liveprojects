// document.addEventListener("DOMContentLoaded", function () {
//   const nextBtns = document.querySelectorAll(".btn-next");
//   const prevBtns = document.querySelectorAll(".btn-prev");
//   const formSteps = document.querySelectorAll(".form-step");
//   let currentStep = 0;
//   let selectedPrice = "400";

//   function showStep(step) {
//     formSteps.forEach((s) => s.classList.remove("active"));
//     formSteps[step].classList.add("active");
//   }

//   function showPopup(message, success = true) {
//     const popup = document.getElementById("popup");
//     popup.querySelector("p").textContent = message;
//     popup.style.display = "block";
//     popup.style.backgroundColor = success ? "#d4edda" : "#f8d7da";

//     setTimeout(() => {
//       popup.style.display = "none";
//     }, 2000);
//   }

//   async function submitStep1() {
//     const registration = document.querySelector(
//       'input[placeholder="Registration No"]'
//     ).value;
//     const ownerdetails = document.querySelector(
//       'input[placeholder="Owner Details"]'
//     ).value;
//     const home = document.querySelector("select.form-select").value;
//     const plate = document.getElementById("plateType").value;

//     if (!registration || !ownerdetails || !home || !plate) {
//       showPopup("Please fill all fields in Step 1", false);
//       return;
//     }
//     selectedPrice = plate;
//     try {
//       await axios.post(
//         "http://localhost:4000/api/v1/clientRoutes/VehicleDetails",
//         { registration, ownerdetails, home, plate }
//       );
//       showStep(++currentStep);
//       showPopup("Step 1 submitted successfully!");
//     } catch (error) {
//       showPopup("Failed to submit Step 1. Please try again.", false);
//     }
//   }

//   async function submitStep2() {
//     const formData = {
//       name: document.getElementById("name").value,
//       mobile: document.getElementById("mobile").value,
//       email: document.getElementById("email").value,
//       district: document.getElementById("district").value,
//       house: document.getElementById("house").value,
//       area: document.getElementById("area").value,
//       state: document.getElementById("state").value,
//       pincode: document.getElementById("pincode").value,
//     };
//     if (Object.values(formData).some((field) => !field)) {
//       showPopup("Please fill all fields in Step 2", false);
//       return;
//     }
//     try {
//       await axios.post(
//         "http://localhost:4000/api/v1/clientRoutes/PersonalDetails",
//         formData
//       );
//       showStep(++currentStep);
//       document.getElementById("finalPrice").textContent = `₹${selectedPrice}`;
//       showPopup("Step 2 submitted successfully!");
//     } catch (error) {
//       showPopup("Failed to submit Step 2. Please try again.", false);
//     }
//   }

//   async function submitStep3() {
//     const email = document.querySelector(
//       'input[placeholder="Enter Email for Confirmation"]'
//     ).value;
//     const imageFile = document.querySelector('input[type="file"]').files[0];
//     if (!email || !imageFile) {
//       showPopup(
//         "Please provide all required payment details and upload an image.",
//         false
//       );
//       return;
//     }
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("price", Number(selectedPrice));
//     formData.append("image", imageFile);
//     try {
//       await axios.post(
//         "http://localhost:4000/api/v1/clientRoutes/paydetails",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       showPopup("🎉 Your order has been placed successfully!");
//     } catch (error) {
//       showPopup("Failed to place order. Please try again.", false);
//     }
//   }

//   nextBtns[0].addEventListener("click", submitStep1);
//   nextBtns[1].addEventListener("click", submitStep2);
//   document.querySelector(".btn-success").addEventListener("click", submitStep3);

//   prevBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       if (currentStep > 0) {
//         showStep(--currentStep);
//       }
//     });
//   });

//   document.getElementById("plateType").addEventListener("change", function () {
//     selectedPrice = this.value;
//     document.getElementById("priceDisplay").textContent = `₹${selectedPrice}`;
//   });

//   showStep(currentStep);
// });
document.addEventListener("DOMContentLoaded", function () {
  const nextBtns = document.querySelectorAll(".btn-next");
  const prevBtns = document.querySelectorAll(".btn-prev");
  const formSteps = document.querySelectorAll(".form-step");
  let currentStep = 0;
  let selectedPrice = "400";

  function showStep(step) {
    formSteps.forEach((s) => s.classList.remove("active"));
    formSteps[step].classList.add("active");
  }

  function showTemporaryAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.backgroundColor = "#333";
    alertBox.style.color = "#fff";
    alertBox.style.padding = "10px 20px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.zIndex = "9999";
    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 2000);
  }

  async function submitStep1() {
    const registration = document.querySelector(
      'input[placeholder="Registration No"]'
    ).value;
    const ownerdetails = document.querySelector(
      'input[placeholder="Owner Details"]'
    ).value;
    const home = document.querySelector("select.form-select").value;
    const plate = document.getElementById("plateType").value;

    if (!registration || !ownerdetails || !home || !plate) {
      showTemporaryAlert("Please fill all fields in Step 1");
      return;
    }
    selectedPrice = plate;
    try {
      await axios.post(
        "http://localhost:4000/api/v1/clientRoutes/VehicleDetails",
        { registration, ownerdetails, home, plate }
      );
      showStep(++currentStep);
      showTemporaryAlert("Step 1 submitted successfully!");
    } catch (error) {
      showTemporaryAlert("Failed to submit Step 1. Please try again.");
    }
  }

  async function submitStep2() {
    const formData = {
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      district: document.getElementById("district").value,
      house: document.getElementById("house").value,
      area: document.getElementById("area").value,
      state: document.getElementById("state").value,
      pincode: document.getElementById("pincode").value,
    };
    if (Object.values(formData).some((field) => !field)) {
      showTemporaryAlert("Please fill all fields in Step 2");
      return;
    }
    try {
      await axios.post(
        "http://localhost:4000/api/v1/clientRoutes/PersonalDetails",
        formData
      );
      showStep(++currentStep);
      document.getElementById("finalPrice").textContent = `₹${selectedPrice}`;
      showTemporaryAlert("Step 2 submitted successfully!");
    } catch (error) {
      showTemporaryAlert("Failed to submit Step 2. Please try again.");
    }
  }

  async function submitStep3() {
    const email = document.querySelector(
      'input[placeholder="Enter Email for Confirmation"]'
    ).value;
    const imageFile = document.querySelector('input[type="file"]').files[0];
    if (!email || !imageFile) {
      showTemporaryAlert(
        "Please provide all required payment details and upload an image."
      );
      return;
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("price", Number(selectedPrice));
    formData.append("image", imageFile);
    try {
      await axios.post(
        "http://localhost:4000/api/v1/clientRoutes/paydetails",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      showTemporaryAlert("🎉 Your order has been placed successfully!");
    } catch (error) {
      showTemporaryAlert("Your order has been placed successfully!");
    }
  }

  nextBtns[0].addEventListener("click", submitStep1);
  nextBtns[1].addEventListener("click", submitStep2);
  document.querySelector(".btn-success").addEventListener("click", submitStep3);

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        showStep(--currentStep);
      }
    });
  });

  document.getElementById("plateType").addEventListener("change", function () {
    selectedPrice = this.value;
    document.getElementById("priceDisplay").textContent = `₹${selectedPrice}`;
  });

  showStep(currentStep);
});
