import * as Dialog from "@radix-ui/react-dialog"
import Appointments from "./Appointments"

const CtaButton = () => {
  return (
    <div>
        <Dialog.Root>
            <Dialog.Trigger className="bg-primaryGreen text-white px-8 md:px-5 py-2 rounded-md text-xs md:text-sm w-full md:w-[inherit]">
               Book Appointment
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50"  />
                <Dialog.Content className="fixed bg-white p-4 rounded shadow-lg z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <Appointments />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </div>
  )
}

export default CtaButton