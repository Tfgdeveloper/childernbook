const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;