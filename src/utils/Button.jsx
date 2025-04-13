export default function Button(props) {
    const bgColor = props.isPrimary ? 'bg-custom-green' : 'bg-white';
    const textColor = props.isPrimary ? 'text-white' : 'text-custom-darkgray';
    const hoverEffect = props.isPrimary
        ? 'hover:bg-custom-darkgreen'
        : 'hover:bg-custom-lightgray';
    return (
        <a
            className={`${bgColor} ${hoverEffect} rounded-md px-8 py-3 font-bold ${textColor} shadow-lg transition-colors`}
        >
            {props.text}
        </a>
    );
}
