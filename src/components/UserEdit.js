import React, { useEffect, useRef } from "react";
import { Label, Input, Select, option } from "@rebass/forms";
import { Box, Flex, Button, Text } from "rebass";
import { updateRequest, getRequest, getOneRequest } from "../redux/Useraction";
import { connect } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";

function UserEdit({ singUser, user, oneUser, update, fetchh }) {
  const oneSetter = useRef({});

  const inputChange = (val) => {
    const { name, value } = val;
    oneSetter.current = { ...oneSetter.current, [name]: value };
    console.log(oneSetter.current);
  };

  const { id } = useParams();
  const id1 = Number(id);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("am at the use effect");

    oneUser(id1);

    console.log("here");
  }, []);

  const setter = () => {
    oneSetter.current = singUser;
    return (
      <>
        <Box
          sx={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#eee",
            background: "#eee",
          }}
          width={1 / 1.5}
          m="auto"
          pb={3}
          as="form"
        >
          <Text
            height={20}
            sx={{
              fontSize: 3,
              fontWeight: "light",

              color: "black",
              bg: "#eee",
              textAlign: "center",
              py: 1,
            }}
          >
            Edit Your Information
          </Text>

          <Flex>
            <Box width={1 / 2} bg="" px={20}>
              <Label sx={{ display: "block" }} my={2}>
                Name
              </Label>
              <Input
                sx={{
                  borderColor: " #2bb6a3",
                }}
                name="name"
                defaultValue={singUser.name}
                placeholder="firstname"
                onChange={(e) => {
                  inputChange(e.target);
                }}
              />
            </Box>
            <Box width={1 / 2} bg="" px={20}>
              <Input
                mt={4}
                sx={{
                  borderColor: " #2bb6a3",
                  ":focus": {
                    borderColor: "#2bb6a3",
                  },
                }}
                defaultValue={singUser.lastName}
                name="lastName"
                placeholder="lastname"
                onChange={(e) => {
                  inputChange(e.target);
                }}
              />
            </Box>
          </Flex>
          <Flex>
            <Box width={1 / 2} bg="" px={20}>
              <Label sx={{ display: "inline-block" }} my={2} dcolor="">
                Gender
              </Label>
              <Select
                sx={{
                  borderColor: " #2bb6a3",
                }}
                id="gender"
                name="gender"
                defaultValue={singUser.gender}
                onChange={(e) => {
                  inputChange(e.target);
                }}
              >
                <option value={singUser.gender}>{singUser.gender}</option>
                {singUser.gender == "female" ? (
                  <>
                    <option>male</option>
                  </>
                ) : (
                  <>
                    <option>female</option>
                  </>
                )}
              </Select>
            </Box>
            <Flex bg="" width={1 / 2}>
              <Box width={1 / 2} bg="" px={20}>
                <Label sx={{ display: "block-inline" }} my={2} dcolor="">
                  Age
                </Label>
                <Input
                  sx={{
                    borderColor: " #2bb6a3",
                  }}
                  name="age"
                  defaultValue={singUser.age}
                  type="number"
                  min="0"
                  onChange={(e) => {
                    inputChange(e.target);
                  }}
                />
              </Box>
              <Box width={1 / 2} bg="" px={20}>
                <Label sx={{ display: "block-inline" }} my={2} dcolor="">
                  Height
                </Label>
                <Input
                  sx={{
                    borderColor: " #2bb6a3",
                  }}
                  name="height"
                  type="number"
                  defaultValue={singUser.height}
                  min="0"
                  placeholder="in cms"
                  onChange={(e) => {
                    inputChange(e.target);
                  }}
                />
              </Box>
            </Flex>
          </Flex>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 4,
            }}
          >
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();

                const userObj = oneSetter.current;

                update({ id1, userObj });

                navigate("/User");
              }}
              sx={{ background: "#2bb6a3" }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      {user.loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {user.oneUser == {} ? (
            <>
              <h1>Loading...</h1>
            </>
          ) : (
            <>{setter()}</>
          )}
        </>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  console.log("am at the mapstate to props");
  console.log(state);
  return {
    user: state,

    singUser: state.oneUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchh: () => {
      dispatch(getRequest());
    },
    oneUser: (id) => {
      dispatch(getOneRequest(id));
    },
    update: (object) => {
      dispatch(updateRequest(object));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
