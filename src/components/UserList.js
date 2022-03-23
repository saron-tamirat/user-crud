import { useEffect } from "react";
import { getRequest, deleteRequest } from "../redux/Useraction";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Button, Text, Image } from "rebass";
function UserList(props) {
  useEffect(() => {
    props.fetchh();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {props.user.data &&
        props.user.data.map((u) => (
          <>
            <Box
              key={u.id}
              sx={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "#f5f5f5",

                background: "#f5f5f5",
              }}
              width={1 / 1.5}
              height={75}
              m="auto"
            >
              <Flex height={75}>
                <Box width={1 / 3}>
                  <Flex height={75}>
                    <Box width={1 / 4}></Box>
                    <Box width={3 / 4}>
                      <Text
                        color="#a29f9f"
                        textAlign="center"
                        overflowX="clip"
                        display="inline-block"
                        marginTop={25}
                        fontSize={2}
                      >
                        {u.name} {u.lastName}
                      </Text>
                      <Box ml={3} color="#353535">
                        {u.gender}
                      </Box>
                    </Box>
                  </Flex>
                </Box>
                <Box width={1 / 3}>
                  <Flex height={75}>
                    <Box width={1 / 2} ml={2}>
                      <Text color="#353535" textAlign="center" marginTop={15}>
                        Age
                      </Text>
                      <Text color="#a29f9f" textAlign="center" marginTop={15}>
                        {u.age}
                      </Text>
                    </Box>
                    <Box width={1 / 2} mx={2} backgroundColor="">
                      <Text color="#353535" textAlign="center" marginTop={15}>
                        Height
                      </Text>
                      <Text color="#a29f9f" textAlign="center" marginTop={15}>
                        {u.height}cm
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box width={1 / 3} backgroundColor="">
                  <Flex>
                    <Button
                      onClick={() => {
                        navigate(`${u.id}`);
                      }}
                      sx={{
                        ":hover": {
                          background: "#2bb6a3",
                        },
                      }}
                      width={1 / 3}
                      mt={3}
                      ml={5}
                      backgroundColor="#337ab7"
                      height={40}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={(e) => {
                        const id = u.id;
                        console.log(id);
                        props.delete(id);
                        props.fetchh();
                      }}
                      sx={{
                        ":hover": {
                          background: "#d9534f",
                        },
                      }}
                      width={1 / 3}
                      mt={3}
                      ml={3}
                      backgroundColor="#fa625e"
                      height={40}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box
              sx={{
                background: "",
              }}
              width={1 / 1.5}
              height={15}
              m="auto"
            ></Box>
          </>
        ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchh: () => {
      dispatch(getRequest());
    },
    delete: async (id) => {
      dispatch(deleteRequest(id));
      await dispatch(getRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
