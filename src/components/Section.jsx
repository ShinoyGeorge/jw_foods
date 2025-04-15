import Button from '../utils/Button.jsx';

export default function Section(props) {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-custom-lightgray">
            <div className="absolute inset-0 z-10 h-full w-full bg-black opacity-40"></div>
            <div
                className="absolute inset-0 h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage: 'url("./src/assets/section.jpg")',
                }}
            ></div>
            <div className="section-container relative z-20 text-center text-white">
                <h1 className="mb-6 text-5xl font-bold md:text-7xl">
                    {props.indexData.title}
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
                    {props.indexData.description}
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    {props.indexData.buttons.map((button, i) => (
                        <Button {...button} key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
