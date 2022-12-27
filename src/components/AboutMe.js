import LazyLoad from 'react-lazy-load';

const AboutMe = () => {

    return (
            <div  className="w-full bg-white min-h-screen p-8 rounded-2xl shadow-2xl outline outline-gray-300 outline-1">
            <h1 className="font-bold justify-start text-gray-900 text-[24px]">Hi 👋, I’m Minh Dang
            </h1>
            <h3>
            A passionate C++ developer from Vietnam
            </h3>
            <ul>
            <li><p>🔭 I’m currently working on something cool</p></li>
            <li><p>🌱 I’m currently learning flutter, vulkan, opengl …</p></li>
            <li><p>💬 Ask me about anything related to C++, C#, Arduino.</p></li>
            <li><p>🐧 3 Years Linux user.</p></li>
            <li><p>🖥️ I’m currently using Pop OS (Linux) and Window.</p></li>
            <li><p>😄 Pronouns: He/ Him</p></li>
            <li><p>⚡ Fun fact: I ❤️ 🧑‍🍳</p></li>
            </ul>
            <h2 id="recent-project">Recent Project</h2>
            <ul>
            <li><a href="https://github.com/minhdangphuoc/OpenGL-Renderer">OpenGL Renderer</a></li>
            </ul>
            <LazyLoad >
                <img className="rounded-xl mb-8" src="https://github.com/minhdangphuoc/OpenGL-Renderer/raw/develop/screenshots/Animation.gif"  alt="example"/>
            </LazyLoad>
            <LazyLoad >
                <img className="rounded-xl mb-8" src="https://github.com/minhdangphuoc/OpenGL-Renderer/raw/develop/screenshots/sphereandmodel.png"  alt="example"/>
            </LazyLoad>
            <ul>
            <li><a href="https://github.com/minhdangphuoc/MD-Vulkan-Renderer">Vulkan Renderer</a></li>
            </ul>
            <LazyLoad >
                <img className="rounded-xl mb-8" src="https://github.com/minhdangphuoc/BNO055-BLE-Vulkan/raw/main/img/BLE2DRotation.gif"  alt="example"/>
            </LazyLoad>
            <LazyLoad >
                <img className="rounded-xl mb-8" src="https://github.com/minhdangphuoc/BNO055-BLE-Vulkan/raw/main/img/withcase.gif"  alt="example"/>
            </LazyLoad>
            </div>

    );

}

export default AboutMe