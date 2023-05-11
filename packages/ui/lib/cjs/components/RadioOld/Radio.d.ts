export default Radio;
declare function Radio({ className, label, containerClassName, children, ...props }: {
    [x: string]: any;
    className?: string;
    label?: string;
    containerClassName?: string;
    children: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Radio {
    namespace propTypes {
        const label: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
