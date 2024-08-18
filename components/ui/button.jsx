// components/ui/button.jsx

export const Button = ({ children, ...props }) => {
    return (
      <button className="px-4 py-2 bg-blue-500 text-white rounded" {...props}>
        {children}
      </button>
    );
  };
  