document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        // const icon = question.querySelector("span");
        const img = question.querySelector("img");

        question.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";
            
            // Hide all answers
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".faq-question img").forEach(img => img.src = "/icon-plus.svg");

            // Toggle current one
            answer.style.display = isOpen ? "none" : "block";
            // icon.textContent = isOpen ? "➕" : "➖";
            img.src = isOpen ? "/icon-plus.svg" : "/icon-minus.svg";
        });
    });
});