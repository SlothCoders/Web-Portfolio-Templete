const AboutMe = () => {

    return (
            <div  className="w-full bg-white sm:min-h-card sm:p-8 p-4 rounded-xl shadow-xl outline outline-gray-300 outline-1">
                <h1 className="">Hi 👋, I’m Minh Dang</h1>
                    <h2>A passionate software developer</h2>
                        <ul>
                        <li><p>🔭 I’m currently working on something cool</p></li>
                        <li><p>🌱 I’m currently learning flutter, vulkan, opengl …</p></li>
                        <li><p>💬 Ask me about anything related to C++, C#, OpenGL.</p></li>
                        <li><p>🐧 3 Years Linux user.</p></li>
                        <li><p>🖥️ I’m currently using Pop OS (Linux) and Window.</p></li>
                        <li><p>😄 Pronouns: He/ Him</p></li>
                        <li><p>⚡ Fun fact: I ❤️ 🧑‍🍳</p></li>
                        </ul>

                    <h2>Status</h2>
                        <div className="min-[1370px]:flex min-[1370px]:justify-start min-[1370px]:h-fit min-[1370px]:w-full">
                        <img className="min-[1370px]:object-cover min-[1370px]:w-full min-[1370px]:h-full" src="https://github-readme-stats.vercel.app/api/top-langs/?username=minhdangphuoc&langs_count=10&theme=dracula&layout=compact" alt="Most Used Languages"/>
                        <img className="min-[1370px]:object-cover min-[1370px]:w-full min-[1370px]:h-[215px]" src="https://github-readme-stats.vercel.app/api?username=minhdangphuoc&show_icons=true&theme=dracula" alt="Github Stats"/>
                        </div>
                        <img className="min-[1370px]:h-[215px]" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=minhdangphuoc&theme=dracula" alt="Contributions"/>
                
            </div>

    );

}

export default AboutMe