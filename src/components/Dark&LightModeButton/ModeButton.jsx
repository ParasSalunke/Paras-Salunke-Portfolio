import './ModeButton.css';

const ModeButton = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        localStorage.setItem("selectedTheme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        localStorage.setItem("selectedTheme", "light");
    };

    const selectedTheme = localStorage.getItem("selectedTheme");

    if (!selectedTheme) {
        setDarkMode();
    } else if (selectedTheme === "dark") {
        setDarkMode();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div>
            <label className="switch">
                <input type="checkbox"
                    onClick={toggleTheme}
                    defaultChecked={selectedTheme === "dark" || !selectedTheme}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default ModeButton;