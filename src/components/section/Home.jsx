import RevealOnScroll from "../RevealOnScroll"


const Home = () => {
  return (
    <section 
    id="home" 
    className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7x1 font-bold mb-6 gradient-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                Hola !!, Soy Andres Felipe Diaz
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Ingeniero de software en formación apasionado por el desarrollo web full stack, la resolución de problemas y el aprendizaje continuo.
            Me gusta crear soluciones eficientes y escalables, y siempre estoy aprendiendo nuevas tecnologías para mejorar mis habilidades.
            </p>

            <div className="flex justify-center space-x-4 ">
                <a 
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                    Mis Proyectos
                </a>
                <a 
                href="#contact"
                className="border border-blue500/50 text-blue-500 py-3 px-6 rounded font-medium transitiion-all duration-200 hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                >
                    Contacto
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Home