import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

import { getUser } from "../service/api";
import { User } from "../types/index";
import UserCard from "../components/cards/UserCard";
import RemoveModal from "../components/modals/RemoveModal";
import EditModal from "../components/modals/EditModal";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [isRemoveModal, setIsRemoveModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [modalUser, setModalUser] = useState<User | null>(null);

  const fetchUsers = () => {
    setIsLoading(true);
    getUser().then((res) => {
      const response: User[] = res.data;
      setUsers(response);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFavorite = (id: number) => {
    const newUsers = users.map((user, index) => {
      if (user.id === id) {
        user.favorite = !user.favorite;
        return user;
      }
      return user;
    });

    setUsers(newUsers);
    return;
  };

  const showRemoveModal = (user: User) => {
    setIsRemoveModal(true);
    setModalUser(user);
  };

  const handleRemove = () => {
    const newUsers = users.filter((user) => user.id !== modalUser?.id);
    setIsRemoveModal(false);
    setModalUser(null);
    setUsers(newUsers);
  };

  const handleRemoveCancel = () => {
    setIsRemoveModal(false);
    setModalUser(null);
  };

  const showEditModal = (user: User) => {
    setIsEditModal(true);
    setModalUser(user);
  };

  const handleEdit = (user: User) => {
    console.log(user);
    const newUsers = users.map((userOne) => {
      if (userOne.id === user.id) {
        return user;
      }
      return userOne;
    });

    setUsers(newUsers);
    setIsEditModal(false);
    setModalUser(null);
  };

  const handleEditCancel = () => {
    setIsEditModal(false);
    setModalUser(null);
  };

  return (
    <>
      <div>
        <Row gutter={[16, 16]} justify="center">
          {users.map((user) => (
            <Col xs={{ span: 20 }} md={{ span: 7 }} lg={{ span: 5 }}>
              <UserCard
                user={user}
                loading={isLoading}
                favorite={handleFavorite}
                remove={showRemoveModal}
                edit={showEditModal}
              ></UserCard>
            </Col>
          ))}
        </Row>
      </div>
      <RemoveModal
        remove={handleRemove}
        cancel={handleRemoveCancel}
        isOpen={isRemoveModal}
      ></RemoveModal>
      <EditModal
        edit={handleEdit}
        cancel={handleEditCancel}
        isOpen={isEditModal}
        user={modalUser}
      ></EditModal>
    </>
  );
};

export default AboutUs;
