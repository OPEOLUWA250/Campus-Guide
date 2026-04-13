import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full px-4 py-3 sm:py-2.5 rounded-lg bg-white border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-xs text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 hover:border-gray-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextFieldComponent = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, type, label, ...props }, ref) => {
    const inputClasses = cn(
      "w-full px-4 py-3 sm:py-2.5 rounded-lg bg-white border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-xs text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 hover:border-gray-300",
      className,
    );

    if (label) {
      return (
        <div className="space-y-0.5 sm:space-y-0.5">
          <label className="block text-sm sm:text-xs font-medium text-gray-900">
            {label}
          </label>
          <input type={type} className={inputClasses} ref={ref} {...props} />
        </div>
      );
    }

    return <input type={type} className={inputClasses} ref={ref} {...props} />;
  },
);
TextFieldComponent.displayName = "TextField";

// Export as TextField for consistency with design system
export const TextField = TextFieldComponent;

export { Input };
