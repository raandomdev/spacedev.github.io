<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>spacedev - Enchance your PC</title>
    <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/raandomdev/Task-Recorder/refs/heads/website/taskpng.png">
    <link rel="apple-touch-icon" href="https://raw.githubusercontent.com/raandomdev/Task-Recorder/refs/heads/website/taskpng.png">
    <meta name="description" content="Enhance your computer experience for Windows, macOS, and Linux, designed for efficiency.">
    <meta name="theme-color" content="#007AFF">
    <style>
        :root {
            --primary-color: #007AFF;
            --primary-dark: #0056CC;
            --background-color: #000000;
            --text-color: #FFFFFF;
            --secondary-color: rgba(28, 28, 30, 0.8);
            --accent-color: #30D158;
            --gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
            --glass-bg: rgba(28, 28, 30, 0.7);
            --border-color: rgba(255, 255, 255, 0.1);
            --shadow-color: rgba(0, 0, 0, 0.3);
            --ios-blur: blur(20px);
            --ios-radius: 16px;
        }

        [data-theme="light"] {
            --primary-color: #007AFF;
            --background-color: #F2F2F7;
            --text-color: #000000;
            --secondary-color: rgba(255, 255, 255, 0.8);
            --glass-bg: rgba(255, 255, 255, 0.7);
            --border-color: rgba(0, 0, 0, 0.1);
            --shadow-color: rgba(0, 0, 0, 0.1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
        }

        body {
            background: var(--background-color);
            color: var(--text-color);
            line-height: 1.6;
            transition: all 0.3s ease;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            position: relative;
            font-weight: 400;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(48, 209, 88, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 45, 85, 0.1) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
        }

        .theme-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: var(--glass-bg);
            border: 1px solid var(--border-color);
            padding: 12px 20px;
            border-radius: var(--ios-radius);
            color: var(--text-color);
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
            box-shadow: 0 8px 32px var(--shadow-color);
            font-weight: 500;
            font-size: 14px;
        }

        .theme-switch:hover {
            transform: scale(1.05);
            background: rgba(255, 255, 255, 0.1);
        }

        .mouse-light {
            position: fixed;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, 
                rgba(0, 122, 255, 0.1) 0%,
                rgba(48, 209, 88, 0.05) 30%,
                rgba(255, 45, 85, 0.05) 60%,
                transparent 80%
            );
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 0;
            transition: all 0.2s ease-out;
            mix-blend-mode: screen;
        }

        .cloud-container {
            position: relative;
            min-height: 100vh;
            overflow-y: auto;
            background: linear-gradient(135deg, #000000 0%, #1C1C1E 50%, #000000 100%);
        }

        .cloud {
            position: absolute;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 100px;
            animation: float 25s infinite linear;
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
        }

        .cloud:nth-child(1) {
            width: 300px;
            height: 80px;
            top: 15%;
            left: -300px;
            animation-duration: 35s;
        }

        .cloud:nth-child(2) {
            width: 400px;
            height: 100px;
            top: 45%;
            left: -400px;
            animation-duration: 45s;
        }

        .cloud:nth-child(3) {
            width: 350px;
            height: 90px;
            top: 75%;
            left: -350px;
            animation-duration: 40s;
        }

        @keyframes float {
            0% {
                transform: translateX(0) rotate(0deg);
                left: -400px;
            }
            100% {
                transform: translateX(calc(100vw + 400px)) rotate(360deg);
            }
        }

        .content {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            min-height: 100vh;
        }

        .header {
            text-align: center;
            padding: 6rem 0;
            position: relative;
        }

        .title {
            font-size: 4.5rem;
            margin-bottom: 2rem;
            background: linear-gradient(135deg, #FFFFFF 0%, #007AFF 50%, #30D158 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 50px rgba(0, 122, 255, 0.3);
            animation: titleGlow 3s ease-in-out infinite alternate;
            font-weight: 700;
            letter-spacing: -1px;
        }

        @keyframes titleGlow {
            from {
                text-shadow: 0 0 30px rgba(0, 122, 255, 0.3);
            }
            to {
                text-shadow: 0 0 60px rgba(0, 122, 255, 0.6);
            }
        }

        .description {
            font-size: 1.3rem;
            color: var(--text-color);
            max-width: 800px;
            margin: 0 auto;
            transition: color 0.3s;
            opacity: 0.8;
            font-weight: 400;
            line-height: 1.6;
        }

        .section {
            background: var(--glass-bg);
            border-radius: var(--ios-radius);
            padding: 2.5rem;
            margin: 2rem 0;
            box-shadow: 0 20px 60px var(--shadow-color);
            transition: all 0.4s ease;
            opacity: 0;
            transform: translateY(30px);
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
            border: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
        }

        .section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
        }

        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .section:hover {
            transform: translateY(-5px);
            box-shadow: 0 30px 80px var(--shadow-color);
        }

        .section h2 {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            font-size: 2rem;
            font-weight: 600;
            position: relative;
        }

        .section h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 40px;
            height: 2px;
            background: var(--primary-color);
            border-radius: 1px;
        }

        .download-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin: 2rem 0;
            flex-wrap: wrap;
        }

        .download-btn {
            background: var(--glass-bg);
            color: var(--text-color);
            padding: 1rem 2rem;
            border-radius: var(--ios-radius);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            transition: all 0.3s ease;
            font-size: 1rem;
            font-weight: 500;
            position: relative;
            overflow: hidden;
            border: 1px solid var(--border-color);
            box-shadow: 0 8px 32px var(--shadow-color);
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
        }

        .download-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.1),
                transparent
            );
            transition: 0.5s;
        }

        .download-btn:hover::before {
            left: 100%;
        }

        .download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px var(--shadow-color);
            background: rgba(255, 255, 255, 0.1);
        }

        .download-btn i {
            font-size: 1.2rem;
        }

        .nav-links {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1000;
            display: flex;
            gap: 0.5rem;
            background: var(--glass-bg);
            padding: 0.5rem;
            border-radius: var(--ios-radius);
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
            border: 1px solid var(--border-color);
            box-shadow: 0 8px 32px var(--shadow-color);
        }

        .nav-link {
            background: transparent;
            color: var(--text-color);
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            font-weight: 500;
            font-size: 14px;
        }

        .nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--primary-color);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }

        .nav-link:hover::before {
            opacity: 1;
        }

        .nav-link:hover {
            transform: translateY(-1px);
        }

        .search-container {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            width: 300px;
        }

        .search-bar {
            width: 100%;
            padding: 12px 20px;
            border-radius: var(--ios-radius);
            border: 1px solid var(--border-color);
            background: var(--glass-bg);
            color: var(--text-color);
            font-size: 1rem;
            transition: all 0.3s ease;
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
            box-shadow: 0 8px 32px var(--shadow-color);
        }

        .search-bar:focus {
            outline: none;
            box-shadow: 0 0 0 2px var(--primary-color), 0 12px 40px var(--shadow-color);
            width: 350px;
            background: rgba(255, 255, 255, 0.1);
            border-color: var(--primary-color);
        }

        .search-results {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--glass-bg);
            border-radius: var(--ios-radius);
            margin-top: 10px;
            padding: 10px;
            display: none;
            max-height: 300px;
            overflow-y: auto;
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
            border: 1px solid var(--border-color);
            box-shadow: 0 12px 40px var(--shadow-color);
        }

        .search-results.active {
            display: block;
        }

        .search-result-item {
            padding: 12px;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            margin-bottom: 5px;
        }

        .search-result-item:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(5px);
        }

        .projects-tabs {
            margin-top: 2rem;
        }

        .tab-buttons {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .tab-btn {
            background: var(--glass-bg);
            color: var(--text-color);
            border: 1px solid var(--border-color);
            padding: 1rem 1.5rem;
            border-radius: var(--ios-radius);
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            font-weight: 500;
            position: relative;
            overflow: hidden;
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
            box-shadow: 0 8px 32px var(--shadow-color);
        }

        .tab-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--primary-color);
            transition: 0.3s;
            z-index: 0;
        }

        .tab-btn:hover::before {
            left: 0;
        }

        .tab-btn.active {
            background: var(--primary-color);
            transform: translateY(-2px);
            box-shadow: 0 12px 40px var(--shadow-color);
        }

        .tab-content {
            background: var(--glass-bg);
            border-radius: var(--ios-radius);
            padding: 2rem;
            min-height: 300px;
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
            border: 1px solid var(--border-color);
            box-shadow: 0 12px 40px var(--shadow-color);
        }

        .tab-pane {
            display: none;
            animation: fadeIn 0.4s ease;
        }

        .tab-pane.active {
            display: block;
        }

        .project-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .feature {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: var(--ios-radius);
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
        }

        .feature:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px var(--shadow-color);
            background: rgba(255, 255, 255, 0.08);
        }

        .feature i {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }

        .feature h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.2rem;
            font-weight: 600;
        }

        .creator-section {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 2rem;
            padding: 2.5rem;
            background: var(--glass-bg);
            border-radius: var(--ios-radius);
            position: relative;
            overflow: hidden;
            box-shadow: 0 15px 40px var(--shadow-color);
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
            border: 1px solid var(--border-color);
        }

        .creator-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--primary-color);
            box-shadow: 0 0 30px rgba(0, 122, 255, 0.3);
            transition: transform 0.3s ease;
            position: relative;
            z-index: 1;
        }

        .creator-image:hover {
            transform: scale(1.05);
        }

        .creator-info {
            position: relative;
            z-index: 1;
        }

        .creator-info h3 {
            color: var(--primary-color);
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        .creator-info p {
            line-height: 1.7;
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .social-link {
            color: var(--text-color);
            font-size: 1.5rem;
            transition: all 0.3s ease;
            padding: 12px;
            border-radius: 50%;
            background: var(--glass-bg);
            backdrop-filter: var(--ios-blur);
            -webkit-backdrop-filter: var(--ios-blur);
            border: 1px solid var(--border-color);
        }

        .social-link:hover {
            color: var(--text-color);
            transform: translateY(-3px);
            background: var(--primary-color);
            box-shadow: 0 10px 30px var(--shadow-color);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            .title {
                font-size: 3rem;
            }

            .nav-links {
                bottom: 20px;
                top: auto;
                left: 50%;
                transform: translateX(-50%);
            }

            .theme-switch {
                top: auto;
                bottom: 20px;
                right: 20px;
            }

            .search-container {
                top: 80px;
            }

            .creator-section {
                grid-template-columns: 1fr;
                text-align: center;
            }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <button class="theme-switch" onclick="toggleTheme()">🌓 Toggle Theme</button>
    <div class="mouse-light"></div>
    
    <div class="search-container">
        <input type="text" class="search-bar" placeholder="Search..." id="searchInput">
        <div class="search-results" id="searchResults"></div>
    </div>

    <nav class="nav-links">
        <a href="#home" class="nav-link">Home</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#about" class="nav-link">About</a>
    </nav>

    <div class="cloud-container">
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        
        <div class="content">
            <header id="home" class="header">
                <h1 class="title">spacedev</h1>
                <p class="description">
                    Free software to enhance your day-to-day computer experience
                    made for Windows!
                </p>
            </header>

            <section id="projects" class="section">
                <h2>Projects</h2>
                <div class="projects-tabs">
                    <div class="tab-buttons">
                        <button class="tab-btn active" data-tab="task-recorder">Task Recorder</button>
                        <button class="tab-btn" data-tab="project-2">Project 2</button>
                        <button class="tab-btn" data-tab="project-3">Project 3</button>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane active" id="task-recorder">
                            <h3>Task Recorder</h3>
                            <p>A powerful mouse and keyboard recorder for Windows.</p>
                            <div class="project-features">
                                <div class="feature">
                                    <i class="fas fa-mouse-pointer"></i>
                                    <h4>Mouse Recording</h4>
                                    <p>Record and replay mouse movements with precision</p>
                                </div>
                                <div class="feature">
                                    <i class="fas fa-keyboard"></i>
                                    <h4>Keyboard Recording</h4>
                                    <p>Capture and replay keyboard inputs accurately</p>
                                </div>
                                <div class="feature">
                                    <i class="fas fa-clock"></i>
                                    <h4>Time Control</h4>
                                    <p>Accurate time control</p>
                                </div>
                            </div>
                            <div class="download-buttons">
                                <a href="https://github.com/raandomdev/Task-Recorder/releases/download/1.0/Task-Recorder.exe" class="download-btn">
                                    <i class="fab fa-windows"></i>
                                    Windows
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane" id="project-2">
                            <h3>Project 2</h3>
                            <p>Coming soon...</p>
                        </div>
                        <div class="tab-pane" id="project-3">
                            <h3>Project 3</h3>
                            <p>Coming soon...</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="section">
                <h2>About the Creator</h2>
                <div class="creator-section">
                    <img src="https://via.placeholder.com/200" alt="Creator" class="creator-image">
                    <div class="creator-info">
                        <h3>spacedev</h3>
                        <p>
                            Hello! I'm a passionate software developer with experience in Python, C, C++, C#, and JavaScript. 
                            My goal is to create practical, easy-to-use applications that enhance your day-to-day computer experience. 
                            I develop tools to ensure accessibility for all users.
                        </p>
                        <div class="social-links">
                            <a href="https://github.com/raandomdev/Task-Recorder/tree/main" class="social-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                            
                            <a href="http://tiktok.com/@raandomdev" class="social-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <h2>Credits and Attributions 📖</h2>
                <p>
                    Licensing: Task-Recorder is released under the Apache License.
                    Please note: This is a closed-source project. Any attempt to decompile, reverse-engineer, or access the source code without authorization may result in a DMCA takedown notice.
                    <span class="highlight">Apache License</span>
                </p>
                <p class="license">
                    Credits: Task-Recorder is inspired by TinyTask
                </p>
            </section>
        </div>
    </div>

    <script>
        function toggleTheme() {
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
        }

        document.addEventListener('mousemove', (e) => {
            const light = document.querySelector('.mouse-light');
            light.style.left = e.clientX + 'px';
            light.style.top = e.clientY + 'px';
        });

        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        const content = document.querySelector('.content');

        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length < 2) {
                searchResults.classList.remove('active');
                return;
            }

            const sections = content.querySelectorAll('section, header');
            let results = [];

            sections.forEach(section => {
                const text = section.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    const title = section.querySelector('h1, h2')?.textContent || 'Section';
                    const excerpt = text.substring(
                        text.indexOf(searchTerm),
                        text.indexOf(searchTerm) + 100
                    ) + '...';

                    results.push({
                        title,
                        excerpt,
                        element: section
                    });
                }
            });

            displayResults(results, searchTerm);
        });

        function displayResults(results, searchTerm) {
            if (results.length === 0) {
                searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
            } else {
                searchResults.innerHTML = results.map(result => `
                    <div class="search-result-item" onclick="scrollToSection('${result.element.id}')">
                        <strong>${highlightText(result.title, searchTerm)}</strong><br>
                        ${highlightText(result.excerpt, searchTerm)}
                    </div>
                `).join('');
            }
            searchResults.classList.add('active');
        }

        function highlightText(text, searchTerm) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            return text.replace(regex, '<span class="highlight-search">$1</span>');
        }

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                searchResults.classList.remove('active');
                searchInput.value = '';
            }
        }

        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    </script>
</body>
</html> 
