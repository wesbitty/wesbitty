export default Textarea;
declare function Textarea({ className, isError, rows, children, borderless, ...props }: {
    [x: string]: any;
    className?: string;
    isError?: boolean;
    rows?: number;
    children: any;
    borderless?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Textarea {
    namespace propTypes {
        const isError: PropTypes.Requireable<boolean>;
        const className: PropTypes.Requireable<string>;
        const borderless: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
