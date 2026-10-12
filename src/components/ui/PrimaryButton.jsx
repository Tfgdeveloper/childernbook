import { useState } from "react";
import Modal from "../sections/Modal";


const PrimaryButton = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",

  // Modal options
  openModal = false,
  modalTitle = "Get Started",
  modalDescription = "Fill out the form and we'll get back to you.",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    if (openModal) {
      setIsModalOpen(true);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={`
            inline-flex items-center justify-center
            rounded-[12px]
            bg-[#F29013]
            px-[20px] py-[10px]
            font-['Montaga']
            text-base
            text-white
            transition-all duration-300 ease-out
            hover:scale-105
            hover:shadow-[0_10px_25px_rgba(242,144,19,0.35)]
            active:scale-95
            focus:outline-none
            disabled:cursor-not-allowed
            disabled:opacity-50
            ${className}
          `}
      >
        {children}
      </button>

      {openModal && (
        <Modal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          title={modalTitle}
          description={modalDescription}
        />
      )}
    </>
  );
};

export default PrimaryButton;