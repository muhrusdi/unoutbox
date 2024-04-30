import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react"
import { Info, KeyRound } from "lucide-react"
import { useState } from "react"

export const PasskeyInfo = () => {
  const [isWorkOpen, setWorkOpen] = useState(false)
  const [isPasskeyOpen, setPasskeyOpen] = useState(false)

  const handleWorkChange = () => {
    setWorkOpen(true)
  }

  const handlePasskeyChange = () => {
    setPasskeyOpen(true)
  }

  return (
    <div>
      <h4 className="font-bold">What are passkeys?</h4>
      <p className="mt-1">
        Passkeys are the new replacement for passwords, designed to give you
        access to an app in an easier and more secure way.
      </p>
      <div className="flex space-x-3 mt-4">
        <div className="w-1/2">
          <Button
            variant="bordered"
            color="success"
            fullWidth
            onPress={handleWorkChange}
            startContent={<Info size={16} />}
          >
            How do they work
          </Button>
        </div>
        <div className="w-1/2">
          <Button
            variant="bordered"
            color="warning"
            fullWidth
            onPress={handleWorkChange}
            startContent={<KeyRound size={16} />}
          >
            How do I add passkey?
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isWorkOpen}
        onOpenChange={handleWorkChange}
        onClose={() => setWorkOpen(false)}
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                How to add passkey?
              </ModalHeader>
              <ModalBody>
                <p>The easiest way is with your mobile phone.</p>
                <p>It will be backed-up to sign in on multiple devices.</p>
                <p>Select your mobile system below to see the instructions.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" fullWidth onPress={onClose}>
                  Ok, I'm ready
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
