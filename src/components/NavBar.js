import { Box, Link } from "rebass";
import { border } from "styled-system";
function NavBar() {
  return (
    <>
      <Box
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "#eee",
          border: "none",
          position: "sticky",
        }}
        width={1 / 1.5}
        m="auto"
        mt={150}
        py={3}
        as="form"
      >
        <Link
          width={200}
          sx={{
            textDecoration: "none",
            cursor: "default",
            color: "black",
            background: "#2bb6a3",
            py: 2,
            px: 4,
            mr: 3,
            fontFamily: "monospace",
            borderRadius: 5,
            fontSize: 2,
            ":hover": {
              color: "white",
            },
          }}
          href="/User"
        >
          List
        </Link>
        <Link
          width={200}
          sx={{
            textDecoration: "none",
            cursor: "default",
            color: "black",
            background: "#2bb6a3",
            py: 2,
            px: 4,
            fontFamily: "monospace",
            borderRadius: 5,
            fontSize: 2,
            ":hover": {
              color: "white",
            },
          }}
          href="/User/post"
        >
          Post
        </Link>
      </Box>
      <Box height={25}></Box>
    </>
  );
}
export default NavBar;
//#94df4a add the info
//fa625e; delete
//    border-color: rgba(227, 66, 61, 0.7);
//#337ab7 edit
// 2bb6a3 edit on hover
//delete on hover
