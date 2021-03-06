import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { useState } from "react";

export default function ModalAddressPrevPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);

    setIsOpen((prev) => !prev);
  };

  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button onClick={onToggleZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onToggleZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
