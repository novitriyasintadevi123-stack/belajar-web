const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");
        menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
        navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

        document.querySelectorAll(".filter").forEach(button => {
            button.addEventListener("click", () => {
                document.querySelector(".filter.active").classList.remove("active");
                button.classList.add("active");
                const filter = button.dataset.filter;
                document.querySelectorAll(".project").forEach(project => {
                    project.classList.toggle("hidden", filter !== "all" && project.dataset.category !== filter);
                });
            });
        });

        document.getElementById("themeBtn").addEventListener("click", () => {
            const light = document.body.classList.toggle("light");
            document.documentElement.style.setProperty("--bg", light ? "#f4f5ef" : "#0b0d12");
            document.documentElement.style.setProperty("--surface", light ? "#ffffff" : "#11141b");
            document.documentElement.style.setProperty("--surface-light", light ? "#e9ece2" : "#181c25");
            document.documentElement.style.setProperty("--text", light ? "#171a18" : "#f5f7fb");
            document.documentElement.style.setProperty("--muted", light ? "#687068" : "#8c93a3");
            document.getElementById("themeBtn").textContent = light ? "☾" : "☼";
        });

        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
        }), { threshold: .12 });
        document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
