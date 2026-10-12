import { useState } from "react";
import Modal from "../sections/Modal";

const SecondaryButton = ({
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
            bg-transparent
            border border-[#2E4A36]
            px-[32px] py-[16px]
            font-['Montaga']
            text-base
            text-[#2E4A36]
            transition-all duration-300 ease-out
            hover:scale-105
            hover:shadow-[0_10px_25px_rgba(46,74,54,0.35)]
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

export default SecondaryButton;