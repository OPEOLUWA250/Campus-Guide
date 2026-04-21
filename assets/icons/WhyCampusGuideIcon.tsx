interface IProps {
  size?: number;
  color?: string;
}

export const WhyCampusGuideIcon = ({
  size = 48,
  color = "#FFE091",
}: IProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        fill="none"
        viewBox="0 0 21 21"
      >
        <g
          stroke="#0F001B"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.286"
        >
          <path d="M11.143 2.613a4.286 4.286 0 0 0 .842 7.114c1.73.868 2.39-.302 3.326.33.609.409.769 1.233.36 1.841-.43.636-1.1.96-.984 2.002.066.59.427 1.096.896 1.529M3.429 7.955c.96.232 1.81.792 2.405 1.582a4.27 4.27 0 0 1 .85 2.935c-.045.536.305 1.078.755 1.374a2.324 2.324 0 0 1 .275 3.674" />
          <path d="M10.286 18a7.714 7.714 0 1 0 0-15.429 7.714 7.714 0 0 0 0 15.429" />
        </g>
      </svg>
    </div>
  );
};

export default WhyCampusGuideIcon;
