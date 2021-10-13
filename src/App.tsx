import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"/>
            </header>
            <nav className={"nav"}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={"content"}>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/700px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg"/>
                </div>
                <div>
                    ava+desc
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;
