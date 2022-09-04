import {
  EditOutlined,
  HeartTwoTone,
  HeartFilled,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Card } from "antd";

import { User } from "../../types";

export type UserCardProps = {
  user: User;
  loading: boolean;
  favorite: (id: number) => void;
  remove: (user: User) => void;
  edit: (user: User) => void;
};

const { Meta } = Card;

const UserCard = ({ user, loading, favorite, remove, edit }: UserCardProps) => {
  return (
    <>
      <Card
        cover={
          <img
            alt="user"
            className="bg-stone-200"
            src={`https://avatars.dicebear.com/v2/avataaars/{{${user.name}}}.svg?options[mood][]=happy`}
          />
        }
        actions={[
          user.favorite === true ? (
            <HeartFilled
              key="setting"
              style={{ color: "#eb2f96" }}
              onClick={() => favorite(user.id)}
              data-testid="favorite-checked"
            />
          ) : (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="setting"
              onClick={() => favorite(user.id)}
              data-testid="favorite-not-checked"
            />
          ),
          <EditOutlined
            key="edit"
            onClick={() => edit(user)}
            data-testid="edit-button"
          />,
          <DeleteFilled
            key="ellipsis"
            onClick={() => remove(user)}
            data-testid="remove-button"
          />,
        ]}
        loading={loading}
      >
        <Meta
          title={user.name}
          description={
            <div>
              <div>
                <MailOutlined /> <span>{user.email}</span>
              </div>
              <div>
                <PhoneOutlined /> <span>{user.phone}</span>
              </div>
              <div>
                <GlobalOutlined /> <span>{"http://" + user.website}</span>
              </div>
            </div>
          }
        />
      </Card>
    </>
  );
};

export default UserCard;
