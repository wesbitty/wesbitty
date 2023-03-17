import type { WithClassName } from "~/wesbitty/types";

interface LogoProps extends WithClassName {
  color: string;
  height?: number;
  width: number;
}

const Logo = (props: LogoProps) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width={props.height ? undefined : props.width || 163}
      height={props.height || 23}
      viewBox="0 0 162 23"
    >
      <title>Platforms Starter Kit Logo</title>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill={props.color || "#000"} fillRule="nonzero">
          <path d="M0 23V1h7.8C15.35 1 19 5.714 19 12.031 19 18.317 15.35 23 7.8 23H0zm4-4h2.87c5.124 0 7.13-3 7.13-6.969C14 8.062 11.994 5 6.87 5H4v14zm13 4l9.092-22h3.847L39 23h-4.832l-1.526-4.18h-9.284L21.832 23H17zm8-9h6l-2.25-5.638A16.62 16.62 0 0128 6c-.21.797-.45 1.624-.75 2.362L25 14zm23.532 9C41.96 23 37 17.868 37 11.532 37 5.164 41.96 0 48.532 0 55.072 0 60 5.164 60 11.532 60 17.868 55.071 23 48.532 23zM42 11.532C42 15.62 44.493 19 48.53 19c4.007 0 6.47-3.38 6.47-7.468S52.537 4 48.53 4C44.493 4 42 7.444 42 11.532zM76.008 23C69.735 23 65 17.868 65 11.532 65 5.164 69.494 0 76.008 0c3.438 0 5.82 1.109 7.72 3.485l-2.985 2.724c-1.267-1.394-2.835-2.09-4.735-2.09-4.071 0-6.635 3.358-6.635 7.413s2.564 7.35 6.725 7.35c2.051 0 3.59-.73 4.826-2.155L84 19.483C82.402 21.511 79.687 23 76.008 23zm17.067 0C88.242 23 85 19.201 85 14.531S88.392 6 93.075 6 101 9.86 101 14.531c0 .467-.03.965-.12 1.495H89.203c.45 1.899 1.83 3.238 3.872 3.238a4.339 4.339 0 003.812-2.18l3.152 2.46C98.78 21.568 96.167 23 93.075 23zM89 13h8c-.467-1.657-1.992-3-4.047-3-1.992 0-3.486 1.229-3.953 3zm14 9V6.36h4.071v2.287C107.898 6.902 109.49 6 111.94 6 115.367 6 118 8.496 118 12.436V22h-4.133v-8.571c0-2.707-1.377-3.88-3.428-3.88-1.745 0-3.306 1.173-3.306 3.88V22H103zm23.296 1c-3.24 0-5-1.502-5-5.04v-7.636H119v-3.6h2.296V3.439L125.54 3v3.725H129v3.599h-3.46v7.418c0 1.033.504 1.502 1.322 1.502h1.76V23h-2.326zM130 22V6.373h4.038v2.975c.554-2.254 2.188-3.486 4.962-3.336V9.83h-.586c-2.404 0-4.253 1.563-4.253 4.177V22H130zm16.858 1c-4.372 0-7.858-3.781-7.858-8.469C139 9.844 142.486 6 146.858 6c2.752 0 4.189 1.156 5.045 2.906V6.344H156v16.25h-4.005v-2.657C151.138 21.782 149.7 23 146.858 23zM143 14.5c0 2.37 1.8 4.5 4.469 4.5 2.762 0 4.531-2.04 4.531-4.47 0-2.43-1.769-4.53-4.531-4.53C144.8 10 143 12.07 143 14.5zm16 8.5V0h4v23h-4z"></path>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
