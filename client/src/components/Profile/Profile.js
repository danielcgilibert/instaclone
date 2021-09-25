import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Image } from "semantic-ui-react";
import { GET_USER } from "../../gql/user";
import { UserNoFound } from "../UserNoFound/UserNoFound";
import { ModalBasic } from "../Modal/ModalBasic/ModalBasic";
import { AvatarForm } from "../User/AvatarForm/AvatarForm";
import useAuth from "../../hooks/useAuth";
import ImageNoFound from "../../assets/images/default-avatar.png";

import "./Profile.scss";

export const Profile = ({ username }) => {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [childrenModal, setChildrenModal] = useState(null);
  const { auth } = useAuth();
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  const handleModal = (type) => {
    switch (type) {
      case "avatar":
        setTitleModal("Cambiar fotos de perfil");
        setChildrenModal(<AvatarForm setShowModal={setShowModal} />);
        setShowModal(true);
        break;

      default:
        break;
    }
  };
  if (loading) return null;
  if (error) return <UserNoFound />;
  const { getUser } = data;
  return (
    <>
      <Grid className="profile">
        <Grid.Column width={5} className="profile__left">
          <Image
            src={ImageNoFound}
            avatar
            onClick={() => username === auth.username && handleModal("avatar")}
          />
        </Grid.Column>
        <Grid.Column width={11} className="profile__right">
          <div>Header Profile</div>
          <div>Followers</div>
          <div className="other">
            <p className="name">{getUser.name}</p>
            {getUser.siteWeb && (
              <a href={getUser.siteWeb} className="siteWeb" target="_blank">
                {getUser.siteWeb}
              </a>
            )}

            {getUser.description && (
              <p className="description"> {getUser.description} </p>
            )}
          </div>
        </Grid.Column>
        <ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
          {childrenModal}
        </ModalBasic>
      </Grid>
    </>
  );
};
