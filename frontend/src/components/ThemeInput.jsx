import React, {useState} from 'react';

export default function ThemeInput({onSubmit}) {
    const [theme, setTheme] = useState(String);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        setError('');


        if(!theme.trim()){
            setError('Plese enter a theme name');
            return;
        }
        onSubmit(theme);
    }

  return (
    <div className="theme-input-container">
        <h2> Generate Your Adventure Story </h2>
        <p>Enter a theme for your adventure story</p>

        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    value={theme}
                    onChange={(e => setTheme(e.target.value))}
                    placeholder="Enter a theme (e.g. Pirates, Jungle Safari, Space Adventure...)"
                    className={error ? 'error' : ''}
                />

                {error && <p className="error-text">{error}</p>}
            </div>
            <button type="submit" className="generate-btn">
                Generate Story
            </button>

        </form>
      
    </div>
  )
}
