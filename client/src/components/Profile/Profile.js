import React from "react";
import { useQuery } from "@apollo/client";
import { Grid, Image } from "semantic-ui-react";
import { GET_USER } from "../../gql/user";
import "./Profile.scss";
import { UserNoFound } from "../UserNoFound/UserNoFound";
import ImageNoFound from "../../assets/images/default-avatar.png";

export const Profile = ({ username }) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  if (loading) return null;
  if (error) return <UserNoFound />;
  const { getUser } = data;
  return (
    <>
      <Grid className="profile">
        <Grid.Column width={5} className="profile__left">
          <Image src={ImageNoFound} avatar />
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
      </Grid>
    </>
  );
};
