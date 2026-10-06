import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import InputField from "../ui/InputField";
import PrimaryButton from "../ui/PrimaryButton";

const Modal = ({
  open,
  onOpenChange,
  title = "Get Started",
  description = "Fill out the form and we'll get back to you.",
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] max-h-[90vh] w-[calc(100%-32px)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl outline-none md:p-8">
          <Dialog.Close
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            aria-label="Close"
          >
            <X size={20} />
          </Dialog.Close>

          <div className="pr-10">
            <Dialog.Title className="font-heading text-3xl font-semibold">
              {title}
            </Dialog.Title>

            <Dialog.Description className="mt-2 font-body text-sm leading-6 text-neutral-600">
              {description}
            </Dialog.Description>
          </div>

          <form
            className="mt-7 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              onOpenChange(false);
            }}
          >
            <InputField
              label="Name"
              name="name"
              placeholder="Your name"
              required
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <InputField
              label="Phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
            />

            <InputField
              label="Message"
              name="message"
              placeholder="Tell us about your project"
            />

            <PrimaryButton type="submit" className="w-full">
              Submit Request
            </PrimaryButton>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;