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
