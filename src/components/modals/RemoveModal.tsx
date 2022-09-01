import { Button, Modal } from "antd";

export type RemoveModalProps = {
  remove: () => void;
  cancel: () => void;
  isOpen: boolean;
};

const RemoveModal = ({ remove, cancel, isOpen }: RemoveModalProps) => {
  return (
    <>
      <Modal
        title="Delete"
        visible={isOpen}
        onOk={remove}
        onCancel={cancel}
        footer={[
          <Button key="confirm" type="primary" onClick={remove}>
            Confirm
          </Button>,
          <Button key="cancel" onClick={cancel}>
            Cancel
          </Button>,
        ]}
      >
        <p>I want to remove this user.</p>
      </Modal>
    </>
  );
};

export default RemoveModal;
