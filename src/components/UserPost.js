import React from "react";
import { Label, Input, Select } from "@rebass/forms";
import { Box, Flex, Button, Text } from "rebass";
import { postRequest, getRequest } from "../redux/Useraction";
import { connect } from "react-redux";
import { useState } from "react";
// import Select from "react-select";
function UserPost({ user, post }) {
  const userObj = {
    name: "",
    lastName: "",
    age: "",
    height: "",
    gender: "",
  };
  const [formValue, setFormValue] = useState(userObj);
  const { name, lastName, age, height, gender } = formValue;

  const inputChange = (e) => {
    let { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <Box
        sx={{
          background: "#eee",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#eee",
        }}
        width={1 / 1.5}
        m="auto"
        pb={3}
        as="form"
        onSubmit={async (e) => {
          await post(e, formValue);
          setFormValue(userObj);
          //window.location.reload();
          //console.log(user)
        }}
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
          Add Your Information
        </Text>

        <Flex>
          <Box width={1 / 2} bg="" px={20}>
            <Label sx={{ display: "block" }} my={2}>
              Name
            </Label>
            <Input
              sx={{
                borderColor: " #2bb6a3",
                textTransform: "capitalize",
              }}
              name="name"
              value={name}
              placeholder="firstname"
              onChange={(e) => {
                inputChange(e);
              }}
            />
          </Box>
          <Box width={1 / 2} bg="" px={20}>
            <Input
              mt={4}
              sx={{
                borderColor: " #2bb6a3",
                textTransform: "capitalize",
              }}
              value={lastName}
              name="lastName"
              placeholder="lastname"
              onChange={(e) => {
                inputChange(e);
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
              value={gender}
              name="gender"
              onChange={(e) => {
                console.log(e.target.value);
                inputChange(e);
              }}
            >
              <option value="">choose a gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
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
                  inputChange(e);
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
                  inputChange(e);
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
          <Button type="submit" sx={{ background: "#2bb6a3" }}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
const mapStateToProps = (state) => {
  //console.log("am at the mapstate");
  return {
    user: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    post: async (e, user) => {
      e.preventDefault();

      const { name, lastName, age, height, gender } = user;

      if (name && lastName && age && height && gender) {
        console.log(user);
        await dispatch(postRequest(user));
        dispatch(getRequest());
      } else {
        alert("All fields are required.");
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPost);
