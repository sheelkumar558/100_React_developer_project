import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import { createBlogPost } from "../Redux/Blogs/action";
import { updateBlogPost } from "../Redux/Blogs/action";

function ArticleUpdater({ currentBlog }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    sub_title: "",
    thumbnail_pic: "",
    description: "",
    author_name: "",
    author_profile_pic:
      "https://cdn-icons-png.flaticon.com/128/1864/1864593.png",
  };

  const [formData, setFormData] = useReducer(
    (currData, newData) => ({ ...currData, ...newData }),
    initialValues
  );

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };
  // createApplicationHandler={}
  // console.log(formData);*******************
  const createApplicationHandler = () => {
    // to get all the data
    const newData = {
      // id: uuidv4(),
      title: formData.title,
      sub_title: formData.sub_title,
      thumbnail_pic: formData.thumbnail_pic,
      description: formData.description,
      author: {
        name: formData.author_name,
        profile_pic: formData.author_profile_pic,
        publish_date: new Date().toLocaleDateString(),
      },
    };
    dispatch(createBlogPost(newData));
    navigate("/articles");
  };

  useEffect(() => {
    if (currentBlog && Object.keys(currentBlog).length) {
      setFormData({
        title: currentBlog.title,
        sub_title: currentBlog.sub_title,
        thumbnail_pic: currentBlog.thumbnail_pic,
        description: currentBlog.description,
        author_name: currentBlog.author_name,
      });
    }
  }, [currentBlog]);

  const handleUpdateArticle = () => {
    const updatedData = {
      id: currentBlog.id,
      title: formData.title,
      sub_title: formData.sub_title,
      thumbnail_pic: formData.thumbnail_pic,
      description: formData.description,
      author: {
        name: formData.author_name,
        profile_pic: formData.author_profile_pic,
        publish_date: new Date().toLocaleDateString(),
      },
    };
    dispatch(updateBlogPost(updatedData));
    navigate("/articles");
  };
  return (
    <Container>
      <Box>
        <Stack spacing="24px">
          <FormControl isRequired>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              placeholder="Please enter blog title"
              name="title"
              value={formData.title}
              onChange={handleFormDataChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sub-title">Sub-Title</FormLabel>
            <Input
              id="sub-title"
              placeholder="Please enter blog sub-title"
              name="sub_title"
              value={formData.sub_title}
              onChange={handleFormDataChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="url">Thumbnail Pic URL</FormLabel>

            <Input
              type="url"
              id="url"
              name="thumbnail_pic"
              placeholder="Please enter thumbnail pic URL"
              value={formData.thumbnail_pic}
              onChange={handleFormDataChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="author"> Author Name</FormLabel>
            <Input
              id="author"
              // defaultValue={formData.author_name}
              name="author_name"
              value={formData.author_name}
              onChange={handleFormDataChange}
              placeholder="Write author name"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="desc">Description</FormLabel>
            <Textarea
              id="desc"
              name="description"
              value={formData.description}
              onChange={handleFormDataChange}
            />
          </FormControl>
        </Stack>
        {currentBlog ? (
          <Button colorScheme={"blue"} onClick={handleUpdateArticle}>
            Update Blog
          </Button>
        ) : (
          <Button onClick={createApplicationHandler}>Create Application</Button>
        )}
      </Box>
    </Container>
  );
}

export default ArticleUpdater;
