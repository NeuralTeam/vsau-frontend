export const FlatArrowIcon = ({ width, height, fillColor, className }: { width: number; height: number; fillColor: string; className?: string }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M8 2L2.81414 9.34663C2.32606 10.0381 2.32606 10.9619 2.81414 11.6534L8 19"
                stroke={fillColor}
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
};
