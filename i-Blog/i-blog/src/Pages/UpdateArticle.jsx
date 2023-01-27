import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import ArticleUpdater from "../Components/ArticleUpdater";

function UpdateArticle() {
  const currentBlog = useSelector((store) => store.blogReducer.currentBlog);
  return (
    <Container maxW={"3xl"} pb={"4rem "}>
      <Box textAlign={"center"} py={{ base: 2, md: 10 }}>
        <Heading>Update Article</Heading>
      </Box>
      <ArticleUpdater currentBlog={currentBlog} />
    </Container>
  );
}

export default UpdateArticle;
