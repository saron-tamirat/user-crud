import React, { useEffect } from "react";
import { Label, Input, Select, option } from "@rebass/forms";
import { Box, Flex, Button, Text } from "rebass";
import { updateRequest, getRequest } from "../redux/Useraction";
import { connect } from "react-redux";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit({ user, update, fetchh }) {
  const [name, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const userObj = {
    name: name,
    lastName: lastName,
    age: age,
    height: height,
    gender: gender,
  };

  const { id } = useParams();
  const id1 = Number(id);
  const navigate = useNavigate();

  useEffect(async () => {
    console.log("am at the use effect");
    const oneUser = user.data.find((o) => o.id === id1);
    setFirstName(oneUser.name);
    setLastName(oneUser.lastName);
    setAge(oneUser.age);
    setHeight(oneUser.height);
    setGender(oneUser.gender);
    console.log(oneUser.gender);
  }, []);

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
              value={name}
              placeholder="firstname"
              onChange={(e) => {
                setFirstName(e.target.value);
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
              value={lastName}
              name="lastName"
              placeholder="lastname"
              onChange={(e) => {
                setLastName(e.target.value);
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
              value={gender}
              onChange={(e) => {
                console.log(e.target.value);
                setGender(e.target.value);
              }}
            >
              <option value={gender}>{gender}</option>
              {gender == "female" ? (
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
                value={age}
                type="number"
                min="0"
                onChange={(e) => {
                  setAge(e.target.value);
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
                value={height}
                min="0"
                placeholder="in cms"
                onChange={(e) => {
                  setHeight(e.target.value);
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
            onClick={async (e) => {
              e.preventDefault();

              await update({ id1, userObj });

              await fetchh();

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
}
const mapStateToProps = (state) => {
  return {
    user: state,
    oneUser: state.oneUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchh: () => {
      dispatch(getRequest());
    },
    update: (object) => {
      dispatch(updateRequest(object));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
