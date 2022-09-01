import { useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";

import { User } from "../../types";

export type EditModalProps = {
  edit: (user: User) => void;
  cancel: () => void;
  isOpen: boolean;
  user: User | null;
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const headLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const EditModal = ({ edit, cancel, isOpen, user }: EditModalProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      id: user?.id,
      name: user?.name,
      avatar: user?.avatar,
      email: user?.email,
      phone: user?.phone,
      website: user?.website,
    });
  }, [user]);

  return (
    <>
      <Modal title="Edit" visible={isOpen} onCancel={cancel} footer={[<></>]}>
        <Form {...layout} form={form} name="edit-modal" onFinish={edit}>
          <Form.Item name="id" className="hidden">
            <Input type="hidden" />
          </Form.Item>
          <Form.Item name="avatar" {...headLayout}>
            <img
              alt="user"
              className="bg-stone-200"
              src={`https://avatars.dicebear.com/v2/avataaars/{{${user?.name}}}.svg?options[mood][]=happy`}
            />
          </Form.Item>
          <Form.Item name="name">
            <h1 className="text-center text-base">{user?.name}</h1>
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input
              size="large"
              placeholder="Phone"
              prefix={<PhoneOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="website"
            label="Website"
            rules={[{ required: true }]}
          >
            <Input
              size="large"
              placeholder="Website"
              prefix={<GlobalOutlined />}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="mr-2">
              Edit
            </Button>
            <Button htmlType="button" onClick={cancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
